import React from 'react';
import Container from '@mui/material/Container';
import { Navigation } from './components/Navigation';
import TableClient from './components/TableClient';
import TableServer from './components/TableServer';
import { useColorMode,  ColorModeContext} from './helpers/theme';
import {Paper, ThemeProvider} from "@mui/material";


function App() {
    const { colorMode,  theme } = useColorMode();


    return (
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Navigation />
                    <Container maxWidth="xl" sx={{ p: '0px !important' }}>
                        <Paper>
                            <TableClient />
                            <TableServer />
                        </Paper>

                    </Container>
                </ThemeProvider>
            </ColorModeContext.Provider>



    );
}

export default App;