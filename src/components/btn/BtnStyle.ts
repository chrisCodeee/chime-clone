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
		padding: 0.6rem 2rem;
	}

	@media screen and (max-width: 300px) {
		padding: 1rem;
	}
`;

const BtnMoreContainer = styled.button`
	border: 2px solid rgb(30, 198, 119);
	border-radius: 8px;
	padding: 1rem 2.4rem;
	background-color: #fff;
	transition: all 0.3s;

	&:hover {
		background-color: #000;
		border: 2px solid transparent;
	}

	&:hover a {
		color: #fff;
	}
`;

export { GreenBtn, BtnMoreContainer };
