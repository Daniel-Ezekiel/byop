import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Projects'
        tagline='Showcase your exciting projects on your portfolio.'
        formInstructions='Fill out the form below to add your projects to your portfolio.'
        hasInfo={true}
      >
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-8'>
          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
            <div className='justify-self-start flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <PencilIcon />
              </Button>
              <Button variant='ghost' className='p-2'>
                <TrashIcon />
              </Button>
            </div>
            <div className='justify-self-end flex gap-2'>
              <Button variant='ghost' className='p-2'>
                <ExternalLinkIcon />
              </Button>
            </div>
            <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
              Project One
            </h2>
            <p className='col-span-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              atque harum, dolor velit modi commodi labore officiis. Excepturi
              molestias ad molestiae culpa quo incidunt beatae. Sed expedita
              sapiente modi doloribus maxime ex, veniam in incidunt eius, saepe
              dolorum reiciendis alias aut atque autem animi neque deleniti
              consequatur repellendus quia temporibus.
            </p>
            <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
              HTML, CSS, JavaScript, React, NodeJS
            </span>
          </div>
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
