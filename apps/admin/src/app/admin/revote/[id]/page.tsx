/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import styled from "@emotion/styled";
import RevoteReasonBox from "@/components/RevoteReasonBox";
import font from "../../../../../../../packages/ui/fonts";

export default function RevoteDetailPage() {
  return (
    <StyledRevoteReason>
      <p css={font.D2}>접수된 신고 사유 조회</p>
      <RevoteReasonBox />;
    </StyledRevoteReason>
  );
}

const StyledRevoteReason = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
  width: 100%;
`;
