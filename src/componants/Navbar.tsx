import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="8px">
      <Image src={logo} boxSize="60px" />
      <Text> text</Text>
    </HStack>
  );
};

export default Navbar;
