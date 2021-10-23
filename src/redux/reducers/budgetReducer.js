import { FETCH_REMAINING_BUDGET } from "../actions/actionTypes";

const initialState = {
  remainingBudget: 2000,
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
    default:
      return state;
  }
};

export default budgetReducer;
