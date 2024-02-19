import { ReactNode } from "react";
import styles from "./button-animated.module.css";

type Props = {
	children: ReactNode;
};

export const ButtonAnimated = (props: Props) => {
	const { children } = props;
	return (
		<div className={styles.btn}>
			<span className={styles.noselect}>{children}</span>
		</div>
	);
};
