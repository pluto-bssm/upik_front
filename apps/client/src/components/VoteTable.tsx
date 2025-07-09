import styled from "styled-components";

interface VoteTableProps {
  text: string;
  percent: number;
  selected?: boolean;
}

export default function VoteTable({
  text,
  percent,
  selected
}: VoteTableProps) {
  return (
    <Container>
      <ProgressBar percent={percent} />
      <Content>
        <Text>{text}</Text>
        <Percent>{percent}%</Percent>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 690px;
  height: 60px;
  position: relative;
  background-color: #F1F3FB;
  border-radius: 0.5rem;
`;

interface ProgressBarProps {
  percent: number;
}

const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #FAFAFA;
  width: ${props => props.percent}%;
  transition: width 0.3s ease-in-out;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-size: 16px;
  font-weight: 500;
  z-index: 10;
`;

const Text = styled.span`
  font-size: 1.125rem;
`;

const Percent = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: #0D0D0D;
`;
  