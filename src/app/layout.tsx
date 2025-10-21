import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Julian Santanatoglia - Frontend Web Developer & Designer",
  description: "Desarrollador web frontend especializado en React, Next.js y diseño UI/UX. Creo experiencias digitales modernas y funcionales. Disponible para proyectos freelance.",
  keywords: ["desarrollador web", "frontend developer", "React", "Next.js", "TypeScript", "UI/UX", "JavaScript", "portfolio"],
  authors: [{ name: "Julian Santanatoglia" }],
  creator: "Julian Santanatoglia",
  publisher: "Julian Santanatoglia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://juliansantanatoglia.dev',
    title: 'Julian Santanatoglia - Frontend Web Developer',
    description: 'Desarrollador web frontend especializado en React, Next.js y diseño UI/UX. Creo experiencias digitales modernas y funcionales.',
    siteName: 'Julian Santanatoglia Portfolio',
    images: [
      {
        url: '/foto.jpg',
        width: 1200,
        height: 630,
        alt: 'Julian Santanatoglia - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julian Santanatoglia - Frontend Web Developer',
    description: 'Desarrollador web frontend especializado en React, Next.js y diseño UI/UX.',
    images: ['/foto.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} bg-gray-900`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
