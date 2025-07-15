"use client";

import { useEffect, useState } from "react";
import AiLimitModal from "@/components/Ailimitmodal"; 
import PleaseTitle from "@/components/PleaseTitle"; 
import OptionModal from "@/components/OptionModal"; 
import WornModal from "@/components/WornModal"; 
import { useRouter } from "next/navigation";

import client from "../apolloClient"; // 이미 있음
import { GET_AIOPTION } from '../queries';

import {
  Container,
  TitleWrapper,
  TitleInputWrapper,
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
  OptionC,
  OptionHr
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

  const maxAiUse = 1;

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



  const handleAIRecommend = () => {

    const filled = optionss.filter((opt) => opt.trim() !== "");
    const emptyCount = optionss.length - filled.length;


    if (title.length === 0) {
      setShowModal_title(true);
    } else {
      if (aiUseCount >= maxAiUse) {
        setShowModal(true);
        return;
      }
  
      const controller = new AbortController();
  
      // 10분 타임아웃
      const timeout = setTimeout(() => {
        controller.abort();
      }, 10 * 60 * 1000); // 600,000ms = 10분
      
      console.log(emptyCount,title)
      

      const tempOptions = [...optionss];
      for (let i = 0; i < tempOptions.length; i++) {
        if (tempOptions[i].trim() === "") {
          tempOptions[i] = "AI 선지 생성 중...";
        }
      }
      setOptionss(tempOptions);
      
      client.query({
        query: GET_AIOPTION,
        variables: {
          count: emptyCount,
          title: title,
        },
        context: {
          fetchOptions: {
            signal: controller.signal,
          },
        },
      })
      .then((res) => {
        clearTimeout(timeout);
      
        const aiOptions = res?.data?.optionGenerator?.generateOptions?.options;
      
        if (aiOptions && aiOptions.length > 0) {
          const updatedOptions = [...tempOptions]; // 여기서 다시 사용해야 함
          let aiIndex = 0;

          for (let i = 0; i < updatedOptions.length; i++) {
            if (updatedOptions[i] === "AI 선지 생성 중..." && aiIndex < aiOptions.length) {
              updatedOptions[i] = aiOptions[aiIndex++];
            }
          }
          setOptionss(updatedOptions);
            }
      

          setAiUseCount((prev) => prev + 1);
          console.log("AI 선지 생성 완료!");
        }
      )
      
      .catch((err) => {
        clearTimeout(timeout); // 에러나도 타임아웃 제거
        if (err.name === "AbortError") {
          console.error("요청이 10분 초과로 자동 취소되었습니다.");
          alert("요청이 너무 오래 걸려 취소되었습니다. 다시 시도해주세요.");
        } else {
          console.error("에러 발생:", err.message);
        }
      });
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
            <OptionButton selected={catego === "유머" }onClick={() => setcate(catego === "유머" ? "" : "유머")} >유머</OptionButton>
            <OptionButton selected={catego === "학교생활" }onClick={() => setcate(catego === "학교생활" ? "" : "학교생활")} >학교생활</OptionButton>
            <OptionButton selected={catego === "기숙사" }onClick={() => setcate(catego === "기숙사" ? "" : "기숙사")} >기숙사</OptionButton>
            </OptionC>
            <OptionHr />
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
