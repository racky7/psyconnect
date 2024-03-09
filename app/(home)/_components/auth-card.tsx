import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type AuthCardType = {
  children: React.ReactNode;
  isSignup: boolean;
};

export default function AuthCard({ isSignup, children }: AuthCardType) {
  const heading = isSignup ? "Sign Up" : "Log In";
  const subheading = isSignup
    ? "Already have an account?"
    : "New to PsyConnect?";
  const linkText = isSignup ? "Log In" : "Sign Up";
  const linkHref = isSignup ? "log-in" : "sign-up";

  return (
    <div className="w-[400px] flex flex-col items-center space-y-5">
      <div className="text-3xl font-medium ">{heading}</div>
      <Separator className="w-20 h-[2px] bg-teal-950" />
      <div className="text-2xl font-medium">
        {subheading}{" "}
        <Link className="underline text-teal-600" href={linkHref}>
          {linkText}
        </Link>
      </div>
      {children}
    </div>
  );
}
