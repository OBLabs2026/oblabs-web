import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OB Labs | Modern Technology Solutions",
  description: "OB Labs builds cutting edge software and mobile games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
