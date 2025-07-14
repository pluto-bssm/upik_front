import styled from "styled-components";
import color from "@/app/style/color";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  background-color: ${color.back_color};
  min-height: 100vh;
  flex: 1;
  padding: 3.5rem 2.5rem;
  margin-left: 242px;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

export const Section = styled.section`
  background-color: ${color.white};
  width:93%;
  height:88%;
  padding: 1.5rem;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-color:${color.gray800};
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;