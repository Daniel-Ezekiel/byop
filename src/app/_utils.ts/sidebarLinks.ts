import {
  BriefcaseIcon,
  FolderOpenDotIcon,
  IdCardIcon,
  InfoIcon,
  LayoutDashboardIcon,
  UniversityIcon,
} from "lucide-react";
import { SidebarLinkTypes } from "../_types";

export const sidebarLinks: SidebarLinkTypes[] = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Personal Information",
    href: "personal-information",
    icon: IdCardIcon,
  },
  {
    name: "About",
    href: "about",
    icon: InfoIcon,
  },
  {
    name: "Projects",
    href: "projects",
    icon: FolderOpenDotIcon,
  },
  {
    name: "Experience",
    href: "experience",
    icon: BriefcaseIcon,
  },
  {
    name: "Education",
    href: "education",
    icon: UniversityIcon,
  },
];
