import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  align-items: center;
`;

export const VoteOption = styled.div<{ selected: boolean }>`
  font-family: "P_Regular";
  font-size: 2vh;
  height: 6vh;
  width: 80vw;
  max-width: 110vh;
  display: flex;
  flex-direction: row;
  gap: 1vh;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1vh;
  background-color: ${({ selected }) => (selected ? "#F1F3FB" : "#FFFFFF")};
  color: black;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  appearance: none;
  border: 0.2vh solid #a6a6a6;
  border-radius: 50%;
  width: 2.4vh;
  height: 2.4vh;
  margin-left: 1vh;
  transition: all 0.2s;

  &:checked {
    border-color: #0158de;
    background-color: #0158de;
  }
`;

export const OptionLabel = styled.p`
  font-family: "P_Regular";
  font-size: 2vh;
`;

export const SubmitButton = styled.button.attrs(() => ({
  type: "button",
}))<{ $active: boolean }>`
  position: relative;
  left: 47vh;
  top: 0vh;
  font-family: "P_Regular";
  width: 16vh;
  height: 4vh;
  border-radius: 2vh;
  transition: all 0.2s;
  border: ${({ $active }) => ($active ? "none" : "1px solid #0158DE")};
  background-color: ${({ $active }) => ($active ? "#0158DE" : "#FFFFFF")};
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#0158DE")};
  cursor: pointer;
`;
