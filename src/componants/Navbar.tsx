import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchGamesInput from "./SearchGamesInput";

const Navbar = () => {
  return (
    <HStack padding="8px">
      <Image src={logo} boxSize="60px" />
      <SearchGamesInput />
      <DarkModeSwitch />
    </HStack>
  );
};

export default Navbar;
