import React from 'react';
import { createTheme } from '@mui/material/styles';

const LOCAL_STORAGE_KEY = 'colorModePreference';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function useColorMode() {

    const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY);
    const [mode, setMode] = React.useState<'light' | 'dark'>(savedMode === 'dark' ? 'dark' : 'light');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    // Сохранение в LocalStorage
                    localStorage.setItem(LOCAL_STORAGE_KEY, newMode);
                    return newMode;
                });
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

    return { colorMode, theme };
}
