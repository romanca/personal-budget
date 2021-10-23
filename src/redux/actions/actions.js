import {
  ADD_EXPENSE,
  DECREMENT_REMAINING,
  FETCH_REMAINING_BUDGET,
} from "./actionTypes";

export const fetchRemainingBudget = () => {
  return {
    type: FETCH_REMAINING_BUDGET,
  };
};

export const addExpence = (payload) => {
  return {
    type: ADD_EXPENSE,
    payload,
  };
};

export const decrementRemaining = () => {
  return {
    type: DECREMENT_REMAINING,
  };
};
