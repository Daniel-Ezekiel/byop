import InfoCard from "@/app/_components/dashboard/InfoCard";
import Template from "@/app/_components/dashboard/Template";
import MainLayout from "@/app/_layouts/MainLayout";

function page() {
  return (
    <MainLayout isDashboardPage={true}>
      <Template
        title='About'
        tagline='Share more details about you for your portfolio.'
        formInstructions='Fill out the form below to add more details for your portfolio.'
        hasInfo={true}
      >
        <div className='p-4 bg-slate-900 rounded-md border'>
          <h2 className='mb-4 font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
            Personal Information
          </h2>
          <div className='grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-6'>
            <InfoCard cardTitle='Full Name' cardContent='John Doe' />
            <InfoCard cardTitle='Email' cardContent='realjohndoe@example.com' />
            <InfoCard cardTitle='Location' cardContent='Lagos, Nigeria' />
          </div>
        </div>

        <div className='p-4 bg-slate-900 rounded-md border'>
          <h2 className='mb-4 font-[family-name:var(--font-general-sans-semibold)] text-sky-500 text-xl'>
            About
          </h2>
          <div className='grid grid-cols-[repeat(auto-fill,_minmax(18.75rem,_1fr))] gap-6'>
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
          </div>
        </div>
      </Template>
    </MainLayout>
  );
}

export default page;
