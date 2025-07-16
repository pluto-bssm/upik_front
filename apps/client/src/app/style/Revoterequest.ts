import styled from "styled-components";
import color from "@/app/style/color";

interface SubmitButtonProps {
  disabled: boolean;
}

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const ModalContent = styled.div`
  background-color: ${color.white};
  border-radius: 0.75rem;
  width: 770px;
  height: 350px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 28px;
  font-weight: 600;
  color: ${color.gray800};
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
  margin-left:11px;
`;

export const TextArea = styled.textarea`
  width: 97%;
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
  color: ${color.white};
  border:none;
  font-size: 14px;
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height:44px;
  margin-top: 0.75rem;
  cursor: ${(props: SubmitButtonProps) => props.disabled ? 'not-allowed' : 'pointer'};
`;