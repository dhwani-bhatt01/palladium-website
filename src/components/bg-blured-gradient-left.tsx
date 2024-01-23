type Props = {
	className: string;
};

export const BgBluredGradientLeft = (props: Props) => {
	const { className } = props;

	return (
		<svg
			width="2013"
			height="1798"
			viewBox="0 0 2013 1798"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g opacity="0.61" filter="url(#filter0_f_2_30)">
				<rect
					x="1464.4"
					y="462"
					width="143.64"
					height="1257.44"
					rx="71.8202"
					transform="rotate(52.8609 1464.4 462)"
					fill="#F5D64E"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_30"
					x="0.390533"
					y="0.391022"
					width="2012.34"
					height="1796.91"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="245.2"
						result="effect1_foregroundBlur_2_30"
					/>
				</filter>
			</defs>
		</svg>
	);
};
