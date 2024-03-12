import styled from "styled-components";

const CarouselTextContainer = styled.div`
	position: absolute;
	top: 18%;
	width: 48rem;
	color: #fff;

	& h1 {
		color: inherit;
		text-shadow: 0 0 40px #000, 0 0 40px rgba(0, 0, 0, 0.5);
	}

	& .form-container {
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: 859px) {
			flex-direction: column;
		}

		& form {
			margin-right: 2rem;
			flex-grow: 1;

			@media screen and (max-width: 859px) {
				margin-right: 0;
			}
		}

		& .btn-container {
			@media screen and (max-width: 859px) {
				margin-top: 7px;
			}
		}
	}

	& h1 span {
		font-size: 2.6rem;
		transform: translateY(-37px);
		display: inline-block;

		@media screen and (max-width: 859px) {
			transform: translateY(-10px);
		}
	}

	& p {
		color: inherit;
		font-size: 1.01rem;
		font-weight: 700;
		letter-spacing: 0.2px;
		word-spacing: 0.5px;
		padding-right: 20px;
	}

	& p a {
		color: inherit;
	}

	@media screen and (max-width: 859px) {
		width: 100%;
		padding: 0 2rem 3rem 2rem;
		top: 5% !important;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		text-align: center;
		z-index: 10000;
	}

	@media screen and (max-width: 500px) {
		text-align: left;
	}
`;

const ImageDesktop = styled.img`
	display: flex;

	@media screen and (max-width: 859px) {
		display: none;
	}
`;
const ImageMobile = styled.img`
	display: none;

	@media screen and (max-width: 859px) {
		display: flex;
	}
`;

const ImageContainer = styled.div`
	height: 600px;
`;
export { CarouselTextContainer, ImageDesktop, ImageMobile, ImageContainer };
