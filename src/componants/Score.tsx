import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const Score = ({ metacritic }: Props) => {
  const color = metacritic > 85 ? "green" : metacritic > 80 ? "yellow" : "red";
  return (
    <>
      <Badge paddingX={2} fontSize="14px" colorScheme={color}>
        {metacritic}
      </Badge>
    </>
  );
};

export default Score;
