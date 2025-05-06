
import React from 'react';

type SectionProps = {
  title: string;
  isOpen: boolean;
  toggleSection: () => void;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, isOpen, toggleSection, children }) => (
  <div className=" md:mb-6 ">
    <div
      className="cursor-pointer font-semibold mx-auto max-w-2xl    flex justify-center items-center text-2xl md:text-3xl xl:text-xl xxl:text-3xl select-none"
      onClick={toggleSection}
    >
      {title}
      <span className={`transform ml-4 transition-transform duration-300 text-white/90 ${isOpen ? "rotate-180" : ""}`}>
        ▼
      </span>
    </div>
    <div
      className={`mt-2 pl-1  overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
    >
      {children}
    </div>
  </div>
);

export default Section;
