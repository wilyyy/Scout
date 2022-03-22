import styled from "styled-components";
import { BsBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Button from "./Button";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ThemeConfig } from "@/utils/ThemeConfig";
import { useTheme } from "@/utils/ScoutThemeProvider";

function truncateString(string, limit) {
	if (string.length > limit) {
		return string.substring(0, limit) + "...";
	} else {
		return string;
	}
}

const Col = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
`;

const MySlide = ({
	bgimage = "test_demonslayer.jpg",
	titletext = "Default",
	desctext = "Default",
	bottext = "Default",
	curEp = "##",
	totEp = "##",
	slideIndex = 1,
	carouselOnClick = () => {},
}) => {
	const [favourite, setFavourite] = useState(false);
	const { theme } = useTheme();

	return (
		<CarouselProvider
			totalSlides={6}
			visibleSlides={3}
			orientation="horizontal"
			naturalSlideHeight={320}
			naturalSlideWidth={200}
			className="carousel"
		>
			<Col>
				<Row>
					<ButtonBack
						style={{
							height: 35,
							width: 35,
							borderRadius: 60,
							margin: 0,
							padding: 0,
							backgroundColor: ThemeConfig[theme].text,
							color: ThemeConfig[theme].background,
							border: 0,
						}}
					>
						<FaArrowLeft size={20} />
					</ButtonBack>
					<Slider className="slider">
						<Slide index={0} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
						<Slide index={1} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
						<Slide index={2} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
						<Slide index={3} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
						<Slide index={4} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
						<Slide index={5} className="caroSlide">
							<AnimeCard cardMargin="0" cardHeight="426px" cardWidth="200px" />
						</Slide>
					</Slider>
					<ButtonNext
						style={{
							height: 35,
							width: 35,
							borderRadius: 60,
							margin: 0,
							padding: 0,
							backgroundColor: ThemeConfig[theme].text,
							color: ThemeConfig[theme].background,
							border: 0,
						}}
					>
						<FaArrowRight size={20} />
					</ButtonNext>
				</Row>
				<DotGroup style={{ alignSelf: "center" }} />
			</Col>
		</CarouselProvider>
	);
};

export default MySlide;

{
	/* <Slide index={slideIndex} className="slide">
			<ImgCont bgimage={bgimage}>
				<BlurCont>
					<Title>{truncateString(titletext, 30)}</Title>
					<Description>{truncateString(desctext, 180)}</Description>
					<Bookmark>
						{favourite === true ? (
							<BsBookmarkCheckFill size="45px" />
						) : (
							<BsBookmark size="45px" />
						)}
					</Bookmark>
					<Row>
						<BottomText textcolor="white">
							{bottext} | Episode {curEp}/{totEp}
						</BottomText>
						<Button btnText="Continue" onClick={carouselOnClick} />
					</Row>
				</BlurCont>
			</ImgCont>
		</Slide> */
}
