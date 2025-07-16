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
import { useQuery } from "@apollo/client";
import { GUIDES_BY_CATEGORY_QUERY } from "@/app/api/query";
import { useState } from "react";

export default function RoomGuidePage() {
  const { data, loading, error } = useQuery(GUIDES_BY_CATEGORY_QUERY, {
    variables: { category: "기숙사" }
  });

  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <div>로딩중... (GraphQL 쿼리 실행 중)</div>;
  if (data == null) return <div>데이터가 없습니다</div>;
  if (!data?.guidesByCategory) return <div>데이터가 없습니다.</div>;

  const guides = data.guidesByCategory;

  // 검색어가 있으면 title에 한 글자라도 포함된 것만 필터
  const filteredGuides = searchTerm
    ? guides.filter((post: any) =>
        searchTerm.split("").some((char) => post.title.includes(char))
      )
    : guides;

  return (
      <Container>
        <MainContent>
          <Header>
            <Title>기숙사 가이드</Title>
            <SearchBar onSearch={setSearchTerm} />
          </Header>
          <ContentList>
            {filteredGuides.map((post: any, idx: number) => (
              <ContentCard
                key={post.id || idx}
                post={{
                  ...post,
                  created_at: post.createdAt,
                }}
              />
            ))}
          </ContentList>
        </MainContent>
      </Container>
  );
}