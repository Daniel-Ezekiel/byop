import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

type cardTypes = {
  index: number;
  icon: JSX.Element;
  type?: "process" | "feature";
  name: string;
  description: string;
  isHidden?: boolean;
  customCSS?: string;
};

function Card({
  index,
  icon,
  type = "feature",
  name,
  description,
  isHidden,
}: cardTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 10 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.5 * index, type: "spring" }}
      viewport={{ once: true }}
      className={`${isHidden ? "hidden" : "flex"} p-6 py-8 flex-col gap-2 ${
        type === "feature" ? "bg-zinc-900 border" : ""
      } border-gray-700 rounded-md`}
    >
      <Button
        variant={"ghost"}
        className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 md:w-16 md:h-16'
      >
        {icon}
      </Button>
      <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg lg:text-xl xl:text-2xl'>
        {name}
      </h4>
      <p className='lg:text-lg'>{description}</p>
    </motion.div>
  );
}

export default Card;
