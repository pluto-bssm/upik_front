import styled from "styled-components";
import color from "@/app/style/color";

export const Container = styled.div`
  width: 690px;
  height: 60px;
  position: relative;
  background-color: #F1F3FB;
  border-radius: 0.5rem;
`;

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #FAFAFA;
  width: ${props => props.percent}%;
  transition: width 0.3s ease-in-out;
  border-radius: 0.5rem;
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  z-index: 10;
  width: 100%;
  padding: 0 1.5rem;
`;

export const Text = styled.span`
  font-size: 16px;
  color:${color.gray800};
  margin: 0;
  width: auto;
  height: auto;
  flex: 1;
  text-align: left;
`;

export const Percent = styled.span`
  font-size: 16px;
  margin-right:50px;
  font-weight: 500;
  color:${color.gray800};
  flex-shrink: 0;
`;
  