import TrustlessImageOne from "@/assets/use-case-icons/trustless-image-one.png";
import TrustlessImageThree from "@/assets/use-case-icons/trustless-image-three.png";
import TrustlessImageTwo from "@/assets/use-case-icons/trustless-image-two.png";
import { TrustlessSecureCard } from "./trustless-secure-card";

export const TrustlessSection = () => {
	return (
		<div className="flex flex-col mt-20 mb-32 gap-16 px-6">
			<div className="font-semibold text-[27px] md:text-[42px] text-center">
				Trustless & Secure
			</div>
			<div className="flex flex-col md:flex-row justify-center gap-10">
				<TrustlessSecureCard
					desc="Lorem ipsum dolor sit amet consectetur. Sagittis aliquam sit senectus ut dictum dictum est ullamcorper elit. Aliquam consequat leo vel."
					image={TrustlessImageOne}
					title={
						<h1 className="text-[24px] font-semibold">
							<span className="text-[#F5D64E]">Zero</span> Interest Rate Loan
						</h1>
					}
				/>
				<TrustlessSecureCard
					desc="Lorem ipsum dolor sit amet consectetur. Sagittis aliquam sit senectus ut dictum dictum est ullamcorper elit. Aliquam consequat leo vel."
					image={TrustlessImageTwo}
					title={
						<h1 className="text-[24px] font-semibold">
							Hard Price Floor of <span className="text-[#F5D64E]">$1</span>{" "}
						</h1>
					}
				/>
				<TrustlessSecureCard
					desc="Lorem ipsum dolor sit amet consectetur. Sagittis aliquam sit senectus ut dictum dictum est ullamcorper elit. Aliquam consequat leo vel."
					image={TrustlessImageThree}
					title={
						<h1 className="text-[24px] font-semibold">
							<span className="text-[#F5D64E]">High</span> Capital Efficiency
						</h1>
					}
				/>
			</div>
		</div>
	);
};
