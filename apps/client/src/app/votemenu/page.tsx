"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  VoteOption,
  RadioButton,
  OptionLabel,
  SubmitButton,
} from "../style/Votemenu";


export default function Votemenu(options : any) {


  const navigate = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setSelected((prev) => (prev === index ? null : index));
  };

  const voting = () => {
    if (selected !== null) {
      setSelected(null);
      navigate.push("/tailvote");
    } else {
      alert("투표하고 진행해주세요");
    }
  };

  return (
    <Container>
      {options.map((item : any, index : any ) => (
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
          <OptionLabel>{item}</OptionLabel>
        </VoteOption>
      ))}

      <SubmitButton $active={selected !== null} onClick={voting}>
        투표 결과 제출하기
      </SubmitButton>
    </Container>
  );
}
