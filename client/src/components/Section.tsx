import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", bgClassName = "" }) => {
  return (
    <section className={`w-full py-16 px-4 md:px-8 ${bgClassName} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};

export default Section; 