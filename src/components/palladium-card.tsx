import BitCoinIcon from "@/assets/bitcoin-fire-icon.png";
import Image from "next/image";
import { Button } from "./ui/button";

export const PalladiumCard = () => {
	return (
		<div className="flex flex-col gap-10 items-center border border-[#F5D64E] p-8 ">
			<Image src={BitCoinIcon} alt="bitcoin" />
			<h3 className="text-center">Get Interest-Free Liquidity on Bitcoin</h3>
			<Button disabled>MINI PUSD</Button>
		</div>
	);
};
