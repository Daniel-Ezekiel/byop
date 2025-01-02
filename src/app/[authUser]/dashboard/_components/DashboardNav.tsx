import { computeDate } from "@/app/_utils.ts/computeDate";
import { Button } from "@/components/ui/button";
import { MenuIcon, User2Icon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function DashboardNav({
  isMenuOpen,
  handleMenuToggle,
}: {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}) {
  return (
    <header className='fixed top-0 left-0 min-h-[4.56rem] max-h-[10dvh] w-full bg-background border-b p-4 flex items-center shadow-2xl lg:p-4'>
      <nav className='relative w-full max-w-[122.5rem] mx-auto flex items-center space-between lg:grid lg:grid-cols-3'>
        <Link
          href='./dashboard'
          className='relative block text-4xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent z-50'
        >
          byop.{" "}
          <span className='relative -top-4 -left-4 text-sm font-[family-name:var(--font-general-sans-medium)] text-gray-300'>
            Dashboard
          </span>
        </Link>

        <div className='hidden mx-auto items-center justify-center gap-10 sm:flex'>
          <span className='text-lg font-[family-name:var(--font-general-sans-semibold)]'>
            {computeDate()}
          </span>
        </div>

        <div className='ml-auto flex items-center gap-3'>
          <Button
            variant='ghost'
            className='flex items-center justify-center h-10 w-10 ml-auto p-2 border-2 border-sky-700 rounded-full'
            //   onClick={handleMenuClick}
          >
            <User2Icon />
          </Button>
          <Button
            variant='ghost'
            className='flex items-center justify-center h-10 w-10 p-2 xl:hidden'
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default DashboardNav;
