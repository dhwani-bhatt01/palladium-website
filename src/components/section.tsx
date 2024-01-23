import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
	image: StaticImageData;
	titleYellow: string;
	titleWhite: string;
	descripton: string;
};

export const Section = (props: Props) => {
	const { titleYellow, titleWhite, descripton, image } = props;
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-4">
			<div>
				<Image src={image} alt="Icon one" />
			</div>
			<span className=" text-[31px] text-center md:text-6xl font-semibold">
				<span className="text-[#F5D64E]">{titleYellow}</span> {titleWhite}
			</span>
			<p className="max-w-2xl text-center text-[14px] font-normal md:font-medium md:text-xl">
				{descripton}
			</p>

			{/* Corner CSS */}
			<div className="relative w-50 py-4 px-10 corners mt-9">
				<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
				<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
				<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
				<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
				<Link className="flex items-center gap-1 text-[#F5D64E]" href={"#"}>
					READ MORE <ArrowRight color="#F5D64E" />
				</Link>
			</div>
		</div>
	);
};
