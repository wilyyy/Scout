import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { BsBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";
import { HoverZoom } from "../utils/Animations";

const CardCont = styled(motion.div)`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: ${(props) => props.cardWidth};
	height: ${(props) => props.cardHeight};
	padding: 15px;
	border-radius: 16px;
	margin: ${(props) => props.cardMargin};
	cursor: pointer;
	border: 1px solid #6d7992;
	backdrop-filter: blur(20px) saturate(164%);
	-webkit-backdrop-filter: blur(20px) saturate(164%);
	font-family: ${(props) => props.fontFamily};
	background: linear-gradient(
		135deg,
		${(props) => props.gradient1} 20%,
		${(props) => props.gradient2} 100%
	);
	/* box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1), 
              inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1); */
`;

const CardImage = styled.img`
	width: 100%;
	height: ${(props) => props.imageHeight};
	border-radius: 16px;
	margin-bottom: 10px;
	object-fit: cover;
	object-position: center center;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 15px;
`;

const Header = styled.h4`
	margin: 0;
	font-size: 18px;
	line-height: 21px;
	color: ${(props) => props.hcolor};
	font-weight: 400;
	width: 100%;
`;

const DataHeader = styled.h4`
	margin: 0;
	font-size: 18px;
	line-height: 21px;
	color: ${(props) => props.hcolor};
	font-weight: 400;
`;

const Body = styled.div`
	font-size: 14px;
	color: ${(props) => props.bcolor};
	font-weight: 200;
	margin: 0;
`;

const Details = styled.p`
	font-size: 16px;
	color: ${(props) => props.bcolor};
	opacity: ${(props) => props.bopacity};
	margin: 0;
`;

const DetailCont = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const TextCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
`;

const Divider = styled.p`
	font-size: 18px;
	color: ${(props) => props.dcolor};
	opacity: 0.2;
	margin: 15px 0;
`;

const DataRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const truncateString = (string, limit) => {
	if (string.length > limit) {
		return string.substring(0, limit) + "...";
	} else {
		return string;
	}
};

const AnimeCard = ({
	img_url = "/anime.png",
	fontFamily = "Poppins",
	title = "[Missing Title]",
	synopsis = "[Missing Description]",
	episodes = "24",
	score = "#.##",
	cardMargin = "40px 20px",
	cardWidth = "271px",
	cardHeight = "578px",
	imageHeight = "280px",
	onButtonClick = () => {},
	onCheckClick = () => {},
	onUncheckClick = () => {},
}) => {
	const { theme } = useTheme();

	const [favourite, setFavourite] = useState(false);
	const [canClick, setCanClick] = useState();

	const ClickCard = () => {
		if (canClick === false) {
			onButtonClick();
		}
	};

	const ClickCheck = () => {
		setFavourite(true);
		setCanClick(true);
		onCheckClick();
	};

	const ClickUncheck = () => {
		setFavourite(false);
		setCanClick(true);
		onUncheckClick();
	};

	return (
		<CardCont
			fontFamily={fontFamily}
			onClick={ClickCard}
			whileHover={{ scale: 1.1 }}
			transition={HoverZoom.spring}
			gradient1={ThemeConfig[theme].cardGradient}
			gradient2={ThemeConfig[theme].cardGradient2}
			onMouseEnter={() => setCanClick(false)}
			cardMargin={cardMargin}
			cardWidth={cardWidth}
			cardHeight={cardHeight}
		>
			<CardImage src={img_url} alt="anime image" imageHeight={imageHeight} />
			<TextCont>
				<Row>
					<Header hcolor={ThemeConfig[theme].body}>{truncateString(title, 30)}</Header>
					{favourite === true ? (
						<BsBookmarkCheckFill
							size="40px"
							onClick={ClickUncheck}
							onMouseEnter={() => setCanClick(true)}
						/>
					) : (
						<BsBookmark
							size="40px"
							onClick={ClickCheck}
							onMouseEnter={() => setCanClick(true)}
						/>
					)}
				</Row>
				<Body bcolor={ThemeConfig[theme].body}>{truncateString(synopsis, 120)}</Body>
				<Divider dcolor={ThemeConfig[theme].body}>------------------</Divider>
				<DetailCont>
					<DataRow>
						<Details bcolor={ThemeConfig[theme].body}>Episodes</Details>
						<DataHeader hcolor={ThemeConfig[theme].text}>21/{episodes}</DataHeader>
					</DataRow>
					<DataRow>
						<Details bcolor={ThemeConfig[theme].body}>Score</Details>
						<DataHeader hcolor={ThemeConfig[theme].text}>{score}</DataHeader>
					</DataRow>
				</DetailCont>
			</TextCont>
		</CardCont>
	);
};

export default AnimeCard;
