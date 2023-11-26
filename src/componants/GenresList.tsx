import { List, ListItem, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((g) => (
          <ListItem key={g.id}>
            {g.slug} {g.games_count}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
