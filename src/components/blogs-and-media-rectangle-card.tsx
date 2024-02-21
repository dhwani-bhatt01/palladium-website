import Image, { StaticImageData } from "next/image";
import { MediaModal } from "./media-modal";

type Props = {
	image: StaticImageData;
	description: string;
	videoLink?: string;
};

export const BlogsAndMediaRectangleCard = (props: Props) => {
	const { description, image, videoLink } = props;

	return (
		<div className="flex flex-col gap-4 font-Montserrat relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
			<div className="w-full max-w-sm border border-[#F5D64E] relative">
				<Image
					className="overflow-hidden w-full"
					src={image.src}
					alt="image"
					width={382}
					height={300}
				/>
				{videoLink && (
					<div className="absolute inset-0 flex items-center justify-center">
						<MediaModal title={description} videoSrc={videoLink} />
					</div>
				)}
			</div>
			<div className="max-w-[382px]">{description}</div>
		</div>
	);
};
