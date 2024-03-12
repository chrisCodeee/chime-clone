import styled from "styled-components";

const GreenBtn = styled.div`
	background-color: rgb(45, 227, 142);
	padding: 1rem 6rem;
	border-radius: 5px;
	transition: all 0.3s;
	text-align: center;

	&:hover,
	&:active {
		background-color: #1ec677;
	}

	@media screen and (max-width: 500px) {
		padding: 1rem 3rem;
	}

	@media screen and (max-width: 300px) {
		padding: 1rem;
	}
`;
export { GreenBtn };
