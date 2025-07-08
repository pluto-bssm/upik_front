import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    CloseButton2,
    Title,
    Description,
    Buttons
} from "../app/style/Modal"

interface ModalProps {
  onClose: () => void;
  onMain: () => void;
}

export default function WornModal({ onClose , onMain}: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>경고</Title>
        <Description>욕설 혹은 상대방에 대한 비방이 담긴 내용을 작성하는 경우 투표가 삭제 될 수 있습니다.</Description>
        <Buttons>
        <CloseButton onClick={onClose}>투표수정하기</CloseButton>
        <CloseButton2 onClick={onMain}>투표제작하기</CloseButton2>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
