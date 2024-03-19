import DiscordIcon from "@/assets/discord-icon.png";
import DocsIcon from "@/assets/docs-icon.png";
// import FooterPalladiumIconWithShadow from "@/assets/footer-icons/footer-palladium-icon-with-shadow.png";
// import FooterPalladiumIconWithShadow from "@/assets/footer-icons/footer-icon-new.png";
import FooterPalladiumIconWithShadow from "@/assets/footer-icons/Opacity-logo-with-text.webp";
import MediumIcon from "@/assets/medium-icon.png";
import TwitterIcon from "@/assets/twitter-icon.png";
import Image from "next/image";
import Link from "next/link";
import { InputWithButton } from "./email-input";

export const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4 mt-20">
			<div className="relative flex items-center justify-center w-full min-h-[50vh]">
				<Image
					className="absolute"
					src={FooterPalladiumIconWithShadow}
					alt="footer-palladium-icon"
				/>
				{/* <div className="flex flex-col text-center leading-none">
					<span className="text-[54px] font-bold text-[#F5D64E] md:text-[99px] md:font-bold">
						PALLADIUM
					</span>
					<span className="text-[32px] font-bold md:text-[59px] md:font-bold md:tracking-widest">
						PROTOCOL
					</span>
				</div> */}
			</div>
			<InputWithButton />
			{/* <span className="text-[21px] font-semibold">JOIN THE COMMUNITY</span> */}

			<div className="md:flex hidden gap-16 mt-4 justify-center flex-wrap">
				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://twitter.com/PalladiumLabs"
						target="_blank"
					>
						<Image src={TwitterIcon} alt="twitter-icon" /> Twitter
					</Link>
				</div>

				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://discord.gg/9MMEyJ4JDz"
						target="_blank"
					>
						<Image src={DiscordIcon} alt="discord-icon" /> Discord
					</Link>
				</div>

				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://medium.com/palladium-labs"
						target="_blank"
					>
						<Image src={MediumIcon} alt="medium-icon" /> Medium
					</Link>
				</div>

				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://docs.palladiumlabs.org/"
						target="_blank"
					>
						<Image src={DocsIcon} alt="docs-icon" /> Docs
					</Link>
				</div>
			</div>

			<div className="flex gap-6 mt-4 md:hidden justify-center flex-wrap">
				<div className="relative w-30 py-4 px-4 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://twitter.com/PalladiumLabs"
						target="_blank"
					>
						<Image src={TwitterIcon} alt="twitter-icon" /> Twitter
					</Link>
				</div>

				<div className="relative w-30 py-4 px-4  corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://discord.gg/9MMEyJ4JDz"
						target="_blank"
					>
						<Image src={DiscordIcon} alt="discord-icon" /> Discord
					</Link>
				</div>

				<div className="relative w-30 py-4 px-4  corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://medium.com/palladium-labs"
						target="_blank"
					>
						<Image src={MediumIcon} alt="medium-icon" /> Medium
					</Link>
				</div>

				<div className="relative w-30 py-4 px-4  corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link
						className="flex items-center gap-2 text-[#F5D64E] font-Montserrat"
						href="https://docs.palladiumlabs.org/"
						target="_blank"
					>
						<Image src={DocsIcon} alt="docs-icon" /> Docs
					</Link>
				</div>
			</div>

			<div className="flex flex-col justify-center gap-2 text-center mt-4 md:flex-row md:gap-20 md:mt-12 font-Montserrat">
				<span>
					<Link href="https://docs.palladiumlabs.org/" target="_blank">
						Litepaper
					</Link>
				</span>
				<span>
					<Link
						href="https://docs.palladiumlabs.org/information/brand-kit"
						target="_blank"
					>
						Brand Kit
					</Link>
				</span>
				<span>
					<Link href="/privacy-policy" target="_blank">
						Privacy Policy
					</Link>
				</span>
			</div>
			<span className="font-Montserrat text-[12px] text-[#83827d] mt-2">
				Palladium Protocol Copyright 2024
			</span>
		</div>
	);
};
