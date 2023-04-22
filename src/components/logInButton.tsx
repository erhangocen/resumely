"use client"
import React, { FC, useState } from 'react';
import Button from './ui/button';
import { signIn } from 'next-auth/react';
import toast from './ui/toaster';
import showToast from './ui/toast';



interface LogInButtonProps {}

const LogInButton: FC<LogInButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const logInWithGoogle =async () => {
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
        <Button onClick={logInWithGoogle} isLoading={isLoading} variant={'gradientOutline'}>
            Log In
        </Button>
    );
};

export default LogInButton;