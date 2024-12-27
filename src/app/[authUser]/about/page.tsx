import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='About'
        tagline='Share more details about you for your portfolio.'
        hasInfo={false}
      ></Template>
    </MainLayout>
  );
}

export default page;
