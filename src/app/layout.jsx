import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600"],
  style: "normal",
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <meta
        name="google-site-verification"
        content="09e4RzwyRmQtS4eQSX4XtPELVTTN0km0Sq5i-EsSQr8"
      />
      <link rel="canonical" href="https://www.seoweblab.click" />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N28SVHBHEE"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N28SVHBHEE');
        `}
      </Script>

      <body>{children}</body>
    </html>
  );
}
