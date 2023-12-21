import { User } from "@prisma/client";

interface RecommandedProps {
  data: User[];
}

export const Recommanded = ({ data }: RecommandedProps) => {
  return <div>Recommanded!</div>;
};
