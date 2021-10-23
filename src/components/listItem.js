import React from "react";
import { Item, ItemBudget, ItemTitle, ListItems } from "../styled-components";

const ListItem = () => {
  return (
    <ListItems>
      <Item>
        <ItemTitle>Grocerie</ItemTitle>
        <ItemBudget>1200</ItemBudget>
      </Item>
    </ListItems>
  );
};

export default ListItem;
