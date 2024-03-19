import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import styles from "./fancy-button.module.css";

type Props = {
	children: ReactNode;
	disabled?: boolean;
	isColoredBackground?: boolean;
	isTransparent?: boolean;
	onClick?: () => void;
	url?: string;
};
export const FancyButton = (props: Props) => {
	const {
		children,
		disabled,
		isColoredBackground,
		onClick,
		url,
		isTransparent,
	} = props;
	const handleClick = () => {
		if (url) {
			window.open(url, "_blank");
		} else if (onClick) {
			onClick(); // Call onClick handler if provided
		}
	};

	return (
		<button
			className={cn(styles.btn, {
				[styles.disabled]: disabled,
				[styles.coloredBg]: isColoredBackground,
				[styles.transparent]: isTransparent,
			})}
			disabled={disabled}
			onClick={handleClick}
		>
			<div className={styles.child}>{children}</div>
		</button>
	);
};
