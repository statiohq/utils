import chalk from "chalk";
import { numberPrefixedByZero } from "./misc";

/**
 * Send an info log message
 * @param message The message to log
 */
export function info(message: string): void {
    console.log(`${chalk.black.bgWhite.bold(getTimestamp())} ${chalk.black.bgGreenBright.bold(" INFO ")} ${message}`);
}

/**
 * Send an debug log message
 * @param message The message to log
 * @param sendOnProd If true, send the message even on production
 */
export function debug(message: string, sendOnProd?: boolean): void {
    if (process.env.DEBUG || sendOnProd) {
        console.log(`${chalk.black.bgWhite.bold(getTimestamp())} ${chalk.white.bgBlue.bold(" DEBUG ")} ${message}`);
    }
}

/**
 * Send an warning log message
 * @param message The message to log
 */
export function warn(message: string): void {
    console.log(`${chalk.black.bgWhite.bold(getTimestamp())} ${chalk.black.bgYellow.bold(" WARN ")} ${message}`);
}

/**
 * Send an error log message
 * @param message The message to log
 */
export function error(message: string): void {
    console.log(`${chalk.black.bgWhite.bold(getTimestamp())} ${chalk.white.bgRed.bold(" ERROR ")} ${message}`);
}

// Timestamp function used by the logger.
function getTimestamp(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = numberPrefixedByZero(now.getMonth() + 1);
    const day = numberPrefixedByZero(now.getDate());
    const hour = numberPrefixedByZero(now.getHours());
    const minute = numberPrefixedByZero(now.getMinutes());
    const second = numberPrefixedByZero(now.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
