/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import font from "@/style/font";
import { RevoteGrid } from "@/components/RevoteGrid";

const GET_ALL_VOTES = gql`
  query MyQuery {
    vote {
      getAllVotes {
        finishedAt
        hasVoted
        id
        title
      }
    }
  }
`;

export default function ReportPage() {
    const { data, loading, error } = useQuery(GET_ALL_VOTES);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const votes =
        data?.vote?.getAllVotes?.map((v: any) => ({
            id: v.id.slice(0, 5),
            full_id: v.id,
            title: v.title,
            user: "미정",
            totalResponses: v.totalResponses,
            date: new Date(v.finishedAt).toLocaleDateString("ko-KR"),
        })) ?? [];

    return (
        <StyledReport>
            <p css={font.D2}>재투표 현황</p>
            <RevoteGrid items={votes} />
        </StyledReport>
    );
}

const StyledReport = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
  width: 100%;
`;