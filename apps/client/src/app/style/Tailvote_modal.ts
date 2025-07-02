import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
`;

export const ModalContainer = styled.div`
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2vh;
`;

export const PrimaryButton = styled.button`
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

export const SecondaryButton = styled.button`
  border: 1px solid #0158DE;
  color: #0158DE;
  padding: 1.5vh 4vh;
  border-radius: 9999px;
  font-size: 1.8vh;
  background-color: #FFFFFF;
  cursor: pointer;
`;
