import React from 'react';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';

import ListData from './components/ListData';
import { create } from '@mui/material/styles/createTransitions';
import { useGetTheme } from './themeui/useGetTheme';
import AppRouter from './routes/app-router/AppRouter';
import { BrowserRouter } from "react-router-dom"

// import { add } from "@foundation/theme-ui"


const App: React.FC = () => {
    const theme = useGetTheme()

    return (
        // <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </BrowserRouter >
        // </React.StrictMode>
    )
};

export default App;