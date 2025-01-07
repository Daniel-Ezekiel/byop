import { InfoCardTypes } from "@/app/_types";

function InfoCard({ cardTitle, cardContent }: InfoCardTypes) {
  return (
    <div className='flex flex-col'>
      <h3 className='font-[family-name:var(--font-general-sans-semibold)] text-slate-500'>
        {cardTitle}
      </h3>
      <p>{cardContent}</p>
    </div>
  );
}

export default InfoCard;
