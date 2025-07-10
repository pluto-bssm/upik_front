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
import { gql, useQuery } from "@apollo/client";

const GET_GUIDES = gql`
  query GetGuidesByCategory($category: String!) {
    guidesByCategory(category: $category) {
      id
      content
      createdAt
      like
      title
    }
  }
`;

export default function StudentPage() {
  const { data, loading, error } = useQuery(GET_GUIDES, {
    variables: { category: "재미" },
    onCompleted: (data) => {
      console.log("실제 받아온 데이터:", data);
    },
    onError: (error) => {
      console.error("GraphQL 에러:", error);
    }
  });

  console.log("현재 상태:", { 
    loading: loading, 
    error: error?.message, 
    data: data,
    hasData: !!data,
    hasError: !!error
  });

  if (loading) return <div>로딩중... (GraphQL 쿼리 실행 중)</div>;
  if (error) return <div>에러: {error.message}</div>;
  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <Container>
      <MainContent>
        <Header>
          <Title>재학생 가이드</Title>
          <SearchBar />
        </Header>
        <ContentList>
          {data.guidesByCategory.map((post: any, idx: number) => (
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