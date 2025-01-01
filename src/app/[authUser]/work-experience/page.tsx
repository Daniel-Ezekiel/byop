import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Work Experience'
        tagline='Share details about your previous experience on the job.'
        formInstructions='Fill out the form below to add your work experience (if any) to your portfolio.'
        hasInfo={false}
      ></Template>
    </MainLayout>
  );
}

export default page;
