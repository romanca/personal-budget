import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

import {
  Box,
  BoxHeader,
  Container,
  SubheaderContainer,
  PersonDetailsContainer,
  PersonDetailsTitle,
  BudgetContainer,
  BudgetTitle,
  RemainingContainer,
  Remaining,
  RemainingAmountContainer,
  RemainingIcon,
  RemainingAmount,
  ExpenseContainer,
  NameInput,
  PriceInput,
  AddButton,
  HeaderTitle,
  ExpenseTitle,
  SubmitContainer,
  ExpenseInputs,
  ListItems,
  Item,
  ItemTitle,
  ItemBudget,
} from "./styled-components";

const App = () => {
  return (
    <Container>
      <Box>
        <BoxHeader>
          <HeaderTitle>Personal budget</HeaderTitle>
        </BoxHeader>
        <SubheaderContainer>
          <PersonDetailsContainer>
            <Icon name="user" />
            <PersonDetailsTitle>John Doe</PersonDetailsTitle>
          </PersonDetailsContainer>
          <BudgetContainer>
            <BudgetTitle>Your Budget: 2000</BudgetTitle>
          </BudgetContainer>
        </SubheaderContainer>
        <RemainingContainer>
          <Remaining>remaining:</Remaining>
          <RemainingAmountContainer>
            <RemainingIcon>
              <Icon name="eur" />
            </RemainingIcon>
            <RemainingAmount>1200</RemainingAmount>
          </RemainingAmountContainer>
        </RemainingContainer>
        <ExpenseContainer>
          <ExpenseTitle>Add expense</ExpenseTitle>
          <SubmitContainer>
            <ExpenseInputs>
              <NameInput placeholder="Name" />
              <PriceInput placeholder="Price" type="number" />
            </ExpenseInputs>
            <AddButton>+</AddButton>
          </SubmitContainer>
        </ExpenseContainer>
        <ListItems>
          <Item>
            <ItemTitle>Grocerie</ItemTitle>
            <ItemBudget>1200</ItemBudget>
          </Item>
        </ListItems>
      </Box>
    </Container>
  );
};

export default App;
