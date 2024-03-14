// import CardImgFive from "@/assets/blogs-and-media-card-images/card-image-five.png";
// import CardImgFour from "@/assets/blogs-and-media-card-images/card-image-four.png";
// import CardImgOne from "@/assets/blogs-and-media-card-images/card-image-one.png";
// import CardImgSix from "@/assets/blogs-and-media-card-images/card-image-six.png";
// import CardImgThree from "@/assets/blogs-and-media-card-images/card-image-three.png";
// import CardImgTwo from "@/assets/blogs-and-media-card-images/card-image-two.png";
import CardImgSix from "@/assets/Thumbnails/botanix-labs.webp";
import CardImgFive from "@/assets/Thumbnails/palladium-protocol.webp";
import CardImgThree from "@/assets/Thumbnails/trust-trustless-system.webp";
import { StaticImageData } from "next/image";
import { BlogsAndMediaRectangleCard } from "./blogs-and-media-rectangle-card";

type BlogAndMediaCardPayload = {
	image: StaticImageData;
	// description: string;
	id: number;
	videoLink?: string;
	url?: string;
};

export const BlogsAndMediaSection = () => {
	const blogsAndMediaData: BlogAndMediaCardPayload[] = [
		// {
		// 	id: 1,
		// 	image: CardImgOne,
		// 	videoLink:
		// 		"https://www.youtube.com/embed/wCYUPY9iESM?si=rkxyUXG6AEVsXyM6",
		// },
		// {
		// 	id: 2,
		// 	image: CardImgTwo,
		// 	videoLink:
		// 		"https://www.youtube.com/embed/BtTJmb0jYzE?si=vjt2RtGGxWgU4PqO",
		// },
		{
			id: 1,
			image: CardImgThree,
			videoLink:
				"https://www.youtube.com/embed/wCYUPY9iESM?si=6ZqFECxkZpIO1H0F",
		},
		// {
		// 	id: 4,
		// 	image: CardImgFour,
		// },
		{
			id: 2,
			image: CardImgFive,
			url: "https://akashgaurav.medium.com/3596eb5c4778",
			// description: "Evolution of Blockchain in India:The value of Ownership",
		},
		{
			id: 3,
			image: CardImgSix,
			url: "https://akashgaurav.medium.com/7d77ca1c0b5c",
			// description: "How to trust a trustless system?",
		},
	];

	return (
		<div className="mt-40 py-4 px-6">
			<h1 className="font-semibold text-[27px] md:text-[42px] text-center mb-5 md:mb-10">
				BLOGS AND MEDIA
			</h1>
			<div className="grid gap-16 justify-center md:grid-cols-3 md:grid-rows-1 mt-5">
				{blogsAndMediaData.map((item) => {
					return (
						<BlogsAndMediaRectangleCard
							key={item.id}
							image={item.image}
							// description={item.descriptsion}
							url={item.url}
							videoLink={item.videoLink}
						/>
					);
				})}
			</div>
		</div>
	);
};
