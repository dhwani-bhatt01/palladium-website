import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
	image: StaticImageData;
	desc: string;
	title: ReactNode;
};

export const TrustlessSecureCard = (props: Props) => {
	const { image, desc, title } = props;

	return (
		<div
			className={cn(
				styles.container,
				"flex flex-col items-center justify-start gap-5 px-4 py-10 cursor-pointer"
			)}
		>
			<Image src={image} alt={image.src} height={100} />
			<div className="text-center">{title}</div>
			<p className="font-Montserrat text-[16px] text-center">{desc}</p>
		</div>
	);
};
