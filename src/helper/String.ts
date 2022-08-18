export function ucFirst(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function lcFirst(value: string): string {
    return value.charAt(0).toLowerCase() + value.slice(1);
}

export function toLowerCamelCase(value: string, separator: string) {
    const upperCamelCase = toUpperCamelCase(value, separator);
    return lcFirst(upperCamelCase);
}

export function toUpperCamelCase(value: string, separator: string) {
    if (!separator) {
        return ucFirst(value.toLowerCase());
    }

    const stringParts = value.split(separator);
    return stringParts.map(string => ucFirst(string.toLowerCase())).join('');
}
