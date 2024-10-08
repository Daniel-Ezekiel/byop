type sectionHeadingTypes = {
  title: string;
  tagline: string;
};

function SectionHeading({ title, tagline }: sectionHeadingTypes) {
  return (
    <div className='text-center'>
      <h2 className='font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-300 bg-clip-text text-transparent sm:text-lg'>
        {title}
      </h2>
      <p className='font-[family-name:var(--font-general-sans-semibold)] text-2xl sm:text-3xl'>
        {tagline}
      </p>
    </div>
  );
}

export default SectionHeading;
