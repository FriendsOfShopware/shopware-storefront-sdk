interface StringHelper {
    /**
     * Upper case first letter of string
     */
    ucFirst(str: string): string

    /**
     * Lower case first letter of string
     */
    lcFirst(str: string): string

    /**
     * Convert string to dash case
     */
    toDashCase(str: string): string
    
    /**
     * Convert string to low camel case
     */
    toLowerCamelCase(str: string): string
    

    /**
     * Convert string to upper camel case
     */
    toUpperCamelCase(str: string): string
    
    parsePrimitive(value: string): any
}

declare module 'src/helper/string.helper' {
    const helper: StringHelper;
    export = helper;
}