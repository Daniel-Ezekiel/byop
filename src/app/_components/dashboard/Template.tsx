import NoDetails from "@/app/_components/dashboard/NoDetails";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import FormModal from "./FormModal";
import PersonalInformationForm from "@/app/[authUser]/personal-information/_components/PersonalInformationForm";

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
    <section className='w-full py-4 flex flex-col gap-6'>
      <div>
        <h1 className='text-2xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent'>
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
            <Button
              variant='outline'
              className='mt-6 mx-auto h-fit flex flex-col gap-2 items-center justify-center'
            >
              <PlusIcon className='text-sky-600' />
              Add {title}
            </Button>
          </div>
        )}
      </>

      <FormModal
        modalTitle='Personal Information'
        modalInstructions='Add your details to update your personal information for your portfolio.'
      >
        <PersonalInformationForm />
      </FormModal>
    </section>
  );
}

export default Template;
