type Props = {
	className: string;
};

export const BgBluredGradientRight = (props: Props) => {
	const { className } = props;

	return (
		<svg
			width="1269"
			height="772"
			viewBox="0 0 1269 772"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g opacity="0.61" filter="url(#filter0_f_66_4)">
				<rect
					x="1453.24"
					y="451.312"
					width="197.851"
					height="1257.44"
					rx="98.9255"
					transform="rotate(52.8609 1453.24 451.312)"
					fill="#F5D64E"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_66_4"
					x="0.0975647"
					y="0.56778"
					width="2023.34"
					height="1818.39"
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
						result="effect1_foregroundBlur_66_4"
					/>
				</filter>
			</defs>
		</svg>
	);
};
