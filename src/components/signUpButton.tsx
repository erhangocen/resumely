"use client"
import React, { FC, useState } from 'react';
import Button from './ui/button';
import { signIn } from 'next-auth/react';
import toast from './ui/toaster';
import showToast from './ui/toast';



interface SignUpButtonProps {}

const SignUpButton: FC<SignUpButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUpWithGoogle =async () => {
        setIsLoading(true);
        try{
            /* await signIn("google"); */
            showToast()
        }catch(error) {
            /* toast({
                title: "Error signing in",
            }) */
        }
    }

    return (
        <Button onClick={signUpWithGoogle} isLoading={isLoading} variant={'ghost'}>
            Sign Up
        </Button>
    );
};

export default SignUpButton;