import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import GetCroppedImageUrl from "../service/GetCroppedImageUrl";

interface Props {
  onSelectedGenre: (genres: Genres) => void;
}
const GenresList = ({ onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && null}
      {isLoading && <Spinner />}
      <List>
        {data.map((g) => (
          <ListItem key={g.id} mb={3}>
            <HStack>
              <Image
                src={GetCroppedImageUrl(g.image_background)}
                boxSize="35px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectedGenre(g)}
                variant="link"
                fontSize="lg"
              >
                {g.name} {g.games_count}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
