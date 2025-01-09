import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import WorkExperienceCard from "./_components/WorkExperienceCard";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Work Experience'
        tagline='Share details about your previous experience on the job.'
        formInstructions='Fill out the form below to add your work experience (if any) to your portfolio.'
        hasInfo={true}
      >
        <div className='pt-8 grid gap-6 md:grid-cols-2'>
          <WorkExperienceCard
            position='Frontend Developer'
            company='Oracle'
            startDate='Mar. 2025'
            endDate='Present'
            location='Hamburg, Germany (Remote)'
            responsibilities={[
              `Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles`,
              `Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.`,
              `Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.`,
            ]}
          />

          <WorkExperienceCard
            position='Frontend Developer'
            company='Oracle'
            startDate='Mar. 2025'
            endDate='Present'
            location='Hamburg, Germany (Remote)'
            responsibilities={[
              `Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles`,
              `Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.`,
              `Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.`,
            ]}
          />

          <WorkExperienceCard
            position='Frontend Developer'
            company='Oracle'
            startDate='Mar. 2025'
            endDate='Present'
            location='Hamburg, Germany (Remote)'
            responsibilities={[
              `Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles`,
              `Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.`,
              `Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.`,
            ]}
          />

          <WorkExperienceCard
            position='Frontend Developer'
            company='Oracle'
            startDate='Mar. 2025'
            endDate='Present'
            location='Hamburg, Germany (Remote)'
            responsibilities={[
              `Collaborated with designers and backend developers to create
                modern, responsive web applications using HTML, CSS, and
                JavaScript, emphasizing user-centric design principles`,
              `Implemented robust SEO strategies, including keyword
                optimization and semantic HTML, achieving a 15% increase in site
                visits and first-page search engine rankings.`,
              `Integrated an audio-streaming API, leveraging caching techniques
                to reduce latency, increasing user session duration by 38%.`,
            ]}
          />
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
