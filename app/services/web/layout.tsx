import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Web Development Services",
};

interface WebServiceLayoutProps {
  children: React.ReactNode;
}

const WebServiceLayout = ({ children }: WebServiceLayoutProps) => {
  return <div>{children}</div>;
};

export default WebServiceLayout;
