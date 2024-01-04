interface HistoryUtil {
    getLocation(): string
    listen(callback: Function): any
    unlisten(callback: Function): void
    push(pathName: string, search: any, state: any): void
    replace(pathName: string, search: any, state: any): void
    pushParams(params: any, state: any): void
    replaceParams(params: any, state: any): void
    getSearch(): string
}

declare module 'src/utility/history/history.util' {
    const helper: HistoryUtil;
    export = helper;
}