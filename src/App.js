import React from "react";

import { Box, BoxHeader, Container, HeaderTitle } from "./styled-components";
import SubHeader from "./components/subHeader";
import RemaingBudget from "./components/remainingBudget";
import SubmitExpense from "./components/submitExpense";
import ListItem from "./components/listItem";
import Header from "./components/header";

const App = () => {
  return (
    <Container>
      <Box>
        <Header />
        <SubHeader />
        <RemaingBudget />
        <SubmitExpense />
        <ListItem />
      </Box>
    </Container>
  );
};

export default App;
