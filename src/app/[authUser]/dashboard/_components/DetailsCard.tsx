import NoDetails from "@/app/_components/dashboard/NoDetails";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

function DetailsCard({
  data,
  title,
  tag,
  url,
  className = "bg-slate-900",
  children,
}: {
  data?: [] | boolean;
  title: string;
  tag: string;
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`min-w-[15rem] grid grid-cols-2 grid-rows-[auto,_1fr] items-start justify-items-start p-4 border rounded-md bg-slate-900 ${className}`}
    >
      <h2 className='mr-4 font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent text-lg'>
        {title}
      </h2>

      <Link
        href={`./${url}`}
        className='justify-self-end flex items-center bg-gradient-linear-200 px-2 py-1 rounded-md'
      >
        Add <PlusIcon size={22} />
      </Link>

      <div
        className={`col-span-full mt-4 grid ${
          title !== "Work Experience"
            ? "grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))]"
            : "grid-cols-2"
        } items-start justify-center gap-x-6 gap-y-4 lg:gap-y-8`}
      >
        <>
          {data && children}
          {!data && <NoDetails tag={tag} className='col-span-full' />}
        </>
      </div>
    </div>
  );
}

export default DetailsCard;
