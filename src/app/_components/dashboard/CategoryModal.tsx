import { Button } from "@/components/ui/button";

function CategoryModal() {
  return (
    <div className='fixed top-0 left-0 z-20 bg-black/70 min-h-screen w-screen backdrop-blur-md grid overflow-y-scroll'>
      <div className='p-4'>
        <h2 className='my-6 px-6 text-center'>
          Select the category that best describes what you do.
        </h2>

        <form action='' className='grid gap-8 xsm:grid-cols-2'>
          <div className='flex flex-col justify-center items-center gap-4 h-60 p-8 text-center border border-gray-600 rounded-md'>
            <h3 className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] text-xl'>
              Techie
            </h3>
            <p>
              Frontend Backend and Fullstack developers, UI/UX Designers, Data
              Analysts, Data Scientists and more
            </p>
            <Button variant='outline'>View Sample</Button>
          </div>

          <div className='flex flex-col justify-center items-center gap-4 h-60 p-8 text-center border border-gray-600 rounded-md'>
            <h3 className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] text-xl'>
              Creative
            </h3>
            <p>
              Graphic Artist, Illustrators, Photographers, Fashion Designers, 3D
              Artists and more
            </p>
            <Button variant='outline'>View Sample</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryModal;
