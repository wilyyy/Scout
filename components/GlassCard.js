import styled from "styled-components";

const Container = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    color: ${props=>props.color};
`;

const GlassCard = ({width, height, children}) => {
    return (
        <Container
            width={width}
            height={height}
            bgcolor="#000"
        >
            {children}
        </Container>
    )
}

export default GlassCard;