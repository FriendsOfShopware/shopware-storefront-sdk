export function isTouchDevice(): boolean {
    return ('ontouchstart' in document.documentElement);
}
