import SpiderIcon from "@/assets/spider-icon.png";
import SpiderMobileIcon from "@/assets/spider-mobile-image.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CroppedBorderContainer } from "./cropped-border-container";
import { FancyButton } from "./fancy-button";

export const HeroSection = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center h-[500px] md:h-[650px] gap-24">
			<div className="flex flex-col items-center gap-2">
				<span className="font-bold text-[42px] md:text-[62px] leading-none">
					WORLD&apos;S MOST RELIABLE
				</span>
				<span className="font-bold text-[42px] md:text-[62px] leading-none text-[#F5D64E]">
					STABLECOIN
				</span>
				{/* <p className="max-w-[700px] font-medium text-[18px]">
					$PUSD is a censorship-resistant USD-pegeed cryptocurrency that is
					backed by security & robustness of Bitcoin.
				</p> */}
				{/* <div className="relative w-50 corners mt-9 p-2">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Button className="">GET STARTED</Button>
				</div> */}
				<div className="mt-9">
					<FancyButton url="https://discord.gg/9MMEyJ4JDz" isColoredBackground>
						Join Community
					</FancyButton>
				</div>
			</div>
			{/* <div className="border border-[#F5D64E] p-4 [clip-path:polygon(1rem_0%,_100%_0,_100%_calc(100%_-_1rem),_calc(100%_-_1rem)_100%,_0_100%,_0%_1rem)]">
    <p className="flex text-lg font-medium">
      Strategic Partnerships with Mantle Network
      <Link className="ml-2 text-base text-[#F5D64E] flex" href="#">
        READ MORE <ArrowRight color="#f5d64e" />
      </Link>
    </p>
  </div> */}
			<div className="relative">
				<CroppedBorderContainer>
					<p className="flex flex-col py-2 md:py-0 md:flex-row gap-1 md:gap-2 text-[12px] md:text-lg items-center font-medium font-Montserrat">
						Strategic partnership with Botanix Labs
						<Link
							className="ml-2 text-[10px] md:text-[14px] items-center text-[#F5D64E] flex gap-1"
							href="https://akashgaurav.medium.com/7d77ca1c0b5c"
							target="_blank"
						>
							READ MORE <ArrowRight size={16} color="#f5d64e" />
						</Link>
					</p>
				</CroppedBorderContainer>
				<Image
					className="hidden md:block absolute -left-[4.35rem] -bottom-[4.35rem]"
					src={SpiderIcon}
					alt="spider-icon"
				/>
				<Image
					className="block md:hidden absolute -left-[2.35rem] -bottom-[3.35rem]"
					src={SpiderMobileIcon}
					alt="spider-icon"
				/>
			</div>
		</div>
	);
};
