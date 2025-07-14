"use client";
import client from "../apolloClient";
import { useState, useEffect } from "react";

import Votemenu from "../votemenu/page";
import {
  Container,
  Card,
  CategoryText,
  TitleWrapper,
  DateWrapper,
  DateText,
  InfoWrapper,
  TitleText,
  MenuWrapper,
  ALERDYTitleText,
  ALERDYCard,
  ALERDYCardS,
  ALERDYSubTitleText
} from "../style/votepage";

import { useQuery } from "@apollo/client";
import { GET_ALL_VOTES, HAS_VOTED } from "../queries";

export default function Votepage() {
  const { loading: loadingVotes, error: errorVotes, data: dataVotes } = useQuery(GET_ALL_VOTES);
  const [hasUserVotedResults, setHasUserVotedResults] = useState<boolean[]>([]);

  // 비동기적으로 투표 여부를 확인하여 상태 업데이트
  useEffect(() => {
    if (dataVotes?.vote?.getAllVotes?.length) {
      const fetchVoteStatuses = async () => {
        const results: boolean[] = [];
        for (const vote of dataVotes.vote.getAllVotes) {
          if (vote?.id) {
            try {
              const response = await client.query({
                query: HAS_VOTED,
                variables: {
                  votedId: vote.id,
                },
              });
              results.push(response.data.voteResponse.hasUserVoted);
            } catch (error) {

              
            }
          } else {
            console.warn(`Invalid vote object detected:`, vote);
             // 유효하지 않은 객체에 기본 값 추가
          }
        }
        setHasUserVotedResults(results); // 모든 결과를 한 번에 상태 업데이트
      };

      fetchVoteStatuses();
    }
  }, [dataVotes]);

  if (loadingVotes) return <p>로딩 중...</p>;
  if (errorVotes) return <p>에러 발생: {errorVotes.message}</p>;
  if (!dataVotes?.vote?.getAllVotes) return <p>투표 데이터 없음</p>;
  

  

  return (
    <Container>
      {dataVotes.vote.getAllVotes.map((vote: any, i: number) => (
        hasUserVotedResults[i++] === false ? (
          // 투표하지 않은 경우
          <div key={vote.id}>
            <Card>
              <InfoWrapper>
                <CategoryText>{vote.category}</CategoryText>
                <TitleWrapper>
                  <TitleText>{vote.title}</TitleText>
                  <DateWrapper>
                    <DateText>{vote.finishedAt} 투표마감</DateText>
                  </DateWrapper>
                </TitleWrapper>
              </InfoWrapper>
            </Card>

            <MenuWrapper>
              <Votemenu
                options={Array.isArray(vote.options) ? vote.options : []}
                voteid={vote.id}
                votefihishedAt={vote.finishedAt}
              />
            </MenuWrapper>
          </div>
        ) : (
          // 이미 투표한 경우
          <div key={vote.id}>
            <ALERDYCard>
              <ALERDYCardS>
              <ALERDYTitleText>이미 투표를 완료했습니다.</ALERDYTitleText>
              <ALERDYSubTitleText>투표제목 : {vote.title}</ALERDYSubTitleText>
              </ALERDYCardS>
            </ALERDYCard>
          </div>
        )
      ))}
    </Container>
  );
}
