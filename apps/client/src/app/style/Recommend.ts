// app/components/VotemakeStyles.ts
import styled from "styled-components";
import Image from 'next/image';

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
  height: 12vh;
  padding: 0 3vh;
  margin-bottom: 1vh;
`;

export const OptionInput = styled.div`
  display: flex;
  gap : 65vh;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2.5vh;
`;


export const AddOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  gap: 3vh;
  margin-top: -3vh;

  width : 100%;
  height : 10vh
`;


export const ButtonsRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap:1rem;
  width: 100%;
  padding-right: 6rem; 
`;

export const InnerButtonsWrapper = styled.div`
  display: flex;
  gap: 2vh;

`;

export const Button = styled.button<{ disabled?: boolean }>`
  color: #0158de;
  border: 1px solid #0158de;
  background-color: rgba(0, 0, 0, 0);
  padding: 1.5vh 0.2vh 1.5vh 0.2vh;

  border-radius: 9999px;
  font-size: 1.8vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vh;

  width : 18vh;

  &:hover {
    background-color: #e6f0ff;
  }
`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #0158de;
  border-color: #0158de;

  &:hover {
    background-color: #004cc0;
  }
`;



export const WarnP = styled.p`
  color: #A6A6A6;
  
`;


export const Category = styled.p`
  color: #0158de;
  font-family: "P_Regular";
  font-size: 1.8vh;
`;

export const StyledArrowImage = styled(Image)`
  transition: filter 0.1s ease;
`;


export const ReButton = styled.button<{ disabled?: boolean }>`
  color: #0158de;
  border: 1px solid #0158de;
  background-color: rgba(0, 0, 0, 0);
  padding: 1.5vh 0.2vh 1.5vh 0.2vh;

  border-radius: 9999px;
  font-size: 1.8vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vh;

  width : 18vh;

  &:hover {
    color : #FFFFFF;
    background-color: #0158de;
    
  }
  &:hover ${StyledArrowImage} {
    filter: brightness(0) saturate(100%) invert(100%) hue-rotate(180deg);
  }
  
`;
