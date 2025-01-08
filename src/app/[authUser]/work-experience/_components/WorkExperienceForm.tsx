import Input from "@/app/_components/global/Input";

function WorkExperienceForm() {
  return (
    <>
      <Input
        id='jobTitle'
        type='text'
        label='Job Title*'
        name='jobTitle'
        placeholder='Enter the job title for this role'
        required={true}
        className='col-span-1'
      />

      <Input
        id='companyName'
        type='text'
        label='Company*'
        name='companyName'
        placeholder='Enter the company name for this role'
        required={true}
        className='col-span-1'
      />

      <Input
        id='start-date'
        type='text'
        label='Job Start Date*'
        name='start-date'
        placeholder='Enter your job start date. (MM/YYYY)'
        required={true}
        className='col-span-1'
      />

      <Input
        id='end-date'
        type='text'
        label='Job End Date*'
        name='end-date'
        placeholder='Enter your job end date. (MM/YYYY)'
        required={true}
        hasCheckbox={true}
        checkboxId='isCurrentJob'
        checkboxName='I currently work here'
        className='col-span-1'
      />

      <Input
        id='jobLocation'
        type='text'
        label='Job Location*'
        name='jobLocation'
        placeholder='Enter the location of your job.'
        hasCheckbox={true}
        checkboxId='isJobRemote'
        checkboxName='Remote?'
        required={true}
      />

      <Input
        id='jobDescription'
        type='textarea'
        label='Job Role and Description*'
        name='jobDescription'
        placeholder='Share more using bullet points about your impact on the job'
        required={true}
      />
    </>
  );
}

export default WorkExperienceForm;
