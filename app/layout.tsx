import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs4Talents",
  description: "Une entreprise innovante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
     

        {children}
     
        </body>
    </html>
  );
}
