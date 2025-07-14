/** @jsxImportSource @emotion/react */
"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaUser, FaIdBadge, FaCamera, FaFlag } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import color from "@/style/color";

interface ReportMetaBoxProps {
  user: {
    studentId: string;
    name: string;
    role: string;
    reportCount: number;
  };
  reason: string;
  onIgnore: () => void;
  onResolve: () => void;
}

const ReportBox = ({
  user,
  reason,
  onIgnore,
  onResolve,
}: ReportMetaBoxProps) => {
  return (
    <StyledMetaWrapper>
      <StyledReportBox>
        <StyledSection>
          <StyledSectionTitle>유저 정보</StyledSectionTitle>
          <StyledInfoRow>
            <FaUser size={14} /> {user.studentId} {user.name}
          </StyledInfoRow>
          <StyledInfoRow>
            <FaIdBadge size={14} /> {user.name}
          </StyledInfoRow>
          <StyledInfoRow>
            <FaCamera size={14} /> {user.role}
          </StyledInfoRow>
          <StyledInfoRow>
            <FaFlag size={14} /> {user.reportCount}회
          </StyledInfoRow>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>신고 사유</StyledSectionTitle>
          <StyledReasonText>{reason}</StyledReasonText>
        </StyledSection>
      </StyledReportBox>

      <StyledButtonGroup>
        <StyledGhostButton>허위신고</StyledGhostButton>
        <StyledPrimaryButton>
          해결 <MdCheck size={20} />
        </StyledPrimaryButton>
      </StyledButtonGroup>
    </StyledMetaWrapper>
  );
};

export default ReportBox;

const StyledMetaWrapper = styled.div`
  background-color: #eaf2ff;
  margin-top: 64px;
  border-radius: 20px;
  width: 90%;
`;

const StyledReportBox = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledSectionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #777;
`;

const StyledReasonText = styled.p`
  font-size: 15px;
  color: #555;
  white-space: pre-line;
`;

const StyledButtonGroup = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const StyledGhostButton = styled.button`
  padding: 12px 24px;
  font-size: 15px;
  border: 2px solid ${color.main};
  color: ${color.main};
  border-radius: 999px;
  cursor: pointer;
`;

const StyledPrimaryButton = styled.button`
  padding: 12px 24px;
  font-size: 15px;
  border: none;
  background-color: ${color.main};
  color: white;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
