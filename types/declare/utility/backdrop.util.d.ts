interface BackDropUtil {
    SELECTOR_CLASS: string

    create(callback: Function|null): void
    remove(delay: number): void
}

declare module 'src/utility/backdrop/backdrop.util' {
    const helper: BackDropUtil;
    export = helper;
}