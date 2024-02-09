"use client";

import UseCaseImgOne from "@/assets/UseCaseImgOne.png";
import CurrencyForNetworkStatesBlack from "@/assets/use-case-icons/currency-for-network-states-black.png";
import CurrencyForNetworkStatesYellow from "@/assets/use-case-icons/currency-for-network-states-yellow.png";
import MarginTradingBlack from "@/assets/use-case-icons/margin-trading-black.png";
import MarginTradingYellow from "@/assets/use-case-icons/margin-trading-yellow.png";
import PreservingWealthBlack from "@/assets/use-case-icons/preserving-wealth-black.png";
import PreservingWealthYellow from "@/assets/use-case-icons/preserving-wealth-yellow.png";
import YieldFarmingBlack from "@/assets/use-case-icons/yield-farming-black.png";
import YieldFarmingYellow from "@/assets/use-case-icons/yield-farming-yellow.png";
import UseCaseImgFive from "@/assets/use-case-img-five-with-shadow.png";
import UseCaseImgFour from "@/assets/use-case-img-four-with-shadow.png";
import UseCaseImgThree from "@/assets/use-case-img-three-with-shadow.png";
import UseCaseImgTwo from "@/assets/use-case-img-two-with-shadow.png";
import { useState } from "react";
import { UseCaseListItem } from "./use-case-list-item";

export const UseCaseComponent = () => {
	const [selectedCase, setSelectedCase] = useState(
		"currency_for_network_states"
	);

	return (
		<div className="hidden md:flex flex-col justify-center py-4 px-6 min-h-screen">
			<h1 className="text-[36px] text-center font-semibold mb-11">
				UNRESTRICTED <span className="text-[#F5D64E]">FINANCIAL SERVICES</span>,
				AVAILABLE TO EVERYONE{" "}
			</h1>
			<div className="grid grid-cols-[1fr_2fr] border border-[#F5D64E]">
				<div className="border border-[#F5D64E]">
					<UseCaseListItem
						label="Currency for Network States"
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
							selected: YieldFarmingBlack,
							notSelected: YieldFarmingYellow,
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
						}}
					>
						<div className="h-full bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="w-2/3 pt-12 pl-12">
								<h2 className="text-[32px] font-semibold">
									Currency for Network States
								</h2>
								<p className="text-[16px] font-medium">
									Palladium employs an algorithmic monetary policy. There is no
									governance, DAO, or admin keys to ensure protocol can never be
									censored or manipulated.
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
						<div className="h-full bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pt-12 pl-12">
								<h2 className="text-[32px] font-semibold">Preserving Wealth</h2>
								<p className="text-[16px] font-medium">
									Palladium employs an algorithmic monetary policy. There is no
									governance, DAO, or admin keys to ensure protocol can never be
									censored or manipulated.
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
						<div className="h-full bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pt-12 pl-12">
								<h2 className="text-[32px] font-semibold">Margin Trading</h2>
								<p className="text-[16px] font-medium">
									Palladium employs an algorithmic monetary policy. There is no
									governance, DAO, or admin keys to ensure protocol can never be
									censored or manipulated.
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
						<div className="h-full bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pt-12 pl-12">
								<h2 className="text-[32px] font-semibold">Yield Farming</h2>
								<p className="text-[16px] font-medium">
									Palladium employs an algorithmic monetary policy. There is no
									governance, DAO, or admin keys to ensure protocol can never be
									censored or manipulated.
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
						<div className="h-full bg-[linear-gradient(159deg,_#F5D64E_-215.6%,_rgba(245,_214,_78,_0.00)_55.93%)]">
							<div className="flex flex-col w-2/3 pt-12 pl-12">
								<h2 className="text-[32px] font-semibold">Crowd Funding</h2>
								<p className="text-[16px] font-medium">
									Palladium employs an algorithmic monetary policy. There is no
									governance, DAO, or admin keys to ensure protocol can never be
									censored or manipulated.
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
