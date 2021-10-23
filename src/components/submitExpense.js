import React from "react";
import { useDispatch } from "react-redux";
import { addExpence, decrementRemaining } from "../redux/actions/actions";
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
  const [values, setValues] = React.useState({ name: "", price: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitExpences = (values) => {
    dispatch(addExpence(values));
    dispatch(decrementRemaining());
    setValues({ name: "", price: "" });
  };

  return (
    <ExpenseContainer>
      <ExpenseTitle>Add expense</ExpenseTitle>
      <SubmitContainer>
        <ExpenseInputs>
          <NameInput
            placeholder="Name"
            value={values.name}
            name="name"
            onChange={handleInputChange}
          />
          <PriceInput
            placeholder="Price"
            type="number"
            value={values.price}
            name="price"
            onChange={handleInputChange}
          />
        </ExpenseInputs>
        <AddButton onClick={() => handleSubmitExpences(values)}>+</AddButton>
      </SubmitContainer>
    </ExpenseContainer>
  );
};

export default SubmitExpense;
