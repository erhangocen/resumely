"use client"

import React, { FC, useState } from 'react';
import Button from './ui/button';
import { signIn } from 'next-auth/react';
import toast from './ui/toaster';
import showToast from './ui/toast';



interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signInWithGoogle =async () => {
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
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Sign In
        </Button>
    );
};

export default SignInButton;