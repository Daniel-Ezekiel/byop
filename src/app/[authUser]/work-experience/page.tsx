import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Work Experience'
        tagline='Share details about your previous experience on the job.'
        formInstructions='Fill out the form below to add your work experience (if any) to your portfolio.'
        hasInfo={true}
      >
        <div className='pt-8 grid gap-6 md:grid-cols-2'>
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
              Frontend Developer @ Oracle
            </h2>
            <span className='text-sm justify-self-end'>
              Mar. 2025 - Present
            </span>
            <span className='col-span-full text-sm'>Location (Remote)</span>

            <ul className='col-span-full mt-2 flex flex-col gap-2 px-4 list-disc'>
              <li>
                Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles
              </li>
              <li>
                Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.
              </li>
              <li>
                Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.
              </li>
            </ul>
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
              Frontend Developer @ Oracle
            </h2>
            <span className='text-sm justify-self-end'>
              Mar. 2025 - Present
            </span>
            <span className='col-span-full text-sm'>Location (Remote)</span>

            <ul className='col-span-full mt-2 flex flex-col gap-2 px-4 list-disc'>
              <li>
                Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles
              </li>
              <li>
                Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.
              </li>
              <li>
                Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.
              </li>
            </ul>
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
              Frontend Developer @ Oracle
            </h2>
            <span className='text-sm justify-self-end'>
              Mar. 2025 - Present
            </span>
            <span className='col-span-full text-sm'>Location (Remote)</span>

            <ul className='col-span-full mt-2 flex flex-col gap-2 px-4 list-disc'>
              <li>
                Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles
              </li>
              <li>
                Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.
              </li>
              <li>
                Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.
              </li>
            </ul>
          </div>
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
