interface LoadingIndicatorUtil {
    SELECTOR_CLASS: string

    create(): void
    remove(): void
    exists(): boolean
    getTemplate(): string
}

interface ElementLoadingIndicatorUtil extends LoadingIndicatorUtil {
    appendLoader(element: HTMLElement): void
}

declare module 'src/utility/loading-indicator/loading-indicator.util' {
    const helper: LoadingIndicatorUtil;
    export = helper;
}

declare module 'src/utility/loading-indicator/button-loading-indicator.util' {
    const helper: LoadingIndicatorUtil;
    export = helper;
}

declare module 'src/utility/loading-indicator/element-indicator.util' {
    const helper: ElementLoadingIndicatorUtil;
    export = helper;
}

declare module 'src/utility/loading-indicator/page-loading-indicator.util' {
    const helper: LoadingIndicatorUtil;
    export = helper;
}