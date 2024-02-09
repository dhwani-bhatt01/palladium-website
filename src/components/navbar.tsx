"use client";

import DiscordIcon from "@/assets/discord-icon.png";
import DocsIcon from "@/assets/docs-icon.png";
import MediumIcon from "@/assets/medium-icon.png";
import TwitterIcon from "@/assets/twitter-icon.png";
import Image from "next/image";
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
		<nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
			<div>
				<span className="text-[#F5D64E] font-bold text-[27px] md:text-[37px]">
					PALLADIUM
				</span>
			</div>
			<div className="flex items-center gap-4 md:gap-8">
				<div className="flex items-center gap-4 md:gap-8">
					<div>
						<Image src={TwitterIcon} alt="twitter icon" />
					</div>
					<div>
						<Image src={DiscordIcon} alt="twitter icon" />
					</div>
					<div>
						<Image src={MediumIcon} alt="twitter icon" />
					</div>
					<div>
						<Image src={DocsIcon} alt="twitter icon" />
					</div>
				</div>

				{/* <button>Launch App</button> */}
				{/* <div className="hidden md:block md:relative w-50 corners p-2">
          <div className="md:absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
          <div className="md:absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
          <div className="md:absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
          <div className="md:absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
          <Button>Launch App</Button>
        </div> */}
			</div>
		</nav>
	);
};
