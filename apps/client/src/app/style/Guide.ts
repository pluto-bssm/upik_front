import styled from "styled-components";
import color from "@/app/style/color";

export const Container = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  background-color: ${color.back_color};
  min-height: 100vh;
  flex: 1;
  padding: 3.5rem 2.5rem 3.5rem 9.375rem; 
  margin-left: 242px;
  width: 866px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem; 
`;

export const Title = styled.h1`
  font-size: 2.25rem; 
  font-color: ${color.gray800};
  font-weight: bold;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
`;
