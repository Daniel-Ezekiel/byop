import MainLayout from "@/app/_layouts/MainLayout";
import Template from "@/app/_components/dashboard/Template";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Personal Information'
        tagline='Add the personal information needed to build your portfolio.'
        formInstructions='Fill out the form below to add your personal information for your portfolio.'
        hasInfo={false}
      ></Template>
    </MainLayout>
  );
}

export default page;
