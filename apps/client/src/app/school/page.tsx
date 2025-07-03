"use client";

import color from "@/styles/color";
import styled from "styled-components";
import ContentCard from "@/components/ContentBox";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

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
      <NavBar />
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

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  background-color: ${color.back_color};
  min-height: 100vh;
  flex: 1;
  padding: 3.5rem 2.5rem 3.5rem 9.375rem; 
  margin-left: 242px;
  width: 866px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem; 
`;

const Title = styled.h1`
  font-size: 2.25rem; 
  font-color: ${color.gray800};
  font-weight: bold;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
`;
