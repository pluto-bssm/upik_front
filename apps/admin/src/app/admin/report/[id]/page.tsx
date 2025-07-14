/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import styled from "@emotion/styled";
import font from "../../../../../../../packages/ui/fonts";
import ReportBox from "@/components/ReportBox";

export default function ReportPage() {
  const mockUser = {
    studentId: "2108",
    name: "박가은",
    role: "재학생",
    reportCount: 0,
  };

  const mockReason = `나는, 서정현이 싫다.
하지만 나는 또한 그와 깊은 대화를 나눴다.
그러하다.`;

  return (
    <StyledReport>
      <p css={font.D2}>접수된 신고 기록 조회</p>
      <ReportBox
        user={mockUser}
        reason={mockReason}
        onIgnore={() => alert("허위신고 처리")}
        onResolve={() => alert("해결 처리")}
      />
    </StyledReport>
  );
}

const StyledReport = styled.div`
  padding-left: 52px;
  font-family: Arial, sans-serif;
  gap: 100px;
  width: 100%;
`;
