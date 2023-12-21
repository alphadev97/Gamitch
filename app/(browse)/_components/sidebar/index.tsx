import { Recommanded } from "./recommanded";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommanded />
      </div>
    </Wrapper>
  );
};
