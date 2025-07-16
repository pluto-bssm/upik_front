"use client";

import MContentCard from "@/components/MContentBox";
import {
  Container,
  Main,
  Grid,
  Section,
  Title,
  CardList
} from "@/app/style/Main";
import { useQuery } from "@apollo/client";
import { GUIDES_SELECT, VOTE_SELECT } from "@/app/api/query";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();
  // 카테고리별로 가이드 데이터 가져오기
  const { data: dormData, loading: dormLoading, error: dormError } = useQuery(GUIDES_SELECT, { variables: { category: "기숙사" } });
  const { data: schoolData, loading: schoolLoading, error: schoolError } = useQuery(GUIDES_SELECT, { variables: { category: "학교생활" } });
  const { data: humorData, loading: humorLoading, error: humorError } = useQuery(GUIDES_SELECT, { variables: { category: "유머" } });

  // 모든 카테고리의 가이드 합치기
  const allGuides = [
    ...(dormData?.guidesByCategory || []),
    ...(schoolData?.guidesByCategory || []),
    ...(humorData?.guidesByCategory || [])
  ];

  // 인기있는 가이드: 좋아요 내림차순, 동점시 오래된 순
  const topGuides = allGuides
    .slice()
    .sort((a, b) => {
      if (b.like !== a.like) return b.like - a.like;
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    })
    .slice(0, 3);

  // 오늘의 가이드: 최신순 3개
  const latestGuides = allGuides
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  // 로딩/에러 처리
  const guideLoading = dormLoading || schoolLoading || humorLoading;
  const guideError = dormError || schoolError || humorError;

  // 투표 데이터 가져오기
  const { data: voteData, loading: voteLoading, error: voteError } = useQuery(VOTE_SELECT);

  // 인기 있는 투표 데이터 정렬 및 추출
  const mostPopularVotes = voteData?.vote?.getMostPopularOpenVote
    ? [...(Array.isArray(voteData.vote.getMostPopularOpenVote) 
        ? voteData.vote.getMostPopularOpenVote 
        : [voteData.vote.getMostPopularOpenVote])]
        .sort((a, b) => b.totalResponses - a.totalResponses)
        .slice(0, 3)
    : [];

  // 오늘의 투표 데이터 정렬 및 추출
  const latestVotes = voteData?.vote?.getMostPopularOpenVote
    ? [...(Array.isArray(voteData.vote.getMostPopularOpenVote)
        ? voteData.vote.getMostPopularOpenVote
        : [voteData.vote.getMostPopularOpenVote])]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3)
    : [];

  return (
    <Container>
      <Main>
        <Grid>
          {/* 인기 있는 투표 섹션 */}
          <Section>
            <Title>인기있는 투표</Title>
            <CardList>
              {voteLoading && <div>로딩중...</div>}
              {!voteLoading && !voteError && mostPopularVotes.length === 0 && <div>투표 없음</div>}
              {mostPopularVotes.map((vote, idx) => (
                <MContentCard
                  key={vote.id || idx}
                  title={vote.title}
                  date={vote.finishedAt}
                />
              ))}
            </CardList>
          </Section>

          {/* 인기 있는 가이드 섹션 */}
          <Section>
            <Title>인기있는 가이드</Title>
            <CardList>
              {guideLoading && <div>로딩중...</div>}
              {!guideLoading && !guideError && topGuides.length === 0 && <div>가이드 없음</div>}
              {topGuides.map((guide, idx) => (
                <div
                  key={guide.id || idx}
                  onClick={() => router.push(`/guide?id=${guide.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <MContentCard
                    title={guide.title}
                    date={guide.createdAt}
                  />
                </div>
              ))}
            </CardList>
          </Section>

          {/* 오늘의 투표 섹션 */}
          <Section>
            <Title>오늘의 투표</Title>
            <CardList>
              {voteLoading && <div>로딩중...</div>}
              {!voteLoading && !voteError && latestVotes.length === 0 && <div>투표 없음</div>}
              {latestVotes.map((vote, idx) => (
                <MContentCard
                  key={vote.id || idx}
                  title={vote.title}
                  date={vote.finishedAt}
                />
              ))}
            </CardList>
          </Section>

          {/* 오늘의 가이드 섹션 */}
          <Section>
            <Title>오늘의 가이드</Title>
            <CardList>
              {guideLoading && <div>로딩중...</div>}
              {!guideLoading && !guideError && latestGuides.length === 0 && <div>가이드 없음</div>}
              {latestGuides.map((guide, idx) => (
                <div
                  key={guide.id || idx}
                  onClick={() => router.push(`/guide?id=${guide.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <MContentCard
                    title={guide.title}
                    date={guide.createdAt}
                  />
                </div>
              ))}
            </CardList>
          </Section>
        </Grid>
      </Main>
    </Container>
  );
}