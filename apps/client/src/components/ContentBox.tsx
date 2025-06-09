"use client";
import ReportAlert from "@/components/ReportAlert";
import SirenAlert from "@/components/SirenAlert";
import VoteResCheck from "@/components/VoteResCheck";
import { Calendar, ThumbsUp, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PostProps {
  post: {
    title: string;
    date: string;
    likes: number;
    content: string;
  };
}

export default function ContentCard({ post }: PostProps) {
  const [helpCount, setHelpCount] = useState(0);
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
    <div className="bg-white rounded-lg p-6 w-[866px] relative">
      <h2 className="text-xl font-semibold text-black mb-3">{post.title}</h2>
      <div className="flex items-center text-sm text-gray-300 mb-4 gap-2">
        <Calendar size={14} />
        <span>{post.date} 제작</span>
      </div>
      <p className="text-gray-800 text-base mb-6 leading-relaxed">{post.content}</p>
      <div className="flex gap-3">
        <button
          onClick={() => setModalMode("report")}
          className="border border-[#0158DE] text-[#0158DE] rounded-full px-4 py-2 text-sm hover:bg-[#0158DE] hover:text-white transition">
          신고하기
        </button>
        <button
          onClick={handleHelpClick}
          className={`border border-[#0158DE] rounded-full px-4 py-2 text-sm flex items-center gap-1 transition ${
            isHelped 
              ? 'bg-[#0158DE] text-white' 
              : 'text-[#0158DE] hover:bg-[#0158DE] hover:text-white'
          }`}>
          <ThumbsUp size={16} />
          도움이 되었어요 | {helpCount}명
        </button>
        <button className="bg-[#0158DE] text-white rounded-full px-4 py-2 text-sm flex items-center gap-1 ml-auto"
        onClick={()=> setModalMode("vote")}>
          투표 결과 확인하기 <ArrowRight size={16} />
        </button>
      </div>
      {modalMode === "report" && (
        <ReportAlert onClose={closeModal} onSubmit={handleReportBtn} />
      )}
      {modalMode === "siren" && (
        <SirenAlert onClose={closeModal} onBack={handleBackToReport} />
      )}
      {modalMode === "vote" && (
        <VoteResCheck onClose={closeModal} />
      )}
      
    </div>
  );
}
