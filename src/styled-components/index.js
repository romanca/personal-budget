import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  border: 1px solid black;
  height: 650px;
  width: 750px;
  border-radius: 10px;
`;

export const BoxHeader = styled.div`
  height: 30;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-weight: 700;
`;

export const SubheaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const PersonDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BudgetContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonDetailsTitle = styled.span`
  font-weight: 800;
  margin-left: 5px;
`;
export const BudgetTitle = styled.span`
  text-decoration: underline;
  display: flex;
`;

export const RemainingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  flex-direction: column;
`;

export const Remaining = styled.span`
  font-size: 18px;
`;

export const RemainingAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RemainingAmount = styled.div`
  font-size: 30px;
`;

export const RemainingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-right: 5px;
  height: 100%;
`;

export const ExpenseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const ExpenseTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const ExpenseInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
`;

export const NameInput = styled.input`
  outline: none;
  height: 25px;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
  font-size: 15px;
`;

export const PriceInput = styled.input`
  height: 25px;
  outline: none;
  margin: 10px;
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px;
  font-size: 15px;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid black;
  font-size: 20px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: yellow;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
`;

// export const DeleteButton = styled.button`
//   border: none;
//   outline: none;
//   margin-right: 15px;
//   background: transparent;
//   font-size: 20px;
//   color: grey;
//   cursor: pointer;
// `;

// export const ItemDetails = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

export const ItemTitle = styled.span`
  font-size: 20px;
  color: grey;
`;

export const ItemBudget = styled.span`
  font-size: 20px;
  color: grey;
`;

export const BudgetNumber = styled.span`
  font-weight: 800;
`;

export const Message = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
`;
