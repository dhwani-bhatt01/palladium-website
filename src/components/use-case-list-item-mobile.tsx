import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

type Props = {
	image: StaticImageData;
	headingLabel: string;
	description: string;
};

export const UseCaseListItemMobile = (props: Props) => {
	const { image, headingLabel, description } = props;
	return (
		<div className="flex flex-col items-start justify-center border border-[#F5D64E] relative">
			<div className="absolute top-0 left-0 h-1/2 w-full bg-[linear-gradient(165deg,_#F5D64E_-235.96%,_rgba(245,_214,_78,_0.00)_60.05%)]" />
			<Image className="w-full" src={image} alt="currency-img" />
			<h1 className="text-[32px] font-semibold py-2 px-6">{headingLabel}</h1>
			<p className="text-[16px] font-medium py-2 px-6">{description}</p>
			<div className="relative w-50 corners m-6 p-2">
				<div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#F5D64E]"></div>
				<div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#F5D64E]"></div>
				<div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#F5D64E]"></div>
				<div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#F5D64E]"></div>
				<Button className="">READ MORE</Button>
			</div>
		</div>
	);
};
