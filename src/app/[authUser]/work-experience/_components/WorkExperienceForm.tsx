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
      />

      <Input
        id='timeline-start'
        type='text'
        label='Job Timeline Start*'
        name='timeline-start'
        placeholder='Enter your job start date. (MM/YYYY)'
        required={true}
        className='col-span-1'
      />

      <Input
        id='timeline-end'
        type='text'
        label='Job Timeline End*'
        name='timeline-end'
        placeholder='Enter your job end date. (MM/YYYY)'
        required={true}
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
