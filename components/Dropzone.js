import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";

const DropCont = styled.div`
	height: 580px;
	width: 450px;
	background-color: ${({ bg }) => bg || "#CCC"};
	box-shadow: inset 4.66667px -4.66667px 4.66667px rgba(165, 165, 165, 0.4),
		inset -4.66667px 4.66667px 4.66667px rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(46.6667px);
	border-radius: 15px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Dropzone = ({
	//props
	children = null,
	onDropItem = () => {},
}) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		// The type (or types) to accept - strings or symbols
		accept: "pollCard",
		drop: (item, monitor) => {
			console.log("the item that was dropped", item);
			onDropItem(item);
		},
		// Props to collect
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	return (
		<DropCont ref={drop} bg={canDrop && isOver ? "#999" : "rgba(196, 196, 196, 0.1)"}>
			{children}
		</DropCont>
	);
};

export default Dropzone;
