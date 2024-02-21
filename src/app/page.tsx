"use client";

import { BlogsAndMediaSection } from "@/components/blogs-and-media-section";
import { Footer } from "@/components/footer";
import { GetStartedSection } from "@/components/get-started-section";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
// import { Notched } from "@/components/notched-card";
import { ParallaxHeroSection } from "@/components/parallax-hero-section";
import { ParallaxHeroSectionMobile } from "@/components/parallax-hero-section-mobile";
import { PusdExperience } from "@/components/pusd-experience";
import { UseCaseComponent } from "@/components/use-case-component";
import { UseCaseMobileComponentV2 } from "@/components/use-case-mobile-component-v2";

export default function Home() {
	return (
		<main className="m-2 md:max-w-7xl md:mx-auto">
			<div>
				<Navbar />
				{/* Hero Section */}
				<HeroSection />

				<div className="hidden md:block">
					<ParallaxHeroSection />
				</div>
				<div className="block md:hidden">
					<ParallaxHeroSectionMobile />
				</div>

				<UseCaseComponent />
				{/* <UseCaseMobileComponent /> */}
				<div className="block lg:hidden">
					<UseCaseMobileComponentV2 />
				</div>

				<PusdExperience />

				<GetStartedSection />

				<BlogsAndMediaSection />
			</div>

			<Footer />
		</main>
	);
}
