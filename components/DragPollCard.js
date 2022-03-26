import styled from "styled-components";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";
import { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

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
	z-index: 10;

	${({ position, left, top }) =>
		(position === "fixed" || position === "absolute") &&
		`
   	left: ${left}px;
   	top: ${top}px;
   	position: ${position};
		`}
`;

const PollPic = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 15px;
	margin-bottom: 10px;
	background-image: url(${(props) => props.imglink});
`;

const PollTitle = styled.h3`
	margin: 0;
	font-family: "Poppins";
	font-weight: 400;
	font-size: 12px;
	color: ${(props) => props.txtcolor};
	text-align: center;
`;

const DragPollCard = ({
	title = "Missing Title",
	imglink = "/anime.png",
	type = "pollCard",
	uid,
	pollCardPos = null,
	onUpdatePollCard = () => {},
}) => {
	const { theme } = useTheme();
	const [pos, setPos] = useState(
		pollCardPos || {
			left: 0,
			top: 0,
			position: "relative",
		}
	);

	const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
		type: type,
		item: { type, title, imglink, uid },
		end: (item, monitor) => {},
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			coords: monitor.getClientOffset(),
		}),
	}));

	const styles = {
		left: type === "boardPollCard" ? pos.left : null,
		top: type === "boardPollCard" ? pos.top : null,
		position: type === "boardPollCard" ? pos.position : null,
	};

	if (coords && isDragging) {
		styles.left = coords.x;
		styles.top = coords.y;
		styles.position = "fixed";
	}

	return (
		<PollCardCont ref={dragPreview} {...styles}>
			<div ref={drag}>
				<PollPic imglink={imglink} />
				<PollTitle txtcolor={ThemeConfig[theme].body}>{title}</PollTitle>
			</div>
		</PollCardCont>
	);
};

export default DragPollCard;
