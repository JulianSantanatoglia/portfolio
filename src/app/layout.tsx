import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Santanatoglia - Frontend Web Developer", // Cambia el título
  description: "Portfolio de Julian Santanatoglia, desarrollador web frontend", // Cambia la descripción
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gray-900 `${inter.variable} ${robotoMono.variable}`"}>
        <Header />
        {children}
      </body>
    </html>
  );
}