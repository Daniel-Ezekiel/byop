"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(openMenu);

  const handleMenuClick = () => {
    menuRef.current = !menuRef.current;
    setOpenMenu(!openMenu);
  };

  return (
    <header className='max-h-[10dvh] w-full flex items-center lg:p-4'>
      <nav className='relative w-full max-w-[122.5rem] mx-auto flex items-center space-between'>
        <Link
          href={"/"}
          className='block text-4xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent z-50'
        >
          byop.
        </Link>

        <div className='ml-auto mr-0 items-center justify-center gap-10 lg:flex'>
          <ul
            className={`fixed top-0 h-[100dvh] w-[100dvw] flex flex-col p-8 bg-black/65 backdrop-blur-[0.25rem] items-start justify-center gap-6 transition-all ease-in-out duration-5000 ${
              openMenu ? "right-0" : "-right-[100dvw]"
            } lg:static lg:flex-row lg:items-center lg:h-fit lg:w-fit lg:bg-transparent lg:backdrop-blur-0 lg:p-0`}
          >
            <li>
              <Link
                href={"/#features"}
                className='font-[family-name:var(--font-general-sans-semibold)] hover:underline'
              >
                <span className='font-[family-name:var(--font-general-sans-bold)] pr-2 bg-gradient-linear-200 bg-clip-text text-transparent'>
                  00.
                </span>
                Features
              </Link>
            </li>

            <li>
              <Link
                href={"/#process"}
                className='font-[family-name:var(--font-general-sans-semibold)] hover:underline'
              >
                <span className='font-[family-name:var(--font-general-sans-bold)] pr-2 bg-gradient-linear-200 bg-clip-text text-transparent'>
                  01.
                </span>
                Process
              </Link>
            </li>

            <li>
              <Link
                href={"/#who-can-use"}
                className='font-[family-name:var(--font-general-sans-semibold)] hover:underline'
              >
                <span className='font-[family-name:var(--font-general-sans-bold)] pr-2 bg-gradient-linear-200 bg-clip-text text-transparent'>
                  02.
                </span>
                Who can use?
              </Link>
            </li>

            <div className='hidden h-8 w-[0.1rem] bg-white'></div>

            <div className='mt-5 flex items-center justify-center gap-4 font-[family-name:var(--font-general-sans-semibold)] hover:underline lg:mt-0'>
              <Link
                href='/signin'
                className={`${buttonVariants({
                  variant: "outline",
                })} px-8 text-base border border-sky-600 text-gray-200 font-[family-name:var(--font-general-sans-bold)] active:scale-95 transition-all ease-in-out duration-500`}
              >
                Log in
              </Link>

              <Link
                href='/signup'
                className={`${buttonVariants({
                  variant: "outline",
                })} px-8 text-base bg-gradient-linear-300 border text-gray-200 font-[family-name:var(--font-general-sans-bold)] active:scale-95 transition-all ease-in-out duration-500`}
              >
                Sign up
              </Link>
            </div>
          </ul>
        </div>

        <Button
          variant='ghost'
          className='block ml-auto z-50 lg:hidden lg:z-0'
          onClick={handleMenuClick}
        >
          {!openMenu ? <MenuIcon /> : <XIcon />}
        </Button>
      </nav>
    </header>
  );
}
