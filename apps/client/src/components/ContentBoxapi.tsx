"use client";
import { useQuery } from "@apollo/client";
import ContentBox from "@/components/ContentBox";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GUIDES_BY_CATEGORY_QUERY } from "@/app/api/query";

const httpLink = createHttpLink({
  uri: "http://10.150.2.59:3001/graphql", 
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { errorPolicy: "all" },
    query: { errorPolicy: "all" },
  },
});

export default function GuideList() {
  // 예시: 하나의 카테고리만 사용하거나, 임시로 빈 리스트 반환
  const { data, loading, error } = useQuery(GUIDES_BY_CATEGORY_QUERY, { variables: { category: "재미" } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const guides = data?.guidesByCategory || [];

  return (
    <div>
      {guides.map((guide: any) => (
        <ContentBox
          key={guide.id}
          post={{
            id: guide.id,
            title: guide.title,
            voteId: guide.voteId || "", // linter 에러 방지
            created_at: guide.createdAt,
            like: guide.like,
            content: guide.content,
            category: guide.category || "재미",
          }}
        />
      ))}
    </div>
  );
}