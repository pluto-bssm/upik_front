import { ChartNoAxesColumn, Send } from "lucide-react";
import VoteTable from "@/components/VoteTable";
import VoteResult from "@/components/VoteResult";
import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Header,
  VoteType,
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

  const { data, loading, error } = useQuery(VOTE_CHART);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러: {error.message}</div>;

  // voteId로 투표 데이터 찾기
  const vote: Vote | undefined = data?.vote?.getAllVotes?.find((v: Vote) => v.id === voteId);

  if (!vote) return <div>해당 투표 데이터가 없습니다.</div>;

  const ques = {
    vtype: vote.type,
    voteTitle: vote.title,
    voteRes: vote.options.map((option: VoteOption) => ({
      text: option.content,
      percent: option.percentage,
      selected: option.selected,
    })),
    date: vote.date,
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div>
          <Header>
            <ChartNoAxesColumn size={36} />
            투표 결과 보기
          </Header>

          <VoteType>{ques.vtype}</VoteType>
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

