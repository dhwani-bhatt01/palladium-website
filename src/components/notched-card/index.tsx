import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { FancyButton } from "../fancy-button";
import styles from "./styles.module.css";

type Props = {
	image: StaticImageData;
	desc: string;
	btnTxt: string;
	comingSoon?: boolean;
};

export const NotchedCard = (props: Props) => {
	const { image, desc, btnTxt, comingSoon } = props;

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
				<FancyButton isColoredBackground disabled={comingSoon}>
					{btnTxt}
				</FancyButton>
				{comingSoon ? (
					<div className="text-center text-[#F5D64E] mt-2">Coming Soon</div>
				) : null}
			</div>
		</div>
	);
};
