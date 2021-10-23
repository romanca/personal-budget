import React from "react";
import { useSelector } from "react-redux";
import {
  Item,
  ItemBudget,
  ItemTitle,
  ListItems,
  Message,
} from "../styled-components";

const ListItem = () => {
  const items = useSelector((state) => state.budgetReducer.items);

  return (
    <ListItems>
      {items && items.length ? (
        items.map((item) => (
          <Item key={item.id}>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemBudget>{item.price}</ItemBudget>
          </Item>
        ))
      ) : (
        <Message>You have no expences...</Message>
      )}
    </ListItems>
  );
};

export default ListItem;
