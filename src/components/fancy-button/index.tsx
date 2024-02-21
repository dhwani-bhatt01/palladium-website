import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import styles from "./fancy-button.module.css";

type Props = {
	children: ReactNode;
	disabled?: boolean;
	isColoredBackground?: boolean;
};
export const FancyButton = (props: Props) => {
	const { children, disabled, isColoredBackground } = props;

	return (
		<button
			className={cn(styles.btn, {
				[styles.disabled]: disabled,
				[styles.coloredBg]: isColoredBackground,
			})}
			disabled={disabled}
		>
			<div className={styles.child}>{children}</div>
		</button>
	);
};
