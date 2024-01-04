import NativeEventEmitter from "./native-event-emitter";

export default interface PluginBaseClass {
    new(el: HTMLElement, options?: any, pluginName?: false | string): PluginBaseClass;

    el: HTMLElement;
    $emitter: NativeEventEmitter;
    _pluginName: String;
    initialOptions;
    options: object;
    _initialized: boolean;
    init(): void;
    _update(): void;
    update(): void;
    _registerInstance(): void;
    _getPluginName(pluginName: false | string): String;
    _mergeOptions(options: any): object;
    parseJsonOrFail(dashedPluginName: string): any | string;
}