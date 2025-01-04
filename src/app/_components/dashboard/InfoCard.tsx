import { InfoCardTypes } from "@/app/_types";

function InfoCard({ cardTitle, cardContent }: InfoCardTypes) {
  return (
    <div className='flex flex-col items-center justify-center min-h-40 bg-slate-900 rounded-md p-4'>
      <h3 className='font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-lg'>
        {cardTitle}
      </h3>
      <p className='text-xl'>{cardContent}</p>
    </div>
  );
}

export default InfoCard;
