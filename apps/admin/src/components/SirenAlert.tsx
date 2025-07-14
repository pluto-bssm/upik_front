import { ArrowLeft } from "lucide-react";

interface Props {
  onClose: () => void;
  onBack: () => void;
}

export default function SirenAlert({ onClose, onBack }: Props) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-[8px] px-10 py-8 w-[600px] h-[253px]">
        <h2 className="text-4xl font-semibold text-black mb-3 ">경고</h2>
        <p className="text-black mb-6 text-lg">
          지속적으로 허위로 신고하는 경우 본인이 불이익을 받을 수 있습니다
        </p>
        <div className="flex justify-center gap-4 pt-10 pl-80">
          <button
            onClick={onClose}
            className="bg-[#0158DE] text-white px-5 py-2 text-lg rounded-full hover:bg-blue-700 rounded-[100px]"
          >
            확인
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-1 border border-blue-600 text-blue-600 px-5 py-2 text-sm rounded-full hover:bg-blue-50 rounded-[100px]"
          >
            <span className="text-lg">
              <ArrowLeft size={18} />
            </span>{" "}
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
