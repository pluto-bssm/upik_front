import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Title,
    Description,
    Buttons
} from "../app/style/Modal"

interface ModalProps {
  onClose: () => void;
}

export default function OptiontModal({ onClose }: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>투표를 만들려면 선지가 최소 2개 이상이어야 하며,모든 선지는 비워져 있으면 안 됩니다.</Description>
        <Buttons>
        <CloseButton onClick={onClose}>확인</CloseButton>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
