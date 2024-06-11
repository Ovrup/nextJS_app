export class Logger {
    log(message: string) {
        throw new Error("Method to log messages.");
    }

    info(message: string) {
        throw new Error("Method to log info messages.");
    }

    warn(message: string) {
        throw new Error("Method to log warning messages.");
    }

    error(message: string) {
        throw new Error("Method to log error.");
    }
}

let loggerInstance: any = null;

export function setLogger(logger: any) {
    loggerInstance = logger;
}

export function getLogger() {
    if (!loggerInstance) {
        throw new Error('Logger has not been set.');
    }
    return loggerInstance;
}