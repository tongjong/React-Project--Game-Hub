import { GiBullseye } from "react-icons/gi";
import { LuThumbsUp } from "react-icons/lu";
import { CiFaceMeh } from "react-icons/ci";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Icons = ({ rating }: Props) => {
  const emojiMap: { [key: number]: { as: IconType } } = {
    5: { as: GiBullseye },
    4: { as: LuThumbsUp },
    3: { as: CiFaceMeh },
  };
  return <Icon {...emojiMap[rating]} boxSize={5} />;
};

export default Icons;
