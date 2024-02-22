"use client";

import Ellipse from "@/assets/ellipse-new.png";
// import DiamondWithGradient from "@/assets/high-shadow-diamond.png";
// import DiamondFrameOne from "@/assets/diamond-frames/diamond-frame-one.png";
// import DiamondFrameThree from "@/assets/diamond-frames/diamond-frame-three.png";
// import DiamondFrameTwo from "@/assets/diamond-frames/diamond-frame-two.png";
// import DiamondFrameOne from "@/assets/BG Shapes/empty.webp";
// import DiamondFrameThree from "@/assets/BG Shapes/with circles.webp";
// import DiamondFrameTwo from "@/assets/BG Shapes/without circles.webp";
import DiamondFrameThree from "@/assets/BG Shapes 2/Frame 4.png";
import DiamondFrameTwo from "@/assets/BG Shapes 2/Frame 6.png";
import DiamondFrameOne from "@/assets/BG Shapes 2/Frame 8.png";
import VerticleLine from "@/assets/verticle-line.png";
import {
	AnimatePresence,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ParallaxHeroSection = () => {
	const [isDiamond100, setIsDiamond100] = useState(false);
	const [isDivTwo70, setIsDivTwo70] = useState(false);
	const [isAtTop, setIsAtTop] = useState(false);
	// const [scrollHandled, setScrollHandled] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const divRefOne = useRef(null);

	// const h2Ref = useRef(null);

	const divRefTwo = useRef<HTMLDivElement | null>(null);

	const { scrollY: pageScrollY } = useScroll();

	// const isInView = useInView(h2Ref);

	const { scrollYProgress } = useScroll({
		target: divRefOne,
		offset: ["start start", "end start"],
	});

	const ellipseY = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);
	const ellipseOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]); // Fading effect from 1 to 0 after 50% scroll
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);
	const lineOpacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
	const diamondY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			if (currentScrollPos > prevScrollPos) {
				setScrollDirection("down");
			} else if (currentScrollPos < prevScrollPos) {
				setScrollDirection("up");
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	useEffect(() => {
		const handleScroll = (e: any) => {
			const divTop = divRefTwo.current?.getBoundingClientRect().top;

			// Set a threshold (e.g., 0) for when the div is considered at the top
			const isTop = (divTop ?? 0) <= 0;
			setIsAtTop(isTop);
			if (isTop) {
				e.preventDefault();
			}
		};

		// Attach scroll event listener
		// window.addEventListener("scroll", handleScroll);
		if (!isAtTop) {
			window.addEventListener("scroll", handleScroll, { passive: false });
		} else {
			window.removeEventListener("scroll", handleScroll);
		}

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isAtTop) {
			console.log("Div touches the top of the viewport");
			document.body.style.overflowY = "hidden";
			setTimeout(() => {
				document.body.style.overflowY = "auto";
			}, 2000);
		}
	}, [isAtTop]);

	useEffect(() => {
		setPrevScrollPos(window.pageYOffset);
		window.addEventListener("scroll", () => {
			console.log(diamondY.get(), "diamondY");
			const isDiamond100Percent = diamondY.get() === "100%";
			console.log(isDiamond100Percent, "isDiamond100Percent");
			setIsDiamond100(isDiamond100Percent);
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!divRefTwo.current) return;

			const divTop = divRefTwo.current.getBoundingClientRect().top;
			const divBottom = divRefTwo.current.getBoundingClientRect().bottom;
			const viewportHeight = window.innerHeight;

			// Calculate the height of the div and whether it's visible
			const divHeight = divBottom - divTop;
			const visiblePart =
				Math.min(divBottom, viewportHeight) - Math.max(divTop, 0);
			const isDivVisible = visiblePart >= divHeight * 0.4;

			setIsDivTwo70(isDivVisible);

			// setIsVisible(isDivVisible);
			console.log(visiblePart, isDivVisible, "blue div");
		};

		// Listen for scroll events
		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call initially to check visibility on mount

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{/****** Parallax Section One ******/}
			<div
				ref={divRefOne}
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
				{/* <motion.img
					src={
						isDiamond100 ? DiamondWithGradient.src : DiamondWithoutGradient.src
					}
					alt="diamond"
					style={{ y: diamondY }}
					className="absolute top-36 h-[70vh] -translate-x-1"
				/> */}
				<AnimatePresence>
					{isDiamond100 ? (
						<motion.img
							key="diamond-with-gradient"
							src={DiamondFrameThree.src}
							alt="diamond"
							style={{ y: diamondY }}
							className="absolute top-36 h-[70vh] -translate-x-1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, delay: 0 }}
						/>
					) : (
						<>
							{isDivTwo70 ? (
								<motion.img
									key="diamond-without-gradient"
									src={DiamondFrameTwo.src}
									alt="diamond"
									style={{ y: diamondY }}
									className="absolute top-36 h-[70vh] -translate-x-1"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5, delay: 0 }}
								/>
							) : (
								<motion.img
									key="diamond-without-gradient"
									src={DiamondFrameOne.src}
									alt="diamond"
									style={{ y: diamondY }}
									className="absolute top-36 h-[70vh] -translate-x-1"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5, delay: 0 }}
								/>
							)}
						</>
					)}
				</AnimatePresence>

				<motion.h2
					style={{ y: textY }}
					className="text-center font-semibold text-[46px] max-w-4xl text-[#F5D64E]"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false }}
					transition={{
						type: "spring",
						duration: 1,
						delay: 1,
					}}
				>
					MEET $PUSD
				</motion.h2>

				<motion.h3
					style={{ y: textY }}
					className="text-center font-semibold text-[36px] max-w-4xl mt-4"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: false }}
					transition={{
						type: "spring",
						duration: 1,
						delay: 1.5,
					}}
				>
					A censorship-resistant USD-pegeed cryptocurrency that is backed by
					<br />
					<span className="text-[#F5D64E]">
						security & robustness of Bitcoin.
					</span>
				</motion.h3>

				{/* <motion.h2
					// ref={h2Ref}
					style={{ y: textY }}
					className="text-center font-semibold text-[46px] max-w-4xl text-[#F5D64E]"
					initial={{ opacity: 0 }}
					animate={{
						opacity:
							scrollDirection === "up" ? 1 : pageScrollY.get() >= 600 ? 1 : 0,
					}}
					transition={{
						type: "spring",
						duration: 0.5,
						delay: 0.5,
					}}
				>
					MEET $PUSD
				</motion.h2>

				<motion.h3
					style={{ y: textY }}
					className="text-center font-semibold text-[36px] max-w-4xl mt-6"
					initial={{ opacity: 0 }}
					animate={{
						opacity:
							scrollDirection === "up" ? 1 : pageScrollY.get() >= 650 ? 1 : 0,
					}}
					transition={{
						type: "spring",
						duration: 0.5,
						delay: 1,
					}}
				>
					a censorship-resistant USD-pegeed cryptocurrency that is backed by
					<br></br> 
					<span className="text-[#F5D64E]">
						security & robustness of Bitcoin.
					</span>
				</motion.h3> */}
			</div>

			{/****** Parallax Section Two ******/}
			<div
				className="snap-start min-h-screen w-full px-6 max-w-5xl mx-auto"
				ref={divRefTwo}
			>
				{isDiamond100 && (
					<div className="flex justify-between pt-64 text-center">
						{scrollDirection === "up" ? (
							<div className="w-72">
								<h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">Secured </span> by BITCOIN
									NETWORK
								</h2>
								<p className="font-medium text-[16px] font-Montserrat">
									Palladium is operated upon Botanix - a truly decentralized
									smart contract platform secured by Bitcoin Network - the most
									secure blockchain in the world.
								</p>
							</div>
						) : (
							<motion.div
								className="w-72"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: false }}
								transition={{
									type: "spring",
									duration: 1,
									delay: 0,
								}}
							>
								<h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">Secured </span> by BITCOIN
									NETWORK
								</h2>
								<p className="font-medium text-[16px] font-Montserrat">
									Palladium is operated upon Botanix - a truly decentralized
									smart contract platform secured by Bitcoin Network - the most
									secure blockchain in the world.
								</p>
								{/* <h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">Over-Collateralized</span>
									with Bitcoin
								</h2>
								<p className="font-medium text-[16px] font-Montserrat">
									$PUSD can only be minted using the most robust cryptocurrency
									- the $BTC - and it always remains over-collateralized to
									guarantee hard price floor of $1.
								</p> */}
							</motion.div>
						)}

						{scrollDirection === "up" ? (
							<div className="w-72 mt-60">
								<h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">Over-Collateralized </span>{" "}
									with Bitcoin
								</h2>
								<div className="font-medium text-[16px] font-Montserrat">
									$PUSD can only be minted using the most robust cryptocurrency
									- the $BTC - and it always remains over-collateralized to
									guarantee hard price floor of $1.
								</div>
							</div>
						) : (
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
									<span className="text-[#F5D64E]">Over-Collateralized </span>{" "}
									with Bitcoin
								</h2>
								<div className="font-medium text-[16px] font-Montserrat">
									$PUSD can only be minted using the most robust cryptocurrency
									- the $BTC - and it always remains over-collateralized to
									guarantee hard price floor of $1.
								</div>
							</motion.div>
						)}

						{scrollDirection === "up" ? (
							<div className="w-72">
								<h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">GOVERNANCE-FREE</span> LIKE
									BITCOIN
								</h2>
								<p className="font-medium text-[16px] font-Montserrat">
									An algorithmic monetary policy that makes Palladium fully
									autonomous. No governance, DAO, or admin keys that can censor
									or manipulate the protocol.
								</p>
							</div>
						) : (
							<motion.div
								className="w-72"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									type: "spring",
									duration: 1,
									delay: 1,
								}}
							>
								<h2 className="font-semibold text-[24px]">
									<span className="text-[#F5D64E]">GOVERNANCE-FREE</span> LIKE
									BITCOIN
								</h2>
								<p className="font-medium text-[16px] font-Montserrat">
									An algorithmic monetary policy that makes Palladium fully
									autonomous. No governance, DAO, or admin keys that can censor
									or manipulate the protocol.
								</p>
							</motion.div>
						)}
					</div>
				)}
			</div>
		</>
	);
};
