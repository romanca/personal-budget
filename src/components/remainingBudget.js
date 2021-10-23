import React from "react";
import { useSelector } from "react-redux";
import Icon from "../Icon";
import {
  Remaining,
  RemainingAmount,
  RemainingAmountContainer,
  RemainingContainer,
  RemainingIcon,
} from "../styled-components";

const RemaingBudget = () => {
  const remaining = useSelector((state) => state.budgetReducer.remainingBudget);

  return (
    <RemainingContainer>
      <Remaining>remaining:</Remaining>
      <RemainingAmountContainer>
        <RemainingIcon>
          <Icon name="eur" />
        </RemainingIcon>
        <RemainingAmount>{remaining}</RemainingAmount>
      </RemainingAmountContainer>
    </RemainingContainer>
  );
};

export default RemaingBudget;
