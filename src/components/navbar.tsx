"use client";

import PalladiumFullLogo from "@/assets/Palladium Logo/Full logo.webp";
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
		<nav className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between py-4 px-6 max-w-7xl mx-auto">
			<div>
				<Image src={PalladiumFullLogo} alt="PalladiumFullLogo" />
				{/* <span className="text-[#F5D64E] font-bold text-[27px] md:text-[37px]">
					PALLADIUM
				</span> */}
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
			</div>
		</nav>
	);
};
