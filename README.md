# web3 enabled Shopify theme

## Getting started

This theme was cloned off of the Dawn theme [Learn more on Shopify.dev](https://shopify.dev/themes/getting-started/create).

Read this guide to understand how this repo was setup. [Learn more on blog.thirdweb.com](https://blog.thirdweb.com/guides/create-a-shopify-theme-with-thirdweb/)

## What this theme includes

This theme will include the following:

- [ ] A Claim NFT React Component that shows an NFT from an ERC1155 contract and allows the user to claim one.
- [ ] A Token Gate React Component that prevents the user from interacting with the site unless they have claimed an NFT from the ERC1155 contract.

- [ ] A Liquid `Section` for the claim React component, which will allow you to add it to any page from the theme editor.
- [ ] A Liquid `Section` for the Token Gate React Component, which will allow you to add it to any page from the theme editor.

### Prerequisites

Make sure you have setup a store and have a development environment setup. [Learn more on Shopify.dev](https://shopify.dev/docs/themes/tools/development-stores)

Install the Shopify CLI [Learn more on Shopify.dev](https://shopify.dev/themes/tools/cli)

### Installing

Clone the repository

```bash
git clone https://github.com/thirdweb-dev/shopify-thirdweb-theme
```

Install dependencies

```bash
npm install
```

### Development

In one terminal run `npm run dev` to start the webpack dev server, which will watch for changes and compile your React code.

In another terminal run `shopify theme dev` to start the a local server which will let you preview your theme and make changes to your theme files.

### Publishing

To publish your theme to your store run `shopify theme push` in the root of your project.

## Theme Store submission

The [Shopify Theme Store](https://themes.shopify.com/) is the place where Shopify merchants find the themes that they'll use to showcase and support their business. As a theme partner, you can create themes for the Shopify Theme Store and reach an international audience of an ever-growing number of entrepreneurs.

Ensure that you follow the list of [theme store requirements](https://shopify.dev/themes/store/requirements) if you're interested in becoming a [Shopify Theme Partner](https://themes.shopify.com/services/themes/guidelines) and building themes for the Shopify platform.

## License

Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.
