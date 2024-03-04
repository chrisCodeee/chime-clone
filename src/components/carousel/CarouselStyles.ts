import styled from "styled-components";

const CarouselTextContainer = styled.div`
	position: absolute;
	top: 20%;
	width: 46rem;
	color: #fff;

	& h1 {
		font-size: 5.2rem;
		font-weight: 700;
		color: inherit;
		text-shadow: 0 0 40px #000, 0 0 40px rgba(0, 0, 0, 0.5);
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
	height: 76vh;

	@media screen and (min-width: 2000px) {
		height: 50vh;
	}

	@media screen and (max-width: 1200px) {
		height: 90vh;
	}

	@media screen and (max-width: 1023px) {
		height: 50vh;
	}

	@media screen and (max-width: 768px) {
		height: 30vh;
	}

	@media screen and (max-width: 376px) {
		height: 88vh;
	}
`;
export { CarouselTextContainer, ImageDesktop, ImageMobile, ImageContainer };
