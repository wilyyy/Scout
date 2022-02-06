// have static colors just in case for specific use? idk
const DarkColors = {
    Gunmetal: "#1C2A36",
    Pumpkin: "#F4A259",
    //glass colors
    BlueGlass: "rgba(42, 76, 198, 0)",
    OrangeGlass: "rgba(246, 119, 79, 0.2)"
}

const LightColors = {
    PapayaWhip: "#FEF2DC",
    Denim: '#175DAF',
    //glass
    BlackGlass: "rgba(0, 5, 21, 0.09)"
};

export const ThemeConfig = {
    dark: {
        background: DarkColors.Gunmetal,
        text: DarkColors.Pumpkin
    },
    light: {
        background: LightColors.PapayaWhip,
        text: LightColors.Denim
    }
}