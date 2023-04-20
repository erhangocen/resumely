"use client"
import { cn } from '@/lib/utils';
import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import toast, { ToastPosition, Toaster } from 'react-hot-toast';

interface ToasterProps extends HTMLAttributes<ReactNode>{
  position:ToastPosition
}

const CustomToaster = forwardRef<ReactNode, ToasterProps>(({
  position, children, ...props
}, ref) => {
  return (
    <Toaster {...props} position={position}/>
  );
});
CustomToaster.displayName = "CustomToaster";

export default CustomToaster;



