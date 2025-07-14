/** @jsxImportSource @emotion/react */
"use client";
import React from "react";
import { RecordGrid } from "@/components/RecodeGrid";
import styled from "@emotion/styled";
import font from "../../../../../../packages/ui/fonts";
import { css } from "@emotion/react";
import RevoteStatus from "@/components/RevoteStatus";
import { RevoteGrid } from "@/components/RevoteGrid";

const dummyData = Array.from({ length: 8 }).map((_, i) => ({
  title: `성우모임사랑최강자는?`,
  id: `${i}`,
  user: "오주현",
  date: "2025/03/13",
}));

export default function ReportPage() {
  return (
    <StyledReport>
      <p css={font.D2}>재투표 현황</p>
      <RevoteGrid items={dummyData} />
    </StyledReport>
  );
}
const StyledReport = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
  width: 100%;
`;
