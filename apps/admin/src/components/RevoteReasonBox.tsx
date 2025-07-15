/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { Users } from "lucide-react";
import colors from "@/style/color";
import font from "@/style/font";

const GET_REASON = gql`
  query GetReportsByTarget($targetId: ID!) {
    report {
      getReportsByTarget(targetId: $targetId) {
        reason
        targetId
        userId
        createdAt
      }
    }
  }
`;

export default function RevoteReasonBox() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_REASON, {
    variables: { targetId: id },
    skip: !id,
  });

  if (!id) return <p>🚫 targetId가 없습니다.</p>;
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  const reports = data?.report?.getReportsByTarget ?? [];

  const reasons = reports.map((r: any) => r.reason);
  const userCount = new Set(reports.map((r: any) => r.userId)).size;

  return (
      <StyledRevoteContainer>
        <StyledRevoteBox>
          <StyledVoterCountRow>
            <Users size={12} color={colors.gray800} />
            <StyledVoterCountText>{userCount}명</StyledVoterCountText>
            <StyledReasonTitle>재투표 사유:</StyledReasonTitle>
          </StyledVoterCountRow>
          <StyledReasonList>
            {reasons.map((r: string, idx: number) => (
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
  line-height: 2;
  font:${font.warn};
`;
