import {
  ADD_EXPENSE,
  DECREMENT_REMAINING,
  FETCH_REMAINING_BUDGET,
} from "../actions/actionTypes";

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

    case DECREMENT_REMAINING:
      return {
        ...state,
        remainingBudget: state.remainingBudget - state.price,
      };
    default:
      return state;
  }
};

export default budgetReducer;
