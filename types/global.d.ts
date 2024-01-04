declare global {
    interface Window {
        PluginManager: import('./plugin-system/plugin-manager').default,
        PluginBaseClass: import('./plugin-system/plugin').default,
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

export {}