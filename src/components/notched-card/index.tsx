import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { BorderButton } from "../border-button";
import styles from "./styles.module.css";

type Props = {
	image: StaticImageData;
	desc: string;
	btnTxt: string;
	comingSoon?: boolean;
	url?: string;
};

export const NotchedCard = (props: Props) => {
	const { image, desc, btnTxt, comingSoon, url } = props;

	const handleButtonClick = () => {
		if (url) {
			window.open(url, "_blank");
		}
	};

	return (
		<div
			className={cn(
				styles.container,
				"flex flex-col items-center justify-start gap-5 px-8 py-16 cursor-pointer"
			)}
		>
			<Image src={image} alt={image.src} className="h-32 w-auto" />
			<h3 className="text-center font-Montserrat">{desc}</h3>
			<div>
				{/* <FancyButton
					onClick={handleButtonClick}
					isColoredBackground
					disabled={comingSoon}
				>
					{btnTxt}
				</FancyButton> */}
				<BorderButton onClick={handleButtonClick} disabled={comingSoon}>
					<div className="py-1 px-4 text-black bg-[#F5D64E]">{btnTxt}</div>
				</BorderButton>
				{comingSoon ? (
					<div className="text-center text-[12px] text-[#F5D64E] mt-2">
						Coming Soon
					</div>
				) : null}
			</div>
		</div>
	);
};
