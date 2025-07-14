"use client";
import React, { useState } from "react";
import Tailvote_modal from "../Tailvote_modal/page";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import {
  Overlay,
  Wrapper,
  Card,
  Content,
  Category,
  TitleWrapper,
  Title,
  DateWrapper,
  DateText,
  TextAreaWrapper,
  AnswerTextArea,
  SubmitButton,
} from "../style/Tailvote";

export default function Tailvote() {
  const searchParams = useSearchParams();
  const choseoption = searchParams.get("choseoptions");
  const fihishedAt = searchParams.get("fihishedAt");
  let datas = null;
  if(choseoption != null){
     datas = JSON.parse(choseoption);
    
  }
  console.log(datas.voteResponse.createVoteResponse.optionContent)
  const choseoptions = datas.voteResponse.createVoteResponse.optionContent
  
  const category = "재미질문 > 꼬리질문";
  const title = choseoptions + "을(를) 선택한 이유는 무엇인가요?";
  const date = fihishedAt;

  console.log(date)

  const [textcontext, changetext] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const Vote_ = () => {
    console.log(textcontext);
    if (textcontext) {
      router.push("/endvote");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      {modalOpen && (
        <Overlay>
          <Tailvote_modal onClose={() => setModalOpen(false)} />
        </Overlay>
      )}

      <Wrapper>
        <Card>
          <Content>
            <Category>{category}</Category>
            <TitleWrapper>
              <Title>{title}</Title>
              <DateWrapper>
                <DateText>{date} 투표마감</DateText>
              </DateWrapper>
            </TitleWrapper>

            <TextAreaWrapper>
              <AnswerTextArea
                placeholder="자유롭게 답변해주세요"
                maxLength={200}
                value={textcontext}
                onChange={(e) => changetext(e.target.value)}
              />
            </TextAreaWrapper>

            <SubmitButton onClick={Vote_}>투표 결과 제출하기</SubmitButton>
          </Content>
        </Card>
      </Wrapper>
    </>
  );
}
