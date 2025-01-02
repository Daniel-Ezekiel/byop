import Input from "@/app/_components/global/Input";

function EducationAndCertificationForm() {
  return (
    <>
      <Input
        id='courseTitle'
        type='text'
        label='Course Title*'
        name='courseTitle'
        placeholder='Enter the course title for this degree/certification'
        required={true}
      />

      <Input
        id='timeline-start'
        type='text'
        label='Education Timeline Start*'
        name='timeline-start'
        placeholder='Enter your study start date. (MM/YYYY)'
        required={true}
        className='col-span-1'
      />

      <Input
        id='timeline-end'
        type='text'
        label='Education Timeline End*'
        name='timeline-end'
        placeholder='Enter your study end date. (MM/YYYY)'
        required={true}
        className='col-span-1'
      />

      <Input
        id='issuer'
        type='text'
        label='Institution or Issuer name*'
        name='issuer'
        placeholder='Enter name of institution/platform that issues the degree/certification.'
        hasCheckbox={true}
        checkboxId='isDegree'
        checkboxName='Degree Programme?'
        required={true}
      />

      <Input
        id='certificateLink'
        type='text'
        label='Certificate Link'
        name='certificateLink'
        placeholder='Add link to the degree/certification, if available'
        required={true}
      />
    </>
  );
}

export default EducationAndCertificationForm;
