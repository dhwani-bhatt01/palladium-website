import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { MediaModal } from "./media-modal";

type Props = {
	image: StaticImageData;
	// description?: string;
	videoLink?: string;
	url?: string;
};

export const BlogsAndMediaRectangleCard = (props: Props) => {
	const { image, videoLink, url } = props;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col gap-4 font-Montserrat relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
			<Image
				className="overflow-hidden w-full"
				src={image.src}
				alt="image"
				width={382}
				height={300}
				// onClick={videoLink ? openModal : undefined}
				onClick={videoLink ? openModal : () => window.open(url, "_blank")}
			/>
			{videoLink && isModalOpen && (
				<MediaModal
					videoSrc={videoLink ?? ""}
					isOpen={isModalOpen}
					onClose={closeModal}
				/>
			)}
			{/* <div className="max-w-[382px]">{description}</div> */}
		</div>
	);
};
