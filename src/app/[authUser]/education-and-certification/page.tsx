import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import EducationAndCertificationCard from "./_components/EducationAndCertificationCard";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Education and Certification'
        tagline='Showcase your education and certifications on your portfolio.'
        formInstructions='Fill out the form below to add your education and certifications to your portfolio.'
        hasInfo={true}
      >
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-8'>
          <EducationAndCertificationCard
            certTitle='BSc. Mechanical Engineering'
            startDate='Sept. 2015'
            endDate='Jan. 2020'
            issuer='Obafemi Awolowo University, Ile-Ife'
            showButtons={false}
          />

          <EducationAndCertificationCard
            certTitle='NITDA Associate Frontend Developer'
            startDate=''
            endDate='Sept. 2023'
            issuer='Coursera'
            showButtons={false}
          />
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
