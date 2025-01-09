import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";
import ProjectCard from "./_components/ProjectCard";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='Projects'
        tagline='Showcase your exciting projects on your portfolio.'
        formInstructions='Fill out the form below to add your projects to your portfolio.'
        hasInfo={true}
      >
        <div className='mt-4 grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-8'>
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
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
