import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "./globals.css";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import Timp from "@/public/timp.webp";

export const metadata: Metadata = {
  title: "Alpine.dev | Utah Developer Community",
  description:
    "Alpine.dev is a community of developers in Utah. We host events, workshops, and meetups to help developers grow and connect with others in the community. Join us today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistMono.className} no-scrollbar`}
    >
      <body className="font-light min-h-screen text-xl">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex flex-col container">{children}</main>
          <p className="hidden z-20 lowercase md:block fixed bottom-4 right-4 text-xs">
            ©{" "}
            <a className="hover:underline" href="https://alpinecodex.com">
              alpine codex
            </a>{" "}
            \{" "}
            <a className="hover:underline" href="https://cameron.so">
              cameron youngblood
            </a>{" "}
            \{" "}
            <a className="hover:underline" href="https://bridger.to">
              bridger tower
            </a>
            , All rights reserved.
          </p>
          <Image
            src={Timp}
            width={1920}
            height={500}
            alt="Timpanogos Mountain in Utah"
            className="fixed bottom-0 right-0 z-10"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
