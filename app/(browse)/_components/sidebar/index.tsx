import { getRecommanded } from "@/lib/recommanded-service";
import { Recommanded } from "./recommanded";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
  const recommanded = await getRecommanded();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommanded data={recommanded} />
      </div>
    </Wrapper>
  );
};
