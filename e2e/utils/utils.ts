/**
 * INTERFACES
 */
export interface World {
    attach: ((arg1: string | Buffer, arg2: string) => void);
}

/**
 * METHODS
 */

/**
 * Upper case the first letter of a given string
 */
export function upperCaseFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
