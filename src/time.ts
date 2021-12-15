/**
 * Returns the provided seconds in milliseconds.
 * @param seconds The number of seconds to convert to milliseconds.
 * @returns The number of milliseconds.
 */
export function seconds(seconds: number): number {
    return seconds * 1000;
}

/**
 * Returns the provided minutes in milliseconds.
 * @param minutes The number of minutes to convert to milliseconds.
 * @returns The number of milliseconds.
 */
export function minutes(minutes: number): number {
    return seconds(minutes * 60);
}

/**
 * Returns the provided hours in milliseconds.
 * @param hours The number of hours to convert to milliseconds.
 * @returns The number of milliseconds.
 */
export function hours(hours: number): number {
    return minutes(hours * 60);
}

/**
 * Returns the provided days in milliseconds.
 * @param days The number of days to convert to milliseconds.
 * @returns The number of milliseconds.
 */
export function days(days: number): number {
    return hours(days * 24);
}
