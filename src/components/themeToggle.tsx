"use client"

import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import Button from './ui/button';
import { Moon, Sun } from 'lucide-react';
import Icons from './icons';
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import useHasMounted from '@/lib/hasMounted';
import hasMounted from '@/lib/hasMounted';

export interface ThemeToggleProps {
}

const ThemeToggle: FC<ThemeToggleProps> = () => {

  const { theme, setTheme } = useTheme();

  let isLightTheme:boolean = (theme == "light");

  const changeTheme = () => {
    if(isLightTheme){
      setTheme("dark");
    }
    else{
      setTheme("light");
    }
  }

  return (
      <Button variant={"ghost"} size={"sm"} onClick={changeTheme}>
      {
        useHasMounted() && isLightTheme ? (
        <Icons.Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100'/>
          
        ) : (
          <Icons.Moon className='rotate-90 scale-0 transition-all hover:text-slate-900 dark:-rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100'/>
        )
      }
    </Button>
  );
};

export default ThemeToggle;