import CategoryModal from "@/app/_components/dashboard/CategoryModal";
import MainLayout from "@/app/_layouts/MainLayout";
import Image from "next/image";
import ImgBuildPortfolio from "@/assets/build-portfolio.svg";
import DetailsCard from "./_components/DetailsCard";
import InfoCard from "@/app/_components/dashboard/InfoCard";
import ProjectCard from "../projects/_components/ProjectCard";
import WorkExperienceCard from "../work-experience/_components/WorkExperienceCard";
import EducationAndCertificationCard from "../education-and-certification/_components/EducationAndCertificationCard";

function Dashboard() {
  return (
    <MainLayout isDashboardPage={true}>
      <section className='w-full py-8'>
        <div className='w-full flex items-center justify-between rounded-xl p-4 py-6 bg-gradient-linear-300 md:px-10 lg:gap-10 lg:px-16 lg:pr-16'>
          <div className='sm:w-1/2'>
            <h1 className='w-[max-content] font-[family-name:var(--font-general-sans-semibold)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
              Good morning Daniel!
            </h1>
            <p className='py-3 md:max-w-[26rem] lg:text-lg'>
              Welcome to the dashboard! Here you can manage your portfolio and
              track your information.
              <br />
              <br />
              <span className='font-[family-name:var(--font-general-sans-semibold)] lg:text-xl'>
                Ready, Set, BYOP!
              </span>
            </p>
          </div>

          <Image
            src={ImgBuildPortfolio}
            alt='Build your own portfolio illustration'
            className='hidden sm:block sm:w-60 md:place-self-end lg:w-96'
          />
        </div>
      </section>

      <section className='w-full grid items-stretch gap-6'>
        <DetailsCard
          data={true}
          title='About'
          tag='Personal Information'
          url='about'
          className='col-span-full'
        >
          <InfoCard cardTitle='Full Name' cardContent='John Doe' />
          <InfoCard cardTitle='Email' cardContent='realjohndoe@example.com' />
          <InfoCard cardTitle='Location' cardContent='Lagos, Nigeria' />
          <InfoCard cardTitle='Job Title' cardContent='Software Engineer' />
          <InfoCard
            cardTitle='Tagline'
            cardContent='I build optimised, accessible and scalable web experiences'
          />
          <InfoCard
            cardTitle='Skills, Tools and Technologies'
            cardContent='React, Next.js, Tailwind, etc.'
          />
          <InfoCard
            cardTitle='Short Summary'
            cardContent='As a Software Engineer, I specialize in passionately building (and occasionally designing) characteristic web solutions and experiences for individuals and organizations with taste.'
          />
          <InfoCard
            cardTitle='About'
            cardContent={`
                Hi! My name is Daniel and I enjoy building things on the web. This interest in Web development began during the lockdown period after I completed by Industrial Training in Aircraft Maintenance Engineering when I though about how some processes could be made easier just by building solutions on the web for them.
                Over time, I have had the privilege of working on multiple projects, through which the skills I have acquired and my solution-oriented personality are used to deliver efficient, accessible, creative solutions and experiences to one and all.
                I have a Bachelor's degree in Mechanical Engineering and for my final thesis, I completed a published research paper during my undergraduate program titled 'Geometrical Attenuation of Shockwaves using rigid obstacle matrices'.
                Outside my regular developer routine, I enjoy listening to music, gaming or reading about space and technology.`}
          />
        </DetailsCard>

        <DetailsCard
          data={true}
          title='Projects'
          tag='Projects'
          url='projects'
          className='col-span-full xl:col-span-1'
        >
          <ProjectCard
            projectName='Project One'
            projectSummary='Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses.'
            projectTools='React.js, Typescript, TailwindCSS, Tanstack Query, TMDb API'
          />
          <ProjectCard
            projectName='Project One'
            projectSummary='Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses.'
            projectTools='React.js, Typescript, TailwindCSS, Tanstack Query, TMDb API'
          />
          <ProjectCard
            projectName='Project One'
            projectSummary='Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses.'
            projectTools='React.js, Typescript, TailwindCSS, Tanstack Query, TMDb API'
          />
          <ProjectCard
            projectName='Project One'
            projectSummary='Discover movies effortlessly with LMDB, a sleek cinematic database inspired by TMDB. This user-friendly app offers quick access to film details, including cast, crew, and synopses.'
            projectTools='React.js, Typescript, TailwindCSS, Tanstack Query, TMDb API'
          />
        </DetailsCard>

        <DetailsCard
          data={true}
          title='Work Experience'
          tag='Work Experience'
          url='work-experience'
          className='col-span-full xl:col-span-1'
        >
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
        </DetailsCard>

        <DetailsCard
          data={true}
          title='Education and Certification'
          tag='Education and Certification'
          url='education-and-certification'
          className='pb-8 items-stretch'
        >
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
          <EducationAndCertificationCard
            certTitle='BSc. Mechanical Engineering'
            startDate='Sept. 2015'
            endDate='Jan. 2020'
            issuer='Obafemi Awolowo University, Ile-Ife'
            showButtons={false}
          />
        </DetailsCard>
      </section>

      <CategoryModal isOpen={false} />
    </MainLayout>
  );
}

export default Dashboard;
