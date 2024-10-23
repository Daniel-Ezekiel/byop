import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";
import React from "react";

function DashboardNav() {
  const computeDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return today.toLocaleDateString("en-GB", options);
  };
  return (
    <header className='max-h-[10dvh] w-full flex items-center lg:p-4'>
      <nav className='relative w-full max-w-[122.5rem] flex items-center space-between lg:grid lg:grid-cols-3'>
        <span className='relative block text-4xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent z-50'>
          byop.{" "}
          <span className='relative -top-4 -left-4 text-sm font-[family-name:var(--font-general-sans-medium)] text-gray-300'>
            Dashboard
          </span>
        </span>

        <div className='hidden mx-auto items-center justify-center gap-10 sm:flex'>
          <span className='text-lg font-[family-name:var(--font-general-sans-semibold)]'>
            {computeDate()}
          </span>
        </div>

        <Button
          variant='ghost'
          className='flex items-center justify-center h-10 w-10 ml-auto p-2 border-2 border-sky-700 rounded-full'
          //   onClick={handleMenuClick}
        >
          <User2Icon />
        </Button>
      </nav>
    </header>
  );
}

export default DashboardNav;
