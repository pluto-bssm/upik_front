/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
import { RecordGrid } from "@/components/RecodeGrid";
import styled from "@emotion/styled";
import font from "../../../../../../packages/ui/fonts";
import { css } from "@emotion/react";

const dummyData = Array.from({ length: 8 }).map((_, i) => ({
  id: `R000${i}`,
  user: "오주현",
  date: "2025/03/13",
  code: "12432",
}));

export default function ReportPage() {
  return (
    <StyledReport>
      <p css={font.D2}>접수된 신고 기록 조회</p>
      <RecordGrid items={dummyData} />
    </StyledReport>
  );
}
const StyledReport = styled.div`
  padding-left: 52px;
  gap: 100px;
  width: 100%;
`;
