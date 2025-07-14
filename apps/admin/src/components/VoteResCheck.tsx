import { ChartNoAxesColumn, Send } from "lucide-react";
import VoteTable from "@/components/VoteTable";
import VoteResult from "@/components/VoteResult";
import { useState } from "react";

export default function VoteResCheck({ onClose }: { onClose: () => void }) {
  const [modalMode1, setModalMode1] = useState<"none" | "vote_res">("none");

  const ques = {
    vtype: "재미 질문",
    voteTitle: "학교에서 가장가장가장가장가장 매우매우매우매운 무서운 존재는?",
    voteRes: [
      { text: "까먹고 기숙사 소등 안 한 날 마주친 사감선생님", percent: 12 },
      { text: "깃 충돌", percent: 12, selected: true },
      { text: "원래 되다가 갑자기 안됨", percent: 12 },
    ],
    date: "2025-05-23",
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-[8px] w-[770px] h-[596px] p-10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-4xl font-semibold text-black mb-6">
            <ChartNoAxesColumn size={36} />
            투표 결과 보기
          </div>

          <h4 className="text-[#0158DE] text-base">{ques.vtype}</h4>
          <h2 className="text-[28px] font-medium text-black mb-4">
            {ques.voteTitle}
          </h2>
          <div className="flex items-center text-sm text-gray-400 mb-6 gap-2">
            <span>{ques.date} 투표 마감</span>
          </div>

          <div className="flex flex-col gap-4">
            {ques.voteRes.map((res, idx) => (
              <VoteTable
                key={idx}
                text={res.text}
                percent={res.percent}
                selected={res.selected}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setModalMode1("vote_res")}
            className="w-[286px] h-[44px] bg-blue-600 text-white rounded-[100px] px-5 py-2 flex items-center justify-center gap-2"
          >
            관리자에게 재투표 요청 보내기
            <span>
              <Send size={18} />
            </span>
          </button>
        </div>
      </div>
      {modalMode1 === "vote_res" && (
        <VoteResult
          onClose={() => {
            setModalMode1("none");
            onClose();
          }}
          onBack={() => setModalMode1("none")}
        />
      )}
    </div>
  );
}
