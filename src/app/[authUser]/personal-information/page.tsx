import MainLayout from "@/app/_layouts/MainLayout";
import Template from "@/app/_components/dashboard/Template";
import InfoCard from "@/app/_components/dashboard/InfoCard";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Personal Information'
        tagline='Add the personal information needed to build your portfolio.'
        formInstructions='Fill out the form below to add your personal information for your portfolio.'
        hasInfo={true}
      >
        <div className='mt-4 grid gap-4 sm:grid-cols-2'>
          <InfoCard cardTitle='Full Name' cardContent='John Doe' />
          <InfoCard cardTitle='Email' cardContent='0Y4X0@example.com' />
          <InfoCard cardTitle='Location' cardContent='Lagos, Nigeria' />
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
