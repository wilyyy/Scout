import Image from "next/image";
import styled from "styled-components";

import { ThemeConfig } from "@/utils/ThemeConfig";
import { useTheme } from "@/utils/ScoutThemeProvider";
import AnimePageRecCard from "./AnimePageRecCard";

const Container = styled.div`
	width: 90%;
	height: 354px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	font-family: Inter, sans-serif;
`;

const Column = styled.div`
	width: 60%;
	height: 354px;
	display: flex;
	flex-direction: column;
`;

const Row = styled.div`
	width: 100%;
	height: 325px;
	display: flex;
`;

const Text = styled.p`
	${({ header }) => `
      font-size: 24px;
      color: ${(props) => props.header_color};
   `}

	${({ info }) =>
		info &&
		`
      font-size: 14px;
      color: ${(props) => props.para_color};
   `}

   ${({ syn }) =>
		syn &&
		`
      font-size: 10px;
      color: ${(props) => props.para_color};
   `}
`;

const Card = styled.div`
	width: 40%;
	height: 267px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: linear-gradient(
		152.97deg,
		${(props) => props.gradient1} 0%,
		${(props) => props.gradient2} 100%
	);
	border: 1px solid #6d7992;
	box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1),
		inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(5px) saturate(164%);
	-webkit-backdrop-filter: blur(5px) saturate(164%);
`;

const ScoreCont = styled.div`
	display: flex;
	width: 90%;
	height: 22px;
	justify-content: space-between;

	${({ inside }) =>
		inside &&
		`
      width: auto;
      height: 22px;
   `}
`;

const AnimePageRecs = ({
	title,
	genre,
	img_url,
	score,
	rank,
	synopsis,
	onFavClick,
}) => {
	const { theme } = useTheme();

	return (
		<Container>
			<Column>
				<Text header_color={ThemeConfig[theme].body}>
					Similar Anime to {title}
				</Text>
				<Row>
					<AnimePageRecCard
						title={title}
						genre={genre}
						img_url={img_url}
						onFavClick={onFavClick}
					/>
					<AnimePageRecCard
						title={title}
						genre={genre}
						img_url={img_url}
						onFavClick={onFavClick}
					/>
					<AnimePageRecCard
						title={title}
						genre={genre}
						img_url={img_url}
						onFavClick={onFavClick}
					/>
				</Row>
			</Column>
			<Card
				gradient1={ThemeConfig[theme].cardGradient}
				gradient2={ThemeConfig[theme].cardGradient2}
			>
				<Text header>{title}</Text>
				<ScoreCont>
					<ScoreCont inside>
						<Text info>
							Score:{" "}
							<Text info para_color={ThemeConfig[theme].body}>
								{score}
							</Text>
						</Text>
					</ScoreCont>
				</ScoreCont>
				<Text syn>{synopsis}</Text>
			</Card>
		</Container>
	);
};

export default AnimePageRecs;
