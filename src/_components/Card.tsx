import { Button } from "@/components/ui/button";

type cardTypes = {
  icon: JSX.Element;
  type?: "process" | "feature";
  name: string;
  description: string;
  isHidden?: boolean;
  customCSS?: string;
};

function Card({
  icon,
  type = "feature",
  name,
  description,
  isHidden,
}: cardTypes) {
  return (
    <div
      className={`${isHidden ? "hidden" : "flex"} p-6 py-8 flex-col gap-2 ${
        type === "feature" ? "bg-zinc-900 border" : ""
      } border-gray-700 rounded-md`}
    >
      <Button
        variant={"ghost"}
        className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 d'
      >
        {icon}
      </Button>
      <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg'>
        {name}
      </h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
