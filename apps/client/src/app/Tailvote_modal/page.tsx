"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Overlay,
  ModalContainer,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "../style/Tailvote_modal";


export default function Tailvote_modal({ onClose }: { onClose: () => void }) {
  const router = useRouter();

  function onGO() {
    router.push("/endvote");
  }

  return (
    <Overlay>
      <ModalContainer>
        <Title>안내</Title>
        <Description>꼬리 질문에 답변하지 않으셨습니다!</Description>
        <ButtonGroup>
          <PrimaryButton onClick={onGO}>건너뛰기</PrimaryButton>
          <SecondaryButton onClick={onClose}>← 답변하기</SecondaryButton>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
}
