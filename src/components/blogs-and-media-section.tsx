import CardImgFive from "@/assets/blogs-and-media-card-images/card-image-five.png";
import CardImgFour from "@/assets/blogs-and-media-card-images/card-image-four.png";
import CardImgOne from "@/assets/blogs-and-media-card-images/card-image-one.png";
import CardImgSix from "@/assets/blogs-and-media-card-images/card-image-six.png";
import CardImgThree from "@/assets/blogs-and-media-card-images/card-image-three.png";
import CardImgTwo from "@/assets/blogs-and-media-card-images/card-image-two.png";
import { BlogsAndMediaRectangleCard } from "./blogs-and-media-rectangle-card";

export const BlogsAndMediaSection = () => {
	return (
		<div className="mt-40 py-4 px-6 max-h-full">
			<h1 className="font-semibold text-[42px]">BLOGS AND MEDIA</h1>
			<div className="grid grid-cols-3 gap-y-16 gap-x-10 grid-rows-2 mt-5">
				{/* <BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} /> */}
				<BlogsAndMediaRectangleCard
					image={CardImgOne}
					description="Introducing Pseudo-Delta-Neutral by Rivera Quant"
				/>
				<BlogsAndMediaRectangleCard
					image={CardImgTwo}
					description="⚓️Titans of Rivera⚓️ Exclusive 100 NFTs for the Top OGs."
				/>
				<BlogsAndMediaRectangleCard
					image={CardImgThree}
					description="Rivera — Liquidity Infrastructure for Mantle 🔥"
				/>
				<BlogsAndMediaRectangleCard
					image={CardImgFour}
					description="How to trust a trustless system?"
					videoLink="https://www.youtube.com/watch?v=wCYUPY9iESM&t=371s"
				/>
				<BlogsAndMediaRectangleCard
					image={CardImgFive}
					description="Evolution of Blockchain in India:The value of Ownership"
					videoLink="https://www.youtube.com/watch?v=BtTJmb0jYzE"
				/>
				<BlogsAndMediaRectangleCard
					image={CardImgSix}
					description="How to trust a trustless system?"
					videoLink="https://www.youtube.com/watch?v=wCYUPY9iESM&t=371s"
				/>
			</div>
		</div>
	);
};
