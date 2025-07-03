// app/components/VotemakeStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32vh;
  width: 120vh;
  min-height: 60vh;
  background-color: #ffffff;
  border-radius: 2vh;
`;

export const TitleWrapper = styled.div`
  margin-top: 4vh;
  height: 100%;
`;

export const TitleInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vh;
`;

export const TitleLabel = styled.p`
  color: #0158de;
  font-family: 'P_Regular', sans-serif;
  font-size: 2vh;
`;

export const TitleInput = styled.input`
  border: none;
  outline: none;
  width: 100vh;
  font-size: 3vh;
  position: relative;
  left: -0.5vh;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
  justify-content: center;
  align-items: center;
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  width: 87%;
  border-radius: 1vh;
  height: 10vh;
  padding: 0 3vh;
  margin-bottom: 2vh;
`;

export const OptionInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2.5vh;
`;

export const RemoveButton = styled.button`
  font-size: 2.5vh;
  background-color: #f9f9f9;
  border: none;
  cursor: pointer;
`;

export const AddOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  margin-top: -3vh;
`;

export const AddOptionButton = styled.button`
  color: white;
  background-color: #0158de;
  border: none;
  width: 4vh;
  height: 4vh;
  border-radius: 50%;
  font-size: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 3vh 0;
  position: relative;
  gap : 70vh
`;

export const InnerButtonsWrapper = styled.div`
  display: flex;
  gap: 2vh;

`;

export const Button = styled.button<{ disabled?: boolean }>`
  color: #0158de;
  border: 2px solid #0158de;
  background-color: #ffffff;
  padding: 1.5vh 4vh;
  border-radius: 9999px;
  font-size: 1.8vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    background-color: #e6f0ff;
  }
`;

export const SubmitButton = styled(Button)`
  position: relative;

  color: white;
  background-color: #0158de;
  border-color: #0158de;

  &:hover {
    background-color: #004cc0;
  }
`;



export const WarnP = styled.p`
  color: #ED3020;
  
`;
