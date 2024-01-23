import { BgBluredGradientLeft } from "@/components/bg-blured-gradient-left";
import { BgBluredGradientRight } from "@/components/bg-blured-gradient-right";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import glowPng from "@/assets/glow-bg/glow-bg.png";

// const inter = Inter({ subsets: ["latin"] });

const montech = localFont({
  src: [
    {
      path: "./fonts/MONTECHV01-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/MONTECHV01-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MONTECHV01-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          montech.className,
          "h-screen overflow-y-auto overflow-x-hidden relative bg-[radial-gradient(#5E5222_1.5px,_transparent_1.5px)] [background-size:30px_30px] bg-[#0A0A0A] bg-fixed"
        )}
      >
        <Navbar />
        <img
          alt="Glow Background"
          src={glowPng.src}
          className="h-[1600px] z-0 fixed top-[-34%] left-[-44%]"
        />

        <img
          alt="Glow Background"
          src={glowPng.src}
          className="h-[1200px] z-0 fixed bottom-[-63%] right-[-45%]"
        />

        <div className="z-10 relative">{children}</div>
      </body>
    </html>
  );
}
