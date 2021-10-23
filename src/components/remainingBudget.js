import React from "react";
import Icon from "../Icon";
import {
  Remaining,
  RemainingAmount,
  RemainingAmountContainer,
  RemainingContainer,
  RemainingIcon,
} from "../styled-components";

const RemaingBudget = () => {
  return (
    <RemainingContainer>
      <Remaining>remaining:</Remaining>
      <RemainingAmountContainer>
        <RemainingIcon>
          <Icon name="eur" />
        </RemainingIcon>
        <RemainingAmount>1200</RemainingAmount>
      </RemainingAmountContainer>
    </RemainingContainer>
  );
};

export default RemaingBudget;
