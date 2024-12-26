import CategoryModal from "@/app/_components/dashboard/CategoryModal";
import MainLayout from "@/app/_layouts/MainLayout";
import ImgBuildPortfolio from "@/assets/build-portfolio.svg";
import Image from "next/image";
import NoDataImg from "@/assets/no-data.svg";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

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

      <section className='w-full grid items-stretch gap-6 md:grid-cols-2'>
        <div className='min-w-[15rem] col-span-full grid grid-cols-[1fr_auto] items-start p-4 border rounded-md bg-slate-900'>
          <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
            Personal Information
          </h2>

          <Link
            href=''
            className='flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
          >
            Add <PlusIcon size={22} />
          </Link>

          <div className='col-span-full my-8 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image
                className='w-36 h-36'
                src={NoDataImg}
                alt='Nothing to see here'
              />
              <p className='w-60 mt-2'>
                You have not added any personal information.
              </p>
            </div>
          </div>
        </div>

        <div className='min-w-[15rem] grid grid-cols-[1fr_auto] items-start p-4 border rounded-md bg-slate-900'>
          <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
            About
          </h2>

          <Link
            href=''
            className='flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
          >
            Add <PlusIcon size={22} />
          </Link>

          <div className='col-span-full my-8 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image
                className='w-36 h-36'
                src={NoDataImg}
                alt='Nothing to see here'
              />
              <p className='w-60 mt-2'>No data about you yet.</p>
            </div>
          </div>
        </div>

        <div className='min-w-[15rem] grid grid-cols-[1fr_auto] items-start p-4 border rounded-md bg-slate-900'>
          <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
            Projects
          </h2>

          <Link
            href=''
            className='flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
          >
            Add <PlusIcon size={22} />
          </Link>

          <div className='col-span-full my-8 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image
                className='w-36 h-36'
                src={NoDataImg}
                alt='Nothing to see here'
              />
              <p className='w-60 mt-2'>Add project to see them here.</p>
            </div>
          </div>
        </div>

        <div className='min-w-[15rem] grid grid-cols-[1fr_auto] items-start p-4 border rounded-md bg-slate-900'>
          <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
            Work Experience
          </h2>

          <Link
            href=''
            className='flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
          >
            Add <PlusIcon size={22} />
          </Link>

          <div className='col-span-full my-8 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image
                className='w-36 h-36'
                src={NoDataImg}
                alt='Nothing to see here'
              />
              <p className='w-60 mt-2'>
                Add your work/volunteering experience.
              </p>
            </div>
          </div>
        </div>

        <div className='min-w-[15rem] grid grid-cols-[1fr_auto] items-start p-4 border rounded-md bg-slate-900'>
          <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
            Education
          </h2>

          <Link
            href=''
            className='flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
          >
            Add <PlusIcon size={22} />
          </Link>

          <div className='col-span-full my-8 flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center text-center'>
              <Image
                className='w-36 h-36'
                src={NoDataImg}
                alt='Nothing to see here'
              />
              <p className='w-60 mt-2'>
                Add your educational background and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CategoryModal isOpen={false} />
    </MainLayout>
  );
}

export default Dashboard;
