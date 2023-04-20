import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { buttonVariants } from './ui/button';
import SignInButton from './signInButton';
import SignOutButton from './signOutButton';
import ThemeToggle from './themeToggle';

export interface NavbarProps {
    height: number;
}

const Navbar = async ({ }) => {

    const session = await getServerSession();

    return (
        <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b dark:border-slate-800 shadow-sm flex items-center justify-between'>
            <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                <Link href="/" className={buttonVariants({ variant: "link" })}>
                    Resumely 0.1 (Alpha)
                </Link>

                <div className='md:hidden'>
                    <ThemeToggle />
                </div>

                {<div className='hidden md:flex gap-4'>
                    <ThemeToggle />
                    <Link href={"/documentation"} className={buttonVariants({ variant: "ghost" })}>
                        Documentation
                    </Link>

                    {session ? (
                        <>
                            <Link className={buttonVariants({ variant: "ghost" })}
                                href={"/dashboard"}>
                                Dashboard
                            </Link>
                            <SignOutButton />
                        </>
                    ) : <SignInButton />}
                </div>}
            </div>
        </div>
    );
};

export default Navbar;