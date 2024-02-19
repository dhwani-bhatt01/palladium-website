import { PlayCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
	image: StaticImageData;
	description: string;
	videoLink?: string;
};

export const BlogsAndMediaRectangleCard = (props: Props) => {
	const { description, image, videoLink } = props;

	const renderCard = () => {
		if (videoLink) {
			// If videoLink is provided, render card with video link
			return (
				<Link href={videoLink}>
					<div className=" absolute inset-0 flex items-center justify-center">
						<PlayCircle color="#F5D64E" strokeWidth={1.75} size={40} />
					</div>
				</Link>
			);
		} else {
			// If no videoLink provided, render card without video link
			return (
				<div className="absolute inset-0 flex items-center justify-center">
					{/* You can also add a placeholder or any other content here */}
				</div>
			);
		}
	};

	return (
		<div className="flex flex-col gap-4 font-Montserrat relative">
			<div className="w-full max-w-sm border border-[#F5D64E] relative">
				<Image
					className="overflow-hidden w-full"
					src={image.src}
					alt="image"
					width={400}
					height={300}
				/>
				{videoLink && (
					<Link href={videoLink}>
						<div className="absolute inset-0 flex items-center justify-center">
							<PlayCircle color="#F5D64E" strokeWidth={1.75} size={40} />
						</div>
					</Link>
				)}
			</div>
			<div>{description}</div>
		</div>
	);
};
