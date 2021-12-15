/**
 * Returns the provided number but prefixed with a 0 when it is less than 10.
 * @param num - The number to prefix.
 * @returns The number prefixed with a 0 when it is less than 10.
 */
export function numberPrefixedByZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
}
