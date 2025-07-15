import { Siren, Send } from "lucide-react";

interface Props {
  onClose: () => void;
  onSubmit: () => void;
}

export default function ReportAlert({ onSubmit }: Props) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[770px] h-[359px] p-10 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-4xl font-semibold text-black mb-6">
            <Siren size={28} />
            <span>신고</span>
          </div>
          <label
            htmlFor="report"
            className="block text-xl font-medium text-black mb-2"
          >
            신고 사유
          </label>
          <textarea
            id="report"
            placeholder="신고사유를 최대한 자세하게 작성해주세요."
            className="w-full h-[140px] border border-[#A6A6A6] rounded-md p-3 resize-none text-sm text-black focus:outline-none focus:ring-2"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSubmit}
            className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full flex items-center gap-1 mt-3"
          >
            신고 보내기{" "}
            <span>
              <Send size={18} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
