import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import AnalyticsProvider from "@/components/providers/AnalyticsProvider";

const headingFont = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const buttonFont = Montserrat({
  variable: "--font-button",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affordable Plumbing | Suffolk County, NY",
  description:
    "Reliable residential and commercial plumbing in Suffolk County for 10+ years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${buttonFont.variable} antialiased bg-white text-neutral-900`}
      >
        {measurementId && (
          <>
            <Script
              id="ga4"
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${measurementId}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}
        <Suspense fallback={null}>
          <AnalyticsProvider>
            <div className="flex min-h-screen flex-col bg-white">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
