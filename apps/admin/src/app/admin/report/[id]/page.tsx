/** @jsxImportSource @emotion/react */
"use client";
import { toast } from "react-toastify";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import font from "@/style/font";
import { useMutation } from "@apollo/client";
import { REJECT_REPORT, ACCEPT_GUIDE_REPORT } from "@/apis/mutations/mutation";
import ReportBox from "@/components/ReportBox";

const GET_REPORT_BY_TARGET = gql`
  query GetReportByTarget($targetId: ID!) {
    report {
      getReportsByTarget(targetId: $targetId) {
        reason
        targetId
        targetType
        userId
      }
    }
  }
`;

export default function ReportDetailPage() {
    const params = useParams();
    const targetId =  params?.id as string;

    const [rejectReport] = useMutation(REJECT_REPORT);
    const [acceptGuideReport] = useMutation(ACCEPT_GUIDE_REPORT);
    const { data, loading, error } = useQuery(GET_REPORT_BY_TARGET, {
        variables: { targetId: targetId ?? "" },
        skip: !targetId,
    });
    const report = data?.report?.getReportsByTarget?.[0];
    if (!report) return <p> 해당 ID의 신고가 없습니다.</p>;const handleIgnore = async () => {
        try {
            await rejectReport({
                variables: {
                    questionId: report.targetId,
                    userId: report.userId,
                },
            });
            toast.success("허위 신고로 처리했어요!");
        } catch (e) {
            toast.error("허위 신고 처리 실패!");
        }
    };

    const handleResolve = async () => {
        try {
            await acceptGuideReport({
                variables: {
                    questionId: report.targetId,
                    userId: report.userId,
                },
            });
            toast.success("신고를 수락했어요!");
        } catch (e) {
            toast.error("신고 수락에 실패했어요");
        }
    };
    if (!targetId) return <p>targetId가 없습니다.</p>;
    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    const user = {
        full_id: report.userId,
        studentId: report.userId?.slice(0, 4) ?? "0000",
        name: "유저",
        role: report.targetType,
        reportCount: 1,
    };

    return (
        <StyledReport>
            <p css={font.D2}>신고 상세 조회</p>
            <ReportBox
                user={user}
                reason={report.reason}
                onIgnore={handleIgnore}
                onResolve={handleResolve}
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