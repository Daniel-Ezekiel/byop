import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type SidebarLinkTypes = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type InputTypes = {
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
};

type InfoCardTypes = {
  cardTitle: string;
  cardContent: string;
};
