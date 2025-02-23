import { PaletteColorOptions, PaletteOptions } from "@mui/material";


const Primary: PaletteColorOptions = {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
}


const Secondary: PaletteColorOptions = {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
}

export const palette: PaletteOptions = {
    primary: { ...Primary },
    secondary: { ...Secondary }
}

