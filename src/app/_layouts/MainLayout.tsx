"use client";
import Header from "@/app/_components/global/Header";
import Footer from "@/app/_components/global/Footer";
import DashboardNav from "../[authUser]/dashboard/_components/DashboardNav";
import DashboardSidebar from "../[authUser]/dashboard/_components/DashboardSidebar";
import { useState } from "react";

export default function MainLayout({
  children,
  isDashboardPage = false,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
  isDashboardPage?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {isDashboardPage ? (
        <DashboardNav
          isMenuOpen={isMenuOpen}
          handleMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <Header />
      )}

      {isDashboardPage && (
        <div className='mt-[4.56rem] xl:ml-[18rem]'>
          <DashboardSidebar isMenuOpen={isMenuOpen} />
          <main className='min-h-[80dvh] px-6 grid justify-items-center gap-6 xl:px-8 '>
            {children}
          </main>
        </div>
      )}

      {!isDashboardPage && (
        <div className='p-4 flex flex-col justify-center items-center font-[family-name:var(--font-general-sans-regular)]'>
          <main className='max-w-[90rem] min-h-[80dvh] grid justify-items-center gap-16 xl:w-[75rem] 2xl:w-[90rem]'>
            {children}
          </main>
        </div>
      )}

      <Footer isDashboardPage={isDashboardPage} />
    </>
  );
}
