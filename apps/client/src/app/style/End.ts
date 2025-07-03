import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 16vh;
  background-color: #FFFFFF;
  border-radius: 2vh;
  width: 120vh;
  height: 60vh;
`;

export const Container = styled.div`
  background-color: white;
  width: 120vh;
  height: 60vh;
  border-radius: 2vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.p`
  font-size: 2.2vh;
  font-weight: 600;
  color: #333333;
  margin: 1.5vh 0 3vh 0;
`;

export const Button = styled.button`
  background-color: #0158de;
  color: #fff;
  padding: 1.5vh 4vh;
  border-radius: 2vh;
  font-size: 1.8vh;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #004cc0;
  }
`;
