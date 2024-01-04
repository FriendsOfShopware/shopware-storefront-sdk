interface DateHelper {
    format(val: string|Date, options: Intl.DateTimeFormatOptions): string
}

declare module 'src/helper/date.helper' {
    const helper: DateHelper;
    export = helper;
}