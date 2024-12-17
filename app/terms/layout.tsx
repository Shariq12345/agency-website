import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our commitment to quality and service excellence.",
};

const TermsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default TermsLayout;
