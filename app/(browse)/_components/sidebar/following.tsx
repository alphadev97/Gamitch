"use client";

import { useSidebar } from "@/store/use-sidebar";
import { Follow, User } from "@prisma/client";

interface FollowingProps {
  data: (Follow & { following: User })[];
}

export const Following = ({ data }: FollowingProps) => {
  const {} = useSidebar((state) => state);

  return <div>Following</div>;
};
