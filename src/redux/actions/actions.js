import {
  ADD_EXPENSE,
  DECREMENT_REMAINING,
  FETCH_ITEMS,
  FETCH_REMAINING_BUDGET,
} from "./actionTypes";

export const fetchRemainingBudget = () => {
  return {
    type: FETCH_REMAINING_BUDGET,
  };
};

export const fetchItems = () => {
  return {
    type: FETCH_ITEMS,
  };
};

export const addExpence = (item) => {
  return {
    type: ADD_EXPENSE,
    payload: { ...item, id: Date.now() },
  };
};

export const decrementRemaining = (payload) => {
  return {
    type: DECREMENT_REMAINING,
    payload,
  };
};
