// components/sidebar.ts
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

// DOM에 전달되지 않아야 할 prop들 필터링
const filterBooleanProps = (invalidProps: string[]) => (prop: string) => !invalidProps.includes(prop);

export const SidebarContainer = styled.div.withConfig({
  shouldForwardProp: filterBooleanProps(["rotated"]),
})<{ rotated: boolean }>`
  background-color: #ffffff;
  width: ${({ rotated }) => (rotated ? "30vh" : "0vh")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vh;
  padding: 0 2vh;
`;

export const LogoImage = styled(Image).withConfig({
  shouldForwardProp: filterBooleanProps(["visible"]),
})<{ visible: boolean }>`
  width: 10vh;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const ToggleIcon = styled(Image).withConfig({
  shouldForwardProp: filterBooleanProps(["rotated"]),
})<{ rotated: boolean }>`
  width: 2vh;
  transition: transform 0.3s ease;
  transform: rotate(${({ rotated }) => (rotated ? "90deg" : "0deg")});
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
`;

export const Content = styled.div.withConfig({
  shouldForwardProp: filterBooleanProps(["visible"]),
})<{ visible: boolean }>`
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 5vh;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const Section = styled.div`
  margin-bottom: 3vh;
`;

export const Title = styled.p.withConfig({
  shouldForwardProp: filterBooleanProps(["active"]),
})<{ active?: boolean }>`
  font-family: 'P_Regular';
  font-size: 2vh;
  color: ${({ active }) => (active ? "#0D0D0D" : "#737373")};
  cursor: pointer;
`;

export const SubLink = styled(Link)`
  text-decoration: none;
  color: #737373;

  &:hover {
    color: #0158DE;
  }
`;

export const SubText = styled.p`
  font-family: 'P_Regular';
  font-size: 1.5vh;
`;



export const Userdiv = styled.div.withConfig({
    shouldForwardProp: filterBooleanProps(["visible"]),
  })<{ visible: boolean }>`
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: row;
    align-items: center;

    gap: 1vh;
    padding: 5vh;

    font-family: 'P_Regular';
    font-size: 1.8vh;
    color : #737373;


  `;


  export const UserLink = styled(Link)`
  text-decoration: none;
  color: #737373;

  &:hover {
    color: #0158DE;
  }
`;