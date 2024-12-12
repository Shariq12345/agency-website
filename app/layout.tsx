import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

import { SpeedInsights } from "@vercel/speed-insights/next";

// const inter = Inter({ subsets: ["latin"] });
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASK Digital - Web Development, Mobile Development, UI/UX Design",
  description:
    "ASK Digital is a web development agency that specializes in web development, mobile development, and UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SpeedInsights />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
