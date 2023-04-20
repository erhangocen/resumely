"use client"

import React, { FC, useState } from 'react';
import Button from './ui/button';
import { signIn, signOut } from 'next-auth/react';
import showToast from './ui/toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsLoading(true);
        try{
            await signOut();
        }catch(error) {
            showToast()
        }
    }

    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign In
        </Button>
    );
};

export default SignOutButton;