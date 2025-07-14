/** @jsxImportSource @emotion/react */
"use client";
import styled from "@emotion/styled";
import font from "../../../../../packages/ui/fonts";
import { css } from "@emotion/react";
import RevoteStatus from "@/components/RevoteStatus";
import RevoteList from "@/components/RevoteList";
import ReportList from "@/components/ReportList";

const dummyReports = Array.from({ length: 5 }).map((_, i) => ({
  id: "R0004",
  user: "오주현",
  date: "2025.10.09",
  code: "004",
}));

const AdminPage = () => {
  return (
    <StyledAdmin>
      <p css={font.D2}>어드민 기능</p>
      <PageContainer>
        <ReportList title="접수된 신고 기록 조회" items={dummyReports} />
        <RevoteList title="재투표현황" items={dummyReports} />
      </PageContainer>
    </StyledAdmin>
  );
};

export default AdminPage;
const StyledAdmin = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 64px;
`;
