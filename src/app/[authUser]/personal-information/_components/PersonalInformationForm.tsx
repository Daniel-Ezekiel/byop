import Input from "@/app/_components/global/Input";

function PersonalInformationForm() {
  return (
    <>
      <Input
        id='firstName'
        type='text'
        label='First Name*'
        name='firstName'
        placeholder='Enter your first name'
        required={true}
        className='col-span-1'
      />

      <Input
        id='lastName'
        type='text'
        label='Last Name*'
        name='lastName'
        placeholder='Enter your last name'
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
      />

      <Input
        id='location'
        type='text'
        label='Location*'
        name='location'
        placeholder='Enter your location (state only)'
        required={true}
      />
    </>
  );
}

export default PersonalInformationForm;
