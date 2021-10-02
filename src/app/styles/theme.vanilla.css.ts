import { createTheme, style } from "@vanilla-extract/css"
export const [themeClass, vars] = createTheme({
    font: {
        title: {
            size: "3.5rem",
        },
        subtitle: {
            size: "2rem",
        },
        header: {
            size: "1.5rem",
        },
        subheader: {
            size: "1.2rem",
        },
        paragraph: {
            size: "0.75rem",
        },
    },
    fontWeights: {
        light: "light",
        normal: "normal",
        medium: "medium",
        semiBold: "semi-bold",
        bold: "bold",
    },
})

export const exampleStyle = style({
    fontWeight: "bold",
})
