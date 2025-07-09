import React from "react";
import styled from "styled-components";
import color from "@/app/style/color";

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

const CardContainer = styled.div`
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
  widht:100%;
  height:68px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size:20px;
  font-color:${color.gray800};
  margin-bottom: 0.1rem;
  margin-top: -6px;
`;

const Meta = styled.div`
  font-size: 0.75rem;
  color: ${color.gray300};
  margin-top: -2px;
`;