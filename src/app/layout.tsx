import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Fucking Use Solana",
  description: "The fastest, cheapest, and most scalable blockchain on the planet. Stop overcomplicating your life and just fucking use Solana.",
  keywords: ["solana", "blockchain", "crypto", "web3", "fast", "cheap", "scalable"],
  openGraph: {
    title: "Just Fucking Use Solana",
    description: "Stop overcomplicating your life and just fucking use Solana.",
    url: "https://justfuckingusesolana.com",
    siteName: "Just Fucking Use Solana",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Just Fucking Use Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Fucking Use Solana",
    description: "Stop overcomplicating your life and just fucking use Solana.",
    images: ["/og.svg"],
  },
  metadataBase: new URL("https://justfuckingusesolana.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
