import Image from "next/image";
import NoDataImg from "@/assets/no-data.svg";

function NoData({ tag }) {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <Image className='w-36 h-36' src={NoDataImg} alt='Nothing to see here' />
      <span className='bg-gradient-linear-300 bg-clip-text text-transparent font-[family-name:var(--font-general-sans-bold)] text-xl'>
        Nothing to see here...
      </span>
      <p className='mt-2'>
        You have not added any details for &apos;{tag}&apos;.
      </p>
    </div>
  );
}

export default NoData;
