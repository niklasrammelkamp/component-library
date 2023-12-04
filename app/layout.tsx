import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Layout from "@/components/Layout";

const myFont = localFont({
  src: [
    {
      path: "../fonts/Stacion-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Stacion-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Stacion-Light.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/Stacion-Light-Italic.woff",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "component-library",
  description: "a library by niklas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
