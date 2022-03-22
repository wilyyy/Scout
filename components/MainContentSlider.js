import styled from "styled-components";
import { useEffect } from "react";
import { useCarousel } from "@/utils/ScoutThemeProvider";
import { useRouter } from "next/router";
import { BsBookmarkCheckFill, BsBookmark } from "react-icons/bs";

import { CarouselProvider, Slider } from "pure-react-carousel";
import MySlide from "@/components/CarouselSlide";
import "pure-react-carousel/dist/react-carousel.es.css";

import { useTheme } from "@/utils/ScoutThemeProvider";
import Button from "./Button";
import { ThemeConfig } from "@/utils/ThemeConfig";

import axios from "axios";

const Container = styled.div`
	width: 80%;
	min-width: 1000px;
	height: 494px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: "Poppins";
	font-weight: 400;
	padding: 20px 20px 20px 20px;
	margin-bottom: 50px;
	border-radius: 15px;
	backdrop-filter: blur(20px) saturate(164%);
	-webkit-backdrop-filter: blur(20px) saturate(164%);
	font-family: ${(props) => props.fontFamily};
	background: linear-gradient(
		135deg,
		${(props) => props.gradient1} 20%,
		${(props) => props.gradient2} 100%
	);
	box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1),
		inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
`;

const SliderText = styled.h2`
	margin: 0;
	font-family: "Poppins";
	font-size: ${(props) => props.fsize};
	font-weight: 600;
	color: ${(props) => props.txtcolor};
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContentSlider = ({}) => {
	const router = useRouter();
	const { carousel, setCarousel } = useCarousel();
	const { theme } = useTheme();

	useEffect(() => {
		const GetAnime = async () => {
			const result = await axios.get("/api/anime", {
				params: {
					scoreFilter: [9, 10],
				},
			});
			console.log(result.data);
			setCarousel(result.data);
		};

		GetAnime();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<Col>
				<SliderText fsize="26px" txtcolor={ThemeConfig[theme].body}>
					Discover, Track, and Share
				</SliderText>
				<SliderText fsize="26px" txtcolor={ThemeConfig[theme].body}>
					your Favourite Anime with
				</SliderText>
				<SliderText fsize="48px" txtcolor={ThemeConfig[theme].text}>
					Scout
				</SliderText>
			</Col>
			<MySlide />
		</Container>
	);
};

export default MainContentSlider;
