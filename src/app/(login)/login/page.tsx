import LoginForm from '@/components/forms/loginForm'
import Button from '@/components/ui/button'
import LargeHeading from '@/components/ui/largeHeading'
import TextField from '@/components/ui/textField'
import { Lock, Mail, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function logInPage() {
  return (
    <div className='w-full flex justify-center pt-48 h-screen'>
      <div className='w-80'>
        <div className='flex justify-center'>
          <LargeHeading
            className='text-center w-fit three-d text-black dark:text-light-gold '>
            LOG IN
          </LargeHeading>
        </div>
        <LoginForm/>
          <label className="relative inline-flex items-center cursor-pointer pt-3">

            <span className="mx-5 text-sm font-medium text-gray-900 dark:text-gray-300"><label className="text-sm leading-6 text-gray-600" id="switch-1-label">
              You have no resumely account?  {" "}
              <Link href="signup" className="font-semibold text-indigo-600">Sign Up!</Link>
            </label></span>
          </label>
        </div>

      </div>

  )
}
