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

export default function AiLimitModal({ onClose }: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>AI 선지 추천은 최초 1회 가능합니다.</Description>
        <Buttons>
        <CloseButton onClick={onClose}>확인</CloseButton>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
