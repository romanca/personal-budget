import {
  ADD_EXPENSE,
  DECREMENT_REMAINING,
  FETCH_ITEMS,
  FETCH_REMAINING_BUDGET,
} from "../actions/actionTypes";

const initialState = {
  remainingBudget: "2000",
  items: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REMAINING_BUDGET:
      return {
        ...state,
        remainingBudget: state.remainingBudget,
      };
    case FETCH_ITEMS:
      return {
        ...state,
        items: state.items,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case DECREMENT_REMAINING:
      return {
        ...state,
        remainingBudget: state.remainingBudget - action.payload,
      };

    default:
      return state;
  }
};

export default budgetReducer;
