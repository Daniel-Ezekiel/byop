import * as motion from "motion/react-client";

type sectionHeadingTypes = {
  title: string;
  tagline: string;
};

function SectionHeading({ title, tagline }: sectionHeadingTypes) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.25, type: "spring" }}
      viewport={{ once: true }}
      className='text-center'
    >
      <motion.h2
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 1, type: "spring" }}
        viewport={{ once: true }}
        className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
      >
        {tagline}
      </motion.p>
    </motion.div>
  );
}

export default SectionHeading;
