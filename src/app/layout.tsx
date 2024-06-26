import type { Metadata } from "next";
import {
  Rozha_One as Rozha_OneFont,
  Montserrat as MontserratFont,
} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/navBar/page";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const rozhaOne = Rozha_OneFont({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = MontserratFont({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: 'WebCoffee',
  description: 'E-commerce de café como proyecto final para la especialización de frontend en Digital House',
  keywords: 'café, latinoamerica, Brasil, Colombia, Honduras, Perú, E-commerce',
  metadataBase: new URL('https://web-coffee-ten.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://web-coffee-ten.vercel.app/',
    title: 'WebCoffee',
    description:
      'Descubre la esencia del café en nuestro E-commerce, especializado en ofrecerte los más finos granos de Brasil, Colombia, Honduras y Perú. Sumérgete en una experiencia sensorial única con nuestras selecciones de café.',
    images: [
      {
        url: 'https://web-coffee-ten.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'opengraph image from my portfolio',
        type: 'image/png',
      },
    ],
    siteName: 'https://web-coffee-ten.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCoffee',
    description:
      'Descubre la esencia del café en nuestro E-commerce, especializado en ofrecerte los más finos granos de Brasil, Colombia, Honduras y Perú. Sumérgete en una experiencia sensorial única con nuestras selecciones de café.',
    images: [
      {
        url: 'https://web-coffee-ten.vercel.app/twitter-image.png',
        width: 1200,
        height: 630,
        alt: 'image to post on twitter from my portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="android-chrome" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" type="image/png" sizes="512x512" href="/android-chrome-512x512.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://diegomarulanda.vercel.app/" />
        <title>WebCoffe</title>
      </head>
      <body className={`${rozhaOne.className} ${montserrat.className} bg-[#F6E6CB] dark:bg-[#13161c]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
