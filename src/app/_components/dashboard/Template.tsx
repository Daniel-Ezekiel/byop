import NoDetails from "@/app/_components/dashboard/NoDetails";

function Template({
  title,
  tagline,
  hasInfo,
  children,
}: {
  title: string;
  tagline: string;
  hasInfo: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className='w-full py-4'>
      <div>
        <h1 className='text-3xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent'>
          {title}
        </h1>
        <p>{tagline}</p>
      </div>

      <>
        {hasInfo ? (
          children
        ) : (
          <div className='mt-8'>
            <NoDetails tag={title} />
          </div>
        )}
      </>
    </section>
  );
}

export default Template;
