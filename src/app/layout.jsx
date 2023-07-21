import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FQJG4LWVG7"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FQJG4LWVG7');
        `}
      </Script>

      <body>{children}</body>
    </html>
  );
}
