"use client";

import React, { createContext, useContext, useRef, ReactNode } from "react";

// Define the types for the context
interface ScrollContextType {
  scrollTo: (
    component:
      | "howitworks"
      | "features"
      | "langlearner"
      | "langtranslator"
      | "planyourtrip"
      | "contactus"
  ) => void;
  howItWorksRef: React.RefObject<HTMLDivElement>;
  features: React.RefObject<HTMLDivElement>;
  langLearnerRef: React.RefObject<HTMLDivElement>;
  langTranslatorRef: React.RefObject<HTMLDivElement>;
  planYourTripRef: React.RefObject<HTMLDivElement>;
  contactUsRef: React.RefObject<HTMLDivElement>;
}

// Create a context with an initial value of undefined
const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const features = useRef<HTMLDivElement>(null);
  const langLearnerRef = useRef<HTMLDivElement>(null);
  const langTranslatorRef = useRef<HTMLDivElement>(null);
  const planYourTripRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (
    component:
      | "howitworks"
      | "features"
      | "langlearner"
      | "langtranslator"
      | "planyourtrip"
      | "contactus"
  ) => {
    if (component === "howitworks" && howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "features" && features.current) {
      features.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "langlearner" && features.current) {
      features.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "langtranslator" && langTranslatorRef.current) {
      langTranslatorRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "planyourtrip" && planYourTripRef.current) {
      planYourTripRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "contactus" && contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ scrollTo, contactUsRef, howItWorksRef, features, langLearnerRef, langTranslatorRef, planYourTripRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the ScrollContext
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
