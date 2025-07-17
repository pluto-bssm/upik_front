import styled from "styled-components";
import color from "@/app/style/color";

export const CardContainer = styled.div`
  background-color: ${color.gray50};
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
  width: 100%;
  box-sizing: border-box;
  word-break: break-word;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size:20px;
  font-color:${color.gray800};
  margin-bottom: 0.1rem;
  margin-top: -6px;
`;

export const Meta = styled.div`
  font-size: 0.75rem;
  color: ${color.gray300};
  margin-top: 12px;
`;