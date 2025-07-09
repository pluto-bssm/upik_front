"use client";

import styled from "styled-components";
import MContentCard from "@/components/MContentBox";
import color from "@/app/style/color";

const voteContent = [
  {
    title: "차수민 선생님과 박제현 선생님과의 데이트",
    date: "2025.05.23",
    likes: 4,
  },
  {
    title: "차수민 선생님과 박제현 선생님과의 데이트",
    date: "2025.05.23",
    likes: 4,
  },
  {
    title: "차수민 선생님과 박제현 선생님과의 데이트",
    date: "2025.05.23",
    likes: 4,
  },
];

export default function MainPage() {
  return (
    <Container>
      <Main>
        <Grid>
          <Section>
            <Title>인기있는 투표</Title>
            <CardList>
              {voteContent.map((post, idx) => (
                <MContentCard key={idx} {...post} />
              ))}
            </CardList>
          </Section>

          <Section>
            <Title>인기있는 가이드</Title>
            <CardList>
              {voteContent.map((post, idx) => (
                <MContentCard key={idx} title="가이드 1" date={post.date} />
              ))}
            </CardList>
          </Section>

          <Section>
            <Title>오늘의 투표</Title>
            <CardList>
              {voteContent.map((post, idx) => (
                <MContentCard key={idx} {...post} />
              ))}
            </CardList>
          </Section>

          <Section>
            <Title>오늘의 가이드</Title>
            <CardList>
              {voteContent.map((post, idx) => (
                <MContentCard key={idx} title="가이드 1" date={post.date} />
              ))}
            </CardList>
          </Section>
        </Grid>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

`;

const Main = styled.main`
  background-color: ${color.back_color};
  min-height: 100vh;
  flex: 1;
  padding: 3.5rem 2.5rem;
  margin-left: 242px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`;

const Section = styled.section`
  background-color: ${color.white};
  width:93%;
  height:100%;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-color:${color.gray800};
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;