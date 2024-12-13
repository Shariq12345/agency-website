import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UI/UX Design Service",
  description: "Design Service",
  openGraph: {
    title: "UI/UX Design Service",
    description: "Design Service",
    type: "website",
    url: "https://example.com/design",
    siteName: "UI/UX Design Service",
    locale: "en_US",
  },
};

interface DesignServiceLayoutProps {
  children: React.ReactNode;
}

const DesignServiceLayout = ({ children }: DesignServiceLayoutProps) => {
  return <div>{children}</div>;
};

export default DesignServiceLayout;
