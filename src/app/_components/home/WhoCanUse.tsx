import { Button } from "@/components/ui/button";
import { PaletteIcon, Settings2Icon } from "lucide-react";
import * as motion from "motion/react-client";

function WhoCanUse() {
  return (
    <section
      id='who-can-use'
      className='max-w-[77.5rem] mt-32 mb-20 grid gap-8 md:grid md:grid-cols-5 md:p-8 lg:gap-x-16'
    >
      <div className='text-center md:col-span-2 md: pt-8 md:text-left'>
        <motion.h2
          initial={{ opacity: 0, translateX: -10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'
        >
          who can use byop?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateX: -25 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
        >
          BYOP is great for...
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, translateX: 25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 1, type: "spring" }}
        viewport={{ once: true }}
        className={`flex p-6 py-8 flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md md:col-span-3 md:col-start-3`}
      >
        <Button
          variant={"ghost"}
          className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30  md:w-16 md:h-16'
        >
          <Settings2Icon className='text-sky-600 lg:h-6 lg:w-6' />
        </Button>
        <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg lg:text-xl xl:text-2xl'>
          Techies
        </h4>
        <p className='lg:text-lg'>
          Any Techie can use BYOP! <br /> Frontend, Backend, Fullstack
          developers, UI/UX Designers, Data Scientists, Data Analysts and more.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateX: 25 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
        viewport={{ once: true }}
        className={`flex p-6 py-8 flex-col gap-2 bg-zinc-900 border border-gray-700 rounded-md md:col-span-3 md:col-start-3`}
      >
        <Button
          variant={"ghost"}
          className='w-12 h-12 p-2 rounded-full bg-sky-600 bg-opacity-30 md:w-16 md:h-16'
        >
          <PaletteIcon className='text-sky-600 lg:h6  lg:w-6' />
        </Button>
        <h4 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-200 bg-clip-text text-transparent text-lg lg:text-xl xl:text-2xl'>
          Creatives
        </h4>
        <p className='lg:text-lg'>
          Build your portfolio using byop as a creative! <br /> Artist, Interior
          Designer, Product Designer, Architects, Fashion Designers,
          Photographers and many more.
        </p>
      </motion.div>

      {/* <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {featuresList.map((feature, i) => (
        <Card
          key={i}
          icon={feature.icon}
          name={feature.name}
          description={feature.description}
        />
      ))}
    </div> */}
    </section>
  );
}

export default WhoCanUse;
