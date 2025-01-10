import { WorkExperienceCardProps } from "@/app/_types";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  position,
  company,
  startDate,
  endDate,
  location,
  responsibilities,
  showButtons = true,
  className = "col-span-full lg:col-span-1",
}) => {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-2 bg-slate-900 border rounded-md p-6`}
    >
      {showButtons && (
        <div className='col-span-full justify-self-end flex gap-2 mb-4'>
          (
          <Button variant='ghost' className='p-2'>
            <EditIcon />
          </Button>
          <Button variant='ghost' className='p-2'>
            <TrashIcon />
          </Button>
          )
        </div>
      )}
      <h2 className='font-[family-name:var(--font-general-sans-semibold)] bg-gradient-linear-200 bg-clip-text text-transparent'>
        {position} @ {company}
      </h2>
      <span className='text-sm justify-self-end'>
        {startDate} - {endDate}
      </span>
      <span className='col-span-full text-sm'>{location}</span>

      <ul className='col-span-full mt-2 flex flex-col gap-2 px-4 list-disc'>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceCard;
