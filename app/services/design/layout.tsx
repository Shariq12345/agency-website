import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UI/UX Design Service",
  description: "Design Service",
};

interface DesignServiceLayoutProps {
  children: React.ReactNode;
}

const DesignServiceLayout = ({ children }: DesignServiceLayoutProps) => {
  return <div>{children}</div>;
};

export default DesignServiceLayout;
