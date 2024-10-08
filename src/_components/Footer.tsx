import Link from "next/link";

function Footer() {
  return (
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
  );
}

export default Footer;
