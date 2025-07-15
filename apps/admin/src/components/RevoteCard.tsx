"use client";
import React from "react";
import styled from "@emotion/styled";
import { User, Calendar, Hash } from "lucide-react";
import { useRouter } from "next/navigation";
import font from "@/style/font";
import color from "@/style/color";

interface RevoteCardProps {
  title: string;
  user: string;
  date: string;
  full_id: string;
  total: number;
  id: string;
}

const RevoteCard: React.FC<RevoteCardProps> = ({ title, user, date, id,total,full_id}) => {
  const router = useRouter();
  return (
    <CardContainer onClick={() => router.push(`/admin/revote/${full_id}`)}>
      <CardHeader>{title}</CardHeader>
      <InfoRow>
        <User size={16} /> <InfoText>{user}</InfoText>
      </InfoRow>
      <InfoRow>
        <Calendar size={16} /> <InfoText>{date}</InfoText>
      </InfoRow>
      <InfoRow>
        <Hash size={16} /> <InfoText>{id}</InfoText>
      </InfoRow>
    </CardContainer>
  );
};

export default RevoteCard;

const CardContainer = styled.div`
  background-color: ${color.white};
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0 0 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: ${color.gray700};
`;

const InfoText = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 ;
`;

