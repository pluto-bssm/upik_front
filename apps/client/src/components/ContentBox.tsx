"use client";
import ReportAlert from "@/components/ReportAlert";
import SirenAlert from "@/components/SirenAlert";
import VoteResCheck from "@/components/VoteResCheck";
import Image from "next/image";
import report from "@/app/images/report.svg";
import { Calendar, ThumbsUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import{
  CardContainer,
  CardGroup,
  Title,
  DateWrapper,
  ContentText,
  ButtonGroup,
  ReportButton,
  HelpButton,
  VoteButton,
  LogoImage
} from "@/app/style/ContentBox";

interface PostProps {
  post: {
    title: string;
    created_at: string;
    like: number;
    content: string;
  };
}

export default function ContentBox({ post }: PostProps) {
  const [helpCount, setHelpCount] = useState(post.like);
  const [isHelped, setIsHelped] = useState(false);
  const [modalMode, setModalMode] = useState<"none" | "report" | "siren" | "vote">("none");

  const handleReportBtn = () => {
    setModalMode("siren");
  };

  const handleBackToReport = () => {
    setModalMode("report");
  };

  const closeModal = () => {
    setModalMode("none");
  };

  const handleHelpClick = () => {
    if (isHelped) {
      setHelpCount(helpCount - 1);
    } else {
      setHelpCount(helpCount + 1);
    }
    setIsHelped(!isHelped);
  };

  return (
    <CardContainer>
      <CardGroup>
      <Title>{post.title}</Title>
      <DateWrapper>
        <Calendar size={14} />
        <span>{post.created_at} 제작</span>
      </DateWrapper>
      <ContentText>{post.content}</ContentText>
      <ButtonGroup>
        <ReportButton onClick={() => setModalMode("report")}>
          <LogoImage src={report.src || report} alt="report" />
        </ReportButton>
        <HelpButton onClick={handleHelpClick} $isHelped={isHelped}>
          <ThumbsUp size={16} />
          도움이 되었어요 | {helpCount}명
        </HelpButton>
        <VoteButton onClick={() => setModalMode("vote")}>
          투표 결과 확인하기 <ArrowRight size={16} />
        </VoteButton>
      </ButtonGroup>

      {modalMode === "report" && (
        <ReportAlert onClose={closeModal} onSubmit={handleReportBtn} />
      )}
      {modalMode === "siren" && (
        <SirenAlert onClose={closeModal} onBack={handleBackToReport} />
      )}
      {modalMode === "vote" && (
        <VoteResCheck onClose={closeModal} />
      )}
      </CardGroup>
    </CardContainer>
  );
}


