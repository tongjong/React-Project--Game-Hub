import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchGamesInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<CiSearch />} />
      <Input borderRadius={20} placeholder="search games..." />
    </InputGroup>
  );
};

export default SearchGamesInput;
