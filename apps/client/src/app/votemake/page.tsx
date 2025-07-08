"use client";

import { useEffect, useState } from "react";
import AiLimitModal from "@/components/Ailimitmodal"; 
import OptionModal from "@/components/OptionModal"; 
import WornModal from "@/components/WornModal"; 
import { useRouter } from "next/navigation";

import {
  Container,
  TitleWrapper,
  TitleInputWrapper,
  TitleLabel,
  TitleInput,
  OptionsWrapper,
  OptionRow,
  OptionInput,
  RemoveButton,
  AddOptionWrapper,
  AddOptionButton,
  ButtonsRow,
  InnerButtonsWrapper,
  Button,
  SubmitButton,WarnP
} from "../style/Votemake";

export default function Votemake() {
  const [options, setOptions] = useState(["", ""]);
  const [aiUseCount, setAiUseCount] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [showModal_option, setShowModal_option] = useState(false);
  const [showModal_worn, setShowModal_worn] = useState(false);
  const [title, settitle] = useState(""); 
  const [IStitle, setIstitle] = useState(false);
  const router = useRouter() ;

  const maxAiUse = 3;

  const handleAddOption = () => {
    if (options.length < 5) {
      setOptions([...options, ""]);
    }
  };

  const handleChangeOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleRemoveOption = (index: number) => {
    const updated = options.filter((_, i) => i !== index);
    setOptions(updated);
  };

  const exampleOptions = [
    "AI 추천 선지 1",
    "AI 추천 선지 2",
    "AI 추천 선지 3",
    "AI 추천 선지 4",
    "AI 추천 선지 5",
  ];

  const submitVote = () => {

    if (title.trim() === "") {
      
      return;
    }
    else if (options.length < 2|| options.some(option => option.trim() === "")) {
      setShowModal_option(true);
      return;
    
    }

    else{
      setShowModal_worn(true);
    }
    
  }

  useEffect(() => {
    setIstitle(!(title.trim() !== ""));
  }, [title]);
  
  const handleAIRecommend = () => {
    if (aiUseCount >= maxAiUse) {
      setShowModal(true);
      return;
    }

    const updated = options.map((option, idx) =>
      option.trim() === "" ? exampleOptions[idx] || `AI 추천 선지 ${idx + 1}` : option
    );

    setOptions(updated);
    setAiUseCount(aiUseCount + 1);
  };

  return (
    <>
      {showModal && <AiLimitModal onClose={() => setShowModal(false)} />}
      {showModal_option && <OptionModal onClose={() => setShowModal_option(false)} />}
      {showModal_worn && <WornModal onClose={() => setShowModal_worn(false)} onMain={() => router.push("/recommend")} />}

      <Container>
        <TitleWrapper>
          <TitleInputWrapper>
            <TitleLabel>투표 만들기</TitleLabel>
            <TitleInput placeholder="투표제목을 입력하세요" value={title} onChange={(e) => settitle(e.target.value)} />
            {IStitle ? (
              <div>
                <WarnP>필수입력사항입니다!</WarnP>
              </div>
            ) : (
              <div></div>
            )}
          </TitleInputWrapper>

          <OptionsWrapper>
            {options.map((option, index) => (
              <OptionRow key={index}>
                <OptionInput
                  placeholder="선지를 입력해주세요"
                  value={option}
                  onChange={(e) => handleChangeOption(index, e.target.value)}
                />
                <RemoveButton onClick={() => handleRemoveOption(index)}>✕</RemoveButton>
              </OptionRow>
            ))}

            <AddOptionWrapper>
              {options.length < 5 && (
                <AddOptionButton onClick={handleAddOption}>+</AddOptionButton>
              )}

              <ButtonsRow>
                <InnerButtonsWrapper>
                  <Button onClick={handleAIRecommend}>
                    AI선지추천 {aiUseCount}/{maxAiUse}
                  </Button>
                </InnerButtonsWrapper>

                <SubmitButton onClick={submitVote}>투표제출하기</SubmitButton>
              </ButtonsRow>
            </AddOptionWrapper>
          </OptionsWrapper>
        </TitleWrapper>
      </Container>
    </>
  );
}
