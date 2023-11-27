import useData from "./useData";
import { Genres } from "./useGenres";
import { platforms } from "./usePlatforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: platforms | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.name, selectedPlatform?.name]
  );

export default useGames;
