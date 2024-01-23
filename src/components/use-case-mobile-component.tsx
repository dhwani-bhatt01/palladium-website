import UseCaseImgOne from "@/assets/UseCaseImgOne.png";
import UseCaseImgFour from "@/assets/use-case-img-four.png";
import UseCaseImgThree from "@/assets/use-case-img-three.png";
import UseCaseImgTwo from "@/assets/use-case-img-two.png";
import { UseCaseListItemMobile } from "./use-case-list-item-mobile";

export const UseCaseMobileComponent = () => {
	return (
		<div className="flex flex-col gap-16 md:hidden">
			<UseCaseListItemMobile
				image={UseCaseImgOne}
				headingLabel="Currency for Network States"
				description="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/>
			<UseCaseListItemMobile
				image={UseCaseImgTwo}
				headingLabel="PRESERVING WEALTH"
				description="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/>
			<UseCaseListItemMobile
				image={UseCaseImgThree}
				headingLabel="MARGIN TRADING"
				description="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/>
			<UseCaseListItemMobile
				image={UseCaseImgFour}
				headingLabel="YIELD FARMING"
				description="Palladium employs an algorithmic monetary policy. There is no governance, DAO, or admin keys to ensure protocol can never be censored or manipulated."
			/>
		</div>
	);
};
