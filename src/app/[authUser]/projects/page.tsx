import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Projects'
        tagline='Showcase your exciting projects on your portfolio.'
        hasInfo={false}
      ></Template>
    </MainLayout>
  );
}

export default page;
