import React from "react";
import {
  AddButton,
  ExpenseContainer,
  ExpenseInputs,
  ExpenseTitle,
  NameInput,
  PriceInput,
  SubmitContainer,
} from "../styled-components";

const SubmitExpense = () => {
  return (
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
  );
};

export default SubmitExpense;
