import React from "react";
import Icon from "./Icon";
import styled from "styled-components";

import { Box, BoxHeader, Container, HeaderTitle } from "./styled-components";
import SubHeader from "./components/subHeader";
import RemaingBudget from "./components/remainingBudget";
import SubmitExpense from "./components/submitExpense";
import ListItem from "./components/listItem";

const App = () => {
  return (
    <Container>
      <Box>
        <BoxHeader>
          <HeaderTitle>Personal budget</HeaderTitle>
        </BoxHeader>
        <SubHeader />
        <RemaingBudget />
        <SubmitExpense />
        <ListItem />
      </Box>
    </Container>
  );
};

export default App;
