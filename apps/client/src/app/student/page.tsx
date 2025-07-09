"use client";

import { useEffect, useState } from "react";
import { fetchCategory } from "@/app/api/axios";
import ContentCard from "@/components/ContentBox";
import SearchBar from "@/components/SearchBar";
import {
  Container,
  MainContent,
  Header,
  Title,
  ContentList
} from "../style/Guide";

export default function StudentPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchCategory("학교생활")
      .then(data => {
        // data가 배열이라면 바로 setPosts(data)
        // 만약 data.posts처럼 내부에 있다면 setPosts(data.posts)
        setPosts(data);
      })
      .catch(error => {
        console.error("가이드 요청 실패:", error);
      });
  }, []);

  return (
    <Container>
      <MainContent>
        <Header>
          <Title>재학생 가이드</Title>
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