import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Professional Web Development Services | Custom Web Solutions",
  description:
    "Transform your business with our expert web development services. We build scalable, modern web applications using React, Next.js, and cutting-edge technologies.",
  openGraph: {
    title: "Professional Web Development Services | ASK Studio",
    description:
      "Transform your business with our expert web development services. We build scalable, modern web applications using React, Next.js, and cutting-edge technologies.",
    type: "website",
    url: "https://askstudio.agency/services/web",
    siteName: "ASK Studio",
    locale: "en_US",
    images: [
      {
        url: "/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },
};

interface WebServiceLayoutProps {
  children: React.ReactNode;
}

const WebServiceLayout = ({ children }: WebServiceLayoutProps) => {
  return <div>{children}</div>;
};

export default WebServiceLayout;
