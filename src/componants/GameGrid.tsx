import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10}>
        {isLoading && skeletons.map((s) => <CardSkeleton key={s} />)}
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
