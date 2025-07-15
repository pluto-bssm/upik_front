import styled from "styled-components";
import color from "@/app/style/color";

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
  height: 596px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.25rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1.5rem;
`;

export const VoteType = styled.h4`
  color: ${color.main};
  font-size: 1rem;
`;

export const VoteTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: black;
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
`;

