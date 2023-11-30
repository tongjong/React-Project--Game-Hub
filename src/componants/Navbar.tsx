import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchGamesInput from "./SearchGamesInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="8px">
      <Image src={logo} boxSize="60px" />
      <SearchGamesInput onSearch={onSearch} />
      <DarkModeSwitch />
    </HStack>
  );
};

export default Navbar;
