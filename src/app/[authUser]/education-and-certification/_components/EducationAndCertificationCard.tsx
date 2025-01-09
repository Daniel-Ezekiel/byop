import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

interface EducationAndCertificationCardProps {
  certTitle: string;
  startDate: string;
  endDate: string;
  issuer: string;
  showButtons: boolean;
}

const EducationAndCertificationCard: React.FC<
  EducationAndCertificationCardProps
> = ({ certTitle, startDate, endDate, issuer, showButtons }) => (
  <div className='grid grid-cols-2 gap-2 bg-slate-900 border rounded-md p-6'>
    {showButtons && (
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
      {certTitle}
    </h2>
    <span className='text-sm justify-self-end'>
      {startDate && `${startDate} - `} {endDate}
    </span>
    <span className='col-span-full text-sm'>{issuer}</span>
  </div>
);

export default EducationAndCertificationCard;
