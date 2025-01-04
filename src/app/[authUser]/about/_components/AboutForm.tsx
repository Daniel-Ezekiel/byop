import Input from "@/app/_components/global/Input";

function AboutForm() {
  return (
    <>
      <Input
        id='fullName'
        type='text'
        label='Full Name*'
        name='fullName'
        placeholder='Enter your full name, e.g. John Doe'
        required={true}
        className='col-span-1'
      />

      <Input
        id='email'
        type='email'
        label='Email*'
        name='email'
        placeholder='Enter your email address'
        required={true}
        className='col-span-1'
      />

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
        id='location'
        type='text'
        label='Location*'
        name='location'
        placeholder='Enter your location (state only)'
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
      />

      <Input
        id='shortSummary'
        type='textarea'
        label='Short Summary*'
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
        placeholder='Add your skills, tools and technologies. e.g React, Next.js, Tailwind, etc.'
        required={true}
      />
    </>
  );
}

export default AboutForm;
