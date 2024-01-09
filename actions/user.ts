"use server";

import { User } from "@prisma/client";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

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
  } catch {
    throw new Error("Internal Error!");
  }
};
