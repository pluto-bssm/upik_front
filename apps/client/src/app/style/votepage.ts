import styled from "styled-components";

export const Container = styled.div`
  display : flex;
  flex-direction : column;
  gap : 10vh;
`;

export const Card = styled.div`
  background-color: #FFFFFF;
  width: 120vh;
  height: 60vh;
`;

export const InfoWrapper = styled.div`
  position: relative;
  top: 4vh;
  left: 5vh;
`;

export const CategoryText = styled.p`
  color: #0158de;
  font-family: 'P_Regular';
  font-size: 2vh;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 3vh;
  width : 100%;
`;

export const TitleText = styled.p`
  color: #000000;
  font-family: 'P_Regular';
  font-size: 3vh;
`;

export const DateWrapper = styled.div`
  position: absolute;
  top: 4vh;
`;

export const DateText = styled.p`
  color: #a6a6a6;
  font-family: 'P_Regular';
  font-size: 1.5vh;
`;

export const MenuWrapper = styled.div`
  position : absolute;
  margin-top : -40vh;
  margin-left : 5vh;
`;
