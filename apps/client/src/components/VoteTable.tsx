import {
  Container,
  ProgressBar,
  Content,
  Text,
  Percent
} from "@/app/style/VoteTable";

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
