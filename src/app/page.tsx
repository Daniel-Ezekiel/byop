// import Image from "next/image";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  HandshakeIcon,
  KeyRoundIcon,
  MonitorSmartphoneIcon,
  MoonIcon,
  SunIcon,
  TrendingUpIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className='font-[family-name:var(--font-general-sans-regular)] p-4'>
      <header className='max-h-[10dvh] flex items-center'>
        <nav className='w-full flex space-between'>
          <Link
            href={"/"}
            className='text-2xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent'
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

      <main className='grid place-items-center gap-16'>
        <section className='min-h-[95dvh]  flex flex-col items-center justify-center gap-4 text-center'>
          <h1 className='text-3xl font-[family-name:var(--font-general-sans-bold)]'>
            Build a modern, responsive{" "}
            <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
              portfolio website in minutes!
            </span>
          </h1>
          <p className='p-2 text-sm font-[family-name:var(--font-general-sans-regular)] text-gray-300'>
            Create and conveniently manage your own portfolio website with
            simplicity and ease in just a few clicks.
          </p>

          <Link
            href='/'
            className={`${buttonVariants({
              variant: "outline",
            })} px-8 text-sm bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] active:scale-95 transition-all ease-in-out duration-500`}
          >
            Get Started
          </Link>
        </section>

        <section className='flex flex-col gap-8'>
          <div className='text-center'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent'>
              features
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl'>
              Why use byop?
            </p>
          </div>
          <div className='grid gap-8'>
            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <ZapIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Lightweight and Fast
              </h4>
              <p>
                Built for speed—load times are kept minimal, ensuring a seamless
                user experience.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <MonitorSmartphoneIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Modern and Responsive
              </h4>
              <p>
                Designed with a modern, mobile-first approach, ensuring your
                portfolio looks great on any device.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <span>EZ</span>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Quick and Easy Setup
              </h4>
              <p>
                Create your portfolio in just a few clicks. No technical
                expertise required.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <TrendingUpIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Excellent Lighthouse Performance
              </h4>
              <p>
                Optimized for web performance, achieving high scores in Google
                Lighthouse audits for speed, accessibility, and more.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <HandshakeIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                SEO Friendly
              </h4>
              <p>
                Boost your online presence with SEO-optimized portfolio pages,
                helping you rank better in search engines with the right setup.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <KeyRoundIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Privacy and Security
              </h4>
              <p>
                Your data is stored securely, and you maintain full control over
                what is shared and displayed.
              </p>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <div className='text-center'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent'>
              process
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl'>
              how to byop?
            </p>
          </div>

          <div className='grid gap-8'>
            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <ZapIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Lightweight and Fast
              </h4>
              <p>
                Built for speed—load times are kept minimal, ensuring a seamless
                user experience.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <MonitorSmartphoneIcon />
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Modern and Responsive
              </h4>
              <p>
                Designed with a modern, mobile-first approach, ensuring your
                portfolio looks great on any device.
              </p>
            </div>

            <div className='p-6 py-8 flex flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md'>
              <span>EZ</span>
              <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
                Quick and Easy Setup
              </h4>
              <p>
                Create your portfolio in just a few clicks. No technical
                expertise required.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className='text-center'>
            <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent'>
              ready to byop?
            </h2>
            <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl'>
              Build your own stunning, responsive Portfolio with ease today!
            </p>
          </div>

          <div></div>
        </section>
      </main>

      <footer className='mt-12'>
        <p className='text-sm font-[family-name:var(--font-general-sans-regular)] text-center text-gray-300'>
          © 2024{" "}
          <span className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-bold)]'>
            byop.
          </span>{" "}
          by{" "}
          <Link
            href={"https://danielezekiel.vercel.app"}
            target='_blank'
            className='bg-gradient-linear-300 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] border-b-2 border-b-gray-300 border-b-gray-500'
          >
            Daniel Ezekiel
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

