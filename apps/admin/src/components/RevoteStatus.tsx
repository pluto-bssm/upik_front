/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import styled from "@emotion/styled";
import { User, Calendar, Hash } from "lucide-react";
import { useRouter } from "next/navigation";
import font from "@/style/font";
import color from "@/style/color";

interface RevoteItem {
  id: string;
  user: string;
  date: string;
  code: string;
}

interface RevoteStatusProps {
  title: string;
  items: RevoteItem[];
}
const RevoteStatus: React.FC<RevoteStatusProps> = ({ title, items }) => {
  const router = useRouter();
  return (
    <RevoteContainer onClick={() => router.push("/admin/revote")}>
      <RevoteHeader
        css={css`
          ${font.H1}
        `}
      >
        {title}
      </RevoteHeader>
      <RevoteList>
        {items.map((item, idx) => (
          <RevoteItemWrapper key={`${item.id}-${idx}`}>
            <RevoteMetaRow>
              <Hash size={16} /> <span>{item.id}</span>
            </RevoteMetaRow>
            <RevoteMetaRow>
              <User size={16} /> <span>{item.user}</span>
            </RevoteMetaRow>
            <RevoteMetaRow>
              <Calendar size={16} /> <span>{item.date}</span>
            </RevoteMetaRow>
            <RevoteMetaRow>
              <Hash size={16} /> <span>{item.code}</span>
            </RevoteMetaRow>
          </RevoteItemWrapper>
        ))}
      </RevoteList>
    </RevoteContainer>
  );
};

export default RevoteStatus;

const RevoteContainer = styled.div`
  background-color: ${color.white};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  gap: 24px;
`;

const RevoteHeader = styled.h2`
  font: ${font.H1};
  margin-bottom: 16px;
`;

const RevoteList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const RevoteItemWrapper = styled.li`
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
`;

const RevoteMetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: ${color.gray700};
  margin-top: 4px;
`;
