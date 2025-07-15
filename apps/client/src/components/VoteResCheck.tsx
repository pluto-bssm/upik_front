import { ChartNoAxesColumn, Send } from "lucide-react";
import VoteTable from "@/components/VoteTable";
import VoteResult from "@/components/VoteResult";
import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Header,
  Container,
  VoteTitle,
  DateContainer,
  VoteList,
  ButtonContainer,
  RequestButton
}from "@/app/style/VoteResCheck";
import { useQuery } from "@apollo/client";
import { VOTE_CHART } from "@/app/api/query";

// 타입 정의
interface VoteOption {
  id: string;
  content: string;
  percentage: number;
  responseCount: number;
  selected?: boolean;
}
interface Vote {
  id: string;
  type?: string;
  title: string;
  options: VoteOption[];
  date?: string;
}

export default function VoteResCheck({ voteId, onClose }: { voteId: string; onClose: () => void }) {
  const [modalMode1, setModalMode1] = useState<"none" | "vote_res" >("none");

  // voteId를 쿼리 변수로 넘김
  const { data, loading, error } = useQuery(VOTE_CHART, {
    variables: { id: voteId },
  });

  if (loading) {
    console.log("로딩중");
    return null;
  }
  if (error) {
    console.error(error);
    return null;
  }

  // getVoteById 결과 구조에 맞게 vote 데이터 추출
  const vote = data?.vote?.getVoteById;

  if (!vote) {
    console.log("해당 투표 데이터가 없습니다.");
    return null;
  }

  const ques = {
    vtype: vote.category, // category를 타입처럼 사용
    voteTitle: vote.title,
    voteRes: vote.options.map((option: any) => ({
      text: option.content,
      percent: option.percentage,
      selected: option.selected,
    })),
    date: vote.finishedAt,
    status: vote.status,
    totalResponses: vote.totalResponses,
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
        <div>
          <Header>
            <ChartNoAxesColumn size={36} />
            투표 결과 보기
          </Header>
          <VoteTitle>{ques.voteTitle}</VoteTitle>
          <DateContainer>
            <span>{ques.date} 투표 마감</span>
          </DateContainer>

          <VoteList>
            {ques.voteRes.map((res: { text: string; percent: number; selected?: boolean }, idx: number) => (
              <VoteTable
                key={idx}
                text={res.text}
                percent={res.percent}
                selected={res.selected}
              />
            ))}
          </VoteList>
        </div>

        <ButtonContainer>
          <RequestButton onClick={() => setModalMode1("vote_res")}> 
            관리자에게 재투표 요청 보내기
            <Send size={18} />
          </RequestButton>
        </ButtonContainer>
        </Container>
      </ModalContent>
      {modalMode1 === "vote_res" && (
        <VoteResult
          onClose={() => {
            setModalMode1("none");
            onClose();
          }}
          onBack={() => setModalMode1("none")}
        />
      )}
    </ModalOverlay>
  );
}

