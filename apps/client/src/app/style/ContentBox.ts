import styled from "styled-components";
import color from "@/app/style/color";


export const CardContainer = styled.div`
  background-color: ${color.white};
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 866px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${color.gray800};
  margin-bottom: 0.75rem;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${color.gray300};
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

export const ContentText = styled.p`
  color: ${color.gray800};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.625;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ReportButton = styled.button`
  border: 1px solid ${color.main};
  color: ${color.main};
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover {
    background-color: ${color.main};
    color: ${color.white};
  }
`;

export const HelpButton = styled.button<{ isHelped: boolean }>`
  border: 1px solid  ${color.main};
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s;
  color: ${(props) => (props.isHelped ? " ${color.white}" : "${color.main}")};
  background-color: ${(props) => (props.isHelped ? " ${color.main}" : "transparent")};
  &:hover {
    background-color:  ${color.main};
    color:  ${color.white};
  }
`;

export const VoteButton = styled.button`
  background-color: #0158de;
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
`;
