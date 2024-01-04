interface DomAccessHelper {
    /**
     * Returns whether or not the element is an HTML node
     */
    isNode(element: any): boolean

    /**
     * Returns if the given element has the requested attribute/property
     */
    hasAttribute(element: HTMLElement, attribute: string): boolean

    /**
     * Returns the value of a given element's attribute/property
     */
    getAttribute(element: HTMLElement, attribute: string, strict?: boolean): string | undefined

    /**
     * Returns the value of a given elements dataset entry
     */
    getDataAttribute(element: HTMLElement, attribute: string, strict?: boolean): string | undefined

    /**
     * Returns the selected element of a defined parent node
     */
    querySelector(element: HTMLElement, selector: string, strict?: boolean): HTMLElement | null

    /**
     * Returns the selected elements of a defined parent node
     */
    querySelectorAll(element: HTMLElement, selector: string, strict?: boolean): HTMLElement[]
}

declare module 'src/helper/dom-access.helper' {
    const helper: DomAccessHelper;
    export = helper;
}