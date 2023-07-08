import React from 'react';
import Container from '@mui/material/Container';
import { Navigation } from './components/Navigation';
import TableClient from './components/TableClient';
import TableServer from './components/TableServer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from './hooks/theme';

function App() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light'); // Обновление типа на 'light' | 'dark'
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Navigation />
                <Container maxWidth="xl" sx={{ p: '0px !important' }}>
                    <TableClient />
                    <TableServer />
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
