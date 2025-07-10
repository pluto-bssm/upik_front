import styled from "styled-components";
import color from "@/app/style/color";

export const CardContainer = styled.div`
  background-color: ${color.white};
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  height:249px;
  position: relative;
  margin-left:-90px;
`;

export const CardGroup = styled.div`
  margin: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: ${color.gray800};
  margin-top: 10px;
  margin-left:14px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${color.gray300};
  margin-bottom: 1rem;
  margin-top: 17px;
  margin-left:14px;
`;

export const ContentText = styled.p`
  color: ${color.gray800};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.625;
  margin-left:14px;
  margin-top: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top:55px;
  margin-left:14px;
`;

export const ReportButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  border: none;
  background: none;
  margin-left:-20px;
`;

export const HelpButton = styled.button<{ $isHelped: boolean }>`
  border: 1px solid  ${color.main};
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s;
  color: ${(props) => (props.$isHelped ? ` ${color.white}` : `${color.main}`)};
  background-color: ${(props) => (props.$isHelped ? ` ${color.main}` : "transparent")};
  &:hover {
    background-color:  ${color.main};
    color:  ${color.white};
  }
  margin-left:-7px;
`;

export const VoteButton = styled.button`
  background-color: #0158de;
  border: 1px solid ${color.main};
  color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
`;

export const LogoImage = styled.img`
  width: 24px;
  height: auto;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;