import Image from "next/image";
import NoDetailsImg from "@/assets/no-data.svg";

function NoDetails({ tag, className }: { tag: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-4 ${className}`}
    >
      <Image
        className='w-36 h-36'
        src={NoDetailsImg}
        alt='Nothing to see here'
      />
      <span className='bg-gradient-linear-300 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-bold)] text-xl'>
        Nothing to see here...
      </span>
      <p className='mt-2'>
        You have not added any details for &apos;{tag}&apos;.
      </p>
    </div>
  );
}

export default NoDetails;
