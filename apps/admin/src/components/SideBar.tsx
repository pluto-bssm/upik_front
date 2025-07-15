"use client";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import color from "@/style/color";
import font from "@/style/font";
import {sidebarItems} from "@/constants/sidebarItmes";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
      <StyledSidebar>
        <LogoBox onClick={() => router.push("/")}>
          <img src={"/upik.png"} alt="upik" />
        </LogoBox>
        <Menu>
            {sidebarItems.map(({ name, path, icon: Icon }) => (
                <MenuItem
                    key={path}
                    active={pathname === path}
                    onClick={() => router.push(path)}
                >
                    <Icon size={18} />
                    <span>{name}</span>
                </MenuItem>
            ))}
        </Menu>
      </StyledSidebar>
  );
};

export default SideBar;

const StyledSidebar = styled.aside`
  width: 242px;
  height: 100%;
  background-color: ${color.gray700};
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`;

const LogoBox = styled.div`
  cursor: pointer;
  margin-bottom: 48px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MenuItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${color.white};
  font: ${font.H4};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
`;