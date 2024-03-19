import { ReactNode } from "react";
import styles from "./border-button.module.scss";

type Props = {
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	url?: string;
};

export const BorderButton = (props: Props) => {
	const { children, disabled, onClick, url } = props;

	const handleClick = () => {
		if (url) {
			window.open(url, "_blank");
		} else if (onClick) {
			onClick(); // Call onClick handler if provided
		}
	};

	return (
		<button
			className={styles.button}
			disabled={disabled}
			style={{
				cursor: disabled ? "not-allowed" : "pointer",
				opacity: disabled ? "0.5" : "1",
			}}
			onClick={disabled ? undefined : handleClick}
		>
			<span className={styles.span}>{children}</span>
		</button>
	);
};
/**
 * 1. Only text
 * 2. Text with Icon
 * 3. Only text [filled]
 * 4. Text with icon [filled]
 */
