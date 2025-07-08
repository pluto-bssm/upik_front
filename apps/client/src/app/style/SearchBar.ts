import { Search } from "lucide-react";
import styled from "styled-components";
import color from "@/app/style/color";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 325px;
  height: 44px;
  border-radius: 9999px;
  border: 1px solid ${color.lightmain};
  padding-left: 2.5rem;
  padding-right: 1rem;
  color: ${color.lightmain};
  margin-right: 9rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${color.lightmain};
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${color.lightmain};
`;
