import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({ href, children, variant = "primary", className = "" }: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all duration-200 text-center inline-block";
  const variants = {
    primary: "bg-[#9945FF] text-white hover:bg-[#8338ec] shadow-[0_0_20px_rgba(153,69,255,0.4)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  };

  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

