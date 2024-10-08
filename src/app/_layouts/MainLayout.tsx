import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) {
  return (
    <div className='flex flex-col justify-center items-center font-[family-name:var(--font-general-sans-regular)]'>
      <Header />

      <main className='max-w-[77.5rem] grid place-items-center gap-16'>
        {children}
      </main>

      <Footer />
    </div>
  );
}
