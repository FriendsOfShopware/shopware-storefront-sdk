import NativeEventEmitter from "./NativeEventEmitter";

export default abstract class PluginClass {
    private readonly el: HTMLElement;
    private $emitter: NativeEventEmitter;
    private readonly _pluginName: String;
    private options: object;
    private _initialized: boolean;

    constructor(el: HTMLElement, options: any = {}, pluginName: boolean|string = false) {
        this.el = el;
        this.$emitter = new NativeEventEmitter(this.el);
        this._pluginName = this._getPluginName(pluginName);
        this.options = this._mergeOptions(options);
        this._initialized = false;

        this._registerInstance();
        this._init();
    }

    private _init() {
        if (this._initialized) return;

        this.init();
        this._initialized = true;
    }

    abstract init(): void;

    update(): void {}

    _registerInstance() {
        const elementPluginInstances = (<any>window).PluginManager.getPluginInstancesFromElement(this.el);
        elementPluginInstances.set(this._pluginName, this);

        const plugin = (<any>window).PluginManager.getPlugin(this._pluginName, false);
        plugin.get('instances').push(this);
    }

    private _getPluginName(pluginName: boolean | string) {
        if (pluginName === false) {
            // @ts-ignore
            return this.constructor.name;
        }

        return pluginName;
    }

    private _mergeOptions(options: any): object {
        return {}
    }
}
