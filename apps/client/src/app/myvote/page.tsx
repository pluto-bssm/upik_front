"use client";

import React, { useState } from "react";
import arrow from "@/app/images/arrow4.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";


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

const posts: Post[] = [
  {
    id: "001",
    title: "차수민쌤이랑 데이트 박제현쌤이랑 데이트",
    writer: "오주현",
    date: "2025.06.22",
    content: "부산소프트웨어 마이스터고등학교는 총 64명이 한 학년에 있으며 곽상미 선생님이 참 귀여우시다 ㅎㅎ 그리고 짜장이가 참귀엽다 진짜 카와이하다 뽀뽀하고싶다,,ㅠㅠ"
  },
  {
    id: "002",
    title: "오늘 점심 뭐 먹지?",
    writer: "김예은",
    date: "2025.06.21",
    content: "오늘 점심은 김치볶음밥 먹을까? 아니면 짜장면?"
  },
  {
    id: "003",
    title: "React 훅 정리 노트 공유합니다!",
    writer: "이정환",
    date: "2025.06.20",
    content: "useState, useEffect, useMemo 등 정리해둔 노트 공유할게요."
  },
  {
    id: "004",
    title: "Next.js 서버 컴포넌트 사용기",
    writer: "정은지",
    date: "2025.06.19",
    content: "서버 컴포넌트를 사용해서 SSR 성능이 향상됨."
  },
  {
    id: "005",
    title: "스타벅스 쿠폰 나눔해요~",
    writer: "박지민",
    date: "2025.06.18",
    content: "쿠폰 유효기간 7월 15일까지! 필요하신 분 댓글 주세요~"
  }
];



export default function Mypage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const router = useRouter() ;

  function gotoback(){
    router.push("/mypage")
  }

  return (
    <Container>
      <div className="flex items-center gap-[3vh]">
      <Image src={arrow} alt="arrow" className="relative top-[-1vh]" onClick={gotoback}/>
      <Title>마이페이지</Title>
      </div>
      <Sub>내가 쓴 투표 게시물</Sub>
      <ContentBox>
        <ListBox>
          {posts.map((post) => (
            <ListItem
              key={post.id}
              onClick={() =>
                selectedPost?.id === post.id
                  ? setSelectedPost(null)
                  : setSelectedPost(post)
              }
              selected={selectedPost?.id === post.id}
            >
              <ListItemInner>
                <ListTitle>{post.title}</ListTitle>
                <ListInfo>
                  <p>{post.writer}</p>
                  <p>{post.date}</p>
                  <p>{post.id}</p>
                </ListInfo>
              </ListItemInner>
            </ListItem>
          ))}
        </ListBox>
      </ContentBox>
    </Container>
  );
}
