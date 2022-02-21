//Framer animation setup

//Hovering and tapping a button making it bigger/smaller
export const HoverZoom = {
    hover: { //whileHover
        scale: 1.3
    },
    tap: { //whileTap
        scale: 0.8
    },
    spring: {
        type: "spring",
        stiffness: 500
    }
}