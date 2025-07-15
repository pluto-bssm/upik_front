"use client";
import { useQuery } from "@apollo/client";
import ContentBox from "@/components/ContentBox";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { FUN_GUIDES_QUERY, SERIOUS_GUIDES_QUERY } from "@/app/api/query";

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
  const { data: funData, loading: funLoading, error: funError } = useQuery(FUN_GUIDES_QUERY);
  const { data: seriousData, loading: seriousLoading, error: seriousError } = useQuery(SERIOUS_GUIDES_QUERY);

  const loading = funLoading || seriousLoading;
  const error = funError || seriousError;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // 모든 카테고리의 가이드를 합치기
  const allGuides = [
    ...(funData?.guidesByCategory || []).map((guide: any) => ({ ...guide, category: "재미" })),
    ...(seriousData?.guidesByCategory || []).map((guide: any) => ({ ...guide, category: "진지" }))
  ];

  return (
    <div>
      {allGuides.map((guide: any) => (
        <ContentBox
          key={guide.id}
          post={{
            id: guide.id,
            title: guide.title,
            created_at: guide.createdAt,
            like: guide.like,
            content: guide.content,
            category: guide.category,
          }}
        />
      ))}
    </div>
  );
}