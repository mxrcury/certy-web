import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { P } from "@/components/ui/typography";

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
        <main className="min-h-screen max-h-screen">
          <div>
            {children}
            <P>All Rights Reserved. © Certy</P>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
