import SpiderIcon from "@/assets/spider-icon.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CroppedBorderContainer } from "./cropped-border-container";
import { FancyButton } from "./fancy-button";

export const HeroSection = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center min-h-screen gap-24">
			<div className="flex flex-col items-center gap-2">
				<span className="font-bold text-[42px] md:text-[62px] leading-none">
					WORLD&apos;S MOST RELIABLE
				</span>
				<span className="font-bold text-[42px] md:text-[62px] leading-none text-[#F5D64E]">
					STABLE COIN
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
					<FancyButton>Get Started</FancyButton>
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
					<p className="flex text-lg font-medium items-center">
						Strategic Partnerships with Botanix Network
						<Link className="ml-2 text-base text-[#F5D64E] flex" href="#">
							READ MORE <ArrowRight color="#f5d64e" />
						</Link>
					</p>
				</CroppedBorderContainer>
				<Image
					className="absolute -left-[4.35rem] -bottom-[4.35rem]"
					src={SpiderIcon}
					alt="spider-icon"
				/>
			</div>
		</div>
	);
};
