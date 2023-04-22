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
        <div className='max-w-md mt-12'>
          <form autoComplete='off'>

            <div className="relative z-0 w-full mb-6 group">
              <TextField
                type='email'
                label={"Email"}
                icon={<Mail className='scale-75' />}
                id="floating_mail"
                name="floating_mail"
                variant={'outline'}
                required
              />
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <TextField
                type='password'
                label={"Password"}
                icon={<Lock className='scale-75' />}
                id="floating_password"
                name="floating_password"
                variant={'outline'}
                required
              />
            </div>

            <div className="flex items-start justify-between py-2">
              <div className='flex'>
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" defaultChecked className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>

              <label className="relative inline-flex items-center cursor-pointer justify-end">

                <span className="mx-5 text-sm font-medium text-gray-900 dark:text-gray-300"><label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                  <a href="#" className="font-semibold text-indigo-600">Forgot Password?</a>
                </label></span>
              </label>
            </div>



          </form>
          <Button className='w-full p-0 pr-4 text-md' variant={'gradientOutline'}>Sign Up</Button>
          <Button className='w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:text-slate-900 text-base font-semibold' >
            <svg className="w-5 h-5 mr-2 -ml-1 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>

            Sign in with Google
          </Button>
          <label className="relative inline-flex items-center cursor-pointer pt-3">

            <span className="mx-5 text-sm font-medium text-gray-900 dark:text-gray-300"><label className="text-sm leading-6 text-gray-600" id="switch-1-label">
              You have no resumely account?  {" "}
              <Link href="signup" className="font-semibold text-indigo-600">Sign Up!</Link>
            </label></span>
          </label>
        </div>

      </div>

    </div>
  )
}
