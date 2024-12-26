import { Button } from "@/components/ui/button";

function CategoryModal({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 z-20 bg-black/70 min-h-[100dvh] w-screen backdrop-blur-md grid place-items-center overflow-y-scroll`}
    >
      <div className='p-4'>
        <h2 className='mb-6 px-6 text-center'>
          Select the category that best describes what you do.
        </h2>

        <form action='' className='grid gap-8 xsm:grid-cols-2'>
          <div className='flex flex-col justify-center items-center gap-4 min-h-fit h-60 p-8 text-center border border-gray-600 rounded-md cursor-pointer hover:border-2 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500 transition-all ease-in-out duration-500'>
            <h3 className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] text-xl'>
              Techie
            </h3>
            <p>
              Frontend Backend and Fullstack developers, UI/UX Designers, Data
              Analysts, Data Scientists and more
            </p>
            <Button variant='outline'>See Sample</Button>
            <input type='radio' name='category' id='category-techie' />
          </div>

          <div className='flex flex-col justify-center items-center gap-4 min-h-fit h-60 p-8 text-center border border-gray-600 rounded-md cursor-pointer hover:border-2 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/50 transition-all ease-in-out duration-500'>
            <h3 className='bg-gradient-linear-100 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)] text-xl'>
              Creative
            </h3>
            <p>
              Graphic Artist, Illustrators, Photographers, Fashion Designers, 3D
              Artists and more
            </p>
            <Button variant='outline'>See Sample</Button>
            <input type='radio' name='category' id='category-creative' />
          </div>

          <Button
            variant='outline'
            className='bg-gradient-linear-300 hover:bg-gradient-linear-200 active:scale-95 transition-all ease-in-out duration-500'
          >
            Confirm Selection
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CategoryModal;
