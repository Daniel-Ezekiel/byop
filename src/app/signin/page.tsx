import { Button } from "@/components/ui/button";
import MainLayout from "../_layouts/MainLayout";
import { GithubIcon, LinkedinIcon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { Google } from "iconsax-react";

export default function SignIn() {
  return (
    <MainLayout>
      <div className='min-h-[85dvh] py-20 flex flex-col justify-center'>
        <div className='text-center mb-12 px-4'>
          <h1 className='font-[family-name:var(--font-general-sans-bold)] uppercase text-2xl sm:text-3xl lg:text-4xl'>
            Sign In
          </h1>
          <p className='md:text-lg  lg:text-xl'>
            Log in to{" "}
            <span className='font-[family-name:var(--font-general-sans-semibold)] bg-gradient-linear-100 bg-clip-text text-transparent'>
              build your own portfolio for free
            </span>
          </p>
        </div>

        <form
          action=''
          className='grid gap-4 p-6 bg-zinc-900 border-gray-700 rounded-md border sm:w-[25rem]'
        >
          <div className='grid gap-1'>
            <label
              htmlFor='email'
              className='text-sm text-gray-300 sm:text-base'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300'
            />
          </div>

          <div className='grid gap-1'>
            <label
              htmlFor='password'
              className='text-sm text-gray-300 sm:text-base'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='rounded-sm p-2 bg-transparent border border-gray-700 text-gray-300'
            />
          </div>

          <div className='flex justify-between'>
            <p className='text-[0.75rem] sm:text-sm'>
              Don&apos;t have an account?{" "}
              <Link href='/signup' className='underline text-sky-500'>
                Sign Up
              </Link>
            </p>
            <Link
              href=''
              className='ml-auto text-[0.75rem] underline text-sky-500 sm:text-sm'
            >
              Forgot Password?
            </Link>
          </div>

          <Button className='mt-4 bg-gradient-linear-200 text-white md:py-6 md:text-lg'>
            <LogInIcon className='mr-2' />
            Sign In
          </Button>
        </form>

        <div className='mt-8 grid grid-cols-4 justify-center items-center'>
          <span className='h-[0.1rem] bg-white'></span>
          <span className='col-span-2 text-center'>Or continue with</span>
          <span className='h-[0.1rem] bg-white'></span>
          <div className='mt-4 col-span-full flex justify-center items-center gap-4'>
            <Button variant='outline' className='w-full'>
              <Google variant='Bold' />
            </Button>
            <Button variant='outline' className='w-full'>
              <GithubIcon />
            </Button>
            <Button variant='outline' className='w-full'>
              <LinkedinIcon />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
