interface CookieStorageHelper {
    setItem(key: string, value: string, expireationDays: number): void

    getItem(key: string): any

    removeItem(key: string): boolean

    key(index: number): string | null

    clear(): void
}

interface MemoryStorageHelper {
    setItem(key: string, value: string): void

    getItem(key: string): any

    removeItem(key: string): boolean

    key(index: number): string | null

    clear(): void
}

declare module 'src/helper/storage/storage.helper' {
    const helper: Storage;
    export = helper;
}

declare module 'src/helper/storage/cookie-storage.helper' {
    const helper: CookieStorageHelper;
    export = helper;
}

declare module 'src/helper/storage/memory-storage.helper' {
    const helper: MemoryStorageHelper;
    export = helper;
}