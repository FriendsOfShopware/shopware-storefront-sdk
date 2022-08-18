interface NativeEventEmitterPublish {
    detail?: object;
    cancelable?: boolean;
}

interface NativeEventEmitterSubscribeOpts {
    once?: boolean;
    scope?: Function;
}

export default class NativeEventEmitter {
    private _listeners: any[];
    private _el: HTMLElement;

    constructor(el: HTMLElement) {
        this._el = el;

        // @ts-ignore
        el.$emitter = this;
        this._listeners = [];
    }

    publish(eventName: string, detail: NativeEventEmitterPublish = {}, cancelable: boolean = false): CustomEvent {
        const event = new CustomEvent(eventName, {
            detail,
            cancelable,
        });

        this.el.dispatchEvent(event);

        return event
    }

    subscribe(eventName: string, callback: Function, opts: NativeEventEmitterSubscribeOpts = {}): boolean {
        const emitter = this;
        const splitEventName = eventName.split('.');
        let cb = opts.scope ? callback.bind(opts.scope) : callback;

        // Support for listeners which are fired once
        if (opts.once && opts.once === true) {
            const onceCallback = cb;
            cb = function onceListener(event: Event) {
                emitter.unsubscribe(eventName);
                onceCallback(event);
            };
        }

        this.el.addEventListener(splitEventName[0], cb);

        this.listeners.push({
            splitEventName,
            opts,
            cb,
        });

        return true;
    }

    unsubscribe(eventName: String): boolean {
        const splitEventName = eventName.split('.');
        this.listeners = this.listeners.reduce((accumulator, listener) => {
            const foundEvent = listener.splitEventName.sort().toString() === splitEventName.sort().toString();

            if (foundEvent) {
                this.el.removeEventListener(listener.splitEventName[0], listener.cb);
                return accumulator;
            }

            accumulator.push(listener);
            return accumulator;
        }, []);

        return true;
    }

    reset(): boolean {
        this.listeners.forEach((listener) => {
            this.el.removeEventListener(listener.splitEventName[0], listener.cb);
        });

        // Reset registry
        this.listeners = [];
        return true;
    }

    get el() {
        return this._el;
    }

    set el(value: HTMLElement) {
        this._el = value;
    }

    get listeners() {
        return this._listeners;
    }

    set listeners(value) {
        this._listeners = value;
    }
}
