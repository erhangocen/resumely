import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import {Loader2} from "lucide-react";

export const buttonVariants = cva("active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none my-3",
    {
        variants:{
            variant: {
                default:
                  'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
                destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
                outline:
                  'ring ring-blue-900 ring-1 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
                subtle:
                  'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
                ghost:
                  'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
                link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
                gradient: "p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
                gradientOutline: "ring dark:ring-blue-900 ring-blue-200 ring-1 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",

                withShadow:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:text-slate-900 text-base font-semibold",
              },
            size:{
                default: "h-10 py-2 px-4",
                sm: "h-9 px-2 rounded-md",
                lg: "h-11 px-8 rounded-md",
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
    isLoading?:boolean
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children, variant, isLoading, size, ...props
},ref) => {
  return (
    <button 
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        disabled={isLoading}
        {...props}
    >
        {isLoading? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null}
        {children}
    </button>
  );
});
Button.displayName = "Button";

export default Button;