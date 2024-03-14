import { NotificationSpotMe, SpotMe } from "../../assets";
import { BtnMore } from "../btn";
import { SpotMeContainer } from "./TextContainerStyles";

const TextContainer = () => {
	return (
		<div className="row mx-0 mt-big px-4 px-lg-0">
			<div className="col-12 col-lg d-flex flex-column justify-content-center" style={{ order: "-1" }}>
				<h2 className="link-bold">Overdraft fee-free with SpotMe.</h2>
				<p className="mb-4 col-lg-9" style={{ fontSize: "1.7rem" }}>
					We'll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.
					<sup>2</sup>
				</p>
				<BtnMore />
			</div>

			<div className="col-12 col-lg mt-5 mt-lg-0" style={{ position: "relative", order: "1" }}>
				<img src={SpotMe} alt="Notification Spot Me" />
				<SpotMeContainer>
					<img src={NotificationSpotMe} alt="Notification Spot Me" />
				</SpotMeContainer>
			</div>
		</div>
	);
};

export default TextContainer;
