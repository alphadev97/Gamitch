import { getRecommanded } from "@/lib/recommanded-service";
import { Recommanded, RecommandedSkeleton } from "./recommanded";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { getFollowedUsers } from "@/lib/follow-service";
import { Following } from "./following";

export const Sidebar = async () => {
  const recommanded = await getRecommanded();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommanded data={recommanded} />
        <Following data={following} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <RecommandedSkeleton />
    </aside>
  );
};
