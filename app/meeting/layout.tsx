import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Meeting",
  description: "Book a meeting with us",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://askstudio.agency/meeting",
    siteName: "ASK Studio",
  },
};

interface MeetingLayoutProps {
  children: React.ReactNode;
}

const MeetingLayout = ({ children }: MeetingLayoutProps) => {
  return <div>{children}</div>;
};

export default MeetingLayout;
