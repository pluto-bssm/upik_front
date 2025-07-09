"use client";

import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  height: 100vh;
  padding: 3rem;
  width : 100%;
  margin-left : 35vh;

`;

export const Title = styled.h1`
  font-size: 5vh;
  font-weight: 500;
  margin-bottom:1rem;
  position : relative;
`;

export const Sub = styled.h1`
  font-size: 3vh;
  font-weight: 350;
  margin-bottom: 5rem;
`;


export const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 1vh;
    width: 100%;
    height : 30vh;
    border-radius: 2vh;
`;

export const ProfileImage = styled(Image)`
  width: 15vh;
  height: 15vh;
  margin-top : 14vh;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top : 12vh;
`;

export const Label = styled.p`
  font-size: 2vh;
  font-weight: 400;
  margin-bottom:2vh;
`;

export const Input = styled.input`
  width: 40vh;
  height: 40px;
  border-radius: 8px;
  border: none;
  padding: 0 1rem;
  font-size: 0.95rem;
  background-color: white;


  &::placeholder {
    color: #a0a0a0;
  }
`;

export const StyledArrowImage = styled(Image)`
  transition: filter 0.1s ease;
`;

export const Button = styled.button`

  width: 43vh;
  height: 12vh;
  background-color: #FFFFFF;
  
  font-weight: 600;
  border: 2px solid #8B8B8B;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 2px solid #0050d7;
    ${StyledArrowImage} {
      filter: invert(22%) sepia(100%) saturate(5740%) hue-rotate(213deg) brightness(95%) contrast(99%);
    
  }
`;




export const Form =  styled.div`
  display : flex;
  flex-direction : column;
  gap : 10vh;

`;


export const Name =  styled.p`
  font-size: 2.5vh;
`;


export const NameForm =  styled.div`
  display : flex;
  justify-content : start;
  align-items: end;
  gap : 2vh;
  margin-left : 6vh;
  margin-top : -15vh;
`;

export const ButtonForm =  styled.div`
  display : flex;
  justify-content : start;
  align-items: end;
  gap : 2vh;
  margin-left : 6vh;
  margin-top : 0vh;
`;

export const ButtonSection =  styled.div`
  display : flex;
  justify-content : start;
  align-items: start;
  gap : 25vh;
  
`;

export const Buttonp =  styled.p`
  font-size: 2vh;
  font-weight: 400;

`;


export const ButtonSub =  styled.p`
  font-size: 1.4vh;
  font-weight: 400;
`;



export const ButtonContent =  styled.div`
  display : flex;
  flex-direction : column;
  align-items : start;
  gap : 3vh;
  margin-left : 4px;
`;
// 리스트 박스 (왼쪽)
export const ListBox = styled.div`
  width: 60vh;
  height: 60vh;
  background-color: #ffffff;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 2vh;
  overflow-y: scroll;
`;

// 리스트 항목
export const ListItem = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  background-color: #fafafa;
  width: 90%;
  height: 9vh;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  outline : none;
  &:hover {
    background-color: #eee;
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: #f0f0f0;
  `}
`;

// 리스트 내부 텍스트 영역
export const ListItemInner = styled.div`
  margin-left: 2vh;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const ListTitle = styled.p`
  font-size: 2vh;
  font-weight: 400;

`;

export const ListInfo = styled.div`
  display: flex;
  gap: 2vh;
  font-size: 1.5vh;
  color: #888;
`;

// 상세 정보 박스 (오른쪽)
export const DetailBox = styled.div`
  width: 60vh;
  height: 55vh;
  background-color: #ffffff;
  border-radius: 1vh;
  display : flex;
  flex-direction : column;
  align-items: center;
  
`;

export const DetailTitle = styled.p`
  font-size: 2.7vh;
  font-weight: 500;
  position : absolute;
  top:-20vh;


`;

export const DetailInfo = styled.p`
  font-size: 1.5vh;
  position : absolute;
  top:-15vh;
`;

export const DetailContent = styled.p`
  font-size: 2vh;
  position : absolute;
  top:-7vh;
  width:100%

`;

export const DetailStatus = styled.p`
  font-size: 1.3vh;
  color: #ff9900;
  position : absolute;
  top:70vh;
  padding-right:30vh;

`;


export const Images =  styled(Image)`
  position : relative;
  top:-1px;
`;



export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3vh;
  
`;

export const BackArrowImage = styled(Image)`
  position: relative;
  top: -1vh;
  cursor: pointer;
`;

export const DetailWrapper = styled.div`
  width: 45vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CheckResultButton = styled.button`
  position: relative;
  top:6vh;
  background-color: #0158DE;
  border: none;
  width: 14vh;
  height: 4vh;
  border-radius: 3vh;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1vh;
`;
