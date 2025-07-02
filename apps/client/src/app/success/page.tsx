"use client";
import React from "react";
import Image from "next/image";
import check from "@/app/images/check.svg";
import { useRouter } from "next/navigation";

import { Wrapper, Container, Message, Button } from "../style/End";

export default function Endvote() {
  const router = useRouter();

  function gomain() {
    router.push("/");
  }

  return (
    <Wrapper>
      <Container>
        <Image src={check} alt="checkimg" />

        <Message>성공적으로 투표가 제작되었습니다!</Message>

        <Button onClick={gomain}>메인으로 돌아가기</Button>
      </Container>
    </Wrapper>
  );
}
