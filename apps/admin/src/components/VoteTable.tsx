export default function VoteTable({
  text,
  percent,
}: {
  text: string;
  percent: number;
  selected?: boolean;
}) {
  return (
    <div className="w-[690px] h-[60px] relative bg-[#F1F3FB] rounded-lg">
      <div
        className="absolute top-0 left-0 h-full bg-[#FAFAFA]"
        style={{ width: `${percent}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-6 text-[16px] font-medium z-10 text-lg">
        <span>{text}</span>
        <span className="text-xl font-[#0D0D0D]">{percent}%</span>
      </div>
    </div>
  );
}
