interface IteratorHelper {
    iterate(source: any, callback: (value: any, index: number, array: any) => void): void
}

declare module 'src/helper/iterator.helper' {
    const helper: IteratorHelper;
    export = helper;
}