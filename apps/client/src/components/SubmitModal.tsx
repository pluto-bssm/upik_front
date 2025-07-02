import React from "react";
import arrow2 from "@/app/images/arrow2.svg";
import Image from "next/image";

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

export default function SubmitModal({ onClose , onMain}: ModalProps) {
  return (
    <ModalOverlay>
      <ModalContent>
        <Title>안내</Title>
        <Description>투표를 제작한 이후에는 수정 또는 삭제를 할 수 없습니다.</Description>
        <Buttons>
        <CloseButton onClick={onMain}>투표만들기</CloseButton>
        
        <CloseButton2 onClick={onClose}><Image 
        src ={arrow2}
        alt="checkimg"/>뒤로가기</CloseButton2>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
}
