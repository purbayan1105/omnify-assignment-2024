import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800"],
  variable: "--var-inter--",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className={inter_init.variable}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
