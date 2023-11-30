import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { twMerge as tw } from "tailwind-merge";

import { IconWrapper } from "~/ui/IconWrapper";
import { forwardRef } from "~/utils";

export const buttonVariants = [
  "primary",
  "outline",
  "outline-white",
  "secondary",
  "tertiary-link",
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ["sm", "md", "lg"] as const;
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Button = forwardRef(
  (
    {
      type = "button",
      className,
      variant = "primary",
      size = "md",
      left,
      right,
      disabled = false,
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      ref={ref}
      type={type}
      className={tw(
        "flex items-center gap-2 rounded-md border border-transparent font-medium focus:outline-none focus:ring-2 focus:ring-offset-0",

        !disabled && [
          variant === "primary" &&
            "bg-blue-2 hover:bg-blue focus:bg-blue-2 text-white focus:ring-blue-100",
          variant === "outline" &&
            "border-blue-2 text-blue-2 hover:border-blue hover:text-blue focus:ring-blue-100",
          variant === "outline-white" && "border-white text-white focus:ring-0",
          variant === "secondary" &&
            "text-blue hover:text-blue-2 focus:text-blue-2 bg-blue-50 hover:bg-blue-100 focus:bg-blue-50 focus:ring-blue-100",
          variant === "tertiary-link" &&
            "text-blue hover:text-blue focus:text-blue focus:ring-blue focus:ring-1",
        ],

        disabled && [
          variant === "primary" && "bg-gray-300 text-gray-400",
          variant === "outline" && "border-gray-400 text-gray-400",
          variant === "outline-white" && "border-gray-400 text-gray-400",
          variant === "secondary" && "bg-gray-300 text-gray-400",
          variant === "tertiary-link" && "text-gray-400",
        ],

        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-[18px] py-3 text-base leading-5",
        size === "lg" && "px-7 py-4 text-lg leading-[22px]",

        !children && [
          size === "sm" && "p-2",
          size === "md" && "p-3",
          size === "lg" && "p-4",
        ],

        className,
      )}
      disabled={disabled}
      {...props}
    >
      {left && <IconWrapper size={size}>{left}</IconWrapper>}
      {children}
      {right && <IconWrapper size={size}>{right}</IconWrapper>}
    </button>
  ),
);
