import BitcoinIcon from "@/assets/Palladium Images/bitcoin-fire-icon.webp";
import CoinIcon from "@/assets/Palladium Images/coin-icon.webp";
import RewardIcon from "@/assets/Palladium Images/reward-icon.webp";
import ToolIcon from "@/assets/Palladium Images/tool-icon.webp";
import { NotchedCard } from "./notched-card";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const GetStartedSection = () => {
	return (
		<div className="flex flex-col mt-40 gap-16 px-6">
			<div className="font-semibold text-[42px] text-center">
				GET STARTED WITH
				<span className="text-[#F5D64E]"> PALLADIUM PROTOCOL</span>
			</div>
			<div className="flex justify-center gap-10 flex-wrap">
				<NotchedCard
					image={BitcoinIcon}
					desc="Get Interest-Free Liquidity on Bitcoin"
					btnTxt="MINI PUSD"
					comingSoon
				/>
				<NotchedCard
					image={RewardIcon}
					desc="Earn Rewards with Stability Pool"
					btnTxt="MINI PUSD"
					comingSoon
				/>
				<NotchedCard
					image={ToolIcon}
					desc="Build Uncensorable Financial Apps"
					btnTxt="GET STARTED"
				/>
				<NotchedCard
					image={CoinIcon}
					desc="Palladium Token for Value Accrual"
					btnTxt="GET STARTED"
				/>
			</div>
		</div>
	);
};
