import React from 'react';
import { createTheme } from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useColorMode() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');


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

    return { colorMode, theme }
}