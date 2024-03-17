import localFont from "next/dist/compiled/@next/font/dist/local";
import Image from "next/image";
import { ReactNode } from "react";
import glowPng from "@/assets/glow-bg/glow-bg.webp";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "h-screen overflow-y-auto overflow-x-hidden relative bg-[radial-gradient(#5E5222_1.5px,_transparent_1.5px)] [background-size:30px_30px] bg-[#0A0A0A] bg-fixed"
      )}
    >
      <Image
        alt="Glow Background"
        src={glowPng}
        className="h-[1600px] z-0 fixed top-[-34%] left-[-44%]"
      />

      <Image
        alt="Glow Background"
        src={glowPng}
        className="h-[1200px] z-0 fixed bottom-[-63%] right-[-45%]"
      />

      <div className="z-10 relative">{children}</div>
      <div className="dark">
        <Toaster />
      </div>
    </div>
  );
}
