import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const montech = localFont({
  src: [
    {
      path: "../assets/fonts/MONTECHV01-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/MONTECHV01-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montech.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
