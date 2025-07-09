import { ChartNoAxesColumn, Send } from "lucide-react";
import VoteTable from "@/components/VoteTable";
import VoteResult from "@/components/VoteResult";
import { useState } from "react";
import styled from "styled-components";

export default function VoteResCheck({ onClose }: { onClose: () => void }) {
  const [modalMode1, setModalMode1] = useState<"none" | "vote_res" >("none");

  const ques = {
    vtype: "재미 질문",
    voteTitle:
      "학교에서 가장가장가장가장가장 매우매우매우매운 무서운 존재는?",
    voteRes: [
      { text: "까먹고 기숙사 소등 안 한 날 마주친 사감선생님", percent: 70 },
      { text: "깃 충돌", percent: 10, selected: true },
      { text: "원래 되다가 갑자기 안됨", percent: 20 },
    ],
    date: "2025-05-23",
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
            {ques.voteRes.map((res, idx) => (
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

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 770px;
  height: 596px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.25rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1.5rem;
`;

const VoteType = styled.h4`
  color: #0158DE;
  font-size: 1rem;
`;

const VoteTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: black;
  margin-bottom: 1rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #9CA3AF;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const VoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RequestButton = styled.button`
  width: 286px;
  height: 44px;
  background-color: #2563EB;
  color: white;
  border-radius: 100px;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

