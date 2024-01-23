import DiscordIcon from "@/assets/discord-icon.png";
import FooterPalladiumIconWithShadow from "@/assets/footer-icons/footer-palladium-icon-with-shadow.png";
import MediumIcon from "@/assets/medium-icon.png";
import TwitterIcon from "@/assets/twitter-icon.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4 mt-20">
			<div className="relative flex items-center justify-center w-full min-h-[50vh]">
				<Image
					className="absolute"
					src={FooterPalladiumIconWithShadow}
					alt="footer-palladium-icon"
				/>
				<div className="flex flex-col text-center leading-none">
					<span className="text-[54px] font-bold text-[#F5D64E] md:text-[99px] md:font-bold">
						PALLADIUM
					</span>
					<span className="text-[32px] font-bold md:text-[59px] md:font-bold md:tracking-widest">
						PROTOCOL
					</span>
				</div>
			</div>
			<span className="text-[21px] font-semibold">FOLLOW US</span>

			<div className="flex gap-6 mt-4 justify-center flex-wrap">
				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link className="flex items-center gap-2 text-[#F5D64E]" href={"#"}>
						<Image src={TwitterIcon} alt="twitter-icon" /> Twitter
					</Link>
				</div>

				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link className="flex items-center gap-2 text-[#F5D64E]" href={"#"}>
						<Image src={DiscordIcon} alt="discord-icon" /> Discord
					</Link>
				</div>

				<div className="relative w-50 py-4 px-10 corners">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Link className="flex items-center gap-2 text-[#F5D64E]" href={"#"}>
						<Image src={MediumIcon} alt="medium-icon" /> Medium
					</Link>
				</div>
			</div>
			<div className="flex flex-col justify-center gap-2 text-center mt-4 md:flex-row md:gap-20 md:mt-12">
				<span>Brand Kit</span>
				<span>Terms of Services</span>
				<span>Copyright 2024</span>
			</div>
		</div>
	);
};
