import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets :["latin"], weight: ["400", "500","600"]});

export const metadata: Metadata = {
  title: "Murugu ganesan Porfolio",
  description: "Software Engineer, Technies, Technology, Open to Work",
  icons: {
    icon: '/images/dashboard.png'
  },
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
