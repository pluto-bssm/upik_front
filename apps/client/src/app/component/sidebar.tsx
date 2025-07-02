"use client";

import { useState ,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.svg";
import bar from "@/app/images/bar.svg";
import user from "@/app/images/user.svg";

import {
  SidebarContainer,
  Header,
  LogoImage,
  ToggleButton,
  ToggleIcon,
  Content,
  Section,
  Title,
  SubLink,
  SubText,
  Userdiv,
  UserLink
} from "../style/sidebar";

const VoteSection = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <Section>
    <Title active={isOpen} onClick={toggle}>투표</Title>
    {isOpen && (
      <div style={{ marginTop: "0.5vh", display: "flex", flexDirection: "column", gap: "1vh" }}>
        <SubLink href="/vote"><SubText>투표 하기</SubText></SubLink>
        <SubLink href="/votemake"><SubText>투표 만들기</SubText></SubLink>
      </div>
    )}
  </Section>
);

export default function Sidebar() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [rotated, setRotated] = useState(false);
  const [voteOpen, setVoteOpen] = useState(false);

  const toggleSidebar = () => setRotated((prev) => !prev);
  const toggleVote = () => setVoteOpen((prev) => !prev);
  const username = "플루토";

  if (!mounted) return null;

  return (
    <SidebarContainer rotated={rotated}>
      <Header>
        <Link href="/">
          <LogoImage src={logo} alt="Logo" visible={rotated} />
        </Link>
        <ToggleButton onClick={toggleSidebar}>
          <ToggleIcon src={bar} alt="Toggle" rotated={rotated} />
        </ToggleButton>
      </Header>

      <Content visible={rotated}>
        <div style={{ marginTop: "5vh", display: "flex", flexDirection: "column" }}>
          <VoteSection isOpen={voteOpen} toggle={toggleVote} />
          <Section><Title>가이드</Title></Section>
          <Section><Title>상점</Title></Section>
        </div>
      </Content>

      <Userdiv visible={rotated}>
        <Image src={user} alt="유저" width={24} height={24} />
        <UserLink href="/mypage"><p>{username}님</p></UserLink>
      </Userdiv>
    </SidebarContainer>
  );
}
