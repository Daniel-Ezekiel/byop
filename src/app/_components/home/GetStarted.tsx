import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

function GetStarted() {
  return (
    <section>
      <div className='text-center flex flex-col justify-center items-center gap-4 py-28 max-w-[36rem]'>
        <motion.h2
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'
        >
          ready to byop?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
        >
          Build your own stunning, responsive Portfolio with ease today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateY: 25 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <Link
            href='/signin'
            className={`${buttonVariants({
              variant: "outline",
            })} px-8 text-sm bg-gradient-linear-300 text-gray-200 font-[family-name:var(--font-general-sans-medium)] active:scale-95 transition-all ease-in-out duration-500 lg:mt-6 lg:p-6 lg:text-lg`}
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default GetStarted;
