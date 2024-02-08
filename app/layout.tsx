import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "./globals.css";
import { Instrument_Serif } from "next/font/google";

const font = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "pool house studio",
  description:
    "design and development studio by bridger tower and cameron youngblood. shipping soon!",
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
      className={`${font.className} no-scrollbar`}
    >
      <body className="font-sans min-h-screen dark:bg-[#0029FE] text-xl">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="flex flex-col container">{children}</main>
          <p className="hidden lowercase md:block fixed bottom-4 right-4 text-xs">
            ©{" "}
            <a className="hover:underline" href="https://cameron.so">
              cameron youngblood
            </a>{" "}
            \{" "}
            <a className="hover:underline" href="https://bridger.to">
              bridger tower
            </a>
            , All rights reserved.
          </p>
        </ThemeProvider>
      </body>
    </html>
  );
}
