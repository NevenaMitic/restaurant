import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/layout/NavBar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/layout/Footer";
import ScrollToUp from "@/components/layout/ScrollToUp";


export const metadata: Metadata = {
  title: "TSUBAKI",
  description: "TSUBAKI - Sushi Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Navbar />
          {children}
          <ScrollToUp />
          <ToasterProvider />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
