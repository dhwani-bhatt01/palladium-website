"use client";

import PalladiumFullLogo from "@/assets/Palladium Logo/Full logo.webp";
import PalladiumLogo from "@/assets/Palladium Logo/Logo icon.webp";
import DiscordIcon from "@/assets/discord-icon.png";
import DocsIcon from "@/assets/docs-icon.png";
import MediumIcon from "@/assets/medium-icon.png";
import TwitterIcon from "@/assets/twitter-icon.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
    <nav className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
      <div>
        <Image
          className="hidden md:block"
          src={PalladiumFullLogo}
          alt="PalladiumFullLogo"
        />
        <Image
          className="block md:hidden"
          src={PalladiumLogo}
          alt="PalladiumLogo"
        />
        {/* <span className="text-[#F5D64E] font-bold text-[27px] md:text-[37px]">
					PALLADIUM
				</span> */}
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="https://twitter.com/PalladiumLabs" target="_blank">
            <Image src={TwitterIcon} alt="twitter icon" />
          </Link>
          <Link href="https://discord.gg/9MMEyJ4JDz" target="_blank">
            <Image src={DiscordIcon} alt="twitter icon" />
          </Link>
          <Link href="https://medium.com/palladium-labs" target="_blank">
            <Image src={MediumIcon} alt="twitter icon" />
          </Link>
          <Link target="_blank" href="https://docs.palladiumlabs.org/">
            <Image src={DocsIcon} alt="twitter icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
