import NativeEventEmitter from "./NativeEventEmitter";
import deepmerge from "deepmerge";

export default abstract class PluginClass {
    private readonly el: HTMLElement;
    private $emitter: NativeEventEmitter;
    private readonly _pluginName: String;
    private readonly options: object;
    private _initialized: boolean;

    constructor(el: HTMLElement, options: any = {}, pluginName: boolean | string = false) {
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

    _update() {
        if (!this._initialized) return;

        this.update();
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
        const dashedPluginName = this._pluginName.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        const dataAttributeConfig = this.parseJsonOrFail(dashedPluginName);
        const dataAttributeOptions = this.el.getAttribute(`data-${dashedPluginName}-options`) || '';


        // static plugin options
        // previously merged options
        // explicit options when creating a plugin instance with 'new'
        const merge = [
            // @ts-ignore
            this.constructor.options,
            this.options,
            options,
        ];

        // options which are set via data-plugin-name-config="config name"
        if (dataAttributeConfig) merge.push((<any>window).PluginConfigManager.get(this._pluginName, dataAttributeConfig));
        // options which are set via data-plugin-name-options="{json..}"
        try {
            if (dataAttributeOptions) merge.push(JSON.parse(dataAttributeOptions));
        } catch (e: any) {
            throw new Error(
                `The data attribute "data-${dashedPluginName}-options" could not be parsed to json: ${e.message || ''}`
            );
        }

        return deepmerge.all(
            merge.filter(config => {
                return config instanceof Object && !(config instanceof Array);
            })
                .map(config => config || {})
        );
    }

    private parseJsonOrFail(dashedPluginName: string): any | string {
        const value = this.el.getAttribute(`data-${dashedPluginName}-config`) || '';

        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    }
}
