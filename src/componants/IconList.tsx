import {
  FaPlaystation,
  FaWindows,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { FaXbox } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPlaystation3, SiPlaystation4 } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const IconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstaion3: SiPlaystation3,
    platstation4: SiPlaystation4,
    xbox360: FaXbox,
    "nintendo-switch": SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <HStack mt={1}>
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default IconList;
