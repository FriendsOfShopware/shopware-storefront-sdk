export {};

interface PluginManager {
    /**
     * Registers a plugin to the plugin manager.
     */
    register(pluginName: String, pluginClass: Object, selector: String | NodeList | HTMLElement, options?: Object): void

    /**
     * Removes a plugin from the plugin manager
     */
    deregister(pluginName: String): void

    /**
     * Extends an already existing plugin with a new class or function.
     * If both names are equal, the plugin will be overridden.
     */
    extend(fromName: String, newName: string, pluginClass: Object, selector: String | NodeList | HTMLElement, options?: Object): boolean

    /**
     * Returns a list of all registered plugins.
     */
    getPluginList(): string[]

    /**
     * Returns the definition of a plugin.
     */
    getPlugin(pluginName: String, strict: boolean): Map<String, String>

    /**
     * Returns all registered plugin instances for the passed plugin name.
     */
    getPluginInstances(pluginName: String): Array<Object>


    /**
     * Returns the plugin instance from the passed element selected by plugin Name.
     */
    getPluginInstanceFromElement(el: HTMLElement, pluginName: String): Array<Object>


    /**
     * Returns all plugin instances from the passed element.
     */
    getPluginInstancesFromElement(el: HTMLElement): Map<String, Object>


    /**
     * Initializes all plugins which are currently registered.
     */
    initializePlugins(): void

    /**
     * Initializes a single plugin.
     */
    initializePlugin(pluginName: String, selector: String|NodeList|HTMLElement, options: object): void;
}

declare global {
    interface Window {
        PluginManager: PluginManager,
        router: {
            'frontend.cart.offcanvas': string,
            'frontend.cookie.offcanvas': string,
            'frontend.checkout.finish.page': string,
            'frontend.checkout.info': string,
            'frontend.menu.offcanvas': string,
            'frontend.cms.page': string,
            'frontend.cms.navigation.page': string,
            'frontend.account.addressbook': string,
            'frontend.country.country-data': string,
            'frontend.app-system.generate-token': string,
        }
     }
}