"use client";

import Ellipse from "@/assets/ellipse-new.png";
import DiamondWithGradient from "@/assets/high-shadow-diamond.png";
import DiamondWithoutGradient from "@/assets/low-shadow-diamond.png";
import VerticleLine from "@/assets/verticle-line.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ParallaxHeroSection = () => {
	const [isDiamond100, setIsDiamond100] = useState(false);
	const [isAtTop, setIsAtTop] = useState(false);
	const [scrollHandled, setScrollHandled] = useState(false);

	const divRef = useRef<HTMLDivElement | null>(null);

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const ellipseY = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);
	const ellipseOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]); // Fading effect from 1 to 0 after 50% scroll
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);
	const lineOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
	const diamondY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	useEffect(() => {
		const handleScroll = (e: any) => {
			if (!scrollHandled) {
				const divTop = divRef.current?.getBoundingClientRect().top;

				const isTop = (divTop ?? 0) <= 0;
				setIsAtTop(isTop);

				if (isTop) {
					e.preventDefault();
					setScrollHandled(true);
					window.removeEventListener("scroll", handleScroll);
				}
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: false });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollHandled]);

	useEffect(() => {
		if (isAtTop) {
			console.log("Div touches the top of the viewport");
			document.body.style.overflowY = "hidden";
			setTimeout(() => {
				document.body.style.overflowY = "auto";
			}, 6000);
		}
	}, [isAtTop]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const isDiamond100Percent = diamondY.get() === "100%";
			setIsDiamond100(isDiamond100Percent);
		});
	}, []);

	return (
		<>
			{/****************** Parallax Section One ******************/}
			<div
				ref={ref}
				className="snap-start relative h-screen flex flex-col items-center justify-center"
			>
				<motion.img
					src={Ellipse.src}
					alt="ellipse"
					style={{
						y: ellipseY,
						opacity: ellipseOpacity,
						height: Ellipse.height,
					}}
					className="absolute top-12"
				/>
				<motion.img
					src={VerticleLine.src}
					alt="line"
					style={{ y: lineY, opacity: lineOpacity }}
					className="absolute translate-y-1/2 bottom-0"
				/>
				<motion.img
					src={
						isDiamond100 ? DiamondWithGradient.src : DiamondWithoutGradient.src
					}
					alt="diamond"
					style={{ y: diamondY }}
					className="absolute top-36 h-[70vh] -translate-x-1"
				/>

				<motion.h3
					style={{ y: textY }}
					className="text-center font-semibold text-[36px] max-w-4xl"
				>
					$PUSD is a censorship-resistant USD-pegeed cryptocurrency that is
					backed by{" "}
					<span className="text-[#F5D64E]">
						security & robustness of Bitcoin.
					</span>
				</motion.h3>
			</div>

			{/****************** Parallax Section Two ******************/}
			<div
				className="snap-start min-h-screen w-full px-6 max-w-5xl mx-auto"
				ref={divRef}
			>
				{isDiamond100 && (
					<div className="flex justify-between pt-64 text-center">
						<motion.div
							className="w-72"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: false }}
							transition={{
								type: "spring",
								duration: 1,
								delay: 1,
							}}
						>
							<h2 className="font-semibold text-[24px]">
								<span className="text-[#F5D64E]">SECURED</span> BY BITCOIN
							</h2>
							<p className="font-medium text-[16px]">
								Palladium protocol is operated upon Botanix - a truly
								decentralized smart contract platform secured by the most robust
								blockchain in the world.
							</p>
						</motion.div>
						<motion.div
							className="w-72 mt-60"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								type: "spring",
								duration: 1,
								delay: 2,
							}}
						>
							<h2 className="font-semibold text-[24px]">
								<span className="text-[#F5D64E]">GOVERNANCE-FREE</span> LIKE
								BITCOIN
							</h2>
							<p className="font-medium text-[16px]">
								Palladium employs an algorithmic monetary policy. There is no
								governance, DAO, or admin keys to ensure protocol can never be
								censored or manipulated.
							</p>
						</motion.div>
						<motion.div
							className="w-72"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								type: "spring",
								duration: 1,
								delay: 3,
							}}
						>
							<h2 className="font-semibold text-[24px]">
								<span className="text-[#F5D64E]">SECURED</span> BY BITCOIN
							</h2>
							<p className="font-medium text-[16px]">
								Palladium protocol is operated upon Botanix - a truly
								decentralized smart contract platform secured by the most robust
								blockchain in the world.
							</p>
						</motion.div>
					</div>
				)}
			</div>
		</>
	);
};