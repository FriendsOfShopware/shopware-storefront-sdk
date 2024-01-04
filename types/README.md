# Types for Shopware Storefront

This package provides types for window bound classes in Shopware 6 Storefront:

- `window.PluginManager`
- `window.PluginBaseClass`
- `window.router`

Install this package with NPM:

```bash
npm install @friendsofshopware/storefront-types --save-dev
```

To hav the types active, you need to create a `tsconfig.json` (`src/Resources/app/storefront/tsconfig.json`) with following content:

```json
{
    "compilerOptions": {
        "types": ["@friendsofshopware/storefront-types"]
    }
}
```
