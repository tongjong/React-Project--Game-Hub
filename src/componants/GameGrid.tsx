import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 4 }} gap={10}>
        {games.map((g) => (
          <GameCard game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
