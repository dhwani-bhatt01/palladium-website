import PlayBtn from "@/assets/play-button.svg";
import SpiderIcon from "@/assets/spider-icon.png";
import SpiderMobileIcon from "@/assets/spider-mobile-image.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BorderButton } from "./border-button";
import { CroppedBorderContainer } from "./cropped-border-container";
import { MediaModal } from "./media-modal";

type Props = {
	// image: StaticImageData;
	// description?: string;
	videoLink?: string;
	// url?: string;
};

export const HeroSection = (props: Props) => {
	const { videoLink } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	// useEffect(() => {
	// 	if (isModalOpen) {
	// 		// Load YouTube iframe API script when component mounts
	// 		const script = document.createElement("script");
	// 		script.src = "https://www.youtube.com/iframe_api";
	// 		document.body.appendChild(script);

	// 		// Clean up function
	// 		return () => {
	// 			document.body.removeChild(script);
	// 		};
	// 	}
	// }, [isModalOpen]);

	return (
		<div className="flex flex-col items-center justify-center text-center h-[650px] gap-24">
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
				<div className="mt-9 flex flex-col md:flex-row gap-5">
					{/* <FancyButton isColoredBackground>Join Community</FancyButton> */}
					{/* <FancyButton isTransparent onClick={openModal}>
						<div className="flex items-center gap-2">
							<Image src={PlayBtn} alt="play-btn" width={40} />
							<span className="text-[#F5D64E]">WATCH VIDEO</span>
						</div>
					</FancyButton> */}
					<MediaModal
						videoSrc={videoLink ?? ""}
						isOpen={isModalOpen}
						onClose={closeModal}
					/>
					<BorderButton url="https://discord.com/invite/9MMEyJ4JDz">
						<div className="py-1 px-4 text-black bg-[#F5D64E]">
							JOIN COMMUNITY
						</div>
					</BorderButton>
					<BorderButton onClick={openModal}>
						<div className="flex items-center gap-2">
							<Image src={PlayBtn} alt="play-btn" width={40} />
							<span className="text-[#F5D64E]">WATCH VIDEO</span>
						</div>
					</BorderButton>
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
