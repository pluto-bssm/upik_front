"use client";
import VoteResCheck from "@/components/VoteResCheck";
import { Calendar, ThumbsUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  CardContainer,
  CardGroup,
  Title,
  DateWrapper,
  ContentText,
  ButtonGroup,
  HelpButton,
  VoteButton,
} from "@/app/style/ContentBox";

interface PostProps {
  post: {
    id: string;
    title: string;
    voteId:string;
    created_at: string;
    like: number;
    content: string;
    category: string; 
  };
}

export default function ContentBox({ post }: PostProps) {
  const [helpCount, setHelpCount] = useState(post.like);
  const [isHelped, setIsHelped] = useState(false);
  const [modalMode, setModalMode] = useState<"none"| "vote">("none");

  const closeModal = () => {
    console.log("Modal 닫기");
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

  const handleVoteClick = () => {
    console.log("Modal Mode 변경: vote");
    setModalMode("vote");
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
          <HelpButton onClick={handleHelpClick} $isHelped={isHelped}>
            <ThumbsUp size={16} />
            도움이 되었어요 | {helpCount}명
          </HelpButton>
          <VoteButton onClick={handleVoteClick}>
            투표 결과 확인하기 <ArrowRight size={16} />
          </VoteButton>
        </ButtonGroup>
        {modalMode === "vote" && (
          <>
            {console.log("VoteResCheck 렌더링: voteId =", post.voteId)}
            <VoteResCheck voteId={post.voteId} onClose={closeModal} />
          </>
        )}
      </CardGroup>
    </CardContainer>
  );
}