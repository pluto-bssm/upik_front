"use client";
/** @jsxImportSource @emotion/react */
import React from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import color from "@/style/color";
import font from "@/style/font";

interface ReportItem {
    id: string;
    user: string;
    code: string;
    targetId: string;
}

interface ReportListProps {
    title: string;
    items: ReportItem[];
}

const ReportList: React.FC<ReportListProps> = ({ title, items }) => {
    const router = useRouter();

    return (
        <ReportsContainer>
            <ReportsHeader>{title}</ReportsHeader>
            <ReportsList>
                {items.map((item, idx) => (
                    <ReportsItem
                        key={`${item.targetId.slice(0, 5)}-${idx}`}
                        onClick={() => router.push("/admin/report")}
                    >
                        <ReportsCode>{item.targetId.slice(0, 5)}</ReportsCode>
                        <ReportsMeta>
                            {item.user} · {item.code}
                        </ReportsMeta>
                    </ReportsItem>
                ))}
            </ReportsList>
        </ReportsContainer>
    );
};

export default ReportList;

const ReportsContainer = styled.div`
  background-color: ${color.white};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const ReportsHeader = styled.h2`
  font: ${font.H1};
`;

const ReportsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ReportsItem = styled.li`
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ReportsCode = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

const ReportsMeta = styled.div`
  font-size: 0.875rem;
  color: ${color.gray800};
  margin-top: 4px;
`;