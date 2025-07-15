"use client";
import React from "react";
import styled from "@emotion/styled";
import RevoteCard from "@/components/RevoteCard";
import { useRouter } from "next/navigation";

interface Revote {
  title: string;
  user: string;
  date: string;
  id: string;
  full_id: string;
  total: number;
}

interface RevoteGridProps {
  items: Revote[];
}

export const RevoteGrid: React.FC<RevoteGridProps> = ({ items }) => (
  <GrtitleContainer>
    {items.map((item, idx) => (
      <RevoteCard key={`${item.title}-${idx}`} {...item} />
    ))}
  </GrtitleContainer>
);

const GrtitleContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 64px;
  height: fit-content;
`;
