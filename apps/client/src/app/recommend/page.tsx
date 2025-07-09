"use client";

import { useState } from "react";
import SubmitModal from "@/components/SubmitModal"; 
import arrow from "@/app/images/arrow.svg";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import {
  Container,
  TitleWrapper,
  TitleInputWrapper,
  TitleInput,
  OptionsWrapper,
  OptionRow,
  OptionInput,
  AddOptionWrapper,
  ButtonsRow,
  InnerButtonsWrapper,
  Button,
  SubmitButton,
  WarnP,
  Category,
  ReButton,
  StyledArrowImage
} from "../style/Recommend";

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function recommend() {
  // 클라이언트 훅들 및 상태는 여기서 OK (use client 선언 필요)
  // next/navigation 사용 가능

  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const catego = searchParams.get("catego"); // string | null
  const title = searchParams.get("title");
  const optionsss = searchParams.get("optionsss");

  console.log(optionsss)





  const [options, setOptions] = useState(["", "", "", "", ""]);

  function goMain() {
    router.push("/");
  }

  function toStringParam(param: string | null | undefined): string {
    if (!param) return "";  // null, undefined, '' 모두 빈 문자열로 변환
    if (Array.isArray(param)) return param.join(",");
    return param;
  }
  
  return (
    <>
      {showModal && (
        <SubmitModal
          onClose={() => setShowModal(false)}
          onMain={() => {
            const query = new URLSearchParams({
              category: toStringParam(catego),
              title: toStringParam(title),
              options: toStringParam(optionsss),
            }).toString();

            router.push(`/success?${query}`);
          }}
        />
      )}

      <Container>
        <TitleWrapper>
          <TitleInputWrapper>
            <TitleInput value="유사한 내용의 가이드가 이미 존재합니다!" readOnly />
            <WarnP>아래 가이드의 내용이 본인이 원하는 내용과 같다면 질문을 업로드하지 않아도 됩니다!</WarnP>
          </TitleInputWrapper>

          <OptionsWrapper>
            {options.map((option, id) => (
              <OptionRow key={id}>
                <OptionInput>
                  <div className="flex flex-col w-[20vh]">
                    <Category>유머가이드</Category>
                    <p>가이드</p>
                  </div>

                  <ReButton>
                    자세히보기
                    <StyledArrowImage src={arrow} alt="checkimg" width={16} height={16} />
                  </ReButton>
                </OptionInput>
              </OptionRow>
            ))}

            <AddOptionWrapper>
              <ButtonsRow>
                <InnerButtonsWrapper>
                  <Button onClick={goMain}>투표 제작하지 않기</Button>
                </InnerButtonsWrapper>

                <SubmitButton onClick={() => setShowModal(!showModal)}>투표 제작하기</SubmitButton>
              </ButtonsRow>
            </AddOptionWrapper>
          </OptionsWrapper>
        </TitleWrapper>
      </Container>
    </>
  );
}
