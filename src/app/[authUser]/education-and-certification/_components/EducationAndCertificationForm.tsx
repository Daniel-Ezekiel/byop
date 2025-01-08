import Input from "@/app/_components/global/Input";

function EducationAndCertificationForm() {
  return (
    <>
      <Input
        id='certificationTitle'
        type='text'
        label='Degree/Certification Title*'
        name='certificationTitle'
        placeholder='Enter the title of your degree/certification.'
        required={true}
        hasCheckbox={true}
        checkboxId='isDegree'
        checkboxName='Degree Programme?'
        className='col-span-1'
      />

      <Input
        id='issuer'
        type='text'
        label='Institution or Issuer name*'
        name='issuer'
        placeholder='Enter name of institution/platform that issues the degree/certification.'
        required={true}
        className='col-span-1'
      />

      <Input
        id='start-date'
        type='text'
        label='Start Date*'
        name='start-date'
        placeholder='Enter your study start date. (MM/YYYY)'
        required={true}
        className='col-span-1'
      />

      <Input
        id='end-date'
        type='text'
        label='End Date*'
        name='end-date'
        placeholder='Enter your study end date. (MM/YYYY)'
        required={true}
        className='col-span-1'
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
