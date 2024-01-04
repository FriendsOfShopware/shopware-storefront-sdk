# Shopware Storefront SDK

## Description

The Shopware Storefront SDK is a set of classes and methods to easily access the Shopware Storefront.
So in your plugins, you can add this package as dependency and use the classes from this package instead of default Shopware files.
This is especially helpful if you want to build your plugin without having the Shopware code-base, such as in custom webpack builds.

## Features

- Build Shopware Version independent plugin
- Ability to build your plugin javascript without having the Shopware 6 code-base

## Installation

```bash
npm install @friendsofshopware/storefront-sdk
```

## Webpack Configuration

This package is usually used to build artifacts independent from Shopware.
However, you might still want to be able to also build your storefront inside a Shopware shop.

For this, please create a custom webpack configuration in your plugin that resolves the alias and path for your dependency.

Create a new file **../Resources/app/storefront/build/webpack.config.js** and add this content:

```js
module.exports = (params) => {
    return {
        resolve: {
            modules: [
                `${params.basePath}Resources/app/storefront/node_modules`,
            ],
        }
    };
}
```

## TSConfig

To have `PluginManager` typed, you need to create a `tsconfig.json` (`src/Resources/app/storefront/tsconfig.json`) with following content:

```json
{
    "compilerOptions": {
        "types": ["@friendsofshopware/storefront-types"]
    }
}
```

`@friendsofshopware/storefront-types` is a separate NPM package which contains only the types of the storefront.

## Usage

### Creating JS Plugin

You can now use the plugin classes from this package instead of the original ones in your Shopware Javascript plugins.

```js 
import Plugin from '@friendsofshopware/storefront-sdk/plugin-system/plugin.class';

export default class MyStorefrontPlugin extends Plugin {
    constructor(el, options, pluginName) {
        super(el, options, pluginName);

        this.setup();
    }

    init(): void {
        // run your own code here
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        console.log('called');
    }
}
```

## Build

Because you have no dependency on Shopware classes anymore, can now build your plugins without having Shopware itself.
This is helpful if you want to create custom webpack builds for your plugin.

But you can also use the Shopware CLI or still Shopware itself for building.