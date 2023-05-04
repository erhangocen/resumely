import { User, Mail } from 'lucide-react';
import React from 'react'
import Button from '../ui/button';
import TextField from '../ui/textField';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

export type SignUpFormInputs = {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    passwordConfrim:string
}

export default function RegisterForm() {

    const {register,getValues} = useForm<SignUpFormInputs>();

  return (
    <>
    <div className='max-w-md mt-12'>
            <form autoComplete='off'>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <TextField 
                    type='text'
                    label={"First Name"} 
                    icon={<User className='scale-75'/>} 
                    id="floating_first_name" 
                    variant={'outline'}
                    {...register('firstName')}
                    required
                  />   
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <TextField 
                    type='text'
                    label={"Last Name"} 
                    icon={<User className='scale-75'/>} 
                    id="floating_last_name" 
                    variant={'outline'}
                    {...register('lastName')}
                    required
                  /> 
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <TextField
                  type='email' 
                  label={"Email"} 
                  icon={<Mail className='scale-75'/>} 
                  id="floating_mail" 
                  variant={'outline'}
                  {...register('email')}
                  required
                /> 
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <TextField 
                  type='password'
                  label={"Password"} 
                  icon={<Lock className='scale-75'/>} 
                  id="floating_password" 
                  variant={'outline'}
                  {...register('password')}
                  required
                /> 
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <TextField 
                  type='password'
                  label={"Confrim Password"} 
                  icon={<Lock className='scale-75'/>} 
                  id="floating_password_confrim" 
                  variant={'outline'}
                  {...register('passwordConfrim')}
                  required
                />
              </div>

        <label className="relative inline-flex items-center cursor-pointer">
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><label className="text-sm leading-6 text-gray-600" id="switch-1-label">
  By clicking the Register button, you agree to our {" "}
          <a href="#" className="font-semibold text-indigo-600">Terms, Privacy Policy and Cookies Policy</a>.
        </label></span>
</label>
  
</form>
  <Button className='w-full p-0 pr-4 text-md' variant={'gradientOutline'} onClick={()=>{
    console.log(getValues());
  }}>Sign Up</Button>
  <Button className='w-full' variant={'withShadow'} >
  
  
  <svg className="w-5 h-5 mr-2 -ml-1 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  
  Sign in with Google
  </Button>
  </div>
  </>
  )
}
