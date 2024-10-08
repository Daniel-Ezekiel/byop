import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className='max-h-[10dvh] w-full flex justify-center items-center lg:p-4'>
      <nav className='w-full max-w-[122.5rem]  flex space-between'>
        <Link
          href={"/"}
          className='text-3xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent'
        >
          byop.
        </Link>

        <Button
          variant='ghost'
          className='ml-auto active:scale-95 transition-all ease-in-out duration-500'
        >
          {true ? <SunIcon /> : <MoonIcon />}
        </Button>
      </nav>
    </header>
  );
}
