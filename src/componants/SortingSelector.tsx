import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortorder: string) => void;
  selectedSortOrder: string;
}
const SortingSelector = ({ onSelectedSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Newly added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-rating", label: "Rating" },
    { value: "-metracritic", label: "Popularity" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By : {selectedSortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => onSelectedSortOrder(order.label)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingSelector;
