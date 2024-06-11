'use client'

import useLocalStorage from './../hooks/useLocalStorage';
import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext<any>({});

export const useTheme = () => {
    return useContext(ThemeContext)
}

function getInitialTheme(value: string) {
    if (value) return value
    else return 'light'
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [value, setValue] = useLocalStorage('theme');
    const [theme, setTheme] = useState<string>(() => getInitialTheme(value));

    function toggleTheme(val: string) {
        setTheme(val);
        setValue(val);
    }

    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider