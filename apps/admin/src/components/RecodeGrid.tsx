"use client";
import React from "react";
import styled from "@emotion/styled";
import RecordCard from "@/components/RecordCard";

interface Record {
  id: string;
  user: string;
  date: string;
  code: string;
}

interface RecordGridProps {
  items: Record[];
}

export const RecordGrid: React.FC<RecordGridProps> = ({ items }) => (
  <GridContainer>
    {items.map((item, idx) => (
      <RecordCard key={`${item.id}-${idx}`} {...item} />
    ))}
  </GridContainer>
);

const GridContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 64px;
  height: fit-content;
`;
