import CardImageOne from "@/assets/blogs-and-media-card-images/card-image-one.png";
import { BlogsAndMediaCard } from "./blogs-and-media-notched-card";

export const BlogsAndMediaSection = () => {
	return (
		<div className="mt-10 py-4 px-6 min-h-screen">
			<h1 className="font-semibold text-[42px]">BLOGS AND MEDIA</h1>
			<div className="grid grid-cols-3 gap-y-16 gap-x-10 grid-rows-2 mt-5">
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
				<BlogsAndMediaCard backgroundImage={CardImageOne} />
			</div>
		</div>
	);
};
