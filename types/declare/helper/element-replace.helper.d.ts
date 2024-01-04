interface ElementReplaceHelper {
    replaceFromMarkup(markup: HTMLElement|string, selectors: string[]|string, strict: boolean): void

    replaceElement(src: NodeList|HTMLElement|string, target: NodeList|HTMLElement|string, strict: boolean): boolean
}

declare module 'src/helper/element-replace.helper' {
    const helper: ElementReplaceHelper;
    export = helper;
}