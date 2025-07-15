"use client";

import { useState, useEffect } from "react";
import SubmitModal from "@/components/SubmitModal";
import arrow from "@/app/images/arrow.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import client from "../apolloClient";
import { GuideSim, GuidesType } from "../queries";

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
  StyledArrowImage,
} from "../style/Recommend";

export default function Recommend() {
  const [showModal, setShowModal] = useState(false);
  const [guideList, setGuideList] = useState<any[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const catego = searchParams.get("catego") || "";
  const title = searchParams.get("title") || "";
  const optionsss = searchParams.get("optionsss") || "";

  const { loading, error, data } = useQuery(GuideSim, {
    variables: { title },
  });

  // 상세 가이드 목록 불러오기
  useEffect(() => {
    const guides = data?.optionGenerator?.findSimilarGuidesByTitle?.guides;

    if (guides && guides.length > 0) {
      Promise.all(
        guides.map((guide: any) =>
          client.query({
            query: GuidesType,
            variables: { gid: guide.id },
          })
        )
      )
        .then((responses) => {
          const details = responses.map((res) => res.data.guide.guideById);
          setGuideList(details);
        })
        .catch((err) => {
          console.error("가이드 상세 로딩 오류:", err.message);
        });
    }
  }, [data]);

  function goMain() {
    router.push("/");
  }

  function Gotoguide(gid: string) {
    console.log("선택한 가이드 ID:", gid);
    const query = new URLSearchParams({
      id : gid
    }).toString();
    router.push(`/guide?${query}`);
  }

  if (loading) return <div><WarnP>로딩 중...</WarnP></div>;
  if (error) return <div><WarnP>에러 발생: {error.message}</WarnP></div>;

  const guideCount = data?.optionGenerator?.findSimilarGuidesByTitle?.count || 0;

  return (
    <>
      {showModal && (
        <SubmitModal
          onClose={() => setShowModal(false)}
          onMain={() => {
            const query = new URLSearchParams({
              category: catego,
              title: title,
              options: optionsss,
            }).toString();

            router.push(`/success?${query}`);
          }}
        />
      )}

      <Container>
        <TitleWrapper>
          <TitleInputWrapper>
            <TitleInput
              value={
                guideCount > 0
                  ? "유사한 내용의 가이드가 이미 존재합니다!"
                  : "유사한 내용의 가이드가 존재하지 않습니다."
              }
              readOnly
            />
            <WarnP>아래 가이드의 내용이 본인이 원하는 내용과 같다면 질문을 업로드하지 않아도 됩니다!</WarnP>
          </TitleInputWrapper>

          <OptionsWrapper>
            {guideList.map((guide, index) => (
              <OptionRow key={guide.id}>
                <OptionInput>
                  <div className="flex flex-col w-[80vh]">
                    <Category>{guide.category}가이드</Category>
                    <p>{guide.title}</p>
                  </div>
                  <ReButton
                  onClick={() => Gotoguide(guide.id)}>
                    자세히보기
                    <StyledArrowImage
                      src={arrow}
                      alt="checkimg"
                      width={16}
                      height={16}
                    />

                  </ReButton>
                </OptionInput>
              </OptionRow>
            ))}
          </OptionsWrapper>

          <AddOptionWrapper>
            <ButtonsRow>
              <InnerButtonsWrapper>
                <Button onClick={goMain}>투표 제작하지 않기</Button>
              </InnerButtonsWrapper>

              <SubmitButton onClick={() => setShowModal(true)}>투표 제작하기</SubmitButton>
            </ButtonsRow>
          </AddOptionWrapper>
        </TitleWrapper>
      </Container>
    </>
  );
}
