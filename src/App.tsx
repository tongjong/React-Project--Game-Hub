import { Grid, GridItem, HStack, Heading, Show, Box } from "@chakra-ui/react";
import Navbar from "./componants/Navbar";
import GameGrid from "./componants/GameGrid";
import GenresList from "./componants/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./componants/PlatformSelector";
import { platforms } from "./hooks/usePlatforms";
import SortingSelector from "./componants/SortingSelector";
import "./index.css";

export interface GameQuery {
  genre: Genres | null;
  platform: platforms | null;
  sortorder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <Heading margin={3}>
            {gameQuery.platform?.name} {gameQuery.genre?.name} Games
          </Heading>
          <HStack>
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortingSelector
              selectedSortOrder={gameQuery.sortorder}
              onSelectedSortOrder={(sortorder) =>
                setGameQuery({ ...gameQuery, sortorder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
