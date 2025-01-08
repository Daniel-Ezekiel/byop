"use client";
import NoDetails from "@/app/_components/dashboard/NoDetails";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import FormModal from "./FormModal";
import PersonalInformationForm from "@/app/[authUser]/personal-information/_components/PersonalInformationForm";
import { useState } from "react";
import AboutForm from "@/app/[authUser]/about/_components/AboutForm";
import ProjectsForm from "@/app/[authUser]/projects/_components/ProjectsForm";
import WorkExperienceForm from "@/app/[authUser]/work-experience/_components/WorkExperienceForm";
import EducationAndCertificationForm from "@/app/[authUser]/education-and-certification/_components/EducationAndCertificationForm";

function Template({
  title,
  tagline,
  formInstructions,
  hasInfo,
  children,
}: {
  title: string;
  tagline: string;
  formInstructions: string;
  hasInfo: boolean;
  children?: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <section className='w-full py-4 flex flex-col gap-6'>
      <div className='w-full flex gap-6 items-center justify-between'>
        <div>
          <h1 className='text-2xl font-[family-name:var(--font-general-sans-bold)] bg-gradient-linear-100 bg-clip-text text-transparent'>
            {title}
          </h1>
          <p>{tagline}</p>
        </div>
        {hasInfo && (
          <Button onClick={() => setIsModalOpen(true)}>
            {`${title !== "About" ? "Add" : "Edit"}`} {title}
          </Button>
        )}
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
              onClick={() => setIsModalOpen(true)}
            >
              <PlusIcon className='text-sky-600' />
              Add {title}
            </Button>
          </div>
        )}
      </>

      <FormModal
        modalTitle={title}
        modalInstructions={formInstructions}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(!isModalOpen)}
      >
        {title === "Personal Information" && <PersonalInformationForm />}
        {title === "About" && <AboutForm />}
        {title === "Projects" && <ProjectsForm />}
        {title === "Work Experience" && <WorkExperienceForm />}
        {title === "Education and Certification" && (
          <EducationAndCertificationForm />
        )}
      </FormModal>
    </section>
  );
}

export default Template;
