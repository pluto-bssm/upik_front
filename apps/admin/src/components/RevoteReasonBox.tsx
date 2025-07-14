/** @jsxImportSource @emotion/react */
"use client";

import { useParams } from "next/navigation";
import styled from "@emotion/styled";
import { Users } from "lucide-react";
import font from "../../../../packages/ui/fonts";
import colors from "@/style/color";

const dummyRevoteData = [
  {
    id: "0",
    count: 3,
    reasons: ["질문이 천박해요", "질문이 더러워요"],
  },
  {
    id: "1",
    count: 2,
    reasons: ["질문이 너무 길어요", "보기 선택지가 없어요"],
  },
];

export default function RevoteReasonBox() {
  const { id } = useParams();
  const revote = dummyRevoteData.find((d) => d.id === id)!;

  return (
    <StyledRevoteContainer>
      <StyledRevoteBox>
        <StyledVoterCountRow>
          <Users size={12} color={colors.gray800} />
          <StyledVoterCountText>{revote.count}명</StyledVoterCountText>
          <StyledReasonTitle>재투표 사유:</StyledReasonTitle>
        </StyledVoterCountRow>
        <StyledReasonList>
          {revote.reasons.map((r, idx) => (
            <StyledReasonItem key={idx}>• {r}</StyledReasonItem>
          ))}
        </StyledReasonList>
      </StyledRevoteBox>
    </StyledRevoteContainer>
  );
}

const StyledRevoteContainer = styled.div`
  border-radius: 16px;
  width: 90%;
  margin-top: 64px;
`;

const StyledRevoteBox = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledVoterCountRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.gray800};
`;

const StyledVoterCountText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const StyledReasonTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  ${font.H1};
`;

const StyledReasonList = styled.ul`
  margin: 0;
  padding-left: 16px;
`;

const StyledReasonItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  ${font.warn};
`;
