import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import IconList from "./IconList";
import Score from "./Score";
import GetCroppedImageUrl from "../service/GetCroppedImageUrl";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={GetCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Flex justifyContent="space-between">
          <IconList platforms={game.platforms.map((p) => p.platform)} />
          <Score metacritic={game.metacritic} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
