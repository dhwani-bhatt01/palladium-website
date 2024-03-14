import UseCaseImgOne from "@/assets/UseCaseImgOne.png";
// import CrowdFundingYellow from "@/assets/use-case-icons/crowd-funding-yellow.png";
// import CrowdFundingBlack from "@/assets/use-case-icons/crowd-funding-black.svg";
// import CrowdFundingYellow from "@/assets/use-case-icons/crowd-funding-yellow.svg";
// import CurrencyForNetworkStatesBlack from "@/assets/use-case-icons/currency-for-network-states-black.png";
// import CurrencyForNetworkStatesYellow from "@/assets/use-case-icons/currency-for-network-states-yellow.png";
// import MarginTradingBlack from "@/assets/use-case-icons/margin-trading-black.png";
// import MarginTradingYellow from "@/assets/use-case-icons/margin-trading-yellow.png";
// import PreservingWealthBlack from "@/assets/use-case-icons/preserving-wealth-black.png";
// import PreservingWealthYellow from "@/assets/use-case-icons/preserving-wealth-yellow.png";
// import YieldFarmingBlack from "@/assets/use-case-icons/yield-farming-black.png";
// import YieldFarmingYellow from "@/assets/use-case-icons/yield-farming-yellow.png";
import CrowdFundingYellow from "@/assets/PalladiumImages/margin-trading.svg";
import PreservingWealthBlack from "@/assets/icons/icon-five-black.svg";
import MarginTradingBlack from "@/assets/icons/icon-four-black.svg";
import PreservingWealthYellow from "@/assets/icons/icon-four.svg";
import CrowdFundingBlack from "@/assets/icons/icon-one-black.svg";
import YieldFarmingBlack from "@/assets/icons/icon-three-black.svg";
import MarginTradingYellow from "@/assets/icons/icon-three.svg";
import CurrencyForNetworkStatesBlack from "@/assets/icons/icon-two-black.svg";
import YieldFarmingYellow from "@/assets/icons/icon-two.svg";
import CurrencyForNetworkStatesYellow from "@/assets/icons/icons-one.svg";
import UseCaseImgFive from "@/assets/use-case-img-five-with-shadow.png";
import UseCaseImgFour from "@/assets/use-case-img-four-with-shadow.png";
import UseCaseImgThree from "@/assets/use-case-img-three-with-shadow.png";
import UseCaseImgTwo from "@/assets/use-case-img-two-with-shadow.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const UseCaseMobileComponentV2 = () => {
	const [itemOpened, setItemOpened] = useState<string>(
		"currency_for_network_states"
	);

	return (
		<>
			<div className="text-[22px] font-semibold text-center">
				Unrestricted <span className="text-[#F5D64E]">Financial Services </span>
				available to everyone.
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-full mt-10 px-6"
				value={itemOpened}
				onValueChange={(e) => setItemOpened(e)}
				defaultValue="currency_for_network_states"
			>
				{/* Item One */}
				<AccordionItem value="currency_for_network_states">
					<AccordionTrigger>
						<div
							className={cn("flex items-center gap-4", {
								"text-black": itemOpened === "currency_for_network_states",
							})}
						>
							<Image
								src={
									itemOpened === "currency_for_network_states"
										? CurrencyForNetworkStatesBlack
										: CurrencyForNetworkStatesYellow
								}
								alt="usecaseimgone"
								height={56}
								width={56}
							/>
							<span className="text-inherit text-[16px] font-Montserrat">
								Network States
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgOne.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[300px] p-6 flex flex-col justify-center">
							<h2 className="text-[20px] leading-7 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								As digital communities expand into physical spaces, they require
								RWAs and pay vendors. PUSD, minted with BTC, guarantees
								uncensored funds, making it an optimal stablecoin choice.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Two */}
				<AccordionItem value="preserving_wealth">
					{/* <AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Preserving Wealth</span>
						</div>
					</AccordionTrigger> */}
					<AccordionTrigger>
						<div
							className={cn("flex items-center gap-4", {
								"text-black": itemOpened === "preserving_wealth",
							})}
						>
							<Image
								src={
									itemOpened === "preserving_wealth"
										? PreservingWealthBlack
										: PreservingWealthYellow
								}
								alt="usecaseimgone"
								height={56}
								width={56}
							/>
							<span className="text-inherit text-[16px] font-Montserrat">
								Preserving Wealth
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgTwo.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[300px] p-6 flex flex-col justify-center">
							<h2 className="text-[20px] leading-7 font-semibold">
								Preserving Wealth
							</h2>
							<p className="text-[16px] font-medium">
								In the midst of BTC and BRC-20 asset volatility, PUSD emerges as
								a sanctuary. It empowers investors to secure profits in
								stablecoin, safeguarding their wealth amidst market turbulence.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Three*/}
				<AccordionItem value="margin_trading">
					{/* <AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Margin Trading</span>
						</div>
					</AccordionTrigger> */}
					<AccordionTrigger>
						<div
							className={cn("flex items-center gap-4", {
								"text-black": itemOpened === "margin_trading",
							})}
						>
							<Image
								src={
									itemOpened === "margin_trading"
										? MarginTradingBlack
										: MarginTradingYellow
								}
								alt="usecaseimgone"
								height={56}
								width={56}
							/>
							<span className="text-inherit text-[16px] font-Montserrat">
								Margin Trading
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgThree.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[300px] p-6 flex flex-col justify-center">
							<h2 className="text-[20px] leading-7 font-semibold">
								Margin Trading
							</h2>
							<p className="text-[16px] font-medium">
								Maximize your wealth through margin trading while maintaining
								your Bitcoin portfolio. Access liquidity against your BTC and
								utilize PUSD across wide range of perps on the BitcoinFi
								ecosystem.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Four */}
				<AccordionItem value="yield_farming">
					{/* <AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Yield Farming</span>
						</div>
					</AccordionTrigger> */}
					<AccordionTrigger>
						<div
							className={cn("flex items-center gap-4", {
								"text-black": itemOpened === "yield_farming",
							})}
						>
							<Image
								src={
									itemOpened === "yield_farming"
										? YieldFarmingBlack
										: YieldFarmingYellow
								}
								alt="usecaseimgone"
								height={56}
								width={56}
							/>
							<span className="text-inherit text-[16px] font-Montserrat">
								Yield Farming
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgFour.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[300px] p-6 flex flex-col justify-center">
							<h2 className="text-[20px] leading-7 font-semibold">
								Yield Farming
							</h2>
							<p className="text-[16px] font-medium">
								BitcoinFi introduces a groundbreaking opportunity for BTC
								holders to farm diverse projects within the ecosystem. With
								PUSD, you can participate in yield farming without risking your
								BTC holdings.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Five */}
				<AccordionItem value="crowd_funding">
					{/* <AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Currency for Network States</span>
						</div>
					</AccordionTrigger> */}
					<AccordionTrigger>
						<div
							className={cn("flex items-center gap-4", {
								"text-black": itemOpened === "crowd_funding",
							})}
						>
							<Image
								src={
									itemOpened === "crowd_funding"
										? CrowdFundingBlack
										: CrowdFundingYellow
								}
								alt="usecaseimgone"
								height={56}
								width={56}
							/>

							<span className="text-inherit text-[16px] font-Montserrat">
								Crowd Funding
							</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgFive.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[300px] p-6 flex flex-col justify-center">
							<h2 className="text-[20px] leading-7 font-semibold">
								Crowd Funding
							</h2>
							<p className="text-[16px] font-medium">
								Organize unstoppable crowdfunding campaigns with PUSD. Provide
								transparency through a self-audit trail of funds while allowing
								investors to participate in the campaign anonymously.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
};
