import styled from "styled-components";

const AddHabit = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 50px;
  color: #52b6ff;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: #666666;
`;

const NewHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 15px 0 0 5px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  background-color: #ffffff;
`;

const WeekContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 5px;
`;

const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;
  margin-left: 5px;
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  background-color: ${(props) => (props.selected ? "#dbdbdb" : "#ffffff")};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 30px 15px 0 0;
`;

const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#86ccff" : "#52b6ff")};
  font-size: 16px;
  border: none;
  border-radius: 3px;
`;

const CancelButton = styled.button`
  color: #52b6ff;
  background-color: #ffffff;
  border: none;
  font-size: 16px;
  margin-right: 15px;
`;

const HabitCard = styled.div`
  position: relative;
  width: 100%;
  height: 91px;
  background-color: #ffffff;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  padding-top: 10px;
  h1 {
    font-size: 20px;
    color: #666666;
    margin: 0px 0 10px 10px;
  }
`;

const BinContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #666666;
  font-size: 20px;
`;

export {
  AddHabit,
  StyledSpan,
  NewHabitForm,
  WeekDay,
  WeekContainer,
  ButtonsContainer,
  SaveButton,
  CancelButton,
  HabitCard,
  BinContainer,
};
