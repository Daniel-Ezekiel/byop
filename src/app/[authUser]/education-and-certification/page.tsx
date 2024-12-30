import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Education and Certification'
        tagline='Showcase your education and certifications on your portfolio.'
        hasInfo={false}
      ></Template>
    </MainLayout>
  );
}

export default page;
