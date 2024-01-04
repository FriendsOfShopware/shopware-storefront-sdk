export {};

import PluginManager from './plugin-system/plugin-manager';
import PluginBaseClass from './plugin-system/plugin';

declare global {
    interface Window {
        PluginManager: PluginManager,
        PluginBaseClass: PluginBaseClass,
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
