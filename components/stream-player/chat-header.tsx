"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const ChatHeader = () => {
  return (
    <div className="relative p-3 border-b">
      {/* TODO: Toggle chat sidebar */}
      <p className="font-semibold text-primary text-center">Stream chat</p>
      {/* TODO: Toggle chat community */}
    </div>
  );
};

export const ChatHeaderSkeleton = () => {
  return (
    <div className="relative p-3 border-b hidden md:block">
      <Skeleton className="absolute h-6 w-6 left-3 top-3" />
      <Skeleton className="w-28 h-6 mx-auto" />
    </div>
  );
};
