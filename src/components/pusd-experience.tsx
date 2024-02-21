import BitBankIcon from "@/assets/bitbank-icon.png";
import BitzyIcon from "@/assets/bitzy-icon.png";
import EarthIcon from "@/assets/earth-icon.png";
import MetaMaskIcon from "@/assets/metamask-icon.png";
import RiveraIcon from "@/assets/rivera-icon.png";
import TizzIcon from "@/assets/tizz-icon.png";
import { NetworkCards } from "./network-cards";

export const PusdExperience = () => {
	return (
		<div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:*:w-1/2 mt-36">
			<div className="md:sticky top-72">
				<h1 className="text-[42px] font-semibold">
					A NETWORK OF APPS TO ENHANCE YOUR{" "}
					<span className="text-[#F5D64E]">PUSD EXPERIENCE</span>
				</h1>
			</div>

			{/* cards */}
			<div>
				<NetworkCards
					image={MetaMaskIcon}
					description="Send, receive, or use PUSD with the most popular Web3 wallet."
					type="WALLET"
				/>
				<NetworkCards
					image={BitBankIcon}
					description="Lend PUSD or borrow it against other collaterals."
					type="LENDING"
				/>
				<NetworkCards
					image={BitzyIcon}
					description="Buy or sell PUSD with your choice of crypto assets."
					type="DEX"
				/>
				<NetworkCards
					image={TizzIcon}
					description="Leverage trading on a range of crypto assets."
					type="PERP"
				/>
				<NetworkCards
					image={RiveraIcon}
					description="Market-making strategies for PUSD."
					type="YIELD"
				/>
				<NetworkCards
					image={EarthIcon}
					description="Earn fixed-income on PUSD."
					type="YIELD"
				/>
			</div>
		</div>
	);
};
