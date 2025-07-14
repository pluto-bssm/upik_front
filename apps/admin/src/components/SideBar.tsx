"use client";

import styled from "@emotion/styled";
import color from "../../../../packages/ui/colors";
import SidebarRoute from "@/components/SidebarRoute";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return <SidebarRoute />;
};

export default SideBar;
