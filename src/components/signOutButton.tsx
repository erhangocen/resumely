"use client"

import React, { FC, useState } from 'react';
import Button from './ui/button';
import { signIn, signOut } from 'next-auth/react';
import { toast } from './ui/toaster';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsLoading(true);
        try{
            await signOut();
        }catch(error) {
            toast({
                title: "Error signing out",
                message: "Please try again later",
                type: "error"
            })
        }
    }

    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign In
        </Button>
    );
};

export default SignOutButton;