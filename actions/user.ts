"use server";

import { User } from "@prisma/client";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const updateUser = async (values: Partial<User>) => {
  try {
    const self = await getSelf();
    const validData = {
      bio: values.bio,
    };

    const user = await db.user.update({
      where: { id: self.id },
      data: { ...validData },
    });

    revalidatePath(`/${user.username}`);
    revalidatePath(`/u/${user.username}`);

    return user;
  } catch {
    throw new Error("Internal Error!");
  }
};
