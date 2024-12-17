import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our commitment to data protection and privacy.",
};

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default PrivacyLayout;
