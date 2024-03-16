import { Props } from "./textWrapper";

const ImageWrapper = ({ image, scale = "0.95" }: Props) => {
	return (
		<div className="col-12 col-md mt-5 mt-md-0 order-2 order-md-0" style={{ transform: `scale(${scale})` }}>
			<img src={image} alt="Notification Spot Me" className="" style={{ height: "auto" }} />

			{/* <img src={HpSpotMe} alt="Notification Spot Me" className="d-block d-md-none" style={{ borderRadius: "8px", height: "auto" }} /> */}
			{/* <SpotMeContainer>
					<img src={NotificationSpotMe} alt="Notification Spot Me" />
				</SpotMeContainer> */}
		</div>
	);
};

export default ImageWrapper;
