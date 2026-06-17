import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truage — Know Your True Skin Age",
  description:
    "Truage is the Whoop for skincare. Scan your face to discover your true skin age, track your products on your Digital Shelf, and build the skincare routine that actually works for you.",
  keywords: ["skincare", "skin age", "face scan", "skincare tracker", "anti-aging", "truage"],
  openGraph: {
    title: "Truage — Know Your True Skin Age",
    description:
      "Scan your face. Get your Truage score. Build a skincare routine that works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
