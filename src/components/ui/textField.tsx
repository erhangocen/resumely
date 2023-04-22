import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2, LucideIcon, User } from "lucide-react";
import { InputHTMLAttributes, FC, forwardRef, ReactNode } from "react";


export const textFieldVariants = cva("",
    {
        variants:{
            variant: {
                default: '',
                destructive: '',
                outline: "peer m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
              },
            scaleFactor:{
                default: "h-[58px] py-4 px-10",
                sm: "h-9 px-2 rounded-md",
                lg: "h-11 px-8 rounded-md",
            }
        },
        defaultVariants: {
            variant: 'default',
            scaleFactor: 'default',
        },
    }
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement>,
VariantProps<typeof textFieldVariants> {
    icon:ReactNode,
    label:String
}

const TextField: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
    className, icon, label, variant, scaleFactor, ...props
},ref) => {
  return (
    <>
        <input 
            className={cn(textFieldVariants({variant, scaleFactor, className}))}
            ref={ref}
            placeholder={" "}
            {...props}
        />
        <span className="dark:text-white text-black absolute scale-100 top-4 origin-[0] pl-2">
            {icon}</span>
        <label  className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-11 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">{label}</label>
    </>
    
  );
});
TextField.displayName = "TextField";

export default TextField;