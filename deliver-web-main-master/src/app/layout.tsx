"Use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivers",
  description: "Delivery all yours packages in few times",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <link rel="icon" href="assets/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
