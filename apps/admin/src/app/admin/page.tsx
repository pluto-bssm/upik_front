"use client";
/** @jsxImportSource @emotion/react */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DATA } from "@/apis/queries/getqueries";
import ReportList from "@/components/ReportList";
import RevoteList from "@/components/RevoteList";
import styled from "@emotion/styled";
import font from "@/style/font";

const AdminPage = () => {
    const { data, loading, error } = useQuery(GET_ALL_DATA);
    console.log("🔍 uri:", process.env.NEXT_PUBLIC_GRAPHQL_API);
    console.log("📦 GraphQL 응답 data:", data);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const reports =
        data?.report?.getAllReports?.slice(0, 5).map((r: any, idx: number) => ({
            id: `${String(idx).padStart(4, "0")}`,
            user: r.userId,
            code: r.reason,
            targetId: r.targetId,
        })) ?? [];

    const votes =
        data?.vote?.getAllVotes?.slice(0, 5).map((v: any, idx: number) => ({
            id: v.id.slice(0, 5),
            title: v.title,
            date: new Date(v.finishedAt).toLocaleDateString("ko-KR"),
        })) ?? [];

    return (
        <StyledAdmin>
            <p css={font.D2}>어드민 기능</p>
            <SortList>
                <ReportList title="접수된 신고 기록 조회" items={reports} />
                <RevoteList title="재투표 조회" items={votes} />
            </SortList>
        </StyledAdmin>
    );
};

export default AdminPage;

const StyledAdmin = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
    display: flex;
    flex-direction: column;
`;
const SortList=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;