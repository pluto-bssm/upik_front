import styled from "styled-components";
import color from "@/app/style/color";

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
  border-radius: 0.75rem;
  width: 770px;
  height: 359px;
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

export const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  border: 1px solid #A6A6A6;
  border-radius: 0.375rem;
  padding: 0.75rem;
  resize: none;
  font-size: 0.875rem;
  color: black;
  
  &:focus {
    outline: none;
    ring: 2px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: ${color.main};
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  cursor: ${(props: SubmitButtonProps) => props.isDisabled ? 'not-allowed' : 'pointer'};
`;