import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="8px">
      <Image src={logo} boxSize="60px" />
      <DarkModeSwitch />
    </HStack>
  );
};

export default Navbar;
