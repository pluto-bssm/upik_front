"use client";

import ContentCard from "@/components/ContentBox";
import SearchBar from "@/components/SearchBar";
import {
  Container,
  MainContent,
  Header,
  Title,
  ContentList
} from "../style/Guide";

const posts = [
  {
    title: "소마고에 대해서...?",
    date: "2025-05-23",
    likes: 170,
    content:
      "부산소프트웨어 마이스터고등학교는 총 64명이 한 학년에 있으며 곽상미선생님이 참 귀여우시다 ㅎㅎ 그리고 짜장이가 참귀엽다 진짜 카와이하다 뽀뽀하고싶다,,ㅠㅠ",
  },
  {
    title: "유근찬쌤 시간에 하면 안되는 행동에 대한 가이드",
    date: "2025-04-20",
    likes: 98,
    content: "1. 대답안하기 2. 자기 3. 묻는말에 대답 못하기",
  },
  {
    title: "매점 사용 가이드",
    date: "2025-03-15",
    likes: 205,
    content: "매점은 7시 이후로는 못씀..2학기에는 달라질수도 있고용~",
  },
];

export default function SchoolPage() {
  return (
    <Container>
      <MainContent>
        <Header>
          <Title>학교생활 가이드</Title>
          <SearchBar />
        </Header>
        <ContentList>
          {posts.map((post, idx) => (
            <ContentCard key={idx} post={post} />
          ))}
        </ContentList>
      </MainContent>
    </Container>
  );
}
