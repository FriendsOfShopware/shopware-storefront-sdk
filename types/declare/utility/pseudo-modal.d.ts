declare module 'src/utility/modal-extension/psuedo-modal.util' {
    class PsuedoModalUtil {
        open(callback: Function): void
        close(): void
        getModal(): HTMLElement
        updatePosition(): void
        updateContent(content: string, callback: () => void): void
    }

    export = PsuedoModalUtil;
}