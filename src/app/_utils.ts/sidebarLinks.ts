import {
  BriefcaseIcon,
  FolderOpenDotIcon,
  // IdCardIcon,
  InfoIcon,
  LayoutDashboardIcon,
  UniversityIcon,
} from "lucide-react";
import { SidebarLinkProps } from "../_types";

export const sidebarLinks: SidebarLinkProps[] = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboardIcon,
  },
  // {
  //   name: "Personal Information",
  //   href: "personal-information",
  //   icon: IdCardIcon,
  // },
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
    href: "work-experience",
    icon: BriefcaseIcon,
  },
  {
    name: "Education",
    href: "education-and-certification",
    icon: UniversityIcon,
  },
];
