"use client";
import { sidebarLinks } from "@/app/_utils.ts/sidebarLinks";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

function DashboardSidebar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const { authUser } = useParams();
  const pathname = usePathname();
  const currentPage = pathname.slice(pathname.lastIndexOf("/") + 1);

  return (
    <aside
      className={`fixed top-[4.56rem] ${
        isMenuOpen ? "left-0" : "left-[-100dvh]"
      } h-[calc(100%-4.56rem)] w-[18rem] bg-background flex border-r flex-col shadow-2xl transition-all ease-in-out duration-700 overflow-y-scroll no-scrollbar xl:left-0`}
    >
      <ul>
        {sidebarLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={`/${authUser}/${link.href}`}
              className={`p-4 px-8 flex items-center justify-start gap-4 hover:bg-[hsl(var(--accent))] ${
                currentPage === link.href.toLowerCase()
                  ? "border-l-4 border-sky-600 bg-[hsl(var(--accent))] text-sky-400"
                  : ""
              }`}
            >
              <link.icon />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-auto'>
        <Button
          variant='outline'
          className=' w-full rounded-none p-6 px-8 flex items-center justify-start gap-4 border-none hover:bg-[hsl(var(--accent))] text-base'
        >
          <LogOutIcon />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
