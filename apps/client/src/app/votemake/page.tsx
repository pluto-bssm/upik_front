"use client";

import { useEffect, useState } from "react";
import AiLimitModal from "@/components/Ailimitmodal"; 
import PleaseTitle from "@/components/PleaseTitle"; 
import OptionModal from "@/components/OptionModal"; 
import WornModal from "@/components/WornModal"; 
import { useRouter } from "next/navigation";

import { useQuery } from '@apollo/client';
import { GET_AIOPTION } from '../queries';

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
  SubmitButton,
  WarnP,
  OptionButton,
  OptionC
} from "../style/Votemake";

export default function Votemake() {
  const [optionss, setOptionss] = useState(["", ""]);
  const [aiUseCount, setAiUseCount] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [showModal_option, setShowModal_option] = useState(false);
  const [showModal_worn, setShowModal_worn] = useState(false);
  const [showModal_title, setShowModal_title] = useState(false);
  const [title, settitle] = useState(""); 
  const [IStitle, setIstitle] = useState(false);
  const router = useRouter();

  const maxAiUse = 3;

  const handleAddOption = () => {
    if (optionss.length < 5) {
      setOptionss([...optionss, ""]);
    }
  };

  const handleChangeOption = (index: number, value: string) => {
    const updated = [...optionss];
    updated[index] = value;
    setOptionss(updated);
  };

  const handleRemoveOption = (index: number) => {
    const updated = optionss.filter((_, i) => i !== index);
    setOptionss(updated);
  };

  const submitVote = () => {
    if (title.trim() === "") {
      return;
    } else if (optionss.length < 2 || optionss.some(option => option.trim() === "")) {
      setShowModal_option(true);
      return;
    } else {
      setShowModal_worn(true);
    }
  };

  useEffect(() => {
    setIstitle(!(title.trim() !== ""));
  }, [title]);


  const { loading, error, data, refetch } = useQuery(GET_AIOPTION, {
    variables: {
      count: optionss.length,
      title: title,
    },
  });

  const handleAIRecommend = () => {
    if (title.length === 0) {
      setShowModal_title(true);
    } else {
      if (aiUseCount >= maxAiUse) {
        setShowModal(true);
        return;
      }

      

      if (loading) {
        console.log("AI가 선지를 생성 중입니다...");
      } else if (error) {
        console.error("Error:", error.message);
      } else if (data) {
        console.log("데이터 생성 완료");
        setOptionss(data.optionGenerator.generateOptions.options);
        setAiUseCount(aiUseCount + 1);
      } else {
        refetch(); // 데이터를 다시 가져오도록 요청
      }
    }
  };

  const [catego, setcate] = useState("");

  return (
    <>
      {showModal_title && <PleaseTitle onClose={() => setShowModal_title(false)} />}
      {showModal && <AiLimitModal onClose={() => setShowModal(false)} />}
      {showModal_option && <OptionModal onClose={() => setShowModal_option(false)} />}
      {showModal_worn && (
        <WornModal
          onClose={() => setShowModal_worn(false)}
          onMain={() => {
            const query = new URLSearchParams({
              catego: catego,
              title: title,
              optionsss: JSON.stringify(optionss),
            }).toString();

            router.push(`/recommend?${query}`);
          }}
        />
      )}

      <Container>
        <TitleWrapper>
          <TitleInputWrapper>
            <OptionC>
              <OptionButton onClick={() => setcate("재미")}>재미</OptionButton>
              <OptionButton onClick={() => setcate("진지")}>진지</OptionButton>
            </OptionC>
            <TitleInput
              placeholder="투표제목을 입력하세요"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            {IStitle ? (
              <div>
                <WarnP>필수입력사항입니다!</WarnP>
              </div>
            ) : (
              <div></div>
            )}
          </TitleInputWrapper>

          <OptionsWrapper>
            {optionss.map((option, index) => (
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
              {optionss.length < 5 && (
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
