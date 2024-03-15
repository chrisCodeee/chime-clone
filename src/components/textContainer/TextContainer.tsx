import { BtnMore } from "../btn";

interface Props {
	heading: string;
	text: string;
	image: string;
	number?: string;
}

const TextContainer = ({ heading, text, image, number }: Props) => {
	return (
		<div className="row mx-0 mt-big px-3 px-md-0">
			<div className="col-12 col-md d-flex flex-column justify-content-center">
				<h2 className="link-bold col-md-9">{heading}</h2>
				<p className="mb-5 mt-3 col-md-9" style={{ fontSize: "1.5rem" }}>
					{text}
					<sup>{number}</sup>
				</p>
				<BtnMore link="" />
			</div>

			<div className="col-12 col-md mt-5 mt-md-0">
				<img src={image} alt="Notification Spot Me" className="" style={{ height: "auto" }} />

				{/* <img src={HpSpotMe} alt="Notification Spot Me" className="d-block d-md-none" style={{ borderRadius: "8px", height: "auto" }} /> */}
				{/* <SpotMeContainer>
					<img src={NotificationSpotMe} alt="Notification Spot Me" />
				</SpotMeContainer> */}
			</div>
		</div>
	);
};

export default TextContainer;
