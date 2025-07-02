import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  left: 16vh;
`;

export const Card = styled.div`
  position: relative;
  background-color: #FFFFFF;
  width: 120vh;
  height: 60vh;
  border-radius: 2vh;
`;

export const Content = styled.div`
  position: relative;
  top: 4vh;
  left: 5vh;
`;

export const Category = styled.p`
  color: #0158de;
  font-family: "P_Regular";
  font-size: 2vh;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 3vh;
`;

export const Title = styled.p`
  color: #000000;
  font-family: "P_Regular";
  font-size: 3vh;
`;

export const DateWrapper = styled.div`
  position: absolute;
  top: 4vh;
`;

export const DateText = styled.p`
  color: #a6a6a6;
  font-family: "P_Regular";
  font-size: 1.5vh;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.4vh;
`;

export const AnswerTextArea = styled.textarea`
  outline: none;
  width: 102vh;
  height: 15vh;
  background-color: #FFFFFF;
  border-radius: 1vh;
  resize: none;
  font-family: "P_Regular";
  font-size: 2vh;
  padding: 4vh;
  position: relative;
  top: 16vh;
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 94vh;
  top: 46vh;
  font-family: "P_Regular";
  width: 16vh;
  height: 4vh;
  border-radius: 2vh;
  background-color: #0158de;
  color: #ffffff;
  border: none;
  transition: all 0.2s ease-in-out;
`;
