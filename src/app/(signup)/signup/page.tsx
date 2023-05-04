"use client"
import Button from '@/components/ui/button'
import TextField from '@/components/ui/textField'
import Input from '@/components/ui/textField'
import LargeHeading from '@/components/ui/largeHeading'
import { Lock, Mail, PersonStanding, Sun, User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import RegisterForm from '@/components/forms/registerForm';

export default function signUpPage() {
  return (
    <div className='w-full flex justify-center pt-24 h-screen'>
        <div>
          <div className='flex justify-center'>
            <LargeHeading 
                className='text-center w-fit three-d text-black dark:text-light-gold pt-2'>
                Sign Up
              </LargeHeading> 
          </div>
          <RegisterForm/>
  <label className="relative inline-flex items-center cursor-pointer pt-3 w-full justify-center">

            <span className="mx-5 text-sm font-medium text-gray-900 dark:text-gray-300"><label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                You already have an account?  {" "}
              <Link href="login" className="font-semibold text-indigo-600">Log In!</Link>
            </label></span>
          </label>
        </div>
        
        </div>
  )
}
