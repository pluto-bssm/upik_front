"use client";
import React from "react";
import styled from "@emotion/styled";
import { User, Calendar, Hash } from "lucide-react";
import font from "../../../../packages/ui/fonts";
import color from "../../../../packages/ui/colors";
import { useRouter } from "next/navigation";

interface RecordCardProps {
  id: string;
  user: string;
  date: string;
  code: string;
}

const RecordCard: React.FC<RecordCardProps> = ({ id, user, date, code }) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/admin/report/${id}`)}>
      <CardHeader>{id}</CardHeader>
      <InfoRow>
        <User size={16} /> <InfoText>{user}</InfoText>
      </InfoRow>
      <InfoRow>
        <Calendar size={16} /> <InfoText>{date}</InfoText>
      </InfoRow>
      <InfoRow>
        <Hash size={16} /> <InfoText>{code}</InfoText>
      </InfoRow>
    </CardContainer>
  );
};

export default RecordCard;

const CardContainer = styled.div`
  background-color: ${color.white};
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.h3`
  font: ${font.H1};
  margin: 0 0 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: ${color.gray["700"]};
`;

const InfoText = styled.span`
  ${font.H4};
`;
