import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import GetCroppedImageUrl from "../service/GetCroppedImageUrl";

interface Props {
  onSelectedGenre: (genres: Genres) => void;
  selectedGenre: Genres | null;
}
const GenresList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      {error && null}
      {isLoading && <Spinner />}
      <List>
        {data.map((g) => (
          <ListItem key={g.id} mb={3}>
            <HStack>
              <Image
                src={GetCroppedImageUrl(g.image_background)}
                objectFit="cover"
                boxSize="35px"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}
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
