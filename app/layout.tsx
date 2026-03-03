import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "./providers/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import * as font from '../app/font/fonts'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSS Playground",
  description: "A place to share CSS code snippets and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-start items-center-safe min-h-screen bg-background text-foreground pt-20`}
      >
       <ThemeProviderWrapper>

        <nav className="fixed top-1 left-0 z-50 flex flex-row justify-between w-full pl-10 pr-10 py-4 bg-background/8 backdrop-blur-md">

          <div className={`${font.exo2.className} font-bold`}>
            CSSStorage
          </div>

          <div>
          <ThemeToggle />
          </div>
        </nav>

         {children}
       </ThemeProviderWrapper>
      </body>
    </html>
  );
}