// import Image from "next/image";
"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/_components/Header";
import Footer from "@/_components/Footer";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  HandshakeIcon,
  KeyRoundIcon,
  LogInIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  Share2Icon,
  TrendingUpIcon,
  UploadIcon,
  ZapIcon,
} from "lucide-react";
import SectionHeading from "@/_components/SectionHeading";
import Card from "@/_components/Card";

export default function Home() {
  const [currProcessNum, setCurrentProcessNum] = useState<number>(1);

  const featuresList = [
    {
      icon: <ZapIcon className='text-sky-600' />,
      name: "Lightweight and Fast",
      description:
        "Built for speed—load times are kept minimal, ensuring a seamless user experience.",
    },
    {
      icon: <MonitorSmartphoneIcon className='text-sky-600' />,
      name: "Modern and Responsive",
      description:
        "Designed with a modern, mobile-first approach, ensuring your portfolio looks great on any device.",
    },
    {
      icon: <RocketIcon className='text-sky-600' />,
      name: "Quick and Easy Setup",
      description:
        "Create your portfolio in just a few clicks. No technical expertise required.",
    },
    {
      icon: <TrendingUpIcon className='text-sky-600' />,
      name: "Excellent Lighthouse Performance",
      description:
        "Optimized for web performance, achieving high scores in Google Lighthouse audits for speed, accessibility, and more.",
    },
    {
      icon: <HandshakeIcon className='text-sky-600' />,
      name: "SEO Friendly",
      description:
        "Boost your online presence with SEO-optimized portfolio pages, helping you rank better in search engines with the right setup",
    },
    {
      icon: <KeyRoundIcon className='text-sky-600' />,
      name: "Privacy and Security",
      description:
        "Your data is stored securely, and you maintain full control over what is shared and displayed.",
    },
  ];

  const processList = [
    {
      icon: <LogInIcon className='text-sky-600' />,
      processName: "Sign In",
      processDescription:
        "The first step is quick and secure. Sign in with your preferred method using OAuth, allowing you to authenticate through popular platforms like Google or GitHub. This ensures a seamless and secure login process without the need to create a new account or remember another password. Your identity is verified instantly, and you can get started without delay. Plus, you have full control over the data shared during authentication, ensuring privacy.",
    },
    {
      icon: <UploadIcon className='text-sky-600' />,
      processName: "Add your portfolio info",
      processDescription:
        "Once signed in, it is time to customize your portfolio! You can easily add your personal information, such as your name, contact details, and a short bio. You will also have fields to input your professional skills, past projects, and relevant experience. There is even space to include links to your social media profiles, GitHub repositories, or personal blogs. Our user-friendly interface allows you to edit and preview your content as you go, ensuring everything looks perfect before you proceed.",
    },
    {
      icon: <Share2Icon className='text-sky-600' />,
      processName: "Generate and Share",
      processDescription:
        "With your details uploaded, you are just one click away from creating your portfolio. The app instantly compiles your information into a sleek, modern, and fully responsive one-page website. Once generated, you will receive a unique URL that you can share with potential employers, clients, or colleagues. The portfolio is optimized for mobile and desktop, and you can update it anytime by signing back in!",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center font-[family-name:var(--font-general-sans-regular)]'>
      <Header />

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
            href='/signin'
            className={`${buttonVariants({
              variant: "outline",
            })} px-8 py-6 bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] text-base active:scale-95 transition-all ease-in-out duration-500`}
          >
            Get Started
          </Link>
        </section>

        <section className='mb-20 flex flex-col gap-8'>
          <SectionHeading title='features' tagline='why use byop?' />

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {featuresList.map((feature, i) => (
              <Card
                key={i}
                icon={feature.icon}
                name={feature.name}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-16'>
          <SectionHeading title='process' tagline='how to use byop' />

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

            {processList.map((process, i) => (
              <Card
                key={i}
                icon={process.icon}
                type='process'
                name={process.processName}
                description={process.processDescription}
                isHidden={currProcessNum !== i + 1}
              />
            ))}
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
              href='/signin'
              className={`${buttonVariants({
                variant: "outline",
              })} px-8 text-sm bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] active:scale-95 transition-all ease-in-out duration-500`}
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

