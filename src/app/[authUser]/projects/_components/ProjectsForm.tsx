import Input from "@/app/_components/global/Input";

function ProjectsForm() {
  return (
    <>
      <Input
        id='projectTitle'
        type='text'
        label='Project Title*'
        name='projectTitle'
        placeholder='Enter your project name'
        required={true}
      />

      <Input
        id='description'
        type='textarea'
        label='Project Description*'
        name='description'
        placeholder='Share more details about your project and what you built.'
        required={true}
      />

      <Input
        id='projectImages'
        type='text'
        label='Project Images*'
        name='projectImages'
        placeholder='Upload images that showcases what your project looks like.'
        required={true}
        className='col-span-1'
      />

      <Input
        id='projectLink'
        type='text'
        label='Project Link*'
        name='projectLink'
        placeholder='Add links to your project'
        required={true}
        className='col-span-1'
      />

      <Input
        id='tools-and-technologies'
        type='text'
        label='Skills, Tools and Technologies*'
        name='tools-and-technologies'
        placeholder='Add your skils, tools and technologies. e.g React, Next.js, Tailwind, etc.'
        required={true}
      />
    </>
  );
}

export default ProjectsForm;
