import styled from "styled-components";

const SpotMeContainer = styled.div`
	box-shadow: 1px 2px 8px 5px rgba(74, 74, 74, 0.1);
	border-radius: 8px;
	position: absolute;
	top: 11%;
	left: -7%;

	@media screen and (max-width: 767px) {
		top: -12%;
		left: 0%;
		position: relative;
		transform: scale(0.8);
	}
`;

export { SpotMeContainer };
