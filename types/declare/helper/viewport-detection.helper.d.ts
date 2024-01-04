interface ViewportDetectionHelper {
    isXS(): boolean
    isSM(): boolean
    isMD(): boolean
    isLG(): boolean
    isXL(): boolean
    isXXL(): boolean
    getCurrentViewport(): 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL'
}

declare module 'src/helper/viewport-detection.helper' {
    const helper: ViewportDetectionHelper;
    export = helper;
}