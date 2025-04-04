import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rightGrotesk = localFont({
  src: [
    {
      path: "./fonts/PPRightGroteskText-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPRightGroteskText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPRightGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPRightGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPRightGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PPRightGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-right-grotesk",
});

const rightGothic = localFont({
  src: [
    {
      path: "./fonts/PPRightGothic-SpatialBlackItalic.woff",
      weight: "900",
      // style: "italic",
    },
    {
      path: "./fonts/PPRightGothic-SpatialBlackItalic.woff2",
      weight: "900",
      // style: "italic",
    },
  ],
  variable: "--font-right-gothic",
});

export const metadata: Metadata = {
  title: "STRIKEOUT",
  description:
    "A startup accelerator competition. Shine the brightest or strike out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rightGothic.variable} ${rightGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
