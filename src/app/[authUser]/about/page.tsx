import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <section>
        <h1>About</h1>
      </section>
    </MainLayout>
  );
}

export default page;
