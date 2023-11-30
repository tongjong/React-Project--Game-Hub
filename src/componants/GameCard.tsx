import { Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import IconList from "./IconList";
import Score from "./Score";
import GetCroppedImageUrl from "../service/GetCroppedImageUrl";
import Icons from "./Icons";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={GetCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Flex justifyContent="space-between" marginBottom={3}>
          <IconList platforms={game.platforms.map((p) => p.platform)} />
          <Score metacritic={game.metacritic} />
        </Flex>
        <Heading fontSize="2xl" marginBottom={3}>
          {game.name}
        </Heading>
        <Icons rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
