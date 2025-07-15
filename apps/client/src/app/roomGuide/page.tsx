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
import { FUN_GUIDES_QUERY, SERIOUS_GUIDES_QUERY } from "@/app/api/query";

export default function RoomGuidePage() {
  const { data: funData, loading: funLoading, error: funError } = useQuery(FUN_GUIDES_QUERY);
  const { data: seriousData, loading: seriousLoading, error: seriousError } = useQuery(SERIOUS_GUIDES_QUERY);

  const loading = funLoading || seriousLoading;
  const error = funError || seriousError;

  console.log("현재 상태:", { 
    loading: loading, 
    error: error?.message, 
    funData: funData,
    seriousData: seriousData,
    hasData: !!(funData || seriousData),
    hasError: !!error
  });

  if (loading) return <div>로딩중... (GraphQL 쿼리 실행 중)</div>;
  if (error) return <div>에러: {error.message}</div>;
  if (!funData && !seriousData) return <div>데이터가 없습니다.</div>;

  // 모든 카테고리의 가이드를 합치기
  const allGuides = [
    ...(funData?.guidesByCategory || []).map((guide: any) => ({ ...guide, category: "재미" })),
    ...(seriousData?.guidesByCategory || []).map((guide: any) => ({ ...guide, category: "진지" }))
  ];

  return (
      <Container>
        <MainContent>
          <Header>
            <Title>기숙사 가이드</Title>
            <SearchBar />
          </Header>
          <ContentList>
            {allGuides.map((post: any, idx: number) => (
              <ContentCard
                key={post.id || idx}
                post={{
                  ...post,
                  created_at: post.createdAt,
                  category: post.category,
                }}
              />
            ))}
          </ContentList>
        </MainContent>
      </Container>
  );
}