import React from "react";
import Icon from "../Icon";
import { dummyBudget, person } from "../mockData";
import {
  BudgetContainer,
  BudgetTitle,
  PersonDetailsContainer,
  PersonDetailsTitle,
  SubheaderContainer,
  BudgetNumber,
} from "../styled-components";

const SubHeader = () => {
  return (
    <SubheaderContainer>
      <PersonDetailsContainer>
        <Icon name="user" />
        <PersonDetailsTitle>
          {person.map((p) => (
            <div key={p.id}>{p.name}</div>
          ))}
        </PersonDetailsTitle>
      </PersonDetailsContainer>
      <BudgetContainer>
        <BudgetTitle>
          Your Budget:
          {dummyBudget.map((d) => (
            <BudgetNumber key={d.id}>{d.budget}</BudgetNumber>
          ))}
        </BudgetTitle>
      </BudgetContainer>
    </SubheaderContainer>
  );
};

export default SubHeader;
