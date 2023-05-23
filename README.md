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
npm install shopware-storefront-sdk
```

## Webpack Configuration

This package is usually used to build artifacts independent from Shopware.
However, you might still want to be able to also build your storefront inside a Shopware shop.

For this, please create a custom webpack configuration in your plugin that resolves the alias and path for your dependency.

Create a new file **../Resources/app/storefront/build/webpack.config.js** and add this content:

```js
const {resolve, join} = require("path");

module.exports = () => {
    return {
        resolve: {
            alias: {
                '@shopware-storefront-sdk': resolve(
                    join(__dirname, '..', 'node_modules', 'shopware-storefront-sdk'),
                ),
            },
        },
    };
};
```

## Usage

You can now use the plugin classes from this package instead of the original ones in your Shopware Javascript plugins.

```js 
import Plugin from '@shopware-storefront-sdk/plugin-system/plugin.class';

export default class MyStorefrontPlugin extends Plugin {

}
```

## Build

Because you have no dependency on Shopware classes anymore, can now build your plugins without having Shopware itself.
This is helpful if you want to create custom webpack builds for your plugin.

But you can also use the Shopware CLI or still Shopware itself for building.