import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { P } from "@/components/ui/typography";
import { Toaster } from "@/components/ui/toaster";

import { LayoutProps } from "@/types";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = { title: "Certy" };

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <main className="min-h-screen">
          <Toaster />
          <div className="min-h-[calc(100vh_-_55px)]">{children}</div>
          <P className="text-center">All Rights Reserved. © Certy</P>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
