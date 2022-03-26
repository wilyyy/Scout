import styled from "styled-components";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

const PollCardCont = styled.div`
	width: 175px;
	height: 250px;
	background: rgba(196, 196, 196, 0.1);
	box-shadow: inset 3px -3px 3px rgba(165, 165, 165, 0.4),
		inset -3px 3px 3px rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(30px);
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 25px 10px 10px;
	margin: 15px;
`;

const PollPic = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 15px;
	margin-bottom: 10px;
`;

const PollTitle = styled.h3`
	margin: 0;
	font-family: "Poppins";
	font-weight: 400;
	font-size: 12px;
	color: ${(props) => props.txtcolor};
	text-align: center;
`;

const PollDelete = styled.div`
	background-color: ${(props) => props.deletecolor};
	width: 30px;
	height: 30px;
	border-radius: 20px;
	position: absolute;
	top: -10px;
	right: -10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: black;
	z-index: 5;
	cursor: pointer;
	display: ${(props) => props.displayDelete};
`;

const PollCard = ({
	onDelete = () => {},
	title = "Missing Title",
	imglink = "/anime.png",
	displayDelete = "flex",
}) => {
	const { theme } = useTheme();

	return (
		<PollCardCont>
			<PollPic src={imglink} />
			<PollTitle txtcolor={ThemeConfig[theme].body}>{title}</PollTitle>
			<PollDelete
				displayDelete={displayDelete}
				deletecolor={ThemeConfig[theme].text}
				onClick={onDelete}
			>
				x
			</PollDelete>
		</PollCardCont>
	);
};

export default PollCard;
