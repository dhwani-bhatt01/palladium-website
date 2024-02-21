// import CurrencyForNetworkStatesBlack from "@/assets/use-case-icons/currency-for-network-states-black.png";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "@/components/ui/accordion";
// // import UseCaseImgFour from "@/assets/use-case-img-four-with-shadow.png";
// // import UseCaseImgThree from "@/assets/use-case-img-three-with-shadow.png";
// // import UseCaseImgTwo from "@/assets/use-case-img-two-with-shadow.png";
// import Image from "next/image";

// export const UseCaseMobileComponentV2 = () => {
// 	return (
// 		<Accordion
// 			type="single"
// 			collapsible
// 			className="w-full mt-10"
// 			onChange={(e) => {
// 				console.log(e);
// 			}}
// 		>
// 			<AccordionItem value="item-1">
// 				<AccordionTrigger>
// 					<div className="flex items-center gap-3">
// 						<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
// 						<span className="text-inherit">Currency for Network States</span>
// 					</div>
// 				</AccordionTrigger>
// 				<AccordionContent>
// 					Yes. It adheres to the WAI-ARIA design pattern.
// 				</AccordionContent>
// 			</AccordionItem>

// 			<AccordionItem value="item-2">
// 				<AccordionTrigger>Is it styled?</AccordionTrigger>
// 				<AccordionContent>
// 					Yes. It comes with default styles that matches the other
// 					components&apos; aesthetic.
// 				</AccordionContent>
// 			</AccordionItem>
// 			<AccordionItem value="item-3">
// 				<AccordionTrigger>Is it animated?</AccordionTrigger>
// 				<AccordionContent>
// 					Yes. It&apos;s animated by default, but you can disable it if you
// 					prefer.
// 				</AccordionContent>
// 			</AccordionItem>
// 		</Accordion>
// 	);
// };

import UseCaseImgOne from "@/assets/UseCaseImgOne.png";
import CurrencyForNetworkStatesBlack from "@/assets/use-case-icons/currency-for-network-states-black.png";
import UseCaseImgFour from "@/assets/use-case-img-four-with-shadow.png";
import UseCaseImgThree from "@/assets/use-case-img-three-with-shadow.png";
import UseCaseImgTwo from "@/assets/use-case-img-two-with-shadow.png";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const UseCaseMobileComponentV2 = () => {
	return (
		<>
			<div className="text-[22px] font-semibold text-center">
				Unrestricted <span className="text-[#F5D64E]">Financial Services </span>
				available to everyone.
			</div>
			<Accordion type="single" collapsible className="w-full mt-10 px-6">
				{/* Item One */}
				<AccordionItem value="currency_for_network_states">
					<AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Currency for Network States</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgOne.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[400px] p-6 flex flex-col justify-center">
							<h2 className="text-[32px] leading-9 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Two */}
				<AccordionItem value="preserving_wealth">
					<AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Preserving Wealth</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgTwo.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[400px] p-6 flex flex-col justify-center">
							<h2 className="text-[32px] leading-9 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Three*/}
				<AccordionItem value="margin_trading">
					<AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Margin Trading</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgThree.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[400px] p-6 flex flex-col justify-center">
							<h2 className="text-[32px] leading-9 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Four */}
				<AccordionItem value="yield_farming">
					<AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Yield Farming</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgFour.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[400px] p-6 flex flex-col justify-center">
							<h2 className="text-[32px] leading-9 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* Item Five */}
				<AccordionItem value="crowd_funding">
					<AccordionTrigger>
						<div className="flex items-center gap-3">
							<Image src={CurrencyForNetworkStatesBlack} alt="usecaseimgone" />
							<span className="text-inherit">Currency for Network States</span>
						</div>
					</AccordionTrigger>
					<AccordionContent
						style={{
							backgroundImage: `url(${UseCaseImgFour.src})`,
							backgroundPosition: "right",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="min-h-[400px] p-6 flex flex-col justify-center">
							<h2 className="text-[32px] leading-9 font-semibold">
								Currency for Network States
							</h2>
							<p className="text-[16px] font-medium">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
};
