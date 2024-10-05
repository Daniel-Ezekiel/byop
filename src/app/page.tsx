// import Image from "next/image";
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  HandshakeIcon,
  KeyRoundIcon,
  LogInIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  RocketIcon,
  Share2Icon,
  SunIcon,
  TrendingUpIcon,
  UploadIcon,
  ZapIcon,
} from "lucide-react";

export default function Home() {
  const [currProcessNum, setCurrentProcessNum] = useState<number>(1);

  return (
    <div className='flex flex-col justify-center items-center font-[family-name:var(--font-general-sans-regular)] p-4'>
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

      <main className='max-w-[77.5rem] grid place-items-center gap-16'>
        <section className='min-h-[95dvh] flex flex-col items-center justify-center gap-4 text-center sm:max-w-[28rem] md:max-w-[38rem] lg:max-w-[54rem]'>
          <h1 className='text-4xl font-[family-name:var(--font-general-sans-bold)] md:text-5xl lg:text-6xl'>
            Build a modern, responsive{" "}
            <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
              portfolio website in minutes!
            </span>
          </h1>
          <p className='p-2 font-[family-name:var(--font-general-sans-regular)] text-gray-300 md:px-12 md:text-lg lg:px-28'>
            Create and conveniently manage your own portfolio website with
            simplicity and ease in just a few clicks.
          </p>

          <Link
            href='/'
            className={`${buttonVariants({
              variant: "outline",
            })} px-8 py-6 bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] text-base active:scale-95 transition-all ease-in-out duration-500`}
          >
            Get Started
          </Link>
        </section>

        <section className='mb-20 flex flex-col gap-8'>
          <div className='text-center'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'>
              features
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl'>
              Why use byop?
            </p>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <ZapIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                Lightweight and Fast
              </h4>
              <p>
                Built for speed—load times are kept minimal, ensuring a seamless
                user experience.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <MonitorSmartphoneIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                Modern and Responsive
              </h4>
              <p>
                Designed with a modern, mobile-first approach, ensuring your
                portfolio looks great on any device.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <RocketIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                Quick and Easy Setup
              </h4>
              <p>
                Create your portfolio in just a few clicks. No technical
                expertise required.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <TrendingUpIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                Excellent Lighthouse Performance
              </h4>
              <p>
                Optimized for web performance, achieving high scores in Google
                Lighthouse audits for speed, accessibility, and more.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <HandshakeIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                SEO Friendly
              </h4>
              <p>
                Boost your online presence with SEO-optimized portfolio pages,
                helping you rank better in search engines with the right setup.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <KeyRoundIcon className='text-sky-600' />
              </Button>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
                Privacy and Security
              </h4>
              <p>
                Your data is stored securely, and you maintain full control over
                what is shared and displayed.
              </p>
            </div>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-16'>
          <div className='text-center'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'>
              process
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl'>
              how to byop in 3 simple steps?
            </p>
          </div>

          <div className='relative py-8 bg-zinc-900 border border-gray-700 rounded-md max-w-[55rem] lg:px-12'>
            <div className='absolute flex justify-center items-center gap-2 -top-5 left-1/2 right-1/2 sm:gap-4'>
              <Button
                className={`${
                  currProcessNum !== 1
                    ? "bg-white"
                    : "bg-gradient-linear-300 text-white -translate-y-1 transition-transform ease-in-out duration-500"
                } font-[family-name:var(--font-general-sans-semibold)] active:scale-75 transition-all ease-in-out duration-500 sm:text-base sm:py-4 sm:px-8`}
                onClick={() => setCurrentProcessNum(1)}
              >
                <span>01.</span> Initialize
              </Button>
              <Button
                className={`${
                  currProcessNum !== 2
                    ? "bg-white"
                    : "bg-gradient-linear-300 text-white -translate-y-1 transition-transform ease-in-out duration-500"
                } font-[family-name:var(--font-general-sans-semibold)] active:scale-75 transition-all ease-in-out duration-500 sm:text-base sm:py-4 sm:px-8`}
                onClick={() => setCurrentProcessNum(2)}
              >
                <span>02.</span> Upload
              </Button>
              <Button
                className={`${
                  currProcessNum !== 3
                    ? "bg-white"
                    : "bg-gradient-linear-300 text-white -translate-y-1 transition-transform ease-in-out duration-500"
                } font-[family-name:var(--font-general-sans-semibold)] active:scale-75 transition-all ease-in-out duration-500 sm:text-base sm:py-4 sm:px-8`}
                onClick={() => setCurrentProcessNum(3)}
              >
                <span>03.</span> Publish
              </Button>
            </div>

            <div
              className={`${
                currProcessNum !== 1 ? "hidden" : "flex"
              } p-6 py-8 flex-col gap-2`}
            >
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <LogInIcon className='text-sky-600' />
              </Button>
              <h4 className='mt-3 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
                Sign In
              </h4>
              <p>
                The first step is quick and secure. Sign in with your preferred
                method using OAuth, allowing you to authenticate through popular
                platforms like Google or GitHub. This ensures a seamless and
                secure login process without the need to create a new account or
                remember another password. Your identity is verified instantly,
                and you can get started without delay. Plus, you have full
                control over the data shared during authentication, ensuring
                privacy.
              </p>
            </div>

            <div
              className={`${
                currProcessNum !== 2 ? "hidden" : "flex"
              } p-6 py-8 flex-col gap-2`}
            >
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <UploadIcon className='text-sky-600' />
              </Button>
              <h4 className='mt-3 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
                Add your portfolio info
              </h4>
              <p>
                Once signed in, it is time to customize your portfolio! You can
                easily add your personal information, such as your name, contact
                details, and a short bio. You will also have fields to input
                your professional skills, past projects, and relevant
                experience. There is even space to include links to your social
                media profiles, GitHub repositories, or personal blogs. Our
                user-friendly interface allows you to edit and preview your
                content as you go, ensuring everything looks perfect before you
                proceed.
              </p>
            </div>

            <div
              className={`${
                currProcessNum !== 3 ? "hidden" : "flex"
              } p-6 py-8 flex-col gap-2`}
            >
              <Button
                variant={"ghost"}
                className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
              >
                <Share2Icon className='text-sky-600' />
              </Button>
              <h4 className='mt-3 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
                Generate and Share
              </h4>
              <p>
                With your details uploaded, you are just one click away from
                creating your portfolio. The app instantly compiles your
                information into a sleek, modern, and fully responsive one-page
                website. Once generated, you will receive a unique URL that you
                can share with potential employers, clients, or colleagues. The
                portfolio is optimized for mobile and desktop, and you can
                update it anytime by signing back in!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className='text-center flex flex-col justify-center items-center gap-4 py-28 max-w-[28rem]'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'>
              ready to byop?
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl'>
              Build your own stunning, responsive Portfolio with ease today!
            </p>
            <Link
              href='/'
              className={`${buttonVariants({
                variant: "outline",
              })} px-8 text-sm bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] active:scale-95 transition-all ease-in-out duration-500`}
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <footer className='w-full mt-12 border-t pt-4'>
        <p className='text-sm font-[family-name:var(--font-general-sans-regular)] text-center text-gray-300'>
          © 2024{" "}
          <Link
            href={"https://github.com/daniel-ezekiel/byop/"}
            target='_blank'
            className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-bold)] border-b-2 border-b-sky-500 hover:border-none'
          >
            byop.
          </Link>{" "}
          by{" "}
          <Link
            href={"https://danielezekiel.vercel.app"}
            target='_blank'
            className='bg-gradient-linear-300 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] border-b-2 border-b-sky-500 hover:border-none'
          >
            Daniel Ezekiel
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

