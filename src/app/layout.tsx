import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sargam Poudel | Mentor & Web3 Developer",
  description: "Portfolio of Sargam Poudel, mentor at 100xDevs and builder of solutions for the decentralized & agentic web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
