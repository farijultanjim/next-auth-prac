import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import ToasterContext from "@/context/ToasterContext";

export const metadata: Metadata = {
  title: "Next AUTH",
  description: "-",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Navigation />
        {children}
        <ToasterContext />
      </body>
    </html>
  );
}
