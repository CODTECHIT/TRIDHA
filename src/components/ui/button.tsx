import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // THRIDHA custom variants
        "THRIDHA-primary": "bg-secondary text-secondary-foreground shadow-[0_2px_8px_rgba(0,132,214,0.15)] hover:bg-primary hover:shadow-[0_8px_24px_rgba(0,84,214,0.3)] active:scale-[0.98]",
        "THRIDHA-secondary": "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
        "THRIDHA-cta": "bg-gold text-primary font-bold shadow-[0_4px_12px_rgba(212,175,55,0.2)] hover:bg-gold-bright hover:shadow-[0_12px_32px_rgba(212,175,55,0.4)]",
        "THRIDHA-hero": "bg-secondary text-secondary-foreground shadow-[0_2px_8px_rgba(0,132,214,0.15)] hover:bg-primary hover:shadow-[0_8px_24px_rgba(0,84,214,0.3)] text-lg",
      },
      size: {
        default: "h-11 px-8 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-lg",
        xl: "h-16 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
