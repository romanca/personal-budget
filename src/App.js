import React from "react";

import { Box, Container } from "./styled-components";
import SubHeader from "./components/subHeader";
import RemaingBudget from "./components/remainingBudget";
import SubmitExpense from "./components/submitExpense";
import Header from "./components/header";
import Expenses from "./components/expenses";

const App = () => {
  return (
    <Container>
      <Box>
        <Header />
        <SubHeader />
        <RemaingBudget />
        <SubmitExpense />
        <Expenses />
      </Box>
    </Container>
  );
};

export default App;
