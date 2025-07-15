"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { Desguide } from "../queries";
import {
  GuideDiv,
  GuideWrapper,
  GuideHeader,
  GuideTitle,
  GuideMeta,
  GuideContent,
  Guides,
  SubmitButton
} from "../style/guideDes";

export default function GuideDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const router = useRouter();

  
  function goBack() {
    router.back();
  }

  const { loading, error, data } = useQuery(Desguide, {
    variables: { id },
  });

  if (loading) return <div style={{ marginLeft: "30vh", marginTop: "10vh" }}>로딩중...</div>;
  if (error) return <div style={{ marginLeft: "30vh", marginTop: "10vh", color: "red" }}>에러: {error.message}</div>;
  if (!data?.guide?.guideById) return <div style={{ marginLeft: "30vh", marginTop: "10vh" }}>가이드를 찾을 수 없습니다.</div>;

  const guide = data.guide.guideById;

  return (
    <Guides>
    <GuideDiv>
      <GuideWrapper>
        <GuideHeader>
          <GuideTitle>{guide.title}</GuideTitle>
          <GuideMeta>
            <p>생성일 : {guide.createdAt}</p>
            <p>좋아요 : {guide.likeCount}</p>
          </GuideMeta>
        </GuideHeader>
        <GuideContent>{guide.content}</GuideContent>
      </GuideWrapper>
    </GuideDiv>
    <SubmitButton onClick={() => {goBack()}}>돌아가기</SubmitButton>
    </Guides>
  );
}
