import dynamic from "next/dynamic";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const GoogleAnalytics = dynamic(() => import("./components/GoogleAnalytics"), {
  ssr: false,
});
const GoogleAnalytics2 = dynamic(
  () => import("./components/GoogleAnalytics2"),
  { ssr: false }
);
const GoogleAnalytics3 = dynamic(
  () => import("./components/GoogleAnalytics3"),
  { ssr: false }
);

export const metadata = {
  title: "FRANCE PUITS CANADIEN",
  description: "FRANCE PUITS CANADIEN",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} sizes="any" />
      </Head>
      <body>
        {/* noscript for Google Tag Manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4XM8XMR"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* Google Analytics GA4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YGCT8E4BKF"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YGCT8E4BKF', { 'debug_mode': true });
            `,
          }}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-80T20RP4QR', { 'debug_mode': true });
            `,
          }}
        />
        {/* Dynamic Google Analytics components */}
        <GoogleAnalytics />
        <GoogleAnalytics2 />
        <GoogleAnalytics3 />
        {children}
        {/* Cookie script */}
        <script
          type="text/javascript"
          src="//cdn.cookie-script.com/s/4f1f26edf20ff1a4316cdc2db7a405e2.js"
          defer
        ></script>
      </body>
    </html>
  );
}
