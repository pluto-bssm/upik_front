import React from "react";

import {
  CardContainer,
  Title,
  Meta
}from "@/app/style/MContentBox";

interface Props {
  title: string;
  date: string;
  likes?: number;
}

export default function MContentCard({ title, date, likes }: Props) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Meta>
        오주현 {date}{" "}
        {likes !== undefined && <span>{likes.toString().padStart(3, "0")}</span>}
      </Meta>
    </CardContainer>
  );
}

