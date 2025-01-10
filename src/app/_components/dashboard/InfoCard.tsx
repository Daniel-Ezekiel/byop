import { InfoCardProps } from "@/app/_types";

function InfoCard({
  className = "col-span-full md:col-span-1",
  cardTitle,
  cardContent,
}: InfoCardProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <h3 className='font-[family-name:var(--font-general-sans-semibold)] text-slate-500'>
        {cardTitle}
      </h3>
      <p>{cardContent}</p>
    </div>
  );
}

export default InfoCard;
