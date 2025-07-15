import styled from "styled-components";
import color from "@/app/style/color";

export const Chartimg = styled.img`
  width: 28px;
  height: 28px;
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContent = styled.div`
  background-color: ${color.white};
  border-radius: 8px;
  width: 770px;
  min-height: 300px;
  height: auto;
  max-height: 90vh;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 95vw;
    padding: 1.2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 28px;
  font-weight: 600;
  color:${color.gray800};
  margin-bottom: 1.5rem;
`;

export const VoteTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color:${color.gray800};
  margin-bottom: 1rem;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${color.gray200};
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

export const VoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const RequestButton = styled.button`
  width: 286px;
  height: 44px;
  background-color: ${color.main};
  color: ${color.white};
  border-radius: 100px;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  margin-right:-345px;
`;

