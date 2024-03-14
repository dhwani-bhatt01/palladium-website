"use client";

// import UseCaseImgOne from "@/assets/UseCaseImgOne.png";
// import UseCaseImgTwo from "@/assets/Palladium Images/Coin-tree.webp";
// import UseCaseImgThree from "@/assets/Palladium Images/Mask group-1.webp";
// import UseCaseImgFive from "@/assets/Palladium Images/Mask group-2.webp";
import UseCaseImgTwo from "@/assets/PalladiumImages/Coin-tree.webp";
import UseCaseImgFour from "@/assets/PalladiumImages/mask-group-1.webp";
import UseCaseImgFive from "@/assets/PalladiumImages/mask-group-2.webp";
import UseCaseImgThree from "@/assets/margin-trading-desktop.png";
// import UseCaseImgOne from "@/assets/Palladium Images/Network States.webp";
import UseCaseImgOne from "@/assets/PalladiumImages/NetworkStates.webp";
// import UseCaseImgOne from "@/assets/Palladium Images/Network States.webp";
import CrowdFundingYellow from "@/assets/PalladiumImages/margin-trading.svg";
import PreservingWealthYellow from "@/assets/icons/icon-four.svg";
import CrowdFundingBlack from "@/assets/icons/icon-one-black.svg";
import MarginTradingYellow from "@/assets/icons/icon-three.svg";
import YieldFarmingYellow from "@/assets/icons/icon-two.svg";
import CurrencyForNetworkStatesYellow from "@/assets/icons/icons-one.svg";
// import CurrencyForNetworkStatesBlack from "@/assets/use-case-icons/currency-for-network-states-black.png";
import PreservingWealthBlack from "@/assets/icons/icon-five-black.svg";
import MarginTradingBlack from "@/assets/icons/icon-four-black.svg";
import YieldFarmingBlack from "@/assets/icons/icon-three-black.svg";
import CurrencyForNetworkStatesBlack from "@/assets/icons/icon-two-black.svg";
// import UseCaseImgFive from "@/assets/use-case-img-five-with-shadow.png";
// import UseCaseImgFour from "@/assets/use-case-img-four-with-shadow.png";
// import UseCaseImgThree from "@/assets/use-case-img-three-with-shadow.png";
// import UseCaseImgTwo from "@/assets/use-case-img-two-with-shadow.png";
import { useState } from "react";
import { UseCaseListItem } from "./use-case-list-item";

export const UseCaseComponent = () => {
	const [selectedCase, setSelectedCase] = useState(
		"currency_for_network_states"
	);

	return (
		<div className="hidden lg:flex flex-col justify-center py-4 px-6 min-h-screen">
			<h1 className="text-[36px] text-center font-semibold mb-11">
				UNRESTRICTED <span className="text-[#F5D64E]">FINANCIAL SERVICES</span>,
				AVAILABLE TO EVERYONE{" "}
			</h1>
			<div className="grid grid-cols-[1fr_2fr] border border-[#F5D64E]">
				<div className="border border-[#F5D64E]">
					<UseCaseListItem
						label="Network States"
						icons={{
							selected: CurrencyForNetworkStatesBlack,
							notSelected: CurrencyForNetworkStatesYellow,
						}}
						isSelected={selectedCase === "currency_for_network_states"}
						value="currency_for_network_states"
						onSelect={(key) => setSelectedCase(key)}
					/>

					<UseCaseListItem
						label="Preserving Wealth"
						icons={{
							selected: PreservingWealthBlack,
							notSelected: PreservingWealthYellow,
						}}
						isSelected={selectedCase === "preserving_wealth"}
						value="preserving_wealth"
						onSelect={(key) => setSelectedCase(key)}
					/>

					<UseCaseListItem
						label="Margin Trading"
						icons={{
							selected: MarginTradingBlack,
							notSelected: MarginTradingYellow,
						}}
						isSelected={selectedCase === "margin_trading"}
						value="margin_trading"
						onSelect={(key) => setSelectedCase(key)}
					/>

					<UseCaseListItem
						label="Yield Farming"
						icons={{
							selected: YieldFarmingBlack,
							notSelected: YieldFarmingYellow,
						}}
						isSelected={selectedCase === "yield_farming"}
						value="yield_farming"
						onSelect={(key) => setSelectedCase(key)}
					/>

					<UseCaseListItem
						label="Crowd Funding"
						icons={{
							selected: CrowdFundingBlack,
							notSelected: CrowdFundingYellow,
						}}
						isSelected={selectedCase === "crowd_funding"}
						value="crowd_funding"
						onSelect={(key) => setSelectedCase(key)}
					/>
				</div>

				{/* Currency for Network States */}
				{selectedCase === "currency_for_network_states" && (
					<div
						className="w-full bg-no-repeat"
						style={{
							backgroundImage: `url(${UseCaseImgOne.src})`,
							backgroundPosition: "right",
							backgroundSize: "contain",
						}}
					>
						<div className="h-full flex flex-col justify-center bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="w-2/3 pl-12">
								<h2 className="text-[32px] font-semibold">
									Currency for Network States
								</h2>
								<p className="text-[16px] font-medium font-Montserrat">
									As digital communities expand into physical spaces, they
									require RWAs and pay vendors. PUSD, minted with BTC,
									guarantees uncensored funds, making it an optimal stablecoin
									choice.
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Preserving Wealth */}
				{selectedCase === "preserving_wealth" && (
					<div
						className="w-full bg-no-repeat"
						style={{
							backgroundImage: `url(${UseCaseImgTwo.src})`,
							backgroundPosition: "right",
						}}
					>
						<div className="h-full flex flex-col justify-center bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pl-12">
								<h2 className="text-[32px] font-semibold">Preserving Wealth</h2>
								<p className="text-[16px] font-medium font-Montserrat">
									In the midst of BTC and BRC-20 asset volatility, PUSD emerges
									as a sanctuary. It empowers investors to secure profits in
									stablecoin, safeguarding their wealth amidst market
									turbulence.
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Margin Trading */}
				{selectedCase === "margin_trading" && (
					<div
						className="w-full bg-no-repeat"
						style={{
							backgroundImage: `url(${UseCaseImgThree.src})`,
							backgroundPosition: "right",
						}}
					>
						<div className="h-full flex flex-col justify-center bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pl-12">
								<h2 className="text-[32px] font-semibold">Margin Trading</h2>
								<p className="text-[16px] font-medium font-Montserrat">
									Maximize your wealth through margin trading while maintaining
									your Bitcoin portfolio. Access liquidity against your BTC and
									utilize PUSD across wide range of perps on the BitcoinFi
									ecosystem.
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Yield Farming */}
				{selectedCase === "yield_farming" && (
					<div
						className="w-full bg-no-repeat"
						style={{
							backgroundImage: `url(${UseCaseImgFour.src})`,
							backgroundPosition: "right",
						}}
					>
						<div className="h-full flex flex-col justify-center bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pl-12">
								<h2 className="text-[32px] font-semibold">Yield Farming</h2>
								<p className="text-[16px] font-medium font-Montserrat">
									BitcoinFi introduces a groundbreaking opportunity for BTC
									holders to farm diverse projects within the ecosystem. With
									PUSD, you can participate in yield farming without risking
									your BTC holdings.
								</p>
							</div>
						</div>
					</div>
				)}

				{/* Crowd Funding */}
				{selectedCase === "crowd_funding" && (
					<div
						className="w-full bg-no-repeat"
						style={{
							backgroundImage: `url(${UseCaseImgFive.src})`,
							backgroundPosition: "right",
						}}
					>
						<div className="h-full flex flex-col justify-center bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pl-12">
								<h2 className="text-[32px] font-semibold">Crowd Funding</h2>
								<p className="text-[16px] font-medium font-Montserrat">
									Organize unstoppable crowdfunding campaigns with PUSD. Provide
									transparency through a self-audit trail of funds while
									allowing investors to participate in the campaign anonymously.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
