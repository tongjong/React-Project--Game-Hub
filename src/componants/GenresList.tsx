import { List, ListItem, Text, Image, HStack, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GetCroppedImageUrl from "../service/GetCroppedImageUrl";

const GenresList = () => {
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
              <Text fontSize="lg">
                {g.name} {g.games_count}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
