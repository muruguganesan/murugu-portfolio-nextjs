import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murugu ganesan Porfolio",
  description: "Software Engineer, Technies, Technology, Open to Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="wrapper">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
