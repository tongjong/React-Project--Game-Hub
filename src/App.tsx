import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componants/Navbar";
import GameGrid from "./componants/GameGrid";
import GenresList from "./componants/GenresList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./componants/PlatformSelector";
import { platforms } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<platforms | null>(
    null
  );
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
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectedGenre={(g) => setSelectedGenre(g)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectedPlatform={(p) => setSelectedPlatform(p)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
