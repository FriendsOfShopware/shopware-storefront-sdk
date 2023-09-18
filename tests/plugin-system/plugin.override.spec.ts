import PluginOverride from "../../src/plugin-system/plugin.override";

describe('Override', () => {
    it("replace method", () => {
        class BaseClass {
            public method() {
                return 'base';
            }
        }
    
        PluginOverride.overrideClass(BaseClass, {
            method() {
                return 'override';
            }
        })
    
        const obj = new BaseClass();
        expect(obj.method()).toBe('override');
    })
    
    it("replace property", () => {
        class BaseClass {
            static foo = 1
        }
    
        PluginOverride.overrideClass(BaseClass, {
            foo: 2
        })
    
        expect(BaseClass.foo).toBe(2);
    })
    
    it("replace method and call parent before", () => {
        class BaseClass {
            public method() {
                return 'base';
            }
        }
    
        PluginOverride.overrideClass(BaseClass, {
            method() {
                return this.callParent('method', arguments) + '-override';
            }
        })
    
        const obj = new BaseClass();
        expect(obj.method()).toBe('base-override');
    })
    
    it("replace method multiple times", () => {
        class BaseClass {
            public method() {
                return 'base';
            }
        }
    
        PluginOverride.overrideClass(BaseClass, {
            method() {
                return this.callParent('method', ...arguments) + '-override';
            }
        })
    
        PluginOverride.overrideClass(BaseClass, {
            method() {
                return this.callParent('method', ...arguments) + '-override2';
            }
        })
    
        const obj = new BaseClass();
        expect(obj.method()).toBe('base-override-override2');
        expect(obj.method()).toBe('base-override-override2');
    })
    
    it("replace method: arguments are passed", () => {
        class BaseClass {
            public method(a: string) {
                return a;
            }
        }
    
        PluginOverride.overrideClass(BaseClass, {
            method(a: string) {
                return this.callParent('method', ...arguments);
            }
        })
    
        PluginOverride.overrideClass(BaseClass, {
            method(a: string) {
                return this.callParent('method', ...arguments);
            }
        })
    
        const obj = new BaseClass();
        expect(obj.method('arg1')).toBe('arg1');
    })
    
    it("replace method: arguments can be modified", () => {
        class BaseClass {
            public method(a: string) {
                return a;
            }
        }
    
        PluginOverride.overrideClass(BaseClass, {
            method(a: string) {
                return this.callParent('method', 'modified');
            }
        })
    
        PluginOverride.overrideClass(BaseClass, {
            method(a: string) {
                return this.callParent('method', ...arguments);
            }
        })
    
        const obj = new BaseClass();
        expect(obj.method("arg1")).toBe('modified');
    })    
});