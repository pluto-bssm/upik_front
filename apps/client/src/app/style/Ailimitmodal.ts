import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 1vh;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 4vh;
  width: 60vh;
  height: 30vh;
  z-index: 51;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background-color: #0158DE;
  color: #FFFFFF;
  padding: 1.5vh 4vh;
  border-radius: 9999px;
  font-size: 1.8vh;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004cc0;
  }
`;

export const CloseButton2 = styled.button`
  background-color: #FFFFFF;
  color: #0158DE;

  padding: 1.5vh 4vh;
  border-radius: 9999px;
  font-size: 1.8vh;

  border: 2px solid #0158DE;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Title = styled.h2`
  font-size: 2.5vh;
  font-weight: bold;
  margin-bottom: 2vh;
  color: black;
`;

export const Description = styled.p`
  font-size: 2vh;
  margin-bottom: 4vh;
  color: black;
`;
