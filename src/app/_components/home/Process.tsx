"use client";
import { Button } from "@/components/ui/button";
import SectionHeading from "../global/SectionHeading";
import { LogInIcon, Share2Icon, UploadIcon } from "lucide-react";
import Card from "../global/Card";
import { useState } from "react";

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

function Process() {
  const [currProcessNum, setCurrentProcessNum] = useState<number>(1);

  return (
    <section id='process' className='mt-20 flex flex-col gap-16'>
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
  );
}

export default Process;
