import { useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
	image: StaticImageData;
	description: string;
	type: string;
};

export const NetworkCards = (props: Props) => {
	const { image, description, type } = props;
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<div
			ref={ref}
			className="flex justify-between items-center px-6 py-4 border-t border-[#F5D64E]"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}
		>
			<div>
				<Image src={image} alt="MetaMaskIcon" />
				<p className="mt-2 font-Montserrat">{description}</p>
			</div>

			{/* info */}
			<div className="text-[#F5D64E] font-medium text-[15px]">{type}</div>
		</div>
	);
};
