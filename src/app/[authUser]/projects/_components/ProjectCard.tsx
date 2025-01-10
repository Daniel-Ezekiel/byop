import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, PencilIcon, TrashIcon } from "lucide-react";

function ProjectCard({
  projectName,
  projectSummary,
  projectTools,
  showButtons = true,
}: {
  projectName: string;
  projectSummary: string;
  projectTools: string;
  showButtons?: boolean;
}) {
  return (
    <div className='grid grid-cols-2 gap-4 bg-slate-900 rounded-md border p-6'>
      {showButtons && (
        <div className='justify-self-start flex gap-2'>
          <Button variant='ghost' className='p-2'>
            <PencilIcon />
          </Button>
          <Button variant='ghost' className='p-2'>
            <TrashIcon />
          </Button>
        </div>
      )}
      <div
        className={`${
          !showButtons && "col-span-full"
        } justify-self-end flex gap-2`}
      >
        <Button variant='ghost' className='p-2'>
          <ExternalLinkIcon />
        </Button>
      </div>
      <h2 className='col-span-full font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
        {projectName}
      </h2>
      <p className='col-span-full'>{projectSummary}</p>
      <span className='col-span-full bg-gradient-linear-200 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-semibold)]'>
        {projectTools}
      </span>
    </div>
  );
}

export default ProjectCard;
