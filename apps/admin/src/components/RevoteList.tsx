"use client";
/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import color from "@/style/color";
import font from "@/style/font";

interface RevoteItem {
    id: string;
    title: string;
    date: string;
}

interface RevoteListProps {
  title: string;
  items: RevoteItem[];
}

const RevoteList: React.FC<RevoteListProps> = ({ title, items }) => {
  const router = useRouter();
  return (
    <RevotesContainer>
      <RevotesHeader>{title}</RevotesHeader>
      <RevotesList>
        {items.map((item, idx) => (
          <RevotesItem
            key={`${item.id}-${idx}`}
            onClick={() => router.push("/admin/revote")}
          >
            <RevotesCode>{item.id}</RevotesCode>
            <RevotesMeta>
                {item.date} · {item.title}
            </RevotesMeta>
          </RevotesItem>
        ))}
      </RevotesList>
    </RevotesContainer>
  );
};

export default RevoteList;

const RevotesContainer = styled.div`
  background-color: ${color.white};
  border-radius: 12px;
  padding: 24px;
    width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
    gap:16px;
`;

const RevotesHeader = styled.h2`
  font: ${font.H1};
`;

const RevotesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const RevotesItem = styled.li`
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const RevotesCode = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const RevotesMeta = styled.div`
  font-size: 0.875rem;
  color: ${color.gray800};
  margin-top: 4px;
`;
