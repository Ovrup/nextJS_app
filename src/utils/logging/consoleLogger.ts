import { Logger } from './logger';

class ConsoleLogger extends Logger {
    log(message: string) {
        console.log(`%c ${message}`, "background: #017bfe; color: white; padding: 5px; border-radius: 3px");
    }

    info(message: string) {
        console.info(`%c Info: ${message}`, "background: #14a2b8; color: white; padding: 5px; border-radius: 3px");
    }

    warn(message: string) {
        console.warn(`%c Warning: ${message}`, "background: #ffc007; color: black; padding: 5px; border-radius: 3px");
    }

    error(message: string) {
        console.error(`%c Error: ${message}`, "background: #dc3444; color: white; padding: 5px; border-radius: 3px");
    }
}

export default ConsoleLogger;
