import styled from "styled-components";

const GreenBtn = styled.div`
	background-color: rgb(45, 227, 142);
	padding: 1rem 6rem;
	border-radius: 50px;
	transition: all 0.3s;

	&:hover,
	&:active {
		background-color: #1ec677;
	}

	@media screen and (max-width: 1100px) {
		padding: 0.5rem 2rem;
	}
`;
export { GreenBtn };
