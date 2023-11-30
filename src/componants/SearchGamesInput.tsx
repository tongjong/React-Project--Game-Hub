import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (game: string) => void;
}
const SearchGamesInput = ({ onSearch }: Props) => {
  const gameRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (gameRef.current) onSearch(gameRef.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<CiSearch />} />
        <Input ref={gameRef} borderRadius={20} placeholder="search games..." />
      </InputGroup>
    </form>
  );
};

export default SearchGamesInput;
