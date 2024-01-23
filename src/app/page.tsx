import IconSectionThree from "@/assets/ab-chal-ja.png";
import IconSectionOne from "@/assets/icon-section-one.png";
import IconSectionTwo from "@/assets/icon-section-two.png";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/section";
import { UseCaseComponent } from "@/components/use-case-component";
import { UseCaseMobileComponent } from "@/components/use-case-mobile-component";

export default function Home() {
	return (
		<main className="m-4 md:max-w-7xl md:mx-auto">
			{/* Hero Section */}
			<HeroSection />

			{/* Section 1 */}
			<Section
				image={IconSectionOne}
				titleYellow="SECURED"
				titleWhite="BY BITCOIN"
				descripton="Palladium protocol is operated upon Botanix - a truly decentralized
				smart contract platform secured by the most robust blockchain in the
				world."
			/>

			{/* Section 2 */}
			<Section
				image={IconSectionTwo}
				titleYellow="SECURED"
				titleWhite="BY BITCOIN"
				descripton="Palladium protocol is operated upon Botanix - a truly decentralized smart contract platform secured by the most robust blockchain in the world."
			/>

			{/* Section 3 */}
			<Section
				image={IconSectionThree}
				titleYellow="GOVERNANCE-FREE"
				titleWhite="LIKE BITCOIN"
				descripton="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/>

			<UseCaseComponent />
			<UseCaseMobileComponent />
			<Footer />
		</main>
	);
}
