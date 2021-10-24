import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const remaining = useSelector((state) => state.budgetReducer.remainingBudget);

  console.log(remaining);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmitExpences = (values) => {
    if (values.name === "" || values.price === "") {
      alert("Input fields cannot stay empty...!!!");
    } else if (remaining === 0) {
      alert("You do not have enough budget...!!!");
    } else if (values.price > remaining) {
      alert("You do not have enough budget...!!!");
    } else {
      const item = {
        name: values.name,
        price: values.price,
      };
      dispatch(addExpence(item));
      dispatch(decrementRemaining(item.price));
      setValues({ name: "", price: "" });
    }
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
