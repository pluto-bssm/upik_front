"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import {
  Container,
  VoteOption,
  RadioButton,
  OptionLabel,
  SubmitButton,
} from "../style/Votemenu";

import { useMutation } from "@apollo/client";
import { POST_VOTERESUlT } from "../mutations";

export default function Votemenu({
  options,
  voteid,
  votefihishedAt
}: {
  options: any[];
  voteid: string;
  votefihishedAt: string // voteid를 문자열로 전달받음
}) {
  const searchParams = useSearchParams();
  const navigate = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const [postVoteResult] = useMutation(POST_VOTERESUlT);

  const handleChange = (index: number) => {
    setSelected((prev) => (prev === index ? null : index));
  };

  const voting = async () => {
    if (selected !== null) {
      const selectedOption = options[selected]; // 선택된 옵션 가져오기
      try {
        console.log(voteid)
        console.log(selectedOption.id)
        const response = await postVoteResult({
          variables: {
            voteId : voteid, // 전달받은 voteid 사용
            optionId: selectedOption.id, // 선택된 옵션 ID 전달
          },
        });
        console.log("투표 성공:", response.data);
        setSelected(null);
        const query = new URLSearchParams({
          choseoptions : JSON.stringify(response.data),
          fihishedAt : String(votefihishedAt)
        });
        navigate.push(`/tailvote?${query}`);
        
      } catch (error) {
        console.error("투표 실패:", error);
      }
    } else {
      alert("투표하고 진행해주세요");
    }
  };

  if (!Array.isArray(options)) {
    console.warn("Votemenu: options가 배열이 아님", options);
    return <p>옵션이 존재하지 않습니다.</p>;
  }

  return (
    <Container>
      {options.map((item: any, index: number) => (
        <VoteOption
          key={index}
          selected={selected === index}
          onClick={() => handleChange(index)}
        >
          <RadioButton
            type="radio"
            name="vote"
            checked={selected === index}
            onChange={() => handleChange(index)}
          />
          <OptionLabel>{item.content}</OptionLabel>
          <OptionLabel>{item.id}</OptionLabel>
        </VoteOption>
      ))}

      <SubmitButton $active={selected !== null} onClick={voting}>
        투표 결과 제출하기
      </SubmitButton>
    </Container>
  );
}
