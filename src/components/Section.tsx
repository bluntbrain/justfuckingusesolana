import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  className?: string;
};

export const Section = ({ className = "", ...props }: SectionProps) => (
  <section {...props} className={`py-24 px-6 max-w-7xl mx-auto ${className}`} />
);

