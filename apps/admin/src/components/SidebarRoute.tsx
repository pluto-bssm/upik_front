"use client";

import styled from "@emotion/styled";
import chart from "/vote.png";
import dashboard from "/dashboard.png";
import store from "/store.png";
import guide from "/guide.png";
import admin from "/admin.png";
import upik from "/upik.png";
import { useRouter } from "next/navigation";
import font from "../../../../packages/ui/fonts";
import color from "../../../../packages/ui/colors";

const SidebarRoute = () => {
  const router = useRouter();
  return (
    <StyledLayout>
      <img src="/upik.png" alt="Upik" onClick={() => router.push("/")} />
      <StyledSidebar>
        <SideSortButton onClick={() => router.push("/vote")}>
          <img src="/vote.png" alt="투표" width={24} height={24} />
          <StyledP>투표</StyledP>
        </SideSortButton>
        <SideSortButton onClick={() => router.push("/dashboard")}>
          <img src="/dashboard.png" alt="대시보드" width={24} height={24} />
          <StyledP>대시보드</StyledP>
        </SideSortButton>
        <SideSortButton onClick={() => router.push("/guide")}>
          <img src="/guide.png" alt="가이드" width={24} height={24} />
          <StyledP>가이드</StyledP>
        </SideSortButton>
        <SideSortButton onClick={() => router.push("/store")}>
          <img src="/store.png" alt="상점" width={24} height={24} />
          <StyledP>상점</StyledP>
        </SideSortButton>
        <SideSortButton onClick={() => router.push("/admin")}>
          <img src="/admin.png" alt="어드민" width={24} height={24} />
          <StyledP>어드민</StyledP>
        </SideSortButton>
      </StyledSidebar>
    </StyledLayout>
  );
};

export default SidebarRoute;

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SideSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StyledP = styled.p`
  font: ${font.H4};
  color: ${color.white};
  margin: 0;
`;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${color.gray["700"]};
  width: 242px;
  height: 100%;
  padding: 40.5px 35px;
  gap: 58px;
  position: fixed;
  top: 0;
  left: 0;
`;
