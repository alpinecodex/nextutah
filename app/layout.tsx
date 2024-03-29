import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import Timp from "@/public/timp.webp";
import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "<NextUtah/> | Utah Next.js Developer Community",
  description:
    "<NextUtah/> is a community of developers in Utah. We host events, workshops, and meetups to help developers grow and connect with others in the community. Join us today!",
  metadataBase: new URL("https://nextutah.org"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className={GeistMono.className}>
      <body className="flex flex-col container">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
        <Copyright />
        <Mountain />
      </body>
    </Layout>
  );
}

const Copyright = () => {
  return (
    <p className="hidden z-20 lowercase md:block fixed bottom-4 right-4 text-xs">
      ©{" "}
      <a className="hover:underline" href="https://alpinecodex.com">
        alpine codex
      </a>{" "}
      \{" "}
      <a className="hover:underline" href="https://twitter.com/youngbloodcyb">
        cameron youngblood
      </a>{" "}
      \{" "}
      <a className="hover:underline" href="https://twitter.com/mitchellbwright">
        mitchell wright
      </a>{" "}
      \{" "}
      <a className="hover:underline" href="https://bridger.to">
        bridger tower
      </a>
      , All rights reserved.
    </p>
  );
};

const Mountain = () => {
  return (
    <Image
      src={Timp}
      width={1920}
      height={500}
      alt="Timpanogos Mountain in Utah"
      className="fixed grayscale bottom-0 m-auto right-0 left-0 lg:left-8 z-10 lg:-mb-20"
    />
  );
};
