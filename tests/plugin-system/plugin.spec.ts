import Plugin from '../../src/plugin-system/plugin.class';
import { JSDOM } from 'jsdom';

class TestPlugin extends Plugin {
    options = {
        foo: 'bar'
    };

    public foo: number = 1;

    constructor(el, options, pluginName) {
        super(el, options, pluginName);

        this.setup();
        this.foo = 2;
    }

    init(): void {
        // run your own code here
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.el.innerHTML = 'clicked';
    }

    /**
     * Calls global Shopware Plugin manager which does not exist in jest
     */
    _registerInstance() {}
}

describe('Plugin', () => {
    it('create plugin', () => {
        const dom = new JSDOM(`<!DOCTYPE html><button>Hello world</button>`);
        const element = dom.window.document.querySelector("button");

        new TestPlugin(element, {}, false);

        element.click();

        expect(element.innerHTML).toBe('clicked');
    })

    it('passed options get merged', () => {
        const dom = new JSDOM(`<!DOCTYPE html><button>Hello world</button>`);
        const element = dom.window.document.querySelector("button");

        const instance = new TestPlugin(element, {foo: 'yea'}, false);
        expect(instance.options.foo).toBe('yea');

        expect(instance.foo).toBe(2);
    });
});