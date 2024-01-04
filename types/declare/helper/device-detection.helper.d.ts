interface DeviceDetectionHelper {
    isTouchDevice(): boolean
    isIOSDevice(): boolean
    isNativeWindowsBrowser(): boolean
    isIPhoneDevice(): boolean
    isIPadDevice(): boolean
    isIEBrowser(): boolean
    isEdgeBrowser(): boolean
    getList(): {
        'is-touch': boolean,
        'is-ios': boolean,
        'is-native-windows': boolean,
        'is-iphone': boolean,
        'is-ipad': boolean,
        'is-ie': boolean,
        'is-edge': boolean
    }
}

declare module 'src/helper/device-detection.helper' {
    const helper: DeviceDetectionHelper;
    export = helper;
}