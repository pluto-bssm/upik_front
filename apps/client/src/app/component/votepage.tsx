"use client";

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
  MenuWrapper
} from "../style/votepage";

import { useQuery } from '@apollo/client';
import { GET_VOTE } from '../queries';

export default function Votepage() {
  const { loading, error, data } = useQuery(GET_VOTE);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;
  if (!data?.vote?.getAllVotes) return <p>투표 데이터 없음</p>;

  return (
    <Container>
      {data.vote.getAllVotes.map((vote: any) => (
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
            <Votemenu options={vote.options} />
          </MenuWrapper>
        </div>
      ))}
    </Container>
  );
}
