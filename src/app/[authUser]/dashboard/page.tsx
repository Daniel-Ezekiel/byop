import MainLayout from "@/app/_layouts/MainLayout";
import ImgBuildPortfolio from "@/assets/build-portfolio.svg";
import Image from "next/image";

function Dashboard() {
  return (
    <MainLayout isDashboardPage={true}>
      <section className='w-full py-8'>
        <div className='w-full flex items-center justify-between rounded-xl p-4 py-6 bg-gradient-linear-300 md:px-10 lg:gap-10 lg:px-16 lg:pr-16'>
          <div className='sm:w-1/2'>
            <h1 className='w-[max-content] font-[family-name:var(--font-general-sans-semibold)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              Good morning Daniel!
            </h1>
            <p className='py-3 md:max-w-[26rem] lg:text-lg'>
              Welcome to the dashboard! Here you can manage your portfolio and
              track your information.
              <br />
              <br />
              <span className='font-[family-name:var(--font-general-sans-semibold)] lg:text-xl'>
                Ready, Set, BYOP!
              </span>
            </p>
          </div>

          <Image
            src={ImgBuildPortfolio}
            alt='Build your own portfolio illustration'
            className='hidden sm:block sm:w-60 md:place-self-end lg:w-96'
          />
        </div>
      </section>
    </MainLayout>
  );
}

export default Dashboard;
