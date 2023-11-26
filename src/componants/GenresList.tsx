import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((g) => (
          <ListItem key={g.id}>
            {g.slug} {g.games_count}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
