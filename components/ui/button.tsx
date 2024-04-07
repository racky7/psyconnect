import { cloneElement, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Spinner from "../spinner";

export const buttonVariants = cva(
  "inline-flex items-center justify-center space-x-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[loading=true]:opacity-50",
  {
    variants: {
      variant: {
        default:
          "shadow bg-teal-600 text-primary-foreground hover:bg-teal-600/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-full px-8",
        icon: "h-9 w-9 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("flex-shrink-0", {
  variants: {
    type: {
      withChildren: "!h-4 !w-4",
      withoutChildren: "block !h-4 !w-4",
    },
  },
  defaultVariants: {
    type: "withChildren",
  },
});

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
BaseButton.displayName = "BaseButton";

type ButtonProps = Omit<BaseButtonProps, "asChild"> & {
  loading?: boolean;
  icon?: React.ReactElement<{ className?: string }>;
  iconPosition?: "left" | "right";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, icon, iconPosition = "left", children, ...props }, ref) => {
    const iconElement = icon
      ? cloneElement(icon, {
          className: cn(
            iconVariants({
              type: children ? "withChildren" : "withoutChildren",
            }),
            icon.props.className,
            "text-current"
          ),
        })
      : null;

    return (
      <BaseButton {...props} asChild={false} data-loading={loading} ref={ref}>
        {loading ? (
          <Spinner
            className={cn(
              iconVariants({
                type: children ? "withChildren" : "withoutChildren",
              }),
              "text-current"
            )}
          />
        ) : (
          iconPosition === "left" && iconElement
        )}
        {children ? <span>{children}</span> : null}
        {iconPosition === "right" && iconElement}
      </BaseButton>
    );
  }
);

Button.displayName = "Button";

export { BaseButton, Button };
