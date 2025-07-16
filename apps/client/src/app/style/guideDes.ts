import styled from "styled-components";
import { Button } from "./End";

export const GuideDiv = styled.div`
  width: 110vh;
  height: 100%;
  background-color: white;
  margin-left: 30vh;
  border-radius: 10px;
  display: flex;
  flex-direction : column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Guides = styled.div`
  margin-top : 5vh;
  margin-bottom : 5vh;
  height: auto;
  display : flex;
  justify-content: flex-start;
`;

export const GuideWrapper = styled.div`
  margin: 6vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;


`;

export const GuideHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;

`;

export const GuideTitle = styled.p`
  font-size: 3vh;
  font-weight: 500;
`;

export const GuideMeta = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vh;
  color: gray;
  font-size: 1.5vh;

  
`;

export const GuideContent = styled.p`
  font-size: 1.8vh;
  line-height: 3.2vh;
  white-space: pre-wrap;

`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #0158de;
  border-color: #0158de; 

  margin-left : 80vh;
  margin-bottom :10vh;

  
  &:hover {
    background-color: #004cc0;
  }
`;
