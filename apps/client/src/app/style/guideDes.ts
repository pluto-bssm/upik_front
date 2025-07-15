import styled from "styled-components";
import { Button } from "./End";

export const GuideDiv = styled.div`
  width: 110vh;
  height: 90vh;
  background-color: white;
  margin-left: 30vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Guides = styled.div`
  margin-top : 5vh;
`;

export const GuideWrapper = styled.div`
  margin: 6vh;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  margin-left : -60vh;
  margin-top : -20vh;
`;

export const GuideHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
  position : relative;
  top:-20vh;
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
  width : 55%;
  position: absolute; 
  top: 30vh;
`;

export const SubmitButton = styled(Button)`
  color: white;
  background-color: #0158de;
  border-color: #0158de;
  position : relative ;
  top:-10vh;
  left:120vh;

  &:hover {
    background-color: #004cc0;
  }
`;
