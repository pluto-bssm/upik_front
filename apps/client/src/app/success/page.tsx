"use client";
import React from "react";
import Image from "next/image";
import check from "@/app/images/check.svg";
import { useRouter } from "next/navigation";
import { Wrapper, Container, Message, Button } from "../style/End";
import { useSearchParams } from "next/navigation";


type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

import { useMutation } from '@apollo/client';
import {POST_VOTE} from "../mutations"

// mutation 정의 (variables 선언 포함)


export default function Endvote() {
  const searchParams = useSearchParams();


  const [post_vote, { loading, error }] = useMutation(POST_VOTE);

  const router = useRouter();
  const category = searchParams.get("category") as string || "";  // 변수명 맞춤
  const title = searchParams.get("title") as string || "";
  const optionsss = searchParams.get("options");


  let parsedOptions: string[] = [];

  if (typeof optionsss === "string") {
    try {
      parsedOptions = JSON.parse(optionsss);
    } catch (e) {
      console.error("JSON parse error:", e);
    }
  } else if (Array.isArray(optionsss)) {
    parsedOptions = optionsss;
  }
  
  console.log(parsedOptions,typeof(parsedOptions))

  async function gomain() {
    try {
      await post_vote({
        variables: {
          title,
          category,
          options: parsedOptions,
        }
      });
      router.push("/");
    } catch (err) {
      console.error(err);
    }
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
