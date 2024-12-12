import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
// import { motion } from "motion/react";
import * as motion from "motion/react-client";

function Hero() {
  return (
    <section className='min-h-[95dvh] flex flex-col items-center justify-center gap-4 text-center sm:max-w-[28rem] md:max-w-[38rem] lg:max-w-[54rem]'>
      <motion.h1
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className='text-4xl font-[family-name:var(--font-general-sans-bold)] md:text-5xl lg:text-6xl'
      >
        Build a modern, responsive{" "}
        <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
          portfolio website in minutes!
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.25, type: "spring" }}
        className='p-2 font-[family-name:var(--font-general-sans-regular)] text-gray-300 md:px-12 md:text-lg lg:px-28 lg:text-xl xl:text-2xl'
      >
        Create and conveniently manage your own portfolio website with
        simplicity and ease in just a few clicks.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      >
        <Link
          href='/signin'
          className={`${buttonVariants({
            variant: "outline",
          })} px-8 py-6 bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] text-base active:scale-95 transition-all ease-in-out duration-500 lg:text-lg xl:text-xl`}
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}

export default Hero;
