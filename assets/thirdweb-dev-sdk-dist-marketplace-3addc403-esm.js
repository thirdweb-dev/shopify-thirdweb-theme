"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_marketplace-3addc403_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/marketplace-3addc403.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/marketplace-3addc403.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Marketplace": () => (/* binding */ Marketplace)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC165.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC165.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDrop_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDrop.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDrop.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC20_V2_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_V1_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC20_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMulticall_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMulticall.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMulticall.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC20_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC721_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IClaimableERC721_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDelayedReveal_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC721_V3_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Enumerable_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Supply_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ILazyMint_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ILazyMint.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC721_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC721_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC721_V1_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_LazyMintWithTier_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC1155_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IClaimableERC1155_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDrop1155_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDrop1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC1155_V2_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase1155_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase1155_V1_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155Enumerable_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC1155_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC1155_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ERC2771Context_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IAppURI_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IAppURI.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IAppURI.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IContractMetadata_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDirectListings_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDirectListings.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IEnglishAuctions_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IOffers_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IOffers.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IOffers.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPackVRFDirect_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPermissions_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPermissions.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPermissions.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPermissionsEnumerable_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPlatformFee_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPrimarySale_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IRouter_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IRouter.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IRouter.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IRoyalty_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IRoyalty.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Ownable_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Ownable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Ownable.json");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Forwarder_json__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Forwarder.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Forwarder.json");
/* harmony import */ var _thirdweb_dev_storage__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @thirdweb-dev/storage */ "./node_modules/@thirdweb-dev/storage/dist/thirdweb-dev-storage.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20Metadata_json__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Router_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Router.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Router.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IThirdwebContract_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! merkletreejs */ "./node_modules/merkletreejs/dist/index.js");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Metadata_json__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155Metadata_json__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDelayedRevealDeprecated_json__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWFactory_json__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWFactory.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWFactory.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWRegistry_json__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWRegistry.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ContractPublisher_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWMultichainRegistryLogic_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWMultichainRegistryRouter_json__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_65__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");









































































/**
 * Create your own whitelabel marketplace that enables users to buy and sell any digital assets.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "marketplace");
 * ```
 *
 * @public
 */
class Marketplace {
  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the NFT contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much the asset will be sold for
   *   buyoutPricePerToken: "1.5",
   * }
   *
   * const tx = await contract.direct.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   */

  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutPricePerToken: "10",
   *   // the minimum bid that will be accepted for the token
   *   reservePricePerToken: "1.5",
   * }
   *
   * const tx = await contract.auction.createListing(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 2.6;
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cK(network, address, abi, options);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "direct", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "auction", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "_chainId", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "getAll", this.getAllListings);
    this._chainId = chainId;
    this.abi = abi;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cN, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, Marketplace.contractRoles);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.direct = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aR(this.contractWrapper, this.storage);
    this.auction = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aS(this.contractWrapper, this.storage);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Convenience function to get either a direct or auction listing
   *
   * @param listingId - the listing id
   * @returns either a direct or auction listing
   *
   * @remarks Get a listing by its listing id
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.getListing(listingId);
   * ```
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.listings(listingId);
    if (listing.assetContract === ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero) {
      throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bp(this.getAddress(), listingId.toString());
    }
    switch (listing.listingType) {
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Auction:
        {
          return await this.auction.mapListing(listing);
        }
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Direct:
        {
          return await this.direct.mapListing(listing);
        }
      default:
        {
          throw new Error(`Unknown listing type: ${listing.listingType}`);
        }
    }
  }

  /**
   * Get all active listings
   *
   * @remarks Fetch all the active listings from this marketplace contract. An active listing means it can be bought or bid on.
   * @example
   * ```javascript
   * const listings = await contract.getActiveListings();
   * const priceOfFirstActiveListing = listings[0].price;
   * ```
   * @param filter - optional filter parameters
   */
  async getActiveListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(true);
    const filtered = this.applyFilter(rawListings, filter);
    const now = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(Math.floor(Date.now() / 1000));
    return filtered.filter(l => {
      return l.type === _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Auction && ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(l.endTimeInEpochSeconds).gt(now) && ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(l.startTimeInEpochSeconds).lte(now) || l.type === _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Direct && l.quantity > 0;
    });
  }

  /**
   * Get all the listings
   *
   * @remarks Fetch all the listings from this marketplace contract, including sold ones.
   * @example
   * ```javascript
   * const listings = await contract.getAllListings();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   */
  async getAllListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(false);
    return this.applyFilter(rawListings, filter);
  }

  /**
   * @internal
   */

  /**
   * Get the total number of Listings
   * @returns the total number listings on the marketplace
   * @public
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalListings();
  }

  /**
   * Get whether listing is restricted only to addresses with the Lister role
   */
  async isRestrictedToListerRoleOnly() {
    const anyoneCanList = await this.contractWrapper.readContract.hasRole((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("lister"), ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero);
    return !anyoneCanList;
  }

  /**
   * Get the buffer in basis points between offers
   */
  async getBidBufferBps() {
    return this.contractWrapper.readContract.bidBufferBps();
  }

  /**
   * get the buffer time in seconds between offers
   */
  async getTimeBufferInSeconds() {
    return this.contractWrapper.readContract.timeBuffer();
  }

  /**
   * Get all the offers for a listing
   *
   * @remarks Fetch all the offers for a specified direct or auction listing.
   * @example
   * ```javascript
   * const offers = await marketplaceContract.getOffers(listingId);
   * const firstOffer = offers[0];
   * ```
   *
   * @param listingId - the id of the listing to fetch offers for
   */
  async getOffers(listingId) {
    // get all new offer events from this contract
    const listingEvents = await this.events.getEvents("NewOffer", {
      order: "desc",
      filters: {
        listingId
      }
    });
    // derive the offers from the events
    return await Promise.all(listingEvents.map(async e => {
      return await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cO)(this.contractWrapper.getProvider(), ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId), {
        quantityWanted: e.data.quantityWanted,
        pricePerToken: e.data.quantityWanted.gt(0) ? e.data.totalOfferAmount.div(e.data.quantityWanted) : e.data.totalOfferAmount,
        currency: e.data.currency,
        offeror: e.data.offeror
      });
    }));
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Purchase NFTs
   * @remarks Buy a Direct or Auction listing on your marketplace.
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.buyoutListing(listingId, quantityDesired);
   * ```
   * @param listingId - the listing ID of the listing you want to buy
   * @param quantityDesired - the quantity that you want to buy (for ERC1155 tokens)
   * @param receiver - optional receiver of the bought listing if different from the connected wallet (for direct listings only)
   */
  async buyoutListing(listingId, quantityDesired, receiver) {
    const listing = await this.contractWrapper.readContract.listings(listingId);
    if (listing.listingId.toString() !== listingId.toString()) {
      throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bp(this.getAddress(), listingId.toString());
    }
    switch (listing.listingType) {
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Direct:
        {
          (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(quantityDesired !== undefined, "quantityDesired is required when buying out a direct listing");
          return await this.direct.buyoutListing(listingId, quantityDesired, receiver);
        }
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Auction:
        {
          return await this.auction.buyoutListing(listingId);
        }
      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  }

  /**
   * Make an offer for a Direct or Auction Listing
   *
   * @remarks Make an offer on a direct or auction listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to offer on
   * const listingId = 0;
   * // The price you are willing to offer per token
   * const pricePerToken = 0.5;
   * // The quantity of tokens you want to receive for this offer
   * const quantity = 1;
   *
   * await contract.makeOffer(
   *   listingId,
   *   pricePerToken,
   *   quantity,
   * );
   * ```
   */
  async makeOffer(listingId, pricePerToken, quantity) {
    const listing = await this.contractWrapper.readContract.listings(listingId);
    if (listing.listingId.toString() !== listingId.toString()) {
      throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bp(this.getAddress(), listingId.toString());
    }
    const chainId = await this.contractWrapper.getChainID();
    switch (listing.listingType) {
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Direct:
        {
          (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(quantity, "quantity is required when making an offer on a direct listing");
          return await this.direct.makeOffer(listingId, quantity, (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cP)(listing.currency) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cd[chainId].wrapped.address : listing.currency, pricePerToken);
        }
      case _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Auction:
        {
          return await this.auction.makeBid(listingId, pricePerToken);
        }
      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  }

  /**
   * Set the Auction bid buffer
   * @remarks A percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.
   * @example
   * ```javascript
   * // the bid buffer in basis points
   * const bufferBps = 5_00; // 5%
   * await contract.setBidBufferBps(bufferBps);
   * ```
   * @param bufferBps - the bps value
   */
  async setBidBufferBps(bufferBps) {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const timeBuffer = await this.getTimeBufferInSeconds();
    await this.contractWrapper.sendTransaction("setAuctionBuffers", [timeBuffer, ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(bufferBps)]);
  }

  /**
   * Set the Auction Time buffer:
   * @remarks Measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.
   * @example
   * ```javascript
   * // the time buffer in seconds
   * const bufferInSeconds = 60;
   * await contract.setTimeBufferInSeconds(bufferInSeconds);
   * ```
   * @param bufferInSeconds - the seconds value
   */
  async setTimeBufferInSeconds(bufferInSeconds) {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const bidBuffer = await this.getBidBufferBps();
    await this.contractWrapper.sendTransaction("setAuctionBuffers", [ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(bufferInSeconds), bidBuffer]);
  }

  /**
   * Restrict listing NFTs only from the specified NFT contract address.
   * It is possible to allow listing from multiple contract addresses.
   * @param contractAddress - the NFT contract address
   */
  async allowListingFromSpecificAssetOnly(contractAddress) {
    const encoded = [];
    const members = await this.roles.get("asset");
    if (members.includes(ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero)) {
      encoded.push(this.encoder.encode("revokeRole", [(0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("asset"), ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero]));
    }
    encoded.push(this.encoder.encode("grantRole", [(0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("asset"), contractAddress]));
    await this.contractWrapper.multiCall(encoded);
  }

  /**
   * Allow listings from any NFT contract
   */
  async allowListingFromAnyAsset() {
    const encoded = [];
    const members = await this.roles.get("asset");
    for (const addr in members) {
      encoded.push(this.encoder.encode("revokeRole", [(0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("asset"), addr]));
    }
    encoded.push(this.encoder.encode("grantRole", [(0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("asset"), ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero]));
    await this.contractWrapper.multiCall(encoded);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async getAllListingsNoFilter(filterInvalidListings) {
    const listings = await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map(async i => {
      let listing;
      try {
        listing = await this.getListing(i);
      } catch (err) {
        if (err instanceof _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bp) {
          return undefined;
        } else {
          console.warn(`Failed to get listing ${i}' - skipping. Try 'marketplace.getListing(${i})' to get the underlying error.`);
          return undefined;
        }
      }
      if (listing.type === _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b1.Auction) {
        return listing;
      }
      if (filterInvalidListings) {
        const {
          valid
        } = await this.direct.isStillValidListing(listing);
        if (!valid) {
          return undefined;
        }
      }
      return listing;
    }));
    return listings.filter(l => l !== undefined);
  }
  applyFilter(listings, filter) {
    let rawListings = [...listings];
    const start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.count || _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__.c).toNumber();
    if (filter) {
      if (filter.seller) {
        rawListings = rawListings.filter(seller => seller.sellerAddress.toString().toLowerCase() === filter?.seller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContractAddress.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
      rawListings = rawListings.filter((_, index) => index >= start);
      rawListings = rawListings.slice(0, count);
    }
    return rawListings;
  }

  /**
   * @internal
   */
  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return this.contractWrapper.call(functionName, ...args);
  }
}
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(Marketplace, "contractRoles", ["admin", "lister", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW1hcmtldHBsYWNlLTNhZGRjNDAzLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRztBQUNpVztBQUN0WjtBQUNQO0FBQ3hCO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ007QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ1E7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDRztBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNMO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDTDtBQUNDO0FBQ0Q7QUFDdEM7QUFDUztBQUNQO0FBQ3NDO0FBQzlCO0FBQ21DO0FBQ1I7QUFDVztBQUMvQztBQUNHO0FBQ1g7QUFDcUQ7QUFDQztBQUNRO0FBQ2Y7QUFDQztBQUNPO0FBQ1E7QUFDQztBQUNoRTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTJCLDJFQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQWM7QUFDaEMsa0JBQWtCLG1EQUFjLGtCQUFrQiw0REFBdUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFlOztBQUVRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L21hcmtldHBsYWNlLTNhZGRjNDAzLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSwgYyBhcyBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCB9IGZyb20gJy4vUXVlcnlQYXJhbXMtZGE4OGQyN2MuZXNtLmpzJztcbmltcG9ydCB7IGNLIGFzIENvbnRyYWN0V3JhcHBlciwgYWsgYXMgQ29udHJhY3RNZXRhZGF0YSwgY04gYXMgTWFya2V0cGxhY2VDb250cmFjdFNjaGVtYSwgYWwgYXMgQ29udHJhY3RSb2xlcywgYWogYXMgQ29udHJhY3RFbmNvZGVyLCBhVSBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhUiBhcyBNYXJrZXRwbGFjZURpcmVjdCwgYVMgYXMgTWFya2V0cGxhY2VBdWN0aW9uLCBhViBhcyBDb250cmFjdEV2ZW50cywgYVggYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVcgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYnAgYXMgTGlzdGluZ05vdEZvdW5kRXJyb3IsIGIxIGFzIExpc3RpbmdUeXBlLCBiQSBhcyBnZXRSb2xlSGFzaCwgY08gYXMgbWFwT2ZmZXIsIGNQIGFzIGlzTmF0aXZlVG9rZW4sIGNkIGFzIE5BVElWRV9UT0tFTlMgfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTMzZjEzOTU1LmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMsIEJpZ051bWJlciB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnYnM1OCc7XG5cbi8qKlxuICogQ3JlYXRlIHlvdXIgb3duIHdoaXRlbGFiZWwgbWFya2V0cGxhY2UgdGhhdCBlbmFibGVzIHVzZXJzIHRvIGJ1eSBhbmQgc2VsbCBhbnkgZGlnaXRhbCBhc3NldHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwibWFya2V0cGxhY2VcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIE1hcmtldHBsYWNlIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogRGlyZWN0IGxpc3RpbmdzXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhbmQgbWFuYWdlIGRpcmVjdCBsaXN0aW5ncyBpbiB5b3VyIG1hcmtldHBsYWNlLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIERhdGEgb2YgdGhlIGxpc3RpbmcgeW91IHdhbnQgdG8gY3JlYXRlXG4gICAqIGNvbnN0IGxpc3RpbmcgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgTkZUIGNvbnRyYWN0IHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0IGlzIG9uXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdFxuICAgKiAgIHRva2VuSWQ6IFwiMFwiLFxuICAgKiAgLy8gd2hlbiBzaG91bGQgdGhlIGxpc3Rpbmcgb3BlbiB1cCBmb3Igb2ZmZXJzXG4gICAqICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKCksXG4gICAqICAgLy8gaG93IGxvbmcgdGhlIGxpc3Rpbmcgd2lsbCBiZSBvcGVuIGZvclxuICAgKiAgIGxpc3RpbmdEdXJhdGlvbkluU2Vjb25kczogODY0MDAsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICBxdWFudGl0eTogMSxcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjdXJyZW5jeSBjb250cmFjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBwYXkgZm9yIHRoZSBsaXN0aW5nXG4gICAqICAgY3VycmVuY3lDb250cmFjdEFkZHJlc3M6IE5BVElWRV9UT0tFTl9BRERSRVNTLFxuICAgKiAgIC8vIGhvdyBtdWNoIHRoZSBhc3NldCB3aWxsIGJlIHNvbGQgZm9yXG4gICAqICAgYnV5b3V0UHJpY2VQZXJUb2tlbjogXCIxLjVcIixcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmRpcmVjdC5jcmVhdGVMaXN0aW5nKGxpc3RpbmcpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgbGlzdGluZ0lkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgbmV3bHkgY3JlYXRlZCBsaXN0aW5nXG4gICAqXG4gICAqIC8vIEFuZCBvbiB0aGUgYnV5ZXJzIHNpZGU6XG4gICAqIC8vIFF1YW50aXR5IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBidXlcbiAgICogY29uc3QgcXVhbnRpdHlEZXNpcmVkID0gMTtcbiAgICogYXdhaXQgY29udHJhY3QuZGlyZWN0LmJ1eW91dExpc3RpbmcobGlzdGluZ0lkLCBxdWFudGl0eURlc2lyZWQpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIEF1Y3Rpb25zXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhbmQgbWFuYWdlIGF1Y3Rpb25zIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgYXVjdGlvbiB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgYXVjdGlvbiA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdCBpcyBvblxuICAgKiAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICB0b2tlbklkOiBcIjBcIixcbiAgICogIC8vIHdoZW4gc2hvdWxkIHRoZSBsaXN0aW5nIG9wZW4gdXAgZm9yIG9mZmVyc1xuICAgKiAgIHN0YXJ0VGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgKiAgIC8vIGhvdyBsb25nIHRoZSBsaXN0aW5nIHdpbGwgYmUgb3BlbiBmb3JcbiAgICogICBsaXN0aW5nRHVyYXRpb25JblNlY29uZHM6IDg2NDAwLFxuICAgKiAgIC8vIGhvdyBtYW55IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0XG4gICAqICAgcXVhbnRpdHk6IDEsXG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgY29udHJhY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcGF5IGZvciB0aGUgbGlzdGluZ1xuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyBob3cgbXVjaCBwZW9wbGUgd291bGQgaGF2ZSB0byBiaWQgdG8gaW5zdGFudGx5IGJ1eSB0aGUgYXNzZXRcbiAgICogICBidXlvdXRQcmljZVBlclRva2VuOiBcIjEwXCIsXG4gICAqICAgLy8gdGhlIG1pbmltdW0gYmlkIHRoYXQgd2lsbCBiZSBhY2NlcHRlZCBmb3IgdGhlIHRva2VuXG4gICAqICAgcmVzZXJ2ZVByaWNlUGVyVG9rZW46IFwiMS41XCIsXG4gICAqIH1cbiAgICpcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5hdWN0aW9uLmNyZWF0ZUxpc3RpbmcoYXVjdGlvbik7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBsaXN0aW5nSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBuZXdseSBjcmVhdGVkIGxpc3RpbmdcbiAgICpcbiAgICogLy8gQW5kIG9uIHRoZSBidXllcnMgc2lkZTpcbiAgICogLy8gVGhlIHByaWNlIHlvdSBhcmUgd2lsbGluZyB0byBiaWQgZm9yIGEgc2luZ2xlIHRva2VuIG9mIHRoZSBsaXN0aW5nXG4gICAqIGNvbnN0IHByaWNlUGVyVG9rZW4gPSAyLjY7XG4gICAqIGF3YWl0IGNvbnRyYWN0LmF1Y3Rpb24ubWFrZUJpZChsaXN0aW5nSWQsIHByaWNlUGVyVG9rZW4pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgZ2V0IGNoYWluSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYWluSWQ7XG4gIH1cbiAgY29uc3RydWN0b3IobmV0d29yaywgYWRkcmVzcywgc3RvcmFnZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29udHJhY3RXcmFwcGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RvcmFnZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJvbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkaXJlY3RcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdWN0aW9uXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NoYWluSWRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRBbGxcIiwgdGhpcy5nZXRBbGxMaXN0aW5ncyk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIE1hcmtldHBsYWNlQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBNYXJrZXRwbGFjZS5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmRpcmVjdCA9IG5ldyBNYXJrZXRwbGFjZURpcmVjdCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmF1Y3Rpb24gPSBuZXcgTWFya2V0cGxhY2VBdWN0aW9uKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBnZXQgZWl0aGVyIGEgZGlyZWN0IG9yIGF1Y3Rpb24gbGlzdGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgaWRcbiAgICogQHJldHVybnMgZWl0aGVyIGEgZGlyZWN0IG9yIGF1Y3Rpb24gbGlzdGluZ1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYSBsaXN0aW5nIGJ5IGl0cyBsaXN0aW5nIGlkXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgbGlzdGluZ0lkID0gMDtcbiAgICogY29uc3QgbGlzdGluZyA9IGF3YWl0IGNvbnRyYWN0LmdldExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRMaXN0aW5nKGxpc3RpbmdJZCkge1xuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QubGlzdGluZ3MobGlzdGluZ0lkKTtcbiAgICBpZiAobGlzdGluZy5hc3NldENvbnRyYWN0ID09PSBjb25zdGFudHMuQWRkcmVzc1plcm8pIHtcbiAgICAgIHRocm93IG5ldyBMaXN0aW5nTm90Rm91bmRFcnJvcih0aGlzLmdldEFkZHJlc3MoKSwgbGlzdGluZ0lkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxpc3RpbmcubGlzdGluZ1R5cGUpIHtcbiAgICAgIGNhc2UgTGlzdGluZ1R5cGUuQXVjdGlvbjpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmF1Y3Rpb24ubWFwTGlzdGluZyhsaXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSBMaXN0aW5nVHlwZS5EaXJlY3Q6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kaXJlY3QubWFwTGlzdGluZyhsaXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBsaXN0aW5nIHR5cGU6ICR7bGlzdGluZy5saXN0aW5nVHlwZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGFjdGl2ZSBsaXN0aW5nc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIGFjdGl2ZSBsaXN0aW5ncyBmcm9tIHRoaXMgbWFya2V0cGxhY2UgY29udHJhY3QuIEFuIGFjdGl2ZSBsaXN0aW5nIG1lYW5zIGl0IGNhbiBiZSBib3VnaHQgb3IgYmlkIG9uLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgY29udHJhY3QuZ2V0QWN0aXZlTGlzdGluZ3MoKTtcbiAgICogY29uc3QgcHJpY2VPZkZpcnN0QWN0aXZlTGlzdGluZyA9IGxpc3RpbmdzWzBdLnByaWNlO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqL1xuICBhc3luYyBnZXRBY3RpdmVMaXN0aW5ncyhmaWx0ZXIpIHtcbiAgICBjb25zdCByYXdMaXN0aW5ncyA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlzdGluZ3NOb0ZpbHRlcih0cnVlKTtcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuYXBwbHlGaWx0ZXIocmF3TGlzdGluZ3MsIGZpbHRlcik7XG4gICAgY29uc3Qgbm93ID0gQmlnTnVtYmVyLmZyb20oTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuICAgIHJldHVybiBmaWx0ZXJlZC5maWx0ZXIobCA9PiB7XG4gICAgICByZXR1cm4gbC50eXBlID09PSBMaXN0aW5nVHlwZS5BdWN0aW9uICYmIEJpZ051bWJlci5mcm9tKGwuZW5kVGltZUluRXBvY2hTZWNvbmRzKS5ndChub3cpICYmIEJpZ051bWJlci5mcm9tKGwuc3RhcnRUaW1lSW5FcG9jaFNlY29uZHMpLmx0ZShub3cpIHx8IGwudHlwZSA9PT0gTGlzdGluZ1R5cGUuRGlyZWN0ICYmIGwucXVhbnRpdHkgPiAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGxpc3RpbmdzXG4gICAqXG4gICAqIEByZW1hcmtzIEZldGNoIGFsbCB0aGUgbGlzdGluZ3MgZnJvbSB0aGlzIG1hcmtldHBsYWNlIGNvbnRyYWN0LCBpbmNsdWRpbmcgc29sZCBvbmVzLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsTGlzdGluZ3MoKTtcbiAgICogY29uc3QgcHJpY2VPZkZpcnN0TGlzdGluZyA9IGxpc3RpbmdzWzBdLnByaWNlO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqL1xuICBhc3luYyBnZXRBbGxMaXN0aW5ncyhmaWx0ZXIpIHtcbiAgICBjb25zdCByYXdMaXN0aW5ncyA9IGF3YWl0IHRoaXMuZ2V0QWxsTGlzdGluZ3NOb0ZpbHRlcihmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGaWx0ZXIocmF3TGlzdGluZ3MsIGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvdGFsIG51bWJlciBvZiBMaXN0aW5nc1xuICAgKiBAcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIGxpc3RpbmdzIG9uIHRoZSBtYXJrZXRwbGFjZVxuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyBnZXRUb3RhbENvdW50KCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG90YWxMaXN0aW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIGxpc3RpbmcgaXMgcmVzdHJpY3RlZCBvbmx5IHRvIGFkZHJlc3NlcyB3aXRoIHRoZSBMaXN0ZXIgcm9sZVxuICAgKi9cbiAgYXN5bmMgaXNSZXN0cmljdGVkVG9MaXN0ZXJSb2xlT25seSgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5MaXN0ID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1JvbGUoZ2V0Um9sZUhhc2goXCJsaXN0ZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5MaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYnVmZmVyIGluIGJhc2lzIHBvaW50cyBiZXR3ZWVuIG9mZmVyc1xuICAgKi9cbiAgYXN5bmMgZ2V0QmlkQnVmZmVyQnBzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYmlkQnVmZmVyQnBzKCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHRoZSBidWZmZXIgdGltZSBpbiBzZWNvbmRzIGJldHdlZW4gb2ZmZXJzXG4gICAqL1xuICBhc3luYyBnZXRUaW1lQnVmZmVySW5TZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudGltZUJ1ZmZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIG9mZmVycyBmb3IgYSBsaXN0aW5nXG4gICAqXG4gICAqIEByZW1hcmtzIEZldGNoIGFsbCB0aGUgb2ZmZXJzIGZvciBhIHNwZWNpZmllZCBkaXJlY3Qgb3IgYXVjdGlvbiBsaXN0aW5nLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IG9mZmVycyA9IGF3YWl0IG1hcmtldHBsYWNlQ29udHJhY3QuZ2V0T2ZmZXJzKGxpc3RpbmdJZCk7XG4gICAqIGNvbnN0IGZpcnN0T2ZmZXIgPSBvZmZlcnNbMF07XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGlkIG9mIHRoZSBsaXN0aW5nIHRvIGZldGNoIG9mZmVycyBmb3JcbiAgICovXG4gIGFzeW5jIGdldE9mZmVycyhsaXN0aW5nSWQpIHtcbiAgICAvLyBnZXQgYWxsIG5ldyBvZmZlciBldmVudHMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAgY29uc3QgbGlzdGluZ0V2ZW50cyA9IGF3YWl0IHRoaXMuZXZlbnRzLmdldEV2ZW50cyhcIk5ld09mZmVyXCIsIHtcbiAgICAgIG9yZGVyOiBcImRlc2NcIixcbiAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgbGlzdGluZ0lkXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZGVyaXZlIHRoZSBvZmZlcnMgZnJvbSB0aGUgZXZlbnRzXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGxpc3RpbmdFdmVudHMubWFwKGFzeW5jIGUgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IG1hcE9mZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIEJpZ051bWJlci5mcm9tKGxpc3RpbmdJZCksIHtcbiAgICAgICAgcXVhbnRpdHlXYW50ZWQ6IGUuZGF0YS5xdWFudGl0eVdhbnRlZCxcbiAgICAgICAgcHJpY2VQZXJUb2tlbjogZS5kYXRhLnF1YW50aXR5V2FudGVkLmd0KDApID8gZS5kYXRhLnRvdGFsT2ZmZXJBbW91bnQuZGl2KGUuZGF0YS5xdWFudGl0eVdhbnRlZCkgOiBlLmRhdGEudG90YWxPZmZlckFtb3VudCxcbiAgICAgICAgY3VycmVuY3k6IGUuZGF0YS5jdXJyZW5jeSxcbiAgICAgICAgb2ZmZXJvcjogZS5kYXRhLm9mZmVyb3JcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBQdXJjaGFzZSBORlRzXG4gICAqIEByZW1hcmtzIEJ1eSBhIERpcmVjdCBvciBBdWN0aW9uIGxpc3Rpbmcgb24geW91ciBtYXJrZXRwbGFjZS5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgbGlzdGluZyBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IDA7XG4gICAqIC8vIFF1YW50aXR5IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBidXlcbiAgICogY29uc3QgcXVhbnRpdHlEZXNpcmVkID0gMTtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3QuYnV5b3V0TGlzdGluZyhsaXN0aW5nSWQsIHF1YW50aXR5RGVzaXJlZCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgSUQgb2YgdGhlIGxpc3RpbmcgeW91IHdhbnQgdG8gYnV5XG4gICAqIEBwYXJhbSBxdWFudGl0eURlc2lyZWQgLSB0aGUgcXVhbnRpdHkgdGhhdCB5b3Ugd2FudCB0byBidXkgKGZvciBFUkMxMTU1IHRva2VucylcbiAgICogQHBhcmFtIHJlY2VpdmVyIC0gb3B0aW9uYWwgcmVjZWl2ZXIgb2YgdGhlIGJvdWdodCBsaXN0aW5nIGlmIGRpZmZlcmVudCBmcm9tIHRoZSBjb25uZWN0ZWQgd2FsbGV0IChmb3IgZGlyZWN0IGxpc3RpbmdzIG9ubHkpXG4gICAqL1xuICBhc3luYyBidXlvdXRMaXN0aW5nKGxpc3RpbmdJZCwgcXVhbnRpdHlEZXNpcmVkLCByZWNlaXZlcikge1xuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QubGlzdGluZ3MobGlzdGluZ0lkKTtcbiAgICBpZiAobGlzdGluZy5saXN0aW5nSWQudG9TdHJpbmcoKSAhPT0gbGlzdGluZ0lkLnRvU3RyaW5nKCkpIHtcbiAgICAgIHRocm93IG5ldyBMaXN0aW5nTm90Rm91bmRFcnJvcih0aGlzLmdldEFkZHJlc3MoKSwgbGlzdGluZ0lkLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxpc3RpbmcubGlzdGluZ1R5cGUpIHtcbiAgICAgIGNhc2UgTGlzdGluZ1R5cGUuRGlyZWN0OlxuICAgICAgICB7XG4gICAgICAgICAgaW52YXJpYW50KHF1YW50aXR5RGVzaXJlZCAhPT0gdW5kZWZpbmVkLCBcInF1YW50aXR5RGVzaXJlZCBpcyByZXF1aXJlZCB3aGVuIGJ1eWluZyBvdXQgYSBkaXJlY3QgbGlzdGluZ1wiKTtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kaXJlY3QuYnV5b3V0TGlzdGluZyhsaXN0aW5nSWQsIHF1YW50aXR5RGVzaXJlZCwgcmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgICBjYXNlIExpc3RpbmdUeXBlLkF1Y3Rpb246XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hdWN0aW9uLmJ1eW91dExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgRXJyb3IoYFVua25vd24gbGlzdGluZyB0eXBlOiAke2xpc3RpbmcubGlzdGluZ1R5cGV9YCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gb2ZmZXIgZm9yIGEgRGlyZWN0IG9yIEF1Y3Rpb24gTGlzdGluZ1xuICAgKlxuICAgKiBAcmVtYXJrcyBNYWtlIGFuIG9mZmVyIG9uIGEgZGlyZWN0IG9yIGF1Y3Rpb24gbGlzdGluZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBsaXN0aW5nIElEIG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBvZmZlciBvblxuICAgKiBjb25zdCBsaXN0aW5nSWQgPSAwO1xuICAgKiAvLyBUaGUgcHJpY2UgeW91IGFyZSB3aWxsaW5nIHRvIG9mZmVyIHBlciB0b2tlblxuICAgKiBjb25zdCBwcmljZVBlclRva2VuID0gMC41O1xuICAgKiAvLyBUaGUgcXVhbnRpdHkgb2YgdG9rZW5zIHlvdSB3YW50IHRvIHJlY2VpdmUgZm9yIHRoaXMgb2ZmZXJcbiAgICogY29uc3QgcXVhbnRpdHkgPSAxO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5tYWtlT2ZmZXIoXG4gICAqICAgbGlzdGluZ0lkLFxuICAgKiAgIHByaWNlUGVyVG9rZW4sXG4gICAqICAgcXVhbnRpdHksXG4gICAqICk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgbWFrZU9mZmVyKGxpc3RpbmdJZCwgcHJpY2VQZXJUb2tlbiwgcXVhbnRpdHkpIHtcbiAgICBjb25zdCBsaXN0aW5nID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmxpc3RpbmdzKGxpc3RpbmdJZCk7XG4gICAgaWYgKGxpc3RpbmcubGlzdGluZ0lkLnRvU3RyaW5nKCkgIT09IGxpc3RpbmdJZC50b1N0cmluZygpKSB7XG4gICAgICB0aHJvdyBuZXcgTGlzdGluZ05vdEZvdW5kRXJyb3IodGhpcy5nZXRBZGRyZXNzKCksIGxpc3RpbmdJZC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgY2hhaW5JZCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldENoYWluSUQoKTtcbiAgICBzd2l0Y2ggKGxpc3RpbmcubGlzdGluZ1R5cGUpIHtcbiAgICAgIGNhc2UgTGlzdGluZ1R5cGUuRGlyZWN0OlxuICAgICAgICB7XG4gICAgICAgICAgaW52YXJpYW50KHF1YW50aXR5LCBcInF1YW50aXR5IGlzIHJlcXVpcmVkIHdoZW4gbWFraW5nIGFuIG9mZmVyIG9uIGEgZGlyZWN0IGxpc3RpbmdcIik7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlyZWN0Lm1ha2VPZmZlcihsaXN0aW5nSWQsIHF1YW50aXR5LCBpc05hdGl2ZVRva2VuKGxpc3RpbmcuY3VycmVuY3kpID8gTkFUSVZFX1RPS0VOU1tjaGFpbklkXS53cmFwcGVkLmFkZHJlc3MgOiBsaXN0aW5nLmN1cnJlbmN5LCBwcmljZVBlclRva2VuKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSBMaXN0aW5nVHlwZS5BdWN0aW9uOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXVjdGlvbi5tYWtlQmlkKGxpc3RpbmdJZCwgcHJpY2VQZXJUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKGBVbmtub3duIGxpc3RpbmcgdHlwZTogJHtsaXN0aW5nLmxpc3RpbmdUeXBlfWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIEF1Y3Rpb24gYmlkIGJ1ZmZlclxuICAgKiBAcmVtYXJrcyBBIHBlcmNlbnRhZ2UgKGUuZy4gNSUpIGluIGJhc2lzIHBvaW50cyAoNSUgPSA1MDAsIDEwMCUgPSAxMDAwMCkuIEEgbmV3IGJpZCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgd2lubmluZyBiaWQgb25seSBpZiBpdHMgYmlkIGFtb3VudCBpcyBhdCBsZWFzdCB0aGUgYmlkIGJ1ZmZlciAoZS5nLiA1JSkgZ3JlYXRlciB0aGFuIHRoZSBwcmV2aW91cyB3aW5uaW5nIGJpZC4gVGhpcyBwcmV2ZW50cyBidXllcnMgZnJvbSBtYWtpbmcgdmVyeSBzbGlnaHRseSBoaWdoZXIgYmlkcyB0byB3aW4gdGhlIGF1Y3Rpb25lZCBpdGVtcy5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyB0aGUgYmlkIGJ1ZmZlciBpbiBiYXNpcyBwb2ludHNcbiAgICogY29uc3QgYnVmZmVyQnBzID0gNV8wMDsgLy8gNSVcbiAgICogYXdhaXQgY29udHJhY3Quc2V0QmlkQnVmZmVyQnBzKGJ1ZmZlckJwcyk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gYnVmZmVyQnBzIC0gdGhlIGJwcyB2YWx1ZVxuICAgKi9cbiAgYXN5bmMgc2V0QmlkQnVmZmVyQnBzKGJ1ZmZlckJwcykge1xuICAgIGF3YWl0IHRoaXMucm9sZXMudmVyaWZ5KFtcImFkbWluXCJdLCBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICAgIGNvbnN0IHRpbWVCdWZmZXIgPSBhd2FpdCB0aGlzLmdldFRpbWVCdWZmZXJJblNlY29uZHMoKTtcbiAgICBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJzZXRBdWN0aW9uQnVmZmVyc1wiLCBbdGltZUJ1ZmZlciwgQmlnTnVtYmVyLmZyb20oYnVmZmVyQnBzKV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgQXVjdGlvbiBUaW1lIGJ1ZmZlcjpcbiAgICogQHJlbWFya3MgTWVhc3VyZWQgaW4gc2Vjb25kcyAoZS5nLiAxNSBtaW51dGVzIG9yIDkwMCBzZWNvbmRzKS4gSWYgYSB3aW5uaW5nIGJpZCBpcyBtYWRlIHdpdGhpbiB0aGUgYnVmZmVyIG9mIHRoZSBhdWN0aW9uIGNsb3NpbmcgKGUuZy4gMTUgbWludXRlcyB3aXRoaW4gdGhlIGF1Y3Rpb24gY2xvc2luZyksIHRoZSBhdWN0aW9uJ3MgY2xvc2luZyB0aW1lIGlzIGluY3JlYXNlZCBieSB0aGUgYnVmZmVyIHRvIHByZXZlbnQgYnV5ZXJzIGZyb20gbWFraW5nIGxhc3QgbWludXRlIHdpbm5pbmcgYmlkcywgYW5kIHRvIGdpdmUgdGltZSB0byBvdGhlciBidXllcnMgdG8gbWFrZSBhIGhpZ2hlciBiaWQgaWYgdGhleSB3aXNoIHRvLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHRoZSB0aW1lIGJ1ZmZlciBpbiBzZWNvbmRzXG4gICAqIGNvbnN0IGJ1ZmZlckluU2Vjb25kcyA9IDYwO1xuICAgKiBhd2FpdCBjb250cmFjdC5zZXRUaW1lQnVmZmVySW5TZWNvbmRzKGJ1ZmZlckluU2Vjb25kcyk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gYnVmZmVySW5TZWNvbmRzIC0gdGhlIHNlY29uZHMgdmFsdWVcbiAgICovXG4gIGFzeW5jIHNldFRpbWVCdWZmZXJJblNlY29uZHMoYnVmZmVySW5TZWNvbmRzKSB7XG4gICAgYXdhaXQgdGhpcy5yb2xlcy52ZXJpZnkoW1wiYWRtaW5cIl0sIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gICAgY29uc3QgYmlkQnVmZmVyID0gYXdhaXQgdGhpcy5nZXRCaWRCdWZmZXJCcHMoKTtcbiAgICBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJzZXRBdWN0aW9uQnVmZmVyc1wiLCBbQmlnTnVtYmVyLmZyb20oYnVmZmVySW5TZWNvbmRzKSwgYmlkQnVmZmVyXSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzdHJpY3QgbGlzdGluZyBORlRzIG9ubHkgZnJvbSB0aGUgc3BlY2lmaWVkIE5GVCBjb250cmFjdCBhZGRyZXNzLlxuICAgKiBJdCBpcyBwb3NzaWJsZSB0byBhbGxvdyBsaXN0aW5nIGZyb20gbXVsdGlwbGUgY29udHJhY3QgYWRkcmVzc2VzLlxuICAgKiBAcGFyYW0gY29udHJhY3RBZGRyZXNzIC0gdGhlIE5GVCBjb250cmFjdCBhZGRyZXNzXG4gICAqL1xuICBhc3luYyBhbGxvd0xpc3RpbmdGcm9tU3BlY2lmaWNBc3NldE9ubHkoY29udHJhY3RBZGRyZXNzKSB7XG4gICAgY29uc3QgZW5jb2RlZCA9IFtdO1xuICAgIGNvbnN0IG1lbWJlcnMgPSBhd2FpdCB0aGlzLnJvbGVzLmdldChcImFzc2V0XCIpO1xuICAgIGlmIChtZW1iZXJzLmluY2x1ZGVzKGNvbnN0YW50cy5BZGRyZXNzWmVybykpIHtcbiAgICAgIGVuY29kZWQucHVzaCh0aGlzLmVuY29kZXIuZW5jb2RlKFwicmV2b2tlUm9sZVwiLCBbZ2V0Um9sZUhhc2goXCJhc3NldFwiKSwgY29uc3RhbnRzLkFkZHJlc3NaZXJvXSkpO1xuICAgIH1cbiAgICBlbmNvZGVkLnB1c2godGhpcy5lbmNvZGVyLmVuY29kZShcImdyYW50Um9sZVwiLCBbZ2V0Um9sZUhhc2goXCJhc3NldFwiKSwgY29udHJhY3RBZGRyZXNzXSkpO1xuICAgIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLm11bHRpQ2FsbChlbmNvZGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvdyBsaXN0aW5ncyBmcm9tIGFueSBORlQgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIGFsbG93TGlzdGluZ0Zyb21BbnlBc3NldCgpIHtcbiAgICBjb25zdCBlbmNvZGVkID0gW107XG4gICAgY29uc3QgbWVtYmVycyA9IGF3YWl0IHRoaXMucm9sZXMuZ2V0KFwiYXNzZXRcIik7XG4gICAgZm9yIChjb25zdCBhZGRyIGluIG1lbWJlcnMpIHtcbiAgICAgIGVuY29kZWQucHVzaCh0aGlzLmVuY29kZXIuZW5jb2RlKFwicmV2b2tlUm9sZVwiLCBbZ2V0Um9sZUhhc2goXCJhc3NldFwiKSwgYWRkcl0pKTtcbiAgICB9XG4gICAgZW5jb2RlZC5wdXNoKHRoaXMuZW5jb2Rlci5lbmNvZGUoXCJncmFudFJvbGVcIiwgW2dldFJvbGVIYXNoKFwiYXNzZXRcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVyb10pKTtcbiAgICBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5tdWx0aUNhbGwoZW5jb2RlZCk7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFBSSVZBVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIGFzeW5jIGdldEFsbExpc3RpbmdzTm9GaWx0ZXIoZmlsdGVySW52YWxpZExpc3RpbmdzKSB7XG4gICAgY29uc3QgbGlzdGluZ3MgPSBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKEFycmF5KChhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG90YWxMaXN0aW5ncygpKS50b051bWJlcigpKS5rZXlzKCkpLm1hcChhc3luYyBpID0+IHtcbiAgICAgIGxldCBsaXN0aW5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGluZyA9IGF3YWl0IHRoaXMuZ2V0TGlzdGluZyhpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgTGlzdGluZ05vdEZvdW5kRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGdldCBsaXN0aW5nICR7aX0nIC0gc2tpcHBpbmcuIFRyeSAnbWFya2V0cGxhY2UuZ2V0TGlzdGluZygke2l9KScgdG8gZ2V0IHRoZSB1bmRlcmx5aW5nIGVycm9yLmApO1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChsaXN0aW5nLnR5cGUgPT09IExpc3RpbmdUeXBlLkF1Y3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rpbmc7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVySW52YWxpZExpc3RpbmdzKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB2YWxpZFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5kaXJlY3QuaXNTdGlsbFZhbGlkTGlzdGluZyhsaXN0aW5nKTtcbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0aW5nO1xuICAgIH0pKTtcbiAgICByZXR1cm4gbGlzdGluZ3MuZmlsdGVyKGwgPT4gbCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxuICBhcHBseUZpbHRlcihsaXN0aW5ncywgZmlsdGVyKSB7XG4gICAgbGV0IHJhd0xpc3RpbmdzID0gWy4uLmxpc3RpbmdzXTtcbiAgICBjb25zdCBzdGFydCA9IEJpZ051bWJlci5mcm9tKGZpbHRlcj8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBjb3VudCA9IEJpZ051bWJlci5mcm9tKGZpbHRlcj8uY291bnQgfHwgREVGQVVMVF9RVUVSWV9BTExfQ09VTlQpLnRvTnVtYmVyKCk7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgaWYgKGZpbHRlci5zZWxsZXIpIHtcbiAgICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5maWx0ZXIoc2VsbGVyID0+IHNlbGxlci5zZWxsZXJBZGRyZXNzLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gZmlsdGVyPy5zZWxsZXI/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuQ29udHJhY3QpIHtcbiAgICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5maWx0ZXIodG9rZW5Db250cmFjdCA9PiB0b2tlbkNvbnRyYWN0LmFzc2V0Q29udHJhY3RBZGRyZXNzLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gZmlsdGVyPy50b2tlbkNvbnRyYWN0Py50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlci50b2tlbklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5maWx0ZXIodG9rZW5Db250cmFjdCA9PiB0b2tlbkNvbnRyYWN0LnRva2VuSWQudG9TdHJpbmcoKSA9PT0gZmlsdGVyPy50b2tlbklkPy50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIHJhd0xpc3RpbmdzID0gcmF3TGlzdGluZ3MuZmlsdGVyKChfLCBpbmRleCkgPT4gaW5kZXggPj0gc3RhcnQpO1xuICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5zbGljZSgwLCBjb3VudCk7XG4gICAgfVxuICAgIHJldHVybiByYXdMaXN0aW5ncztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgLi4uYXJncyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShNYXJrZXRwbGFjZSwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibGlzdGVyXCIsIFwiYXNzZXRcIl0pO1xuXG5leHBvcnQgeyBNYXJrZXRwbGFjZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9