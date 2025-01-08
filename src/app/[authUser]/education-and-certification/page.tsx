import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Education and Certification'
        tagline='Showcase your education and certifications on your portfolio.'
        formInstructions='Fill out the form below to add your education and certifications to your portfolio.'
        hasInfo={true}
      >
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-8'>
          <div className='grid grid-cols-2 gap-2 bg-slate-900 border rounded-md p-6'>
            {true && (
              <div className='col-span-full justify-self-end flex gap-2 mb-4'>
                <Button variant='ghost' className='p-2'>
                  <EditIcon />
                </Button>
                <Button variant='ghost' className='p-2'>
                  <TrashIcon />
                </Button>
              </div>
            )}
            <h2 className='font-[family-name:var(--font-general-sans-semibold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
              BSc. Mechanical Engineering
            </h2>
            <span className='text-sm justify-self-end'>
              Spet. 2015 - Jan. 2020
            </span>
            <span className='col-span-full text-sm'>
              Obafemi Awolowo University, Ile-Ife
            </span>
          </div>

          <div className='grid grid-cols-2 gap-2 bg-slate-900 border rounded-md p-6'>
            {true && (
              <div className='col-span-full justify-self-end flex gap-2 mb-4'>
                <Button variant='ghost' className='p-2'>
                  <EditIcon />
                </Button>
                <Button variant='ghost' className='p-2'>
                  <TrashIcon />
                </Button>
              </div>
            )}
            <h2 className='font-[family-name:var(--font-general-sans-semibold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
              NITDA Associate Frontend Developer
            </h2>
            <span className='text-sm justify-self-end'>Sept. 2023</span>
            <span className='col-span-full text-sm'>Coursera</span>
          </div>
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
