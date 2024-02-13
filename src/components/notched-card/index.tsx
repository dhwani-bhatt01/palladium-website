import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
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
				"flex flex-col items-center justify-start gap-5 px-8 py-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
			)}
		>
			<Image src={image} alt={image.src} className="h-32 w-auto" />
			<h3 className="text-center">{desc}</h3>
			<div>
				<div className="relative w-50 corners p-2">
					<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
					<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
					<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
					<Button disabled={comingSoon}>{btnTxt}</Button>
				</div>
				{comingSoon ? (
					<div className="text-center text-[#F5D64E]">Coming Soon</div>
				) : null}
			</div>
		</div>
	);
};
