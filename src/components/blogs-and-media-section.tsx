import CardImgFive from "@/assets/blogs-and-media-card-images/card-image-five.png";
import CardImgFour from "@/assets/blogs-and-media-card-images/card-image-four.png";
import CardImgOne from "@/assets/blogs-and-media-card-images/card-image-one.png";
import CardImgSix from "@/assets/blogs-and-media-card-images/card-image-six.png";
import CardImgThree from "@/assets/blogs-and-media-card-images/card-image-three.png";
import CardImgTwo from "@/assets/blogs-and-media-card-images/card-image-two.png";
import { StaticImageData } from "next/image";
import { BlogsAndMediaRectangleCard } from "./blogs-and-media-rectangle-card";

type BlogAndMediaCardPayload = {
	image: StaticImageData;
	description: string;
	id: number;
	videoLink?: string;
};

export const BlogsAndMediaSection = () => {
	const blogsAndMediaData: BlogAndMediaCardPayload[] = [
		{
			id: 1,
			image: CardImgOne,
			description: "Introducing Pseudo-Delta-Neutral by Rivera Quant",
		},
		{
			id: 2,
			image: CardImgTwo,
			description: "⚓️Titans of Rivera⚓️ Exclusive 100 NFTs for the Top OGs.",
		},
		{
			id: 3,
			image: CardImgThree,
			description: "Rivera — Liquidity Infrastructure for Mantle 🔥",
		},
		{
			id: 4,
			image: CardImgFour,
			description: "How to trust a trustless system?",
			videoLink:
				"https://www.youtube.com/embed/wCYUPY9iESM?si=6ZqFECxkZpIO1H0F",
		},
		{
			id: 5,
			image: CardImgFive,
			description: "Evolution of Blockchain in India:The value of Ownership",
			videoLink:
				"https://www.youtube.com/embed/BtTJmb0jYzE?si=vjt2RtGGxWgU4PqO",
		},
		{
			id: 6,
			image: CardImgSix,
			description: "How to trust a trustless system?",
			videoLink:
				"https://www.youtube.com/embed/wCYUPY9iESM?si=rkxyUXG6AEVsXyM6",
		},
	];

	return (
		<div className="mt-40 py-4 px-6 max-h-full">
			<h1 className="font-semibold text-[42px] text-center md:text-left mb-10">
				BLOGS AND MEDIA
			</h1>
			<div className="grid gap-16 justify-center md:grid-cols-3 md:grid-rows-2 mt-5">
				{blogsAndMediaData.map((item) => {
					return (
						<BlogsAndMediaRectangleCard
							key={item.id}
							image={item.image}
							// description={item.descripts̄ion}
							videoLink={item.videoLink}
						/>
					);
				})}
			</div>
		</div>
	);
};
