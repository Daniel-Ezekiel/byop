"use client";
import { Button } from "@/components/ui/button";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  BriefcaseIcon,
  FolderOpenDotIcon,
  IdCardIcon,
  LogOutIcon,
  University,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

function DashboardSidebar() {
  const { userId } = useParams();

  return (
    <aside className='fixed top-[4.56rem] left-0 min-h-[calc(100%-5rem)] w-[18rem] bg-black border-r pb-4 hidden flex-col shadow-2xl xl:flex'>
      <ul>
        <li>
          <Link
            href={`/${userId}/dashboard`}
            className='p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))]'
          >
            <DashboardIcon />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href={`/${userId}/personal-information`}
            className='p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))]'
          >
            <IdCardIcon />
            Personal Information
          </Link>
        </li>
        <li>
          <Link
            href={`/${userId}/projects`}
            className='p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))]'
          >
            <FolderOpenDotIcon />
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={`/${userId}/work-experience`}
            className='p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))]'
          >
            <BriefcaseIcon />
            Work Experience
          </Link>
        </li>
        <li>
          <Link
            href={`/${userId}/education-and-certifications`}
            className='p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))]'
          >
            <University />
            Education/Certifications
          </Link>
        </li>
      </ul>

      <div className='mt-auto'>
        <Button
          variant='outline'
          className='p-4 px-8 flex items-center justify-start gap-4 border-none hover:bg-[hsl(var(--accent))]'
        >
          <LogOutIcon />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
