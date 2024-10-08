import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ReactNode } from "react";
import Link from 'next/link';
import Logo from "@/public/logo.svg";
import Image from 'next/image';
import { Navbar } from "../components/header/Navbar";
import { DollarSign, Globe, Home } from "lucide-react";

export const navLinks = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home
  },
  {
    name: 'Courses',
    href: '/courses',
    icon: Globe
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign
  },
];

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/45 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">

            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">

              <Image src={Logo} alt="logo" className="w-8" />

              <h3 className="text-2xl">
                Nejcc <span className="text-primary">title</span>
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <Navbar />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="ml-auto flex items-center gap-x-5">
sss
          </div>
        </header>
      {children}
      </div>
    </section>
  );
}