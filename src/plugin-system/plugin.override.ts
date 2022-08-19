export default class PluginOverride {
    static override(plugin: any, override: any): void {
        if (plugin.__overrides === undefined) {
            plugin.__overrides = {};
            plugin.__overridesStack = {};
        }

        plugin.prototype['callParent'] = function (name: string, ...args: any) {
            const isOuterStack = plugin.__overridesStack[name] === undefined;

            if (isOuterStack) {
                plugin.__overridesStack[name] = [... plugin.__overrides[name]];
            }

            const func = plugin.__overridesStack[name].pop();

            if (func === undefined) {
                throw new Error('Override stack is empty')
            }

            const val = func.apply(this, args);

            if (isOuterStack) {
                delete plugin.__overridesStack[name];
            }

            return val
        }

        Object.keys(override).forEach(key => {
            if (typeof override[key] === 'function') {
                const beforeFunction = plugin.prototype[key];
                plugin.prototype[key] = override[key]

                if (plugin.__overrides[key] == undefined) {
                    plugin.__overrides[key] = [];
                }

                plugin.__overrides[key].push(beforeFunction);
            } else {
                plugin[key] = override[key];
            }
        });
    }
}