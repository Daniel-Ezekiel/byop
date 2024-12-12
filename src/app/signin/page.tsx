import { Button } from "@/components/ui/button";
import MainLayout from "../_layouts/MainLayout";
import { LinkedinIcon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { Google } from "iconsax-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Input from "../_components/global/Input";

export default function SignIn() {
  return (
    <MainLayout>
      <div className='min-h-[85dvh] py-20 flex flex-col justify-center'>
        <div className='text-center mb-12 px-4'>
          <h1 className='font-[family-name:var(--font-general-sans-bold)] uppercase text-2xl sm:text-3xl lg:text-4xl'>
            Sign In
          </h1>
          <p className='mt-4 md:text-lg  lg:text-xl'>
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
          <Input
            id='email'
            type='email'
            label='Email*'
            name='email'
            placeholder='Enter your email address'
            required={true}
          />

          <Input
            id='password'
            type='password'
            label='Password*'
            name='password'
            placeholder='Enter your password'
            required={true}
          />

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

          <Button className='mt-4 bg-gradient-linear-200 text-white md:py-4 md:text-base'>
            <LogInIcon className='mr-2' size={20} />
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
              <GitHubLogoIcon className='w-6 h-6' />
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
