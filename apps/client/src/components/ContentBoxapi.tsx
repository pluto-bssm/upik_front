"use client";
import { useQuery } from "@apollo/client";
import { GUIDES_BY_CATEGORY_QUERY } from "@/app/api/query";
import ContentBox from "@/components/ContentBox";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

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
  const { data, loading, error } = useQuery(GUIDES_BY_CATEGORY_QUERY, {
    variables: { category: "진지" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.guidesByCategory.map((guide: any) => (
        <ContentBox
          key={guide.id}
          post={{
            title: guide.title,
            created_at: guide.createdAt,
            like: guide.like,
            content: guide.content,
          }}
        />
      ))}
    </div>
  );
}