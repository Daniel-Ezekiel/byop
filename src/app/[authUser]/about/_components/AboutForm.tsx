import Input from "@/app/_components/global/Input";

function AboutForm() {
  return (
    <>
      <Input
        id='jobTitle'
        type='text'
        label='Job Title*'
        name='jobTitle'
        placeholder='Enter your job title. e.g Frontend Developer'
        required={true}
        className='col-span-1'
      />

      <Input
        id='tagline'
        type='text'
        label='Tagline*'
        name='tagline'
        placeholder='Add a short phrase for your tagline'
        required={true}
        className='col-span-1'
      />

      <Input
        id='shortSummary'
        type='textarea'
        label='ShortSummary*'
        name='shortSummary'
        placeholder='Summarize what you do in a short sentence.'
        required={true}
      />

      <Input
        id='about'
        type='textarea'
        label='About*'
        name='about'
        placeholder='Share more details about yourself, background and experiences.'
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

export default AboutForm;
