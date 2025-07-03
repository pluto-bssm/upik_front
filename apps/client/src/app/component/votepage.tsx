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


export default function Votepage() {
  const category = "재미질문";
  const title = "학교에서 가장 무서운것은?";
  const date = "2025-05-23";

  return (
    <Container>
      <Card>
        <InfoWrapper>
          <CategoryText>{category}</CategoryText>
          <TitleWrapper>
            <TitleText>{title}</TitleText>
            <DateWrapper>
              <DateText>{date} 투표마감</DateText>
            </DateWrapper>
          </TitleWrapper>
        </InfoWrapper>
      </Card>

      <MenuWrapper>
        <Votemenu />
      </MenuWrapper>
    </Container>
  );
}
