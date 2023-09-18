import NativeEventEmitter from "./NativeEventEmitter";
import deepmerge from "deepmerge";

export default abstract class PluginClass {
    protected readonly el: HTMLElement;
    protected $emitter: NativeEventEmitter;
    protected readonly _pluginName: String;
    protected options: object;
    protected _initialized: boolean;

    constructor(el: HTMLElement, options: any = {}, pluginName: false | string = false) {
        this.el = el;
        this.$emitter = new NativeEventEmitter(this.el);
        this._pluginName = this._getPluginName(pluginName);
        this.options = this._mergeOptions(options);
        this._initialized = true;

        this._registerInstance();
    }

    _update() {
        if (!this._initialized) return;

        this.update();
    }

    update(): void {}

    _registerInstance() {
        const elementPluginInstances = (<any>window).PluginManager.getPluginInstancesFromElement(this.el);
        elementPluginInstances.set(this._pluginName, this);

        const plugin = (<any>window).PluginManager.getPlugin(this._pluginName, false);
        plugin.get('instances').push(this);
    }

    private _getPluginName(pluginName: false | string): string {
        if (pluginName === false) {
            // @ts-ignore
            return this.constructor.name;
        }

        return pluginName;
    }

    private _mergeOptions(options: any): object {
        const dashedPluginName = this._pluginName.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
        const dataAttributeConfig = this.parseJsonOrFail(dashedPluginName);

        let dataAttributeOptions = '';

        if (typeof this.el.getAttribute === 'function') {
            dataAttributeOptions = this.el.getAttribute("data-".concat(dashedPluginName, "-options")) || '';
        }

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

        if (typeof this.el.getAttribute !== 'function') {
            return '';
        }

        const value = this.el.getAttribute(`data-${dashedPluginName}-config`) || '';

        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    }
}
