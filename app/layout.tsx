import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Global/Nav";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Quiz App built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
