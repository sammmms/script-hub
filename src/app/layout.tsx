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
  title: "script.wsnsam.my.id — Samuel's Automation Scripts & Agent Hub",
  description:
    "Showcase of zero-touch CLI daemons built for streaks, daily game claims, and peace of mind. Featuring 1-click 'Let Agent Do It' autonomous AI setup and centralized version update API.",
  authors: [{ name: "Samuel Onasis", url: "https://wsnsam.my.id" }],
  keywords: [
    "tiktok streak",
    "snapchat streak",
    "hoyolab checkin",
    "automation scripts",
    "cli automation",
    "playwright stealth",
    "macos launchagent",
    "samuel onasis",
    "let agent do it"
  ],
  openGraph: {
    title: "script.wsnsam.my.id — Samuel's Automation Hub",
    description:
      "Zero-touch CLI daemons for streaks & check-ins with 1-click 'Let Agent Do It' autonomous dispatch.",
    url: "https://script.wsnsam.my.id",
    siteName: "Samuel's Script Showcase",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070709] text-neutral-200">
        {children}
      </body>
    </html>
  );
}
