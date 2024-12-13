import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Web Development Services",
  openGraph: {
    title: "Web Development",
    description: "Web Development Services",
    type: "website",
    url: "https://example.com/web",
    siteName: "Web Development",
    locale: "en_US",
  },
};

interface WebServiceLayoutProps {
  children: React.ReactNode;
}

const WebServiceLayout = ({ children }: WebServiceLayoutProps) => {
  return <div>{children}</div>;
};

export default WebServiceLayout;
