import Genres from "../data/Genres";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => ({ data: Genres, isLoading: false, error: false });

export default useGenres;
