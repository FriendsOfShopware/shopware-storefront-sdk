interface DebouncerHelper {
    debounce(callback: Function, delay: number, immediate: boolean): Function
}

declare module 'src/helper/debouncer.helper' {
    const helper: DebouncerHelper;
    export = helper;
}