'use client'

import { createContext, useContext, useState } from 'react';
import ConsoleLogger from 'src/utils/logging/consoleLogger';
import { getLogger, setLogger } from 'src/utils/logging/logger';


const LoggerContext = createContext<any>(null);

export const useLogger = () => {
    return useContext(LoggerContext)
}

const LoggerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const logger = new ConsoleLogger();
    setLogger(logger);

    const [logging, setLogging] = useState(() => getLogger())

    return (
        <LoggerContext.Provider value={{ logging }}>
            {children}
        </LoggerContext.Provider>
    )
}

export default LoggerProvider