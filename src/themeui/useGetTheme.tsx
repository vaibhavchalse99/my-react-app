import { createTheme } from "@mui/material"
import { palette } from "./palette"

export const useGetTheme = () => {
    const theme = createTheme({
        palette: palette,
    })

    return theme
}