"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.svg";
import bar from "@/app/images/bar.svg";
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
} from "../style/sidebar";

export default function Sidebar() {
  const [rotated, setRotated] = useState(false);
  const [voteClick, setVoteClick] = useState(false);

  return (
    <SidebarContainer rotated={rotated}>
      <Header>
        <Link href="/">
          <LogoImage src={logo} alt="Logo" visible={rotated} />
        </Link>
        <ToggleButton onClick={() => setRotated(!rotated)}>
          <ToggleIcon src={bar} alt="Toggle" rotated={rotated} />
        </ToggleButton>
      </Header>

      <Content visible={rotated}>
        <div style={{ marginTop: "5vh", display: "flex", flexDirection: "column" }}>
          <Section>
            <Title active={voteClick} onClick={() => setVoteClick(!voteClick)}>
              투표
            </Title>
            {voteClick && (
              <div style={{ marginTop: "0.5vh", display: "flex", flexDirection: "column", gap: "1vh" }}>
                <SubLink href="/vote">
                  <SubText>투표 하기</SubText>
                </SubLink>
                <SubLink href="/votemake">
                  <SubText>투표 만들기</SubText>
                </SubLink>
              </div>
            )}
          </Section>

          <Section>
            <Title>가이드</Title>
          </Section>

          <Section>
            <Title>상점</Title>
          </Section>
        </div>
      </Content>
    </SidebarContainer>
  );
}
