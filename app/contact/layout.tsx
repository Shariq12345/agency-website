import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for more information",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://askstudio.agency/contact",
    siteName: "ASK Studio",
  },
};

interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return <div>{children}</div>;
};

export default ContactLayout;
