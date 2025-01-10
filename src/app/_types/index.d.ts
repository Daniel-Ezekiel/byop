import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SidebarLinkProps {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface cardProps {
  index: number;
  icon: JSX.Element;
  type?: "process" | "feature";
  name: string;
  description: string;
  isHidden?: boolean;
  customCSS?: string;
}

interface InputProps {
  type?: string;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  hasCheckbox?: boolean;
  checkboxId?: string;
  checkboxName?: string;
  required?: boolean;
  className?: string;
}

interface sectionHeadingProps {
  title: string;
  tagline: string;
}

interface InfoCardProps {
  className?: string;
  cardTitle: string;
  cardContent: string;
}

interface WorkExperienceCardProps {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  showButtons?: boolean;
  className?: string;
  // onEdit: () => void;
  // onDelete: () => void;
}
