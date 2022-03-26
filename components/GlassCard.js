// needs background, grabbing from themeconfig
import styled from "styled-components";

import { ThemeConfig } from "../utils/ThemeConfig";

const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.bgcolor};
	color: ${(props) => props.color};
`;

const GlassCard = ({ width, height, children }) => {
	return (
		<Container width={width} height={height} bgcolor="#000">
			{children}
		</Container>
	);
};

export default GlassCard;
