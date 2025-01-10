import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { OrganizationSchema } from "@/components/structured-data";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://askstudio.agency"),
  title: {
    default:
      "ASK Studio | Professional Web Development, UI/UX Design & Digital Marketing Agency",
    template: "%s | ASK Studio",
  },
  description:
    "ASK Studio is a leading digital agency specializing in web development, UI/UX design, and digital marketing solutions. Transform your business with our innovative digital solutions.",
  keywords: [
    "web development",
    "UI/UX design",
    "digital marketing",
    "SEO services",
    "mobile app development",
    "web design agency",
    "digital agency India",
  ],
  authors: [{ name: "ASK Studio" }],
  creator: "ASK Studio",
  publisher: "ASK Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "ASK Studio | Creative Digital Agency",
    description:
      "Transform your business with our innovative digital solutions. Expert web development, UI/UX design, and digital marketing services.",
    creator: "@askstudio",
    images: "/og-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://askstudio.agency",
    siteName: "ASK Studio",
    title: "ASK Studio | Creative Digital Agency",
    description:
      "Transform your business with our innovative digital solutions. Expert web development, UI/UX design, and digital marketing services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASK Studio - Digital Agency",
      },
    ],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Toaster />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
