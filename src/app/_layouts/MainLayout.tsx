import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import DashboardNav from "../[authUser]/dashboard/_components/DashboardNav";
import DashboardSidebar from "../[authUser]/dashboard/_components/DashboardSidebar";

export default function MainLayout({
  children,
  isDashboardPage = false,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
  isDashboardPage?: boolean;
}) {
  return (
    <>
      {isDashboardPage ? <DashboardNav /> : <Header />}

      {isDashboardPage && (
        <div className='xl:ml-[18rem]'>
          <DashboardSidebar />
          <main className='min-h-[80dvh] px-6 grid justify-items-center gap-16 xl:px-8 '>
            {children}
          </main>
        </div>
      )}

      {!isDashboardPage && (
        <div className='flex flex-col justify-center items-center font-[family-name:var(--font-general-sans-regular)]'>
          <main className='max-w-[90rem] min-h-[80dvh] grid justify-items-center gap-16 xl:w-[75rem] 2xl:w-[90rem]'>
            {children}
          </main>
        </div>
      )}

      <Footer />
    </>
  );
}
