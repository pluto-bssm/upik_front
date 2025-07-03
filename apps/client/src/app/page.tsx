import ContentCard from "@/components/ContentBox";
import NavBar from "@/components/NavBar";


const posts = [
  {
    title: "소마고에 대해서...?",
    date: "2025-05-23",
    likes: 170,
    content:
      "부산소프트웨어 마이스터고등학교는 총 64명이 한 학년에 있으며 곽상미선생님이 참 귀여우시다 ㅎㅎ 그리고 짜장이가 참귀엽다 진짜 카와이하다 뽀뽀하고싶다,,ㅠㅠ",
  },
  {
    title: "유근찬쌤 시간에 하면 안되는 행동에 대한 가이드",
    date: "2025-04-20",
    likes: 98,
    content: "1. 대답안하기 2. 자기 3. 묻는말에 대답 못하기",
  },
  {
    title: "매점 사용 가이드",
    date: "2025-03-15",
    likes: 205,
    content: "매점은 7시 이후로는 못씀..2학기에는 달라질수도 있고용~",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#EFF5FF]">
      <NavBar />
      <main className="bg-[#EFF5FF] min-h-screen flex-1 px-10 py-14 ml-[242px] w-[866px] pl-[150px]">
        <h1 className="text-4xl font-bold mb-12">학교생활 가이드</h1>
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <ContentCard key={idx} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
