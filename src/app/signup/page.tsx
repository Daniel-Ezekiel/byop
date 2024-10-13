import { Button } from "@/components/ui/button";
import MainLayout from "../_layouts/MainLayout";
import { LinkedinIcon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { Google } from "iconsax-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Input from "../_components/Input";

export default function SignUp() {
  return (
    <MainLayout>
      <div className='min-h-[85dvh] py-20 flex flex-col justify-center items-center'>
        <div className='text-center mb-12 px-4'>
          <h1 className='font-[family-name:var(--font-general-sans-bold)] uppercase text-2xl sm:text-3xl lg:text-4xl'>
            Sign Up
          </h1>
          <p className='mt-4 md:text-lg lg:text-xl'>
            Create an account to{" "}
            <span className='font-[family-name:var(--font-general-sans-semibold)] bg-gradient-linear-100 bg-clip-text text-transparent'>
              build your own portfolio for free
            </span>
          </p>
        </div>

        <form
          action=''
          className='grid grid-cols-2 gap-4 p-6 bg-zinc-900 border-gray-700 rounded-md border sm:w-[25rem]'
        >
          <Input
            id='firstName'
            type='text'
            label='First Name*'
            name='firstName'
            placeholder='Enter your first name'
            required={true}
            className='col-span-1'
          />

          <Input
            id='lastName'
            type='text'
            label='Last Name*'
            name='lastName'
            placeholder='Enter your last name'
            required={true}
            className='col-span-1'
          />

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

          <Input
            id='confirmPassword'
            type='password'
            label='Confirm Password*'
            name='confirmPassword'
            placeholder='Enter your password again'
            required={true}
          />

          <div className='flex flex-col justify-between col-span-full'>
            <p className='text-[0.75rem] sm:text-sm'>
              Already have an account?{" "}
              <Link href='/signin' className='underline text-sky-500'>
                Sign In
              </Link>
            </p>

            <p className='mt-6 text-[0.75rem] text-center font-[family-name:var(--font-general-sans-semibold)] sm:text-sm'>
              By signing up, you agree to adding your information on this
              platform
            </p>
          </div>

          <Button className='col-span-full mt-4 bg-gradient-linear-200 text-white md:py-4 md:text-base'>
            <LogInIcon className='mr-2' size={20} />
            Sign Up
          </Button>
        </form>

        <div className='w-full mt-8 grid grid-cols-4 justify-center items-center sm:w-[25rem]'>
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
