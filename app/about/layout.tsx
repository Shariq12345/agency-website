import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ASK Studio is a digital agency that delivers expert web development, mobile apps, and UI/UX design. Build innovative, user-friendly solutions tailored to your business needs.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://askstudio.agency/about",
    siteName: "ASK Studio",
  },
};

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return <div>{children}</div>;
};

export default AboutLayout;
