import {MdBarChart, MdDashboard, MdFileOpen, MdStore} from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

export const sidebarItems = [
    {
        name: "투표",
        path: "/vote",
        icon: MdBarChart,
    },
    {
        name: "대시보드",
        path: "/dashboard",
        icon: MdDashboard,
    },
    {
        name: "가이드",
        path: "/guide",
        icon: HiDocumentText,
    },
    {
        name: "상점",
        path: "/store",
        icon: MdStore,
    },
    {
        name: "어드민",
        path: "/admin",
        icon: MdFileOpen,
    },
];