import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

function FormModal({
  modalTitle,
  modalInstructions,
  children,
}: {
  modalTitle: string;
  modalInstructions: string;
  children: React.ReactNode;
}) {
  return (
    <div className='fixed top-0 right-0 z-20 bg-black/70 w-screen backdrop-blur-md overflow-y-auto'>
      <div className='min-h-[100dvh] p-4 flex flex-col justify-center gap-20 lg:w-1/2 lg:ml-auto lg:px-12 lg:bg-slate-900'>
        <div>
          <h2 className='font-[family-name:var(--font-general-sans-bold)] text-2xl bg-gradient-linear-200 bg-clip-text text-transparent sm:text-3xl'>
            {modalTitle}
          </h2>
          <p>{modalInstructions}</p>
        </div>

        <form action='' className='grid gap-4 md:grid-cols-2'>
          {children}
          <Button
            variant='outline'
            className='mt-6 col-span-full bg-gradient-linear-300 hover:bg-gradient-linear-200 active:scale-95 transition-all ease-in-out duration-500 md:min-w-[15rem] md:justify-self-end'
          >
            Submit
          </Button>
        </form>

        <Button
          variant='ghost'
          className='fixed top-8 right-8 self-end border-2 border-sky-900 rounded-full'
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
}

export default FormModal;
