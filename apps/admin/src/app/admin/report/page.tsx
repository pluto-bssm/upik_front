/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_REPORTS } from "@/apis/queries/getqueries";
import { RecordGrid } from "@/components/RecodeGrid";
import styled from "@emotion/styled";
import font from "@/style/font";

export default function ReportPage() {
    const { data, loading, error } = useQuery(GET_ALL_REPORTS);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const reports = data?.report?.getAllReports?.map((r: any) => ({
        full_id: r.targetId,
        id: r.targetId.slice(0, 5),
        user: r.userId,
        date: new Date().toLocaleDateString("ko-KR"),
        code: r.reason,
    })) ?? [];

    return (
        <StyledReport>
            <p css={font.D2}>접수된 신고 기록 조회</p>
            <RecordGrid items={reports} />
        </StyledReport>
    );
}

const StyledReport = styled.div`
  padding-left: 52px;
  gap: 100px;
  width: 100%;
`;