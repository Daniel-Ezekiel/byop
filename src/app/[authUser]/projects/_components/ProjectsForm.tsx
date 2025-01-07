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
        hasCheckbox={true}
        checkboxId='isFeatured'
        checkboxName='Tag as Featured Project'
      />

      <Input
        id='summary'
        type='textarea'
        label='Project Summary*'
        name='summary'
        placeholder='Share a summary of your project and what you built.'
        required={true}
        className='col-span-1'
      />

      <Input
        id='overview'
        type='textarea'
        label='Project Overview*'
        name='overview'
        placeholder='Share the details about your project, what you learned while building it.'
        required={true}
        className='col-span-1'
      />

      <Input
        id='projectImages'
        type='file'
        label='Project Images*'
        name='projectImages'
        placeholder='Upload images that showcases what your project looks like.'
        required={true}
      />

      <Input
        id='projectLink'
        type='text'
        label='Project Link*'
        name='projectLink'
        placeholder='Add links to your project'
        required={true}
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
