"use client";

import React, { useState } from "react";
import arrow from "@/app/images/arrow4.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useQuery } from "@apollo/client";
import { LOOKSLOKE } from '../queries';


import {
  Container,
  Title,
  Sub,
  ContentBox,
  ListBox,
  ListItem,
  ListItemInner,
  ListTitle,
  ListInfo,
  GuideInfo
} from "../style/myvote";

const name = "1134박기주";
const email = "24.013@bssm.hs.kr";

type Post = {
  id: string;
  title: string;
  writer: string;
  date: string;
  content: string;
};




export default function Mypage() {
  const { loading: loadingVotes, error: errorVotes, data: dataVotes } = useQuery(LOOKSLOKE);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);  // ✅ 위치 변경
  const router = useRouter();

  function gotoback() {
    router.push("/mypage");
  }

  if (loadingVotes) return <p>로딩 중...</p>;
  if (errorVotes) return <p>에러 발생: {errorVotes.message}</p>;

  if (!dataVotes) return null;

  return (
    <Container>
      <div className="flex items-center gap-[3vh]">
        <Image src={arrow} alt="arrow" className="relative top-[-1vh]" onClick={gotoback} />
        <Title>마이페이지</Title>
      </div>
      <Sub>내가 쓴 투표 게시물</Sub>
      <ContentBox>
        <ListBox>
          {dataVotes.vote.getMyVotes.map((post: any) => (
            <ListItem
              key={post.id}
              onClick={() =>
                selectedPost?.id === post.id ? setSelectedPost(null) : setSelectedPost(post)
              }
              selected={selectedPost?.id === post.id}
            >
              <ListItemInner>
              <GuideInfo>{post.category}가이드</GuideInfo>
                <ListTitle>{post.title}</ListTitle>
                <ListInfo>
                  <p>{post.finishedAt}</p>
                </ListInfo>
              </ListItemInner>
            </ListItem>
          ))}
        </ListBox>
      </ContentBox>
    </Container>
  );
}

