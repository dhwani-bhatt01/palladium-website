// import CardImgFive from "@/assets/blogs-and-media-card-images/card-image-five.png";
// import CardImgFour from "@/assets/blogs-and-media-card-images/card-image-four.png";
// import CardImgOne from "@/assets/blogs-and-media-card-images/card-image-one.png";
// import CardImgSix from "@/assets/blogs-and-media-card-images/card-image-six.png";
// import CardImgThree from "@/assets/blogs-and-media-card-images/card-image-three.png";
// import CardImgTwo from "@/assets/blogs-and-media-card-images/card-image-two.png";
import CardImgSix from "@/assets/Thumbnails/botanix-labs.webp";
import CardImgFive from "@/assets/Thumbnails/palladium-protocol.webp";
import CardImgThree from "@/assets/Thumbnails/trust-trustless-system.webp";
import NewCardImg1 from "@/assets/blogs-and-media-card-images/card-image-new-1.png";
import NewCardImg2 from "@/assets/blogs-and-media-card-images/card-image-new-2.png";
import NewCardImg3 from "@/assets/blogs-and-media-card-images/card-image-new-three.png";
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
		{
			id: 1,
			image: CardImgThree,
			videoLink:
				"https://www.youtube.com/embed/wCYUPY9iESM?si=6ZqFECxkZpIO1H0F",
		},
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
		{
			id: 4,
			image: NewCardImg1,
			videoLink:
				"https://www.youtube.com/embed/hlR42r_b6VI?si=gkH3r8doDSs2KWpi",
		},
		{
			id: 5,
			image: NewCardImg2,
			url: "https://www.nasdaq.com/articles/palladium-and-botanix-labs-launches-bitcoin-native-stablecoin-on-bitcoins-first-evm-layer",
		},
		{
			id: 6,
			image: NewCardImg3,
			url: "https://bitcoinmagazine.com/business/palladium-and-botanix-labs-launches-bitcoin-native-stablecoin-on-bitcoins-first-evm-layer-2",
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
