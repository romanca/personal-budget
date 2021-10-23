import { ADD_EXPENSE, FETCH_REMAINING_BUDGET } from "../actions/actionTypes";

const initialState = {
  remainingBudget: "2000",
  name: "",
  price: "",
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REMAINING_BUDGET:
      return {
        ...state,
        remainingBudget: state.remainingBudget,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default budgetReducer;
