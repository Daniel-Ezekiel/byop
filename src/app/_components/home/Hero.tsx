import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className='min-h-[95dvh] flex flex-col items-center justify-center gap-4 text-center sm:max-w-[28rem] md:max-w-[38rem] lg:max-w-[54rem]'>
      <h1 className='text-4xl font-[family-name:var(--font-general-sans-bold)] md:text-5xl lg:text-6xl'>
        Build a modern, responsive{" "}
        <span className='bg-gradient-linear-100 bg-clip-text text-transparent'>
          portfolio website in minutes!
        </span>
      </h1>
      <p className='p-2 font-[family-name:var(--font-general-sans-regular)] text-gray-300 md:px-12 md:text-lg lg:px-28 lg:text-xl xl:text-2xl'>
        Create and conveniently manage your own portfolio website with
        simplicity and ease in just a few clicks.
      </p>

      <Link
        href='/signin'
        className={`${buttonVariants({
          variant: "outline",
        })} px-8 py-6 bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] text-base active:scale-95 transition-all ease-in-out duration-500 lg:text-lg xl:text-xl`}
      >
        Get Started
      </Link>
    </section>
  );
}

export default Hero;
