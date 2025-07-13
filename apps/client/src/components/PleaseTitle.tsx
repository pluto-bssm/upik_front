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

export default function PleaseTitle({ onClose }: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>AI 선지 추천을 사용하시려면 투표제목을 입력해주세요.</Description>
        <Buttons>
        <CloseButton onClick={onClose}>확인</CloseButton>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
