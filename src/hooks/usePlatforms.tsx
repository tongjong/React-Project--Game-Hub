import Platforms from "../data/Platforms";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: Platforms,
  isLoading: false,
  error: false,
});

export default usePlatforms;
