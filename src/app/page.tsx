"use client";

import { BlogsAndMediaSection } from "@/components/blogs-and-media-section";
import { Footer } from "@/components/footer";
import { GetStartedSection } from "@/components/get-started-section";
import { HeroSection } from "@/components/hero-section";
// import { Notched } from "@/components/notched-card";
import { ParallaxHeroSection } from "@/components/parallax-hero-section";
import { PusdExperience } from "@/components/pusd-experience";
import { UseCaseComponent } from "@/components/use-case-component";
import { UseCaseMobileComponent } from "@/components/use-case-mobile-component";

export default function Home() {
	return (
		<main className="m-2 md:max-w-7xl md:mx-auto">
			{/* Hero Section */}
			<HeroSection />

			<ParallaxHeroSection />

			<UseCaseComponent />
			<UseCaseMobileComponent />

			<PusdExperience />

			<GetStartedSection />

			<BlogsAndMediaSection />
			{/* <NotchedCard>
				{" "}
				<p className="flex text-lg font-medium items-center">
					Strategic Partnerships with Mantle Network
					<Link className="ml-2 text-base text-[#F5D64E] flex" href="#">
						READ MORE <ArrowRight color="#f5d64e" />
					</Link>
				</p>
			</NotchedCard> */}
			{/* <Notched /> */}
			{/* Section 1 */}
			{/* <Section
				image={IconSectionOne}
				titleYellow="SECURED"
				titleWhite="BY BITCOIN"
				descripton="Palladium protocol is operated upon Botanix - a truly decentralized
				smart contract platform secured by the most robust blockchain in the
				world."
			/> */}

			{/* Section 2 */}
			{/* <Section
				image={IconSectionTwo}
				titleYellow="SECURED"
				titleWhite="BY BITCOIN"
				descripton="Palladium protocol is operated upon Botanix - a truly decentralized smart contract platform secured by the most robust blockchain in the world."
			/> */}

			{/* Section 3 */}
			{/* <Section
				image={IconSectionThree}
				titleYellow="GOVERNANCE-FREE"
				titleWhite="LIKE BITCOIN"
				descripton="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/> */}

			<Footer />
		</main>
	);
}
