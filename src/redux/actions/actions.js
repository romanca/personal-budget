import { ADD_EXPENSE, FETCH_REMAINING_BUDGET } from "./actionTypes";

export const fetchRemainingBudget = () => {
  return {
    type: FETCH_REMAINING_BUDGET,
  };
};

export function addExpence(payload) {
  return {
    type: ADD_EXPENSE,
    payload,
  };
}
