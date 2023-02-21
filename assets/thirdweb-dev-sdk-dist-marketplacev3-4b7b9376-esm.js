"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_marketplacev3-4b7b9376_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/marketplacev3-4b7b9376.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/marketplacev3-4b7b9376.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarketplaceV3": () => (/* binding */ MarketplaceV3)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC165.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC165.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC20_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDrop_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDrop.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDrop.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC20_V2_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_V1_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json");
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
 * @internal
 */
const DirectListingInputParamsSchema = zod__WEBPACK_IMPORTED_MODULE_66__.z.object({
  /**
   * The address of the asset being listed.
   */
  assetContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad,
  /**
   * The ID of the token to list.
   */
  tokenId: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab["default"](1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad["default"](_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cc),
  /**
   * The price to pay per unit of NFTs listed.
   */
  pricePerToken: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__.A,
  /**
   * The start time of the listing.
   */
  startTimestamp: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ae["default"](new Date()),
  /**
   * The end time of the listing.
   */
  endTimestamp: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ag,
  /**
   * Whether the listing is reserved to be bought from a specific set of buyers.
   */
  isReservedListing: zod__WEBPACK_IMPORTED_MODULE_66__.z.boolean().default(false)
});

/**
 * @public
 */

/**
 * Handles direct listings
 * @public
 */
class MarketplaceV3DirectListings {
  // utilities

  constructor(contractWrapper, storage) {
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "featureName", _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cQ.name);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "estimator", void 0);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aV(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aj(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aW(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aU(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of direct listings.
   * @returns Returns the total number of direct listings created.
   * @public
   *
   * @example
   * ```javascript
   * const totalListings = await contract.directListings.getTotalCount();
   * ```
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalListings();
  }

  /**
   * Get all direct listings.
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAll();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Direct listing object array
   */
  async getAll(filter) {
    const totalListings = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllListings);
    rawListings = batches.flat();
    const filteredListings = this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get all valid direct listings.
   *
   * A valid listing is where the listing is active,
   * and the creator still owns & has approved Marketplace to transfer the listed NFTs.
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAllValid();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Direct listing object array
   */
  async getAllValid(filter) {
    const totalListings = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllValidListings);
    rawListings = batches.flat();
    const filteredListings = this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get a direct listing by id.
   *
   * @param listingId - the listing id
   * @returns the Direct listing object
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.directListings.getListing(listingId);
   * ```
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.getListing(listingId);
    return await this.mapListing(listing);
  }

  /**
   * Check whether a buyer is approved for a reserved listing.
   *
   * @param listingId - the listing id
   * @param buyer - buyer address
   */
  async isBuyerApprovedForListing(listingId, buyer) {
    const listing = await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    if (!listing.isReservedListing) {
      throw new Error(`Listing ${listingId} is not a reserved listing.`);
    }
    return await this.contractWrapper.readContract.isBuyerApprovedForListing(listingId, buyer);
  }

  /**
   * Check whether a currency is approved for a listing.
   *
   * @param listingId - the listing id
   * @param currency - currency address
   */
  async isCurrencyApprovedForListing(listingId, currency) {
    await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    return await this.contractWrapper.readContract.isCurrencyApprovedForListing(listingId, currency);
  }

  /**
   * Check price per token for an approved currency.
   *
   * @param listingId - the listing id
   * @param currencyContractAddress - currency contract address
   */
  async currencyPriceForListing(listingId, currencyContractAddress) {
    const listing = await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    if (currencyContractAddress === listing.currencyContractAddress) {
      return listing.pricePerToken;
    }
    const isApprovedCurrency = await this.isCurrencyApprovedForListing(listingId, currencyContractAddress);
    if (!isApprovedCurrency) {
      throw new Error(`Currency ${currencyContractAddress} is not approved for Listing ${listingId}.`);
    }
    return await this.contractWrapper.readContract.currencyPriceForListing(listingId, currencyContractAddress);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Direct Listing
   *
   * @remarks Create a new listing on the marketplace where people can buy an asset directly.
   *
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   */
  async createListing(listing) {
    const parsedListing = DirectListingInputParamsSchema.parse(listing);
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cS)(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedListing.startTimestamp.lt(blockTime)) {
      parsedListing.startTimestamp = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(blockTime);
    }
    const receipt = await this.contractWrapper.sendTransaction("createListing", [{
      assetContract: parsedListing.assetContractAddress,
      tokenId: parsedListing.tokenId,
      quantity: parsedListing.quantity,
      currency: (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cT)(parsedListing.currencyContractAddress),
      pricePerToken: normalizedPricePerToken,
      startTimestamp: parsedListing.startTimestamp,
      endTimestamp: parsedListing.endTimestamp,
      reserved: parsedListing.isReservedListing
    }], {
      // Higher gas limit for create listing
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("NewListing", receipt?.logs);
    return {
      id: event[0].args.listingId,
      receipt
    };
  }

  /**
   * Update a Direct listing with new metadata.
   *
   * Note: cannot update a listing with a new quantity of 0. Use `cancelDirectListing` to remove a listing instead.
   *
   * @param listing - the new listing information
   *
   * @example
   * ```javascript
   * // Data of the listing you want to update
   *
   * const listingId = 0; // ID of the listing you want to update
   *
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...", // should be same as original listing
   *   // token ID of the asset you want to list
   *   tokenId: "0", // should be same as original listing
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()), // can't change this if listing already active
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.updateListing(listingId, listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   */
  async updateListing(listingId, listing) {
    const parsedListing = DirectListingInputParamsSchema.parse(listing);
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cS)(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    const receipt = await this.contractWrapper.sendTransaction("updateListing", [listingId, {
      assetContract: parsedListing.assetContractAddress,
      tokenId: parsedListing.tokenId,
      quantity: parsedListing.quantity,
      currency: (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cT)(parsedListing.currencyContractAddress),
      pricePerToken: normalizedPricePerToken,
      startTimestamp: parsedListing.startTimestamp,
      endTimestamp: parsedListing.endTimestamp,
      reserved: parsedListing.isReservedListing
    }], {
      // Higher gas limit for create listing
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("UpdatedListing", receipt?.logs);
    return {
      id: event[0].args.listingId,
      receipt
    };
  }

  /**
   * Cancel Direct Listing
   *
   * @remarks Cancel a direct listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to cancel
   * const listingId = 0;
   *
   * await contract.directListings.cancelListing(listingId);
   * ```
   */
  async cancelListing(listingId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("cancelListing", [listingId])
    };
  }

  /**
   * Buy from a Listing
   *
   * @remarks Buy from a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param quantityDesired - the quantity to buy
   * @param receiver - optional receiver of the bought listing if different from the connected wallet
   */
  async buyFromListing(listingId, quantityDesired, receiver) {
    const listing = await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    const {
      valid,
      error
    } = await this.isStillValidListing(listing, quantityDesired);
    if (!valid) {
      throw new Error(`Listing ${listingId} is no longer valid. ${error}`);
    }
    const buyFor = receiver ? receiver : await this.contractWrapper.getSignerAddress();
    const quantity = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(quantityDesired);
    const value = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listing.pricePerToken).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cU)(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return {
      receipt: await this.contractWrapper.sendTransaction("buyFromListing", [listingId, buyFor, quantity, listing.currencyContractAddress, value], overrides)
    };
  }

  /**
   * Approve buyer for reserved listing.
   *
   * @remarks Approve a buyer to buy from a reserved listing.
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.approveBuyerForReservedListing(listingId, buyer);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   */
  async approveBuyerForReservedListing(listingId, buyer) {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (!isApproved) {
      return {
        receipt: await this.contractWrapper.sendTransaction("approveBuyerForListing", [listingId, buyer, true])
      };
    } else {
      throw new Error(`Buyer ${buyer} already approved for listing ${listingId}.`);
    }
  }

  /**
   * Revoke approval of a buyer for reserved listing.
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.revokeBuyerApprovalForReservedListing(listingId, buyer);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   */
  async revokeBuyerApprovalForReservedListing(listingId, buyer) {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (isApproved) {
      return {
        receipt: await this.contractWrapper.sendTransaction("approveBuyerForListing", [listingId, buyer, false])
      };
    } else {
      throw new Error(`Buyer ${buyer} not approved for listing ${listingId}.`);
    }
  }

  /**
   * Approve a currency for a listing.
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want approve currency for
   * const listingId = "0";
   *
   * await contract.directListings.approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency being approved
   * @param pricePerTokenInCurrency - Price per token in the currency
   */
  async approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency) {
    const listing = await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    if (currencyContractAddress === listing.currencyContractAddress) {
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(pricePerTokenInCurrency === listing.pricePerToken, "Approving listing currency with a different price.");
    }
    const currencyPrice = await this.contractWrapper.readContract.currencyPriceForListing(listingId, currencyContractAddress);
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(pricePerTokenInCurrency === currencyPrice, "Currency already approved with this price.");
    return {
      receipt: await this.contractWrapper.sendTransaction("approveCurrencyForListing", [listingId, currencyContractAddress, pricePerTokenInCurrency])
    };
  }

  /**
   * Revoke approval of a currency from a listing.
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to revoke currency for
   * const listingId = "0";
   *
   * await contract.directListings.revokeCurrencyApprovalForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency
   */
  async revokeCurrencyApprovalForListing(listingId, currencyContractAddress) {
    const listing = await this.validateListing(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listingId));
    if (currencyContractAddress === listing.currencyContractAddress) {
      throw new Error(`Can't revoke approval for main listing currency.`);
    }
    const currencyPrice = await this.contractWrapper.readContract.currencyPriceForListing(listingId, currencyContractAddress);
    (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!currencyPrice.isZero(), "Currency not approved.");
    return {
      receipt: await this.contractWrapper.sendTransaction("approveCurrencyForListing", [listingId, currencyContractAddress, ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(0)])
    };
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */
  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction listing to the direct listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapListing(listing) {
    let status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (listing.status) {
      case 1:
        status = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listing.startTimestamp).gt(blockTime) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Created : ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listing.endTimestamp).lt(blockTime) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Expired : _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Active;
        break;
      case 2:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Completed;
        break;
      case 3:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Cancelled;
        break;
    }
    return {
      assetContractAddress: listing.assetContract,
      currencyContractAddress: listing.currency,
      pricePerToken: listing.pricePerToken.toString(),
      currencyValuePerToken: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), listing.currency, listing.pricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId.toString(),
      quantity: listing.quantity.toString(),
      startTimeInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listing.startTimestamp).toNumber(),
      asset: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cV)(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      endTimeInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(listing.endTimestamp).toNumber(),
      creatorAddress: listing.listingCreator,
      isReservedListing: listing.reserved,
      status: status
    };
  }

  /**
   * Use this method to check if a direct listing is still valid.
   *
   * Ways a direct listing can become invalid:
   * 1. The asset holder transferred the asset to another wallet
   * 2. The asset holder burned the asset
   * 3. The asset holder removed the approval on the marketplace
   *
   * @internal
   * @param listing - The listing to check.
   * @returns - True if the listing is valid, false otherwise.
   */
  async isStillValidListing(listing, quantity) {
    const approved = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cW)(this.contractWrapper.getProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, listing.creatorAddress);
    if (!approved) {
      return {
        valid: false,
        error: `Token '${listing.tokenId}' from contract '${listing.assetContractAddress}' is not approved for transfer`
      };
    }
    const provider = this.contractWrapper.getProvider();
    const erc165 = new ethers__WEBPACK_IMPORTED_MODULE_70__.Contract(listing.assetContractAddress, _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_0__, provider);
    const isERC721 = await erc165.supportsInterface(_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ca);
    const isERC1155 = await erc165.supportsInterface(_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cb);
    if (isERC721) {
      const asset = new ethers__WEBPACK_IMPORTED_MODULE_70__.Contract(listing.assetContractAddress, _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_1__, provider);
      const valid = (await asset.ownerOf(listing.tokenId)).toLowerCase() === listing.creatorAddress.toLowerCase();
      return {
        valid,
        error: valid ? undefined : `Seller is not the owner of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} anymore'`
      };
    } else if (isERC1155) {
      const asset = new ethers__WEBPACK_IMPORTED_MODULE_70__.Contract(listing.assetContractAddress, _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_2__, provider);
      const balance = await asset.balanceOf(listing.creatorAddress, listing.tokenId);
      const valid = balance.gte(quantity || listing.quantity);
      return {
        valid,
        error: valid ? undefined : `Seller does not have enough balance of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} to fulfill the listing`
      };
    } else {
      return {
        valid: false,
        error: "Contract does not implement ERC 1155 or ERC 721."
      };
    }
  }
  applyFilter(listings, filter) {
    let rawListings = [...listings];
    if (filter) {
      if (filter.seller) {
        rawListings = rawListings.filter(seller => seller.listingCreator.toString().toLowerCase() === filter?.seller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawListings.length ? rawListings.slice(0, filter.count) : rawListings;
  }
}

/**
 * @internal
 */
const EnglishAuctionInputParamsSchema = zod__WEBPACK_IMPORTED_MODULE_66__.z.object({
  /**
   * The address of the asset being auctioned.
   */
  assetContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad,
  /**
   * The ID of the token to auction.
   */
  tokenId: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab["default"](1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad["default"](_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cc),
  /**
   * The minimum price that a bid must be in order to be accepted.
   */
  minimumBidAmount: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__.A,
  /**
   * The buyout price of the auction.
   */
  buyoutBidAmount: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__.A,
  /**
   * This is a buffer e.g. x seconds.
   *
   * If a new winning bid is made less than x seconds before expirationTimestamp, the
   * expirationTimestamp is increased by x seconds.
   */
  timeBufferInSeconds: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab["default"](900),
  // 15 minutes by default

  /**
   * This is a buffer in basis points e.g. x%.
   *
   * To be considered as a new winning bid, a bid must be at least x% greater than
   * the current winning bid.
   */
  bidBufferBps: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab["default"](500),
  // 5% by default

  /**
   * The start time of the auction.
   */
  startTimestamp: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ae["default"](new Date()),
  /**
   * The end time of the auction.
   */
  endTimestamp: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ag
});

/**
 * @public
 */

/**
 * Handles auctions
 * @public
 */
class MarketplaceV3EnglishAuctions {
  // utilities

  constructor(contractWrapper, storage) {
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "featureName", _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cX.name);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "estimator", void 0);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aV(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aj(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aW(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aU(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of english auctions.
   * @returns Returns the total number of auctions created.
   * @public
   *
   * @example
   * ```javascript
   * const totalAuctions = await contract.englishAuctions.getTotalCount();
   * ```
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalAuctions();
  }

  /**
   * Get all auctions.
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Auction object array
   */
  async getAll(filter) {
    const totalAuctions = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllAuctions);
    rawAuctions = batches.flat();
    const filteredAuctions = this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get all valid auctions.
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Auction object array
   */
  async getAllValid(filter) {
    const totalAuctions = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllValidAuctions);
    rawAuctions = batches.flat();
    const filteredAuctions = this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get an Auction by id.
   *
   * @example
   * ```javascript
   * const auctionId = 0;
   * const auction = await contract.englishAuctions.getAuction(auctionId);
   * ```
   *
   * @param auctionId - the auction Id
   * @returns the Auction object
   */
  async getAuction(auctionId) {
    const auction = await this.contractWrapper.readContract.getAuction(auctionId);
    return await this.mapAuction(auction);
  }

  /**
   * Get Highest Bid
   *
   * @remarks Get the current highest bid of an active auction.
   *
   * @example
   * ```javascript
   * // The ID of the auction
   * const auctionId = 0;
   *
   * contract.englishAuctions.
   *   .getWinningBid(auctionId)
   *   .then((bid) => console.log(bid))
   *   .catch((err) => console.error(err));
   * ```
   */
  async getWinningBid(auctionId) {
    await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    const bid = await this.contractWrapper.readContract.getWinningBid(auctionId);
    if (bid._bidder === ethers__WEBPACK_IMPORTED_MODULE_71__.AddressZero) {
      return undefined;
    }
    return await this.mapBid(auctionId.toString(), bid._bidder, bid._currency, bid._bidAmount.toString());
  }

  /**
   * Check if a bid-amount is/will be a winning bid.
   *
   * @param auctionId - Auction Id
   * @param bidAmount - Amount to bid
   * @returns the Auction object
   */
  async isWinningBid(auctionId, bidAmount) {
    return await this.contractWrapper.readContract.isNewWinningBid(auctionId, bidAmount);
  }

  /**
   * Get Auction Winner
   *
   * @remarks Get the winner of the auction after an auction ends.
   *
   * @example
   * ```javascript
   * // The auction ID of the auction that closed
   * const auctionId = 0;
   *
   * contract.englishAuctions.
   *   .getWinner(auctionId)
   *   .then((auctionWinner) => console.log(auctionWinner))
   *   .catch((err) => console.error(err));
   * ```
   */
  async getWinner(auctionId) {
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    const bid = await this.contractWrapper.readContract.getWinningBid(auctionId);
    const now = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(Math.floor(Date.now() / 1000));
    const endTime = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.endTimeInSeconds);

    // if we have a winner in the map and the current time is past the endtime of the auction return the address of the winner
    if (now.gt(endTime) && bid._bidder !== ethers__WEBPACK_IMPORTED_MODULE_71__.AddressZero) {
      return bid._bidder;
    }
    // otherwise fall back to query filter things

    // TODO this should be via indexer or direct contract call
    const closedAuctions = await this.contractWrapper.readContract.queryFilter(this.contractWrapper.readContract.filters.AuctionClosed());
    const closed = closedAuctions.find(a => a.args.auctionId.eq(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId)));
    if (!closed) {
      throw new Error(`Could not find auction with ID ${auctionId} in closed auctions`);
    }
    return closed.args.winningBidder;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Auction
   *
   * @remarks Create a new auction where people can bid on an asset.
   *
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "900", // 15 minutes by default
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "500", // 5% by default
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   * ```
   */
  async createAuction(auction) {
    const parsedAuction = EnglishAuctionInputParamsSchema.parse(auction);
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cS)(this.contractWrapper, this.getAddress(), parsedAuction.assetContractAddress, parsedAuction.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedBuyoutAmount = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), parsedAuction.buyoutBidAmount, parsedAuction.currencyContractAddress);
    const normalizedMinBidAmount = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), parsedAuction.minimumBidAmount, parsedAuction.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedAuction.startTimestamp.lt(blockTime)) {
      parsedAuction.startTimestamp = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(blockTime);
    }
    const receipt = await this.contractWrapper.sendTransaction("createAuction", [{
      assetContract: parsedAuction.assetContractAddress,
      tokenId: parsedAuction.tokenId,
      quantity: parsedAuction.quantity,
      currency: (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cT)(parsedAuction.currencyContractAddress),
      minimumBidAmount: normalizedMinBidAmount,
      buyoutBidAmount: normalizedBuyoutAmount,
      timeBufferInSeconds: parsedAuction.timeBufferInSeconds,
      bidBufferBps: parsedAuction.bidBufferBps,
      startTimestamp: parsedAuction.startTimestamp,
      endTimestamp: parsedAuction.endTimestamp
    }], {
      // Higher gas limit for create auction
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("NewAuction", receipt?.logs);
    return {
      id: event[0].args.auctionId,
      receipt
    };
  }

  /**
   * Buyout Auction
   *
   * @remarks Buy a specific auction from the marketplace.
   *
   * @example
   * ```javascript
   * // The auction ID of the asset you want to buy
   * const auctionId = 0;
   *
   * await contract.englishAuctions.buyoutAuction(auctionId);
   * ```
   */
  async buyoutAuction(auctionId) {
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    const currencyMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b7)(this.contractWrapper.getProvider(), auction.currencyContractAddress);
    return this.makeBid(auctionId, ethers__WEBPACK_IMPORTED_MODULE_72__.formatUnits(auction.buyoutBidAmount, currencyMetadata.decimals));
  }

  /**
   * Bid On Auction
   *
   * @remarks Make a bid on an auction
   *
   * @example
   * ```javascript
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   */
  async makeBid(auctionId, bidAmount) {
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    const normalizedBidAmount = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), bidAmount, auction.currencyContractAddress);
    if (normalizedBidAmount.eq(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(0))) {
      throw new Error("Cannot make a bid with 0 value");
    }
    if (ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.buyoutBidAmount).gt(0) && normalizedBidAmount.gt(auction.buyoutBidAmount)) {
      throw new Error("Bid amount must be less than or equal to buyoutBidAmount");
    }
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      const isWinnner = await this.isWinningBid(auctionId, normalizedBidAmount);
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(isWinnner, "Bid price is too low based on the current winning bid and the bid buffer");
    } else {
      const tokenPrice = normalizedBidAmount;
      const minimumBidAmount = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.minimumBidAmount);
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(tokenPrice.gte(minimumBidAmount), "Bid price is too low based on minimum bid amount");
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cU)(this.contractWrapper, normalizedBidAmount, auction.currencyContractAddress, overrides);
    return {
      receipt: await this.contractWrapper.sendTransaction("bidInAuction", [auctionId, normalizedBidAmount], overrides)
    };
  }

  /**
   * Cancel Auction
   *
   * @remarks Cancel an auction on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to cancel
   * const auctionId = "0";
   *
   * await contract.englishAuctions.cancelAuction(auctionId);
   * ```
   */
  async cancelAuction(auctionId) {
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      throw new Error(`Bids already made.`);
    }
    return {
      receipt: await this.contractWrapper.sendTransaction("cancelAuction", [auctionId])
    };
  }

  /**
   * Close the Auction for the buyer
   *
   * @remarks Closes the Auction and executes the sale for the buyer.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.closeAuctionForBidder(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   * @param closeFor - optionally pass the winning bid offeror address to close the auction on their behalf
   */
  async closeAuctionForBidder(auctionId, closeFor) {
    if (!closeFor) {
      closeFor = await this.contractWrapper.getSignerAddress();
    }
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    try {
      return {
        receipt: await this.contractWrapper.sendTransaction("collectAuctionTokens", [ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId)])
      };
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bt(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  }

  /**
   * Close the Auction for the seller, i.e. the auction creator
   *
   * @remarks Closes the Auction and executes the sale for the seller.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auctionId = "0";
   * await contract.englishAuctions.closeAuctionForSeller(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   */
  async closeAuctionForSeller(auctionId) {
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    try {
      return {
        receipt: await this.contractWrapper.sendTransaction("collectAuctionPayout", [ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId)])
      };
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bt(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  }

  /**
   * Execute the Auction Sale
   *
   * @remarks Closes the Auction and executes the sale for both parties.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.executeSale(auctionId);
   * ```
   *
   * @param auctionId - the auction to close
   */
  async executeSale(auctionId) {
    const auction = await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId));
    try {
      const winningBid = await this.getWinningBid(auctionId);
      (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(winningBid, "No winning bid found");
      const closeForSeller = this.encoder.encode("collectAuctionPayout", [auctionId]);
      const closeForBuyer = this.encoder.encode("collectAuctionTokens", [auctionId]);
      return await this.contractWrapper.multiCall([closeForSeller, closeForBuyer]);
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bt(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  }

  /**
   * Get the buffer in basis points between bids for an auction.
   *
   * @param auctionId - id of the auction
   */
  async getBidBufferBps(auctionId) {
    return (await this.getAuction(auctionId)).bidBufferBps;
  }

  /**
   * returns the minimum bid a user can place to outbid the previous highest bid
   * @param auctionId - id of the auction
   */
  async getMinimumNextBid(auctionId) {
    // we can fetch all of these at the same time using promise.all
    const [currentBidBufferBps, winningBid, auction] = await Promise.all([this.getBidBufferBps(auctionId), this.getWinningBid(auctionId), await this.validateAuction(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auctionId))]);
    const currentBidOrReservePrice = winningBid ?
    // if there is a winning bid use the value of it
    ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(winningBid.bidAmount) :
    // if there is no winning bid use the reserve price
    ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.minimumBidAmount);
    const minimumNextBid = currentBidOrReservePrice.add(
    // the addition of the current bid and the buffer
    // (have to divide by 10000 to get the fraction of the buffer (since it's in basis points))
    currentBidOrReservePrice.mul(currentBidBufferBps).div(10000));

    // it's more useful to return a currency value here
    return (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), auction.currencyContractAddress, minimumNextBid);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if auction could not be found
   *
   * @param auctionId - Auction to check for
   */
  async validateAuction(auctionId) {
    try {
      return await this.getAuction(auctionId);
    } catch (err) {
      console.error(`Error getting the auction with id ${auctionId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction to the auction interface.
   *
   * @internal
   * @param auction - The auction to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapAuction(auction) {
    let status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (auction.status) {
      case 1:
        status = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.startTimestamp).gt(blockTime) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Created : ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.endTimestamp).lt(blockTime) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Expired : _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Active;
        break;
      case 2:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Completed;
        break;
      case 3:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Cancelled;
        break;
    }
    return {
      id: auction.auctionId.toString(),
      creatorAddress: auction.auctionCreator,
      assetContractAddress: auction.assetContract,
      tokenId: auction.tokenId.toString(),
      quantity: auction.quantity.toString(),
      currencyContractAddress: auction.currency,
      minimumBidAmount: auction.minimumBidAmount.toString(),
      minimumBidCurrencyValue: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), auction.currency, auction.minimumBidAmount),
      buyoutBidAmount: auction.buyoutBidAmount.toString(),
      buyoutCurrencyValue: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), auction.currency, auction.buyoutBidAmount),
      timeBufferInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.timeBufferInSeconds).toNumber(),
      bidBufferBps: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.bidBufferBps).toNumber(),
      startTimeInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.startTimestamp).toNumber(),
      endTimeInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(auction.endTimestamp).toNumber(),
      asset: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cV)(auction.assetContract, this.contractWrapper.getProvider(), auction.tokenId, this.storage),
      status: status
    };
  }

  /**
   * Maps an auction-bid to the strict interface
   *
   * @internal
   * @param bid
   * @returns - A `Bid` object
   */
  async mapBid(auctionId, bidderAddress, currencyContractAddress, bidAmount) {
    return {
      auctionId,
      bidderAddress,
      currencyContractAddress,
      bidAmount,
      bidAmountCurrencyValue: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), currencyContractAddress, bidAmount)
    };
  }
  applyFilter(auctions, filter) {
    let rawAuctions = [...auctions];
    if (filter) {
      if (filter.seller) {
        rawAuctions = rawAuctions.filter(seller => seller.auctionCreator.toString().toLowerCase() === filter?.seller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawAuctions.length ? rawAuctions.slice(0, filter.count) : rawAuctions;
  }
}

/**
 * @internal
 */
const OfferInputParamsSchema = zod__WEBPACK_IMPORTED_MODULE_66__.z.object({
  /**
   * The address of the asset being sought.
   */
  assetContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad,
  /**
   * The ID of the token.
   */
  tokenId: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab,
  /**
   * The quantity of tokens to buy.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ab["default"](1),
  /**
   * The address of the currency offered for the NFTs.
   */
  currencyContractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ad["default"](_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cc),
  /**
   * The total offer amount for the NFTs.
   */
  totalPrice: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__.A,
  /**
   * The end time of the offer.
   */
  endTimestamp: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ag
});

/**
 * @public
 */

/**
 * Handles marketplace offers
 * @public
 */
class MarketplaceV3Offers {
  // utilities

  constructor(contractWrapper, storage) {
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "featureName", _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cY.name);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "estimator", void 0);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aV(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aj(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aW(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aU(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of offers
   * @returns Returns the total number of offers created.
   * @public
   *
   * @example
   * ```javascript
   * const totalOffers = await contract.offers.getTotalCount();
   * ```
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalOffers();
  }

  /**
   * Get all offers.
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Offer object array
   */
  async getAll(filter) {
    const totalOffers = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllOffers);
    rawOffers = batches.flat();
    const filteredOffers = this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get all valid offers.
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Offer object array
   */
  async getAllValid(filter) {
    const totalOffers = await this.getTotalCount();
    let start = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(filter?.start || 0).toNumber();
    let end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    let batches = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cR)(start, end, this.contractWrapper.readContract.getAllValidOffers);
    rawOffers = batches.flat();
    const filteredOffers = this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get a offer by id
   *
   * @example
   * ```javascript
   * const offerId = 0;
   * const offer = await contract.offers.getOffer(offerId);
   * ```
   *
   * @param offerId - the listing id
   * @returns the Direct listing object
   */
  async getOffer(offerId) {
    const offer = await this.contractWrapper.readContract.getOffer(offerId);
    return await this.mapOffer(offer);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Make Offer
   *
   * @remarks Make an offer on the marketplace for an asset.
   *
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   * ```
   */
  async makeOffer(offer) {
    const parsedOffer = OfferInputParamsSchema.parse(offer);
    const chainId = await this.contractWrapper.getChainID();
    const currency = (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cP)(parsedOffer.currencyContractAddress) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cd[chainId].wrapped.address : parsedOffer.currencyContractAddress;
    const normalizedTotalPrice = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b8)(this.contractWrapper.getProvider(), parsedOffer.totalPrice, currency);
    const overrides = await this.contractWrapper.getCallOverrides();
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cU)(this.contractWrapper, normalizedTotalPrice, currency, overrides);
    const receipt = await this.contractWrapper.sendTransaction("makeOffer", [{
      assetContract: parsedOffer.assetContractAddress,
      tokenId: parsedOffer.tokenId,
      quantity: parsedOffer.quantity,
      currency: currency,
      totalPrice: normalizedTotalPrice,
      expirationTimestamp: parsedOffer.endTimestamp
    }], {
      // Higher gas limit for create listing
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("NewOffer", receipt?.logs);
    return {
      id: event[0].args.offerId,
      receipt
    };
  }

  /**
   * Cancel Offer
   *
   * @remarks Cancel an offer on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to cancel
   * const offerId = "0";
   *
   * await contract.offers.cancelOffer(offerId);
   * ```
   */
  async cancelOffer(offerId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("cancelOffer", [offerId])
    };
  }

  /**
   * Accept an offer
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to accept
   * const offerId = 0;
   *
   * await contract.offers.acceptOffer(offerId);
   * ```
   *
   * @param offerId - The offer id
   */
  async acceptOffer(offerId) {
    const offer = await this.validateOffer(ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(offerId));
    const {
      valid,
      error
    } = await this.isStillValidOffer(offer);
    if (!valid) {
      throw new Error(`Offer ${offerId} is no longer valid. ${error}`);
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cS)(this.contractWrapper, this.getAddress(), offer.assetContractAddress, offer.tokenId, await this.contractWrapper.getSignerAddress());
    return {
      receipt: await this.contractWrapper.sendTransaction("acceptOffer", [offerId], overrides)
    };
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if offer could not be found
   *
   * @param offerId - offer to check for
   */
  async validateOffer(offerId) {
    try {
      return await this.getOffer(offerId);
    } catch (err) {
      console.error(`Error getting the offer with id ${offerId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the offer to the offer interface.
   *
   * @internal
   * @param offer - The offer to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapOffer(offer) {
    let status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (offer.status) {
      case 1:
        status = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(offer.expirationTimestamp).lt(blockTime) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Expired : _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Active;
        break;
      case 2:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Completed;
        break;
      case 3:
        status = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b2.Cancelled;
        break;
    }
    return {
      id: offer.offerId.toString(),
      offerorAddress: offer.offeror,
      assetContractAddress: offer.assetContract,
      currencyContractAddress: offer.currency,
      tokenId: offer.tokenId.toString(),
      quantity: offer.quantity.toString(),
      totalPrice: offer.totalPrice.toString(),
      currencyValue: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.b6)(this.contractWrapper.getProvider(), offer.currency, offer.totalPrice),
      asset: await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cV)(offer.assetContract, this.contractWrapper.getProvider(), offer.tokenId, this.storage),
      endTimeInSeconds: ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(offer.expirationTimestamp).toNumber(),
      status: status
    };
  }

  /**
   * Use this method to check if an offer is still valid.
   *
   * Ways an offer can become invalid:
   * 1. The offer has expired
   * 2. The offeror doesn't have enough balance of currency tokens
   * 3. The offeror removed the approval of currency tokens on the marketplace
   *
   * @internal
   * @param offer - The offer to check.
   * @returns - True if the offer is valid, false otherwise.
   */
  async isStillValidOffer(offer) {
    const now = ethers__WEBPACK_IMPORTED_MODULE_69__.BigNumber.from(Math.floor(Date.now() / 1000));
    if (now.gt(offer.endTimeInSeconds)) {
      return {
        valid: false,
        error: `Offer with ID ${offer.id} has expired`
      };
    }
    const chainId = await this.contractWrapper.getChainID();
    const currency = (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cP)(offer.currencyContractAddress) ? _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cd[chainId].wrapped.address : offer.currencyContractAddress;
    const provider = this.contractWrapper.getProvider();
    const erc20 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cK(provider, currency, _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_4__, {});
    const offerorBalance = await erc20.readContract.balanceOf(offer.offerorAddress);
    if (offerorBalance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} doesn't have enough balance of token ${currency}`
      };
    }
    const offerorAllowance = await erc20.readContract.allowance(offer.offerorAddress, this.getAddress());
    if (offerorAllowance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} hasn't approved enough amount of token ${currency}`
      };
    }
    return {
      valid: true,
      error: ""
    };
  }
  applyFilter(offers, filter) {
    let rawOffers = [...offers];
    if (filter) {
      if (filter.offeror) {
        rawOffers = rawOffers.filter(offeror => offeror.offeror.toString().toLowerCase() === filter?.offeror?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawOffers = rawOffers.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawOffers = rawOffers.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawOffers.length ? rawOffers.slice(0, filter.count) : rawOffers;
  }
}

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
class MarketplaceV3 {
  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired);
   * ```
   */
  get directListings() {
    return (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bX)(this.detectDirectListings(), _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cQ);
  }
  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "1000",
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "100", // 100 bps stands for 1%
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   *
   * // And on the buyers side:
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   */
  get englishAuctions() {
    return (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bX)(this.detectEnglishAuctions(), _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cX);
  }

  /**
   * Offers
   * @remarks Make and manage offers.
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   *
   * // And on the seller's side:
   * // The ID of the offer you want to accept
   * const offerId = 0;
   * await contract.offers.acceptOffer(offerId);
   * ```
   */
  get offers() {
    return (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bX)(this.detectOffers(), _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cY);
  }
  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cK(network, address, abi, options);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(this, "_chainId", void 0);
    this._chainId = chainId;
    this.abi = abi;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.cN, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.al(this.contractWrapper, MarketplaceV3.contractRoles);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.aW(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
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

  /** ********************
   * FEATURE DETECTION
   * ********************/

  detectDirectListings() {
    if ((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bY)(this.contractWrapper, "DirectListings")) {
      return new MarketplaceV3DirectListings(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectEnglishAuctions() {
    if ((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bY)(this.contractWrapper, "EnglishAuctions")) {
      return new MarketplaceV3EnglishAuctions(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectOffers() {
    if ((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_67__.bY)(this.contractWrapper, "Offers")) {
      return new MarketplaceV3Offers(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_68__._)(MarketplaceV3, "contractRoles", ["admin", "lister", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW1hcmtldHBsYWNldjMtNGI3YjkzNzYtZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ3UwQjtBQUN2NEI7QUFDa0Q7QUFDQTtBQUNFO0FBQ1o7QUFDekI7QUFDaUM7QUFDekQ7QUFDbUQ7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNMO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0w7QUFDQztBQUNEO0FBQ3RDO0FBQ1M7QUFDUDtBQUNzQztBQUM5QjtBQUNtQztBQUNSO0FBQ1c7QUFDL0M7QUFDRztBQUNYO0FBQ3FEO0FBQ0M7QUFDUTtBQUNmO0FBQ0M7QUFDTztBQUNRO0FBQ0M7QUFDaEU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDBDQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtRUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxXQUFXLG1FQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4RUFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDhFQUFxQixDQUFDLG1FQUFvQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhFQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUVBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUFTO0FBQzlCLENBQUM7O0FBRUQ7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YTtBQUNsQyx1QkFBdUIsbUVBQWU7QUFDdEMseUJBQXlCLG1FQUFnQjtBQUN6QyxzQkFBc0IsbUVBQWM7QUFDcEMsNEJBQTRCLG1FQUFtQjtBQUMvQywyQkFBMkIsbUVBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx1RUFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvbWFya2V0cGxhY2V2My00YjdiOTM3Ni5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQSBhcyBBbW91bnRTY2hlbWEsIF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgYWQgYXMgQWRkcmVzc1NjaGVtYSwgYWIgYXMgQmlnTnVtYmVyaXNoU2NoZW1hLCBjYyBhcyBOQVRJVkVfVE9LRU5fQUREUkVTUywgYWUgYXMgUmF3RGF0ZVNjaGVtYSwgYWcgYXMgRW5kRGF0ZVNjaGVtYSwgY1EgYXMgRkVBVFVSRV9ESVJFQ1RfTElTVElOR1MsIGFWIGFzIENvbnRyYWN0RXZlbnRzLCBhaiBhcyBDb250cmFjdEVuY29kZXIsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFVIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGNSIGFzIGdldEFsbEluQmF0Y2hlcywgY1MgYXMgaGFuZGxlVG9rZW5BcHByb3ZhbCwgYjggYXMgbm9ybWFsaXplUHJpY2VWYWx1ZSwgY1QgYXMgY2xlYW5DdXJyZW5jeUFkZHJlc3MsIGNVIGFzIHNldEVyYzIwQWxsb3dhbmNlLCBiMiBhcyBTdGF0dXMsIGI2IGFzIGZldGNoQ3VycmVuY3lWYWx1ZSwgY1YgYXMgZmV0Y2hUb2tlbk1ldGFkYXRhRm9yQ29udHJhY3QsIGNXIGFzIGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyLCBjYSBhcyBJbnRlcmZhY2VJZF9JRVJDNzIxLCBjYiBhcyBJbnRlcmZhY2VJZF9JRVJDMTE1NSwgY1ggYXMgRkVBVFVSRV9FTkdMSVNIX0FVQ1RJT05TLCBiNyBhcyBmZXRjaEN1cnJlbmN5TWV0YWRhdGEsIGJ0IGFzIEF1Y3Rpb25IYXNOb3RFbmRlZEVycm9yLCBjWSBhcyBGRUFUVVJFX09GRkVSUywgY1AgYXMgaXNOYXRpdmVUb2tlbiwgY2QgYXMgTkFUSVZFX1RPS0VOUywgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBiWCBhcyBhc3NlcnRFbmFibGVkLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBjTiBhcyBNYXJrZXRwbGFjZUNvbnRyYWN0U2NoZW1hLCBhbCBhcyBDb250cmFjdFJvbGVzLCBhWCBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBiWSBhcyBkZXRlY3RDb250cmFjdEZlYXR1cmUgfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTMzZjEzOTU1LmVzbS5qcyc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCBFUkMxNjVBYmkgZnJvbSAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgRXJjNzIxQWJpIGZyb20gJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0IEVyYzExNTVBYmkgZnJvbSAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBDb250cmFjdCwgY29uc3RhbnRzLCBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgRVJDMjBBYmkgZnJvbSAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Sb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdiczU4JztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRGlyZWN0TGlzdGluZ0lucHV0UGFyYW1zU2NoZW1hID0gei5vYmplY3Qoe1xuICAvKipcbiAgICogVGhlIGFkZHJlc3Mgb2YgdGhlIGFzc2V0IGJlaW5nIGxpc3RlZC5cbiAgICovXG4gIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBBZGRyZXNzU2NoZW1hLFxuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSB0b2tlbiB0byBsaXN0LlxuICAgKi9cbiAgdG9rZW5JZDogQmlnTnVtYmVyaXNoU2NoZW1hLFxuICAvKipcbiAgICogVGhlIHF1YW50aXR5IG9mIHRva2VucyB0byBpbmNsdWRlIGluIHRoZSBsaXN0aW5nLlxuICAgKlxuICAgKiBGb3IgRVJDNzIxcywgdGhpcyB2YWx1ZSBzaG91bGQgYWx3YXlzIGJlIDEgKGFuZCB3aWxsIGJlIGZvcmNlZCBpbnRlcm5hbGx5IHJlZ2FyZGxlc3Mgb2Ygd2hhdCBpcyBwYXNzZWQgaGVyZSkuXG4gICAqL1xuICBxdWFudGl0eTogQmlnTnVtYmVyaXNoU2NoZW1hLmRlZmF1bHQoMSksXG4gIC8qKlxuICAgKiBUaGUgYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgdG8gYWNjZXB0IGZvciB0aGUgbGlzdGluZy5cbiAgICovXG4gIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBBZGRyZXNzU2NoZW1hLmRlZmF1bHQoTkFUSVZFX1RPS0VOX0FERFJFU1MpLFxuICAvKipcbiAgICogVGhlIHByaWNlIHRvIHBheSBwZXIgdW5pdCBvZiBORlRzIGxpc3RlZC5cbiAgICovXG4gIHByaWNlUGVyVG9rZW46IEFtb3VudFNjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBzdGFydCB0aW1lIG9mIHRoZSBsaXN0aW5nLlxuICAgKi9cbiAgc3RhcnRUaW1lc3RhbXA6IFJhd0RhdGVTY2hlbWEuZGVmYXVsdChuZXcgRGF0ZSgpKSxcbiAgLyoqXG4gICAqIFRoZSBlbmQgdGltZSBvZiB0aGUgbGlzdGluZy5cbiAgICovXG4gIGVuZFRpbWVzdGFtcDogRW5kRGF0ZVNjaGVtYSxcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGxpc3RpbmcgaXMgcmVzZXJ2ZWQgdG8gYmUgYm91Z2h0IGZyb20gYSBzcGVjaWZpYyBzZXQgb2YgYnV5ZXJzLlxuICAgKi9cbiAgaXNSZXNlcnZlZExpc3Rpbmc6IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpXG59KTtcblxuLyoqXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBIYW5kbGVzIGRpcmVjdCBsaXN0aW5nc1xuICogQHB1YmxpY1xuICovXG5jbGFzcyBNYXJrZXRwbGFjZVYzRGlyZWN0TGlzdGluZ3Mge1xuICAvLyB1dGlsaXRpZXNcblxuICBjb25zdHJ1Y3Rvcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJmZWF0dXJlTmFtZVwiLCBGRUFUVVJFX0RJUkVDVF9MSVNUSU5HUy5uYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGRpcmVjdCBsaXN0aW5ncy5cbiAgICogQHJldHVybnMgUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGRpcmVjdCBsaXN0aW5ncyBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdG90YWxMaXN0aW5ncyA9IGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmdldFRvdGFsQ291bnQoKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRUb3RhbENvdW50KCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG90YWxMaXN0aW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgZGlyZWN0IGxpc3RpbmdzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdzID0gYXdhaXQgY29udHJhY3QuZGlyZWN0TGlzdGluZ3MuZ2V0QWxsKCk7XG4gICAqIGNvbnN0IHByaWNlT2ZGaXJzdExpc3RpbmcgPSBsaXN0aW5nc1swXS5wcmljZTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXIgLSBvcHRpb25hbCBmaWx0ZXIgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB0aGUgRGlyZWN0IGxpc3Rpbmcgb2JqZWN0IGFycmF5XG4gICAqL1xuICBhc3luYyBnZXRBbGwoZmlsdGVyKSB7XG4gICAgY29uc3QgdG90YWxMaXN0aW5ncyA9IGF3YWl0IHRoaXMuZ2V0VG90YWxDb3VudCgpO1xuICAgIGxldCBzdGFydCA9IEJpZ051bWJlci5mcm9tKGZpbHRlcj8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBsZXQgZW5kID0gdG90YWxMaXN0aW5ncy50b051bWJlcigpO1xuICAgIGlmIChlbmQgPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbGlzdGluZ3MgZXhpc3Qgb24gdGhlIGNvbnRyYWN0LmApO1xuICAgIH1cbiAgICBsZXQgcmF3TGlzdGluZ3MgPSBbXTtcbiAgICBsZXQgYmF0Y2hlcyA9IGF3YWl0IGdldEFsbEluQmF0Y2hlcyhzdGFydCwgZW5kLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0QWxsTGlzdGluZ3MpO1xuICAgIHJhd0xpc3RpbmdzID0gYmF0Y2hlcy5mbGF0KCk7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0aW5ncyA9IHRoaXMuYXBwbHlGaWx0ZXIocmF3TGlzdGluZ3MsIGZpbHRlcik7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGZpbHRlcmVkTGlzdGluZ3MubWFwKGxpc3RpbmcgPT4gdGhpcy5tYXBMaXN0aW5nKGxpc3RpbmcpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB2YWxpZCBkaXJlY3QgbGlzdGluZ3MuXG4gICAqXG4gICAqIEEgdmFsaWQgbGlzdGluZyBpcyB3aGVyZSB0aGUgbGlzdGluZyBpcyBhY3RpdmUsXG4gICAqIGFuZCB0aGUgY3JlYXRvciBzdGlsbCBvd25zICYgaGFzIGFwcHJvdmVkIE1hcmtldHBsYWNlIHRvIHRyYW5zZmVyIHRoZSBsaXN0ZWQgTkZUcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBsaXN0aW5ncyA9IGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmdldEFsbFZhbGlkKCk7XG4gICAqIGNvbnN0IHByaWNlT2ZGaXJzdExpc3RpbmcgPSBsaXN0aW5nc1swXS5wcmljZTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXIgLSBvcHRpb25hbCBmaWx0ZXIgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB0aGUgRGlyZWN0IGxpc3Rpbmcgb2JqZWN0IGFycmF5XG4gICAqL1xuICBhc3luYyBnZXRBbGxWYWxpZChmaWx0ZXIpIHtcbiAgICBjb25zdCB0b3RhbExpc3RpbmdzID0gYXdhaXQgdGhpcy5nZXRUb3RhbENvdW50KCk7XG4gICAgbGV0IHN0YXJ0ID0gQmlnTnVtYmVyLmZyb20oZmlsdGVyPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGxldCBlbmQgPSB0b3RhbExpc3RpbmdzLnRvTnVtYmVyKCk7XG4gICAgaWYgKGVuZCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBsaXN0aW5ncyBleGlzdCBvbiB0aGUgY29udHJhY3QuYCk7XG4gICAgfVxuICAgIGxldCByYXdMaXN0aW5ncyA9IFtdO1xuICAgIGxldCBiYXRjaGVzID0gYXdhaXQgZ2V0QWxsSW5CYXRjaGVzKHN0YXJ0LCBlbmQsIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5nZXRBbGxWYWxpZExpc3RpbmdzKTtcbiAgICByYXdMaXN0aW5ncyA9IGJhdGNoZXMuZmxhdCgpO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdGluZ3MgPSB0aGlzLmFwcGx5RmlsdGVyKHJhd0xpc3RpbmdzLCBmaWx0ZXIpO1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChmaWx0ZXJlZExpc3RpbmdzLm1hcChsaXN0aW5nID0+IHRoaXMubWFwTGlzdGluZyhsaXN0aW5nKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRpcmVjdCBsaXN0aW5nIGJ5IGlkLlxuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgaWRcbiAgICogQHJldHVybnMgdGhlIERpcmVjdCBsaXN0aW5nIG9iamVjdFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IDA7XG4gICAqIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCBjb250cmFjdC5kaXJlY3RMaXN0aW5ncy5nZXRMaXN0aW5nKGxpc3RpbmdJZCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgZ2V0TGlzdGluZyhsaXN0aW5nSWQpIHtcbiAgICBjb25zdCBsaXN0aW5nID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5tYXBMaXN0aW5nKGxpc3RpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgYSBidXllciBpcyBhcHByb3ZlZCBmb3IgYSByZXNlcnZlZCBsaXN0aW5nLlxuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gdGhlIGxpc3RpbmcgaWRcbiAgICogQHBhcmFtIGJ1eWVyIC0gYnV5ZXIgYWRkcmVzc1xuICAgKi9cbiAgYXN5bmMgaXNCdXllckFwcHJvdmVkRm9yTGlzdGluZyhsaXN0aW5nSWQsIGJ1eWVyKSB7XG4gICAgY29uc3QgbGlzdGluZyA9IGF3YWl0IHRoaXMudmFsaWRhdGVMaXN0aW5nKEJpZ051bWJlci5mcm9tKGxpc3RpbmdJZCkpO1xuICAgIGlmICghbGlzdGluZy5pc1Jlc2VydmVkTGlzdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaXN0aW5nICR7bGlzdGluZ0lkfSBpcyBub3QgYSByZXNlcnZlZCBsaXN0aW5nLmApO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmlzQnV5ZXJBcHByb3ZlZEZvckxpc3RpbmcobGlzdGluZ0lkLCBidXllcik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBhIGN1cnJlbmN5IGlzIGFwcHJvdmVkIGZvciBhIGxpc3RpbmcuXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0aW5nSWQgLSB0aGUgbGlzdGluZyBpZFxuICAgKiBAcGFyYW0gY3VycmVuY3kgLSBjdXJyZW5jeSBhZGRyZXNzXG4gICAqL1xuICBhc3luYyBpc0N1cnJlbmN5QXBwcm92ZWRGb3JMaXN0aW5nKGxpc3RpbmdJZCwgY3VycmVuY3kpIHtcbiAgICBhd2FpdCB0aGlzLnZhbGlkYXRlTGlzdGluZyhCaWdOdW1iZXIuZnJvbShsaXN0aW5nSWQpKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmlzQ3VycmVuY3lBcHByb3ZlZEZvckxpc3RpbmcobGlzdGluZ0lkLCBjdXJyZW5jeSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcHJpY2UgcGVyIHRva2VuIGZvciBhbiBhcHByb3ZlZCBjdXJyZW5jeS5cbiAgICpcbiAgICogQHBhcmFtIGxpc3RpbmdJZCAtIHRoZSBsaXN0aW5nIGlkXG4gICAqIEBwYXJhbSBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyAtIGN1cnJlbmN5IGNvbnRyYWN0IGFkZHJlc3NcbiAgICovXG4gIGFzeW5jIGN1cnJlbmN5UHJpY2VGb3JMaXN0aW5nKGxpc3RpbmdJZCwgY3VycmVuY3lDb250cmFjdEFkZHJlc3MpIHtcbiAgICBjb25zdCBsaXN0aW5nID0gYXdhaXQgdGhpcy52YWxpZGF0ZUxpc3RpbmcoQmlnTnVtYmVyLmZyb20obGlzdGluZ0lkKSk7XG4gICAgaWYgKGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzID09PSBsaXN0aW5nLmN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKSB7XG4gICAgICByZXR1cm4gbGlzdGluZy5wcmljZVBlclRva2VuO1xuICAgIH1cbiAgICBjb25zdCBpc0FwcHJvdmVkQ3VycmVuY3kgPSBhd2FpdCB0aGlzLmlzQ3VycmVuY3lBcHByb3ZlZEZvckxpc3RpbmcobGlzdGluZ0lkLCBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyk7XG4gICAgaWYgKCFpc0FwcHJvdmVkQ3VycmVuY3kpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ3VycmVuY3kgJHtjdXJyZW5jeUNvbnRyYWN0QWRkcmVzc30gaXMgbm90IGFwcHJvdmVkIGZvciBMaXN0aW5nICR7bGlzdGluZ0lkfS5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5jdXJyZW5jeVByaWNlRm9yTGlzdGluZyhsaXN0aW5nSWQsIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgRGlyZWN0IExpc3RpbmdcbiAgICpcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgbmV3IGxpc3Rpbmcgb24gdGhlIG1hcmtldHBsYWNlIHdoZXJlIHBlb3BsZSBjYW4gYnV5IGFuIGFzc2V0IGRpcmVjdGx5LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIERhdGEgb2YgdGhlIGxpc3RpbmcgeW91IHdhbnQgdG8gY3JlYXRlXG4gICAqIGNvbnN0IGxpc3RpbmcgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3QgaXMgb25cbiAgICogICBhc3NldENvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLFxuICAgKiAgIC8vIHRva2VuIElEIG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0XG4gICAqICAgdG9rZW5JZDogXCIwXCIsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICBxdWFudGl0eTogMSxcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjdXJyZW5jeSBjb250cmFjdCB0aGF0IHdpbGwgYmUgdXNlZCB0byBwYXkgZm9yIHRoZSBsaXN0aW5nXG4gICAqICAgY3VycmVuY3lDb250cmFjdEFkZHJlc3M6IE5BVElWRV9UT0tFTl9BRERSRVNTLFxuICAgKiAgIC8vIFRoZSBwcmljZSB0byBwYXkgcGVyIHVuaXQgb2YgTkZUcyBsaXN0ZWQuXG4gICAqICAgcHJpY2VQZXJUb2tlbjogMS41LFxuICAgKiAgIC8vIHdoZW4gc2hvdWxkIHRoZSBsaXN0aW5nIG9wZW4gdXAgZm9yIG9mZmVyc1xuICAgKiAgIHN0YXJ0VGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpKSxcbiAgICogICAvLyBob3cgbG9uZyB0aGUgbGlzdGluZyB3aWxsIGJlIG9wZW4gZm9yXG4gICAqICAgZW5kVGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgKiAgIC8vIFdoZXRoZXIgdGhlIGxpc3RpbmcgaXMgcmVzZXJ2ZWQgZm9yIGEgc3BlY2lmaWMgc2V0IG9mIGJ1eWVycy5cbiAgICogICBpc1Jlc2VydmVkTGlzdGluZzogZmFsc2VcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmNyZWF0ZUxpc3RpbmcobGlzdGluZyk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBpZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgbGlzdGluZ1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGNyZWF0ZUxpc3RpbmcobGlzdGluZykge1xuICAgIGNvbnN0IHBhcnNlZExpc3RpbmcgPSBEaXJlY3RMaXN0aW5nSW5wdXRQYXJhbXNTY2hlbWEucGFyc2UobGlzdGluZyk7XG4gICAgYXdhaXQgaGFuZGxlVG9rZW5BcHByb3ZhbCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5nZXRBZGRyZXNzKCksIHBhcnNlZExpc3RpbmcuYXNzZXRDb250cmFjdEFkZHJlc3MsIHBhcnNlZExpc3RpbmcudG9rZW5JZCwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgICBjb25zdCBub3JtYWxpemVkUHJpY2VQZXJUb2tlbiA9IGF3YWl0IG5vcm1hbGl6ZVByaWNlVmFsdWUodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcGFyc2VkTGlzdGluZy5wcmljZVBlclRva2VuLCBwYXJzZWRMaXN0aW5nLmN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKTtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCkuZ2V0QmxvY2soXCJsYXRlc3RcIik7XG4gICAgY29uc3QgYmxvY2tUaW1lID0gYmxvY2sudGltZXN0YW1wO1xuICAgIGlmIChwYXJzZWRMaXN0aW5nLnN0YXJ0VGltZXN0YW1wLmx0KGJsb2NrVGltZSkpIHtcbiAgICAgIHBhcnNlZExpc3Rpbmcuc3RhcnRUaW1lc3RhbXAgPSBCaWdOdW1iZXIuZnJvbShibG9ja1RpbWUpO1xuICAgIH1cbiAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiY3JlYXRlTGlzdGluZ1wiLCBbe1xuICAgICAgYXNzZXRDb250cmFjdDogcGFyc2VkTGlzdGluZy5hc3NldENvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHRva2VuSWQ6IHBhcnNlZExpc3RpbmcudG9rZW5JZCxcbiAgICAgIHF1YW50aXR5OiBwYXJzZWRMaXN0aW5nLnF1YW50aXR5LFxuICAgICAgY3VycmVuY3k6IGNsZWFuQ3VycmVuY3lBZGRyZXNzKHBhcnNlZExpc3RpbmcuY3VycmVuY3lDb250cmFjdEFkZHJlc3MpLFxuICAgICAgcHJpY2VQZXJUb2tlbjogbm9ybWFsaXplZFByaWNlUGVyVG9rZW4sXG4gICAgICBzdGFydFRpbWVzdGFtcDogcGFyc2VkTGlzdGluZy5zdGFydFRpbWVzdGFtcCxcbiAgICAgIGVuZFRpbWVzdGFtcDogcGFyc2VkTGlzdGluZy5lbmRUaW1lc3RhbXAsXG4gICAgICByZXNlcnZlZDogcGFyc2VkTGlzdGluZy5pc1Jlc2VydmVkTGlzdGluZ1xuICAgIH1dLCB7XG4gICAgICAvLyBIaWdoZXIgZ2FzIGxpbWl0IGZvciBjcmVhdGUgbGlzdGluZ1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMFxuICAgIH0pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiTmV3TGlzdGluZ1wiLCByZWNlaXB0Py5sb2dzKTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGV2ZW50WzBdLmFyZ3MubGlzdGluZ0lkLFxuICAgICAgcmVjZWlwdFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgRGlyZWN0IGxpc3Rpbmcgd2l0aCBuZXcgbWV0YWRhdGEuXG4gICAqXG4gICAqIE5vdGU6IGNhbm5vdCB1cGRhdGUgYSBsaXN0aW5nIHdpdGggYSBuZXcgcXVhbnRpdHkgb2YgMC4gVXNlIGBjYW5jZWxEaXJlY3RMaXN0aW5nYCB0byByZW1vdmUgYSBsaXN0aW5nIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0aW5nIC0gdGhlIG5ldyBsaXN0aW5nIGluZm9ybWF0aW9uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byB1cGRhdGVcbiAgICpcbiAgICogY29uc3QgbGlzdGluZ0lkID0gMDsgLy8gSUQgb2YgdGhlIGxpc3RpbmcgeW91IHdhbnQgdG8gdXBkYXRlXG4gICAqXG4gICAqIGNvbnN0IGxpc3RpbmcgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3QgaXMgb25cbiAgICogICBhc3NldENvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLCAvLyBzaG91bGQgYmUgc2FtZSBhcyBvcmlnaW5hbCBsaXN0aW5nXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICB0b2tlbklkOiBcIjBcIiwgLy8gc2hvdWxkIGJlIHNhbWUgYXMgb3JpZ2luYWwgbGlzdGluZ1xuICAgKiAgIC8vIGhvdyBtYW55IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBsaXN0XG4gICAqICAgcXVhbnRpdHk6IDEsXG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgY29udHJhY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcGF5IGZvciB0aGUgbGlzdGluZ1xuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyBUaGUgcHJpY2UgdG8gcGF5IHBlciB1bml0IG9mIE5GVHMgbGlzdGVkLlxuICAgKiAgIHByaWNlUGVyVG9rZW46IDEuNSxcbiAgICogICAvLyB3aGVuIHNob3VsZCB0aGUgbGlzdGluZyBvcGVuIHVwIGZvciBvZmZlcnNcbiAgICogICBzdGFydFRpbWVzdGFtcDogbmV3IERhdGUoRGF0ZS5ub3coKSksIC8vIGNhbid0IGNoYW5nZSB0aGlzIGlmIGxpc3RpbmcgYWxyZWFkeSBhY3RpdmVcbiAgICogICAvLyBob3cgbG9uZyB0aGUgbGlzdGluZyB3aWxsIGJlIG9wZW4gZm9yXG4gICAqICAgZW5kVGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgKiAgIC8vIFdoZXRoZXIgdGhlIGxpc3RpbmcgaXMgcmVzZXJ2ZWQgZm9yIGEgc3BlY2lmaWMgc2V0IG9mIGJ1eWVycy5cbiAgICogICBpc1Jlc2VydmVkTGlzdGluZzogZmFsc2VcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLnVwZGF0ZUxpc3RpbmcobGlzdGluZ0lkLCBsaXN0aW5nKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IGlkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgbmV3bHkgY3JlYXRlZCBsaXN0aW5nXG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlTGlzdGluZyhsaXN0aW5nSWQsIGxpc3RpbmcpIHtcbiAgICBjb25zdCBwYXJzZWRMaXN0aW5nID0gRGlyZWN0TGlzdGluZ0lucHV0UGFyYW1zU2NoZW1hLnBhcnNlKGxpc3RpbmcpO1xuICAgIGF3YWl0IGhhbmRsZVRva2VuQXBwcm92YWwodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMuZ2V0QWRkcmVzcygpLCBwYXJzZWRMaXN0aW5nLmFzc2V0Q29udHJhY3RBZGRyZXNzLCBwYXJzZWRMaXN0aW5nLnRva2VuSWQsIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFByaWNlUGVyVG9rZW4gPSBhd2FpdCBub3JtYWxpemVQcmljZVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHBhcnNlZExpc3RpbmcucHJpY2VQZXJUb2tlbiwgcGFyc2VkTGlzdGluZy5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcInVwZGF0ZUxpc3RpbmdcIiwgW2xpc3RpbmdJZCwge1xuICAgICAgYXNzZXRDb250cmFjdDogcGFyc2VkTGlzdGluZy5hc3NldENvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHRva2VuSWQ6IHBhcnNlZExpc3RpbmcudG9rZW5JZCxcbiAgICAgIHF1YW50aXR5OiBwYXJzZWRMaXN0aW5nLnF1YW50aXR5LFxuICAgICAgY3VycmVuY3k6IGNsZWFuQ3VycmVuY3lBZGRyZXNzKHBhcnNlZExpc3RpbmcuY3VycmVuY3lDb250cmFjdEFkZHJlc3MpLFxuICAgICAgcHJpY2VQZXJUb2tlbjogbm9ybWFsaXplZFByaWNlUGVyVG9rZW4sXG4gICAgICBzdGFydFRpbWVzdGFtcDogcGFyc2VkTGlzdGluZy5zdGFydFRpbWVzdGFtcCxcbiAgICAgIGVuZFRpbWVzdGFtcDogcGFyc2VkTGlzdGluZy5lbmRUaW1lc3RhbXAsXG4gICAgICByZXNlcnZlZDogcGFyc2VkTGlzdGluZy5pc1Jlc2VydmVkTGlzdGluZ1xuICAgIH1dLCB7XG4gICAgICAvLyBIaWdoZXIgZ2FzIGxpbWl0IGZvciBjcmVhdGUgbGlzdGluZ1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMFxuICAgIH0pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiVXBkYXRlZExpc3RpbmdcIiwgcmVjZWlwdD8ubG9ncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBldmVudFswXS5hcmdzLmxpc3RpbmdJZCxcbiAgICAgIHJlY2VpcHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBEaXJlY3QgTGlzdGluZ1xuICAgKlxuICAgKiBAcmVtYXJrcyBDYW5jZWwgYSBkaXJlY3QgbGlzdGluZyBvbiB0aGUgbWFya2V0cGxhY2VcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgbGlzdGluZyBJRCBvZiB0aGUgZGlyZWN0IGxpc3RpbmcgeW91IHdhbnQgdG8gY2FuY2VsXG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IDA7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmNhbmNlbExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBjYW5jZWxMaXN0aW5nKGxpc3RpbmdJZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWNlaXB0OiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJjYW5jZWxMaXN0aW5nXCIsIFtsaXN0aW5nSWRdKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQnV5IGZyb20gYSBMaXN0aW5nXG4gICAqXG4gICAqIEByZW1hcmtzIEJ1eSBmcm9tIGEgc3BlY2lmaWMgZGlyZWN0IGxpc3RpbmcgZnJvbSB0aGUgbWFya2V0cGxhY2UuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIElEIG9mIHRoZSBsaXN0aW5nIHlvdSB3YW50IHRvIGJ1eSBmcm9tXG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IDA7XG4gICAqIC8vIFF1YW50aXR5IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBidXlcbiAgICogY29uc3QgcXVhbnRpdHlEZXNpcmVkID0gMTtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3QuZGlyZWN0TGlzdGluZ3MuYnV5RnJvbUxpc3RpbmcobGlzdGluZ0lkLCBxdWFudGl0eURlc2lyZWQpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGxpc3RpbmdJZCAtIFRoZSBsaXN0aW5nIGlkIHRvIGJ1eVxuICAgKiBAcGFyYW0gcXVhbnRpdHlEZXNpcmVkIC0gdGhlIHF1YW50aXR5IHRvIGJ1eVxuICAgKiBAcGFyYW0gcmVjZWl2ZXIgLSBvcHRpb25hbCByZWNlaXZlciBvZiB0aGUgYm91Z2h0IGxpc3RpbmcgaWYgZGlmZmVyZW50IGZyb20gdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICovXG4gIGFzeW5jIGJ1eUZyb21MaXN0aW5nKGxpc3RpbmdJZCwgcXVhbnRpdHlEZXNpcmVkLCByZWNlaXZlcikge1xuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCB0aGlzLnZhbGlkYXRlTGlzdGluZyhCaWdOdW1iZXIuZnJvbShsaXN0aW5nSWQpKTtcbiAgICBjb25zdCB7XG4gICAgICB2YWxpZCxcbiAgICAgIGVycm9yXG4gICAgfSA9IGF3YWl0IHRoaXMuaXNTdGlsbFZhbGlkTGlzdGluZyhsaXN0aW5nLCBxdWFudGl0eURlc2lyZWQpO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTGlzdGluZyAke2xpc3RpbmdJZH0gaXMgbm8gbG9uZ2VyIHZhbGlkLiAke2Vycm9yfWApO1xuICAgIH1cbiAgICBjb25zdCBidXlGb3IgPSByZWNlaXZlciA/IHJlY2VpdmVyIDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpO1xuICAgIGNvbnN0IHF1YW50aXR5ID0gQmlnTnVtYmVyLmZyb20ocXVhbnRpdHlEZXNpcmVkKTtcbiAgICBjb25zdCB2YWx1ZSA9IEJpZ051bWJlci5mcm9tKGxpc3RpbmcucHJpY2VQZXJUb2tlbikubXVsKHF1YW50aXR5KTtcbiAgICBjb25zdCBvdmVycmlkZXMgPSAoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0Q2FsbE92ZXJyaWRlcygpKSB8fCB7fTtcbiAgICBhd2FpdCBzZXRFcmMyMEFsbG93YW5jZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdmFsdWUsIGxpc3RpbmcuY3VycmVuY3lDb250cmFjdEFkZHJlc3MsIG92ZXJyaWRlcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY2VpcHQ6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImJ1eUZyb21MaXN0aW5nXCIsIFtsaXN0aW5nSWQsIGJ1eUZvciwgcXVhbnRpdHksIGxpc3RpbmcuY3VycmVuY3lDb250cmFjdEFkZHJlc3MsIHZhbHVlXSwgb3ZlcnJpZGVzKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXBwcm92ZSBidXllciBmb3IgcmVzZXJ2ZWQgbGlzdGluZy5cbiAgICpcbiAgICogQHJlbWFya3MgQXBwcm92ZSBhIGJ1eWVyIHRvIGJ1eSBmcm9tIGEgcmVzZXJ2ZWQgbGlzdGluZy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgbGlzdGluZyBJRCBvZiB0aGUgZGlyZWN0IGxpc3RpbmcgeW91IHdhbnQgYXBwcm92ZSBidXllciBmb3JcbiAgICogY29uc3QgbGlzdGluZ0lkID0gXCIwXCI7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmFwcHJvdmVCdXllckZvclJlc2VydmVkTGlzdGluZyhsaXN0aW5nSWQsIGJ1eWVyKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0aW5nSWQgLSBUaGUgbGlzdGluZyBpZCB0byBidXlcbiAgICogQHBhcmFtIGJ1eWVyIC0gQWRkcmVzcyBvZiBidXllciBiZWluZyBhcHByb3ZlZFxuICAgKi9cbiAgYXN5bmMgYXBwcm92ZUJ1eWVyRm9yUmVzZXJ2ZWRMaXN0aW5nKGxpc3RpbmdJZCwgYnV5ZXIpIHtcbiAgICBjb25zdCBpc0FwcHJvdmVkID0gYXdhaXQgdGhpcy5pc0J1eWVyQXBwcm92ZWRGb3JMaXN0aW5nKGxpc3RpbmdJZCwgYnV5ZXIpO1xuICAgIGlmICghaXNBcHByb3ZlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYXBwcm92ZUJ1eWVyRm9yTGlzdGluZ1wiLCBbbGlzdGluZ0lkLCBidXllciwgdHJ1ZV0pXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1eWVyICR7YnV5ZXJ9IGFscmVhZHkgYXBwcm92ZWQgZm9yIGxpc3RpbmcgJHtsaXN0aW5nSWR9LmApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2UgYXBwcm92YWwgb2YgYSBidXllciBmb3IgcmVzZXJ2ZWQgbGlzdGluZy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgbGlzdGluZyBJRCBvZiB0aGUgZGlyZWN0IGxpc3RpbmcgeW91IHdhbnQgYXBwcm92ZSBidXllciBmb3JcbiAgICogY29uc3QgbGlzdGluZ0lkID0gXCIwXCI7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLnJldm9rZUJ1eWVyQXBwcm92YWxGb3JSZXNlcnZlZExpc3RpbmcobGlzdGluZ0lkLCBidXllcik7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbGlzdGluZ0lkIC0gVGhlIGxpc3RpbmcgaWQgdG8gYnV5XG4gICAqIEBwYXJhbSBidXllciAtIEFkZHJlc3Mgb2YgYnV5ZXIgYmVpbmcgYXBwcm92ZWRcbiAgICovXG4gIGFzeW5jIHJldm9rZUJ1eWVyQXBwcm92YWxGb3JSZXNlcnZlZExpc3RpbmcobGlzdGluZ0lkLCBidXllcikge1xuICAgIGNvbnN0IGlzQXBwcm92ZWQgPSBhd2FpdCB0aGlzLmlzQnV5ZXJBcHByb3ZlZEZvckxpc3RpbmcobGlzdGluZ0lkLCBidXllcik7XG4gICAgaWYgKGlzQXBwcm92ZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlY2VpcHQ6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImFwcHJvdmVCdXllckZvckxpc3RpbmdcIiwgW2xpc3RpbmdJZCwgYnV5ZXIsIGZhbHNlXSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQnV5ZXIgJHtidXllcn0gbm90IGFwcHJvdmVkIGZvciBsaXN0aW5nICR7bGlzdGluZ0lkfS5gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwcm92ZSBhIGN1cnJlbmN5IGZvciBhIGxpc3RpbmcuXG4gICAqXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIGxpc3RpbmcgSUQgb2YgdGhlIGRpcmVjdCBsaXN0aW5nIHlvdSB3YW50IGFwcHJvdmUgY3VycmVuY3kgZm9yXG4gICAqIGNvbnN0IGxpc3RpbmdJZCA9IFwiMFwiO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5kaXJlY3RMaXN0aW5ncy5hcHByb3ZlQ3VycmVuY3lGb3JMaXN0aW5nKGxpc3RpbmdJZCwgY3VycmVuY3lDb250cmFjdEFkZHJlc3MsIHByaWNlUGVyVG9rZW5JbkN1cnJlbmN5KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBsaXN0aW5nSWQgLSBUaGUgbGlzdGluZyBpZCB0byBidXlcbiAgICogQHBhcmFtIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzIC0gQWRkcmVzcyBvZiBjdXJyZW5jeSBiZWluZyBhcHByb3ZlZFxuICAgKiBAcGFyYW0gcHJpY2VQZXJUb2tlbkluQ3VycmVuY3kgLSBQcmljZSBwZXIgdG9rZW4gaW4gdGhlIGN1cnJlbmN5XG4gICAqL1xuICBhc3luYyBhcHByb3ZlQ3VycmVuY3lGb3JMaXN0aW5nKGxpc3RpbmdJZCwgY3VycmVuY3lDb250cmFjdEFkZHJlc3MsIHByaWNlUGVyVG9rZW5JbkN1cnJlbmN5KSB7XG4gICAgY29uc3QgbGlzdGluZyA9IGF3YWl0IHRoaXMudmFsaWRhdGVMaXN0aW5nKEJpZ051bWJlci5mcm9tKGxpc3RpbmdJZCkpO1xuICAgIGlmIChjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyA9PT0gbGlzdGluZy5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcykge1xuICAgICAgaW52YXJpYW50KHByaWNlUGVyVG9rZW5JbkN1cnJlbmN5ID09PSBsaXN0aW5nLnByaWNlUGVyVG9rZW4sIFwiQXBwcm92aW5nIGxpc3RpbmcgY3VycmVuY3kgd2l0aCBhIGRpZmZlcmVudCBwcmljZS5cIik7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbmN5UHJpY2UgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuY3VycmVuY3lQcmljZUZvckxpc3RpbmcobGlzdGluZ0lkLCBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyk7XG4gICAgaW52YXJpYW50KHByaWNlUGVyVG9rZW5JbkN1cnJlbmN5ID09PSBjdXJyZW5jeVByaWNlLCBcIkN1cnJlbmN5IGFscmVhZHkgYXBwcm92ZWQgd2l0aCB0aGlzIHByaWNlLlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYXBwcm92ZUN1cnJlbmN5Rm9yTGlzdGluZ1wiLCBbbGlzdGluZ0lkLCBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcywgcHJpY2VQZXJUb2tlbkluQ3VycmVuY3ldKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV2b2tlIGFwcHJvdmFsIG9mIGEgY3VycmVuY3kgZnJvbSBhIGxpc3RpbmcuXG4gICAqXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIGxpc3RpbmcgSUQgb2YgdGhlIGRpcmVjdCBsaXN0aW5nIHlvdSB3YW50IHRvIHJldm9rZSBjdXJyZW5jeSBmb3JcbiAgICogY29uc3QgbGlzdGluZ0lkID0gXCIwXCI7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLnJldm9rZUN1cnJlbmN5QXBwcm92YWxGb3JMaXN0aW5nKGxpc3RpbmdJZCwgY3VycmVuY3lDb250cmFjdEFkZHJlc3MpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGxpc3RpbmdJZCAtIFRoZSBsaXN0aW5nIGlkIHRvIGJ1eVxuICAgKiBAcGFyYW0gY3VycmVuY3lDb250cmFjdEFkZHJlc3MgLSBBZGRyZXNzIG9mIGN1cnJlbmN5XG4gICAqL1xuICBhc3luYyByZXZva2VDdXJyZW5jeUFwcHJvdmFsRm9yTGlzdGluZyhsaXN0aW5nSWQsIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKSB7XG4gICAgY29uc3QgbGlzdGluZyA9IGF3YWl0IHRoaXMudmFsaWRhdGVMaXN0aW5nKEJpZ051bWJlci5mcm9tKGxpc3RpbmdJZCkpO1xuICAgIGlmIChjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyA9PT0gbGlzdGluZy5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZXZva2UgYXBwcm92YWwgZm9yIG1haW4gbGlzdGluZyBjdXJyZW5jeS5gKTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVuY3lQcmljZSA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5jdXJyZW5jeVByaWNlRm9yTGlzdGluZyhsaXN0aW5nSWQsIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKTtcbiAgICBpbnZhcmlhbnQoIWN1cnJlbmN5UHJpY2UuaXNaZXJvKCksIFwiQ3VycmVuY3kgbm90IGFwcHJvdmVkLlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYXBwcm92ZUN1cnJlbmN5Rm9yTGlzdGluZ1wiLCBbbGlzdGluZ0lkLCBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzcywgQmlnTnVtYmVyLmZyb20oMCldKVxuICAgIH07XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFBSSVZBVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBUaHJvd3MgZXJyb3IgaWYgbGlzdGluZyBjb3VsZCBub3QgYmUgZm91bmRcbiAgICpcbiAgICogQHBhcmFtIGxpc3RpbmdJZCAtIExpc3RpbmcgdG8gY2hlY2sgZm9yXG4gICAqL1xuICBhc3luYyB2YWxpZGF0ZUxpc3RpbmcobGlzdGluZ0lkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldExpc3RpbmcobGlzdGluZ0lkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgdGhlIGxpc3Rpbmcgd2l0aCBpZCAke2xpc3RpbmdJZH1gKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCBtYXBzIHRoZSBhdWN0aW9uIGxpc3RpbmcgdG8gdGhlIGRpcmVjdCBsaXN0aW5nIGludGVyZmFjZS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqIEBwYXJhbSBsaXN0aW5nIC0gVGhlIGxpc3RpbmcgdG8gbWFwLCBhcyByZXR1cm5lZCBmcm9tIHRoZSBjb250cmFjdC5cbiAgICogQHJldHVybnMgLSBUaGUgbWFwcGVkIGludGVyZmFjZS5cbiAgICovXG4gIGFzeW5jIG1hcExpc3RpbmcobGlzdGluZykge1xuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuVU5TRVQ7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLmdldEJsb2NrKFwibGF0ZXN0XCIpO1xuICAgIGNvbnN0IGJsb2NrVGltZSA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBzd2l0Y2ggKGxpc3Rpbmcuc3RhdHVzKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHN0YXR1cyA9IEJpZ051bWJlci5mcm9tKGxpc3Rpbmcuc3RhcnRUaW1lc3RhbXApLmd0KGJsb2NrVGltZSkgPyBTdGF0dXMuQ3JlYXRlZCA6IEJpZ051bWJlci5mcm9tKGxpc3RpbmcuZW5kVGltZXN0YW1wKS5sdChibG9ja1RpbWUpID8gU3RhdHVzLkV4cGlyZWQgOiBTdGF0dXMuQWN0aXZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNvbXBsZXRlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DYW5jZWxsZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IGxpc3RpbmcuYXNzZXRDb250cmFjdCxcbiAgICAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBsaXN0aW5nLmN1cnJlbmN5LFxuICAgICAgcHJpY2VQZXJUb2tlbjogbGlzdGluZy5wcmljZVBlclRva2VuLnRvU3RyaW5nKCksXG4gICAgICBjdXJyZW5jeVZhbHVlUGVyVG9rZW46IGF3YWl0IGZldGNoQ3VycmVuY3lWYWx1ZSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBsaXN0aW5nLmN1cnJlbmN5LCBsaXN0aW5nLnByaWNlUGVyVG9rZW4pLFxuICAgICAgaWQ6IGxpc3RpbmcubGlzdGluZ0lkLnRvU3RyaW5nKCksXG4gICAgICB0b2tlbklkOiBsaXN0aW5nLnRva2VuSWQudG9TdHJpbmcoKSxcbiAgICAgIHF1YW50aXR5OiBsaXN0aW5nLnF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICBzdGFydFRpbWVJblNlY29uZHM6IEJpZ051bWJlci5mcm9tKGxpc3Rpbmcuc3RhcnRUaW1lc3RhbXApLnRvTnVtYmVyKCksXG4gICAgICBhc3NldDogYXdhaXQgZmV0Y2hUb2tlbk1ldGFkYXRhRm9yQ29udHJhY3QobGlzdGluZy5hc3NldENvbnRyYWN0LCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBsaXN0aW5nLnRva2VuSWQsIHRoaXMuc3RvcmFnZSksXG4gICAgICBlbmRUaW1lSW5TZWNvbmRzOiBCaWdOdW1iZXIuZnJvbShsaXN0aW5nLmVuZFRpbWVzdGFtcCkudG9OdW1iZXIoKSxcbiAgICAgIGNyZWF0b3JBZGRyZXNzOiBsaXN0aW5nLmxpc3RpbmdDcmVhdG9yLFxuICAgICAgaXNSZXNlcnZlZExpc3Rpbmc6IGxpc3RpbmcucmVzZXJ2ZWQsXG4gICAgICBzdGF0dXM6IHN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIGNoZWNrIGlmIGEgZGlyZWN0IGxpc3RpbmcgaXMgc3RpbGwgdmFsaWQuXG4gICAqXG4gICAqIFdheXMgYSBkaXJlY3QgbGlzdGluZyBjYW4gYmVjb21lIGludmFsaWQ6XG4gICAqIDEuIFRoZSBhc3NldCBob2xkZXIgdHJhbnNmZXJyZWQgdGhlIGFzc2V0IHRvIGFub3RoZXIgd2FsbGV0XG4gICAqIDIuIFRoZSBhc3NldCBob2xkZXIgYnVybmVkIHRoZSBhc3NldFxuICAgKiAzLiBUaGUgYXNzZXQgaG9sZGVyIHJlbW92ZWQgdGhlIGFwcHJvdmFsIG9uIHRoZSBtYXJrZXRwbGFjZVxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIGxpc3RpbmcgLSBUaGUgbGlzdGluZyB0byBjaGVjay5cbiAgICogQHJldHVybnMgLSBUcnVlIGlmIHRoZSBsaXN0aW5nIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBhc3luYyBpc1N0aWxsVmFsaWRMaXN0aW5nKGxpc3RpbmcsIHF1YW50aXR5KSB7XG4gICAgY29uc3QgYXBwcm92ZWQgPSBhd2FpdCBpc1Rva2VuQXBwcm92ZWRGb3JUcmFuc2Zlcih0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCB0aGlzLmdldEFkZHJlc3MoKSwgbGlzdGluZy5hc3NldENvbnRyYWN0QWRkcmVzcywgbGlzdGluZy50b2tlbklkLCBsaXN0aW5nLmNyZWF0b3JBZGRyZXNzKTtcbiAgICBpZiAoIWFwcHJvdmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgIGVycm9yOiBgVG9rZW4gJyR7bGlzdGluZy50b2tlbklkfScgZnJvbSBjb250cmFjdCAnJHtsaXN0aW5nLmFzc2V0Q29udHJhY3RBZGRyZXNzfScgaXMgbm90IGFwcHJvdmVkIGZvciB0cmFuc2ZlcmBcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKTtcbiAgICBjb25zdCBlcmMxNjUgPSBuZXcgQ29udHJhY3QobGlzdGluZy5hc3NldENvbnRyYWN0QWRkcmVzcywgRVJDMTY1QWJpLCBwcm92aWRlcik7XG4gICAgY29uc3QgaXNFUkM3MjEgPSBhd2FpdCBlcmMxNjUuc3VwcG9ydHNJbnRlcmZhY2UoSW50ZXJmYWNlSWRfSUVSQzcyMSk7XG4gICAgY29uc3QgaXNFUkMxMTU1ID0gYXdhaXQgZXJjMTY1LnN1cHBvcnRzSW50ZXJmYWNlKEludGVyZmFjZUlkX0lFUkMxMTU1KTtcbiAgICBpZiAoaXNFUkM3MjEpIHtcbiAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IENvbnRyYWN0KGxpc3RpbmcuYXNzZXRDb250cmFjdEFkZHJlc3MsIEVyYzcyMUFiaSwgcHJvdmlkZXIpO1xuICAgICAgY29uc3QgdmFsaWQgPSAoYXdhaXQgYXNzZXQub3duZXJPZihsaXN0aW5nLnRva2VuSWQpKS50b0xvd2VyQ2FzZSgpID09PSBsaXN0aW5nLmNyZWF0b3JBZGRyZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZCxcbiAgICAgICAgZXJyb3I6IHZhbGlkID8gdW5kZWZpbmVkIDogYFNlbGxlciBpcyBub3QgdGhlIG93bmVyIG9mIFRva2VuICcke2xpc3RpbmcudG9rZW5JZH0nIGZyb20gY29udHJhY3QgJyR7bGlzdGluZy5hc3NldENvbnRyYWN0QWRkcmVzc30gYW55bW9yZSdgXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFUkMxMTU1KSB7XG4gICAgICBjb25zdCBhc3NldCA9IG5ldyBDb250cmFjdChsaXN0aW5nLmFzc2V0Q29udHJhY3RBZGRyZXNzLCBFcmMxMTU1QWJpLCBwcm92aWRlcik7XG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgYXNzZXQuYmFsYW5jZU9mKGxpc3RpbmcuY3JlYXRvckFkZHJlc3MsIGxpc3RpbmcudG9rZW5JZCk7XG4gICAgICBjb25zdCB2YWxpZCA9IGJhbGFuY2UuZ3RlKHF1YW50aXR5IHx8IGxpc3RpbmcucXVhbnRpdHkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsaWQsXG4gICAgICAgIGVycm9yOiB2YWxpZCA/IHVuZGVmaW5lZCA6IGBTZWxsZXIgZG9lcyBub3QgaGF2ZSBlbm91Z2ggYmFsYW5jZSBvZiBUb2tlbiAnJHtsaXN0aW5nLnRva2VuSWR9JyBmcm9tIGNvbnRyYWN0ICcke2xpc3RpbmcuYXNzZXRDb250cmFjdEFkZHJlc3N9IHRvIGZ1bGZpbGwgdGhlIGxpc3RpbmdgXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgIGVycm9yOiBcIkNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCBFUkMgMTE1NSBvciBFUkMgNzIxLlwiXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBhcHBseUZpbHRlcihsaXN0aW5ncywgZmlsdGVyKSB7XG4gICAgbGV0IHJhd0xpc3RpbmdzID0gWy4uLmxpc3RpbmdzXTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBpZiAoZmlsdGVyLnNlbGxlcikge1xuICAgICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLmZpbHRlcihzZWxsZXIgPT4gc2VsbGVyLmxpc3RpbmdDcmVhdG9yLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gZmlsdGVyPy5zZWxsZXI/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuQ29udHJhY3QpIHtcbiAgICAgICAgcmF3TGlzdGluZ3MgPSByYXdMaXN0aW5ncy5maWx0ZXIodG9rZW5Db250cmFjdCA9PiB0b2tlbkNvbnRyYWN0LmFzc2V0Q29udHJhY3QudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBmaWx0ZXI/LnRva2VuQ29udHJhY3Q/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYXdMaXN0aW5ncyA9IHJhd0xpc3RpbmdzLmZpbHRlcih0b2tlbkNvbnRyYWN0ID0+IHRva2VuQ29udHJhY3QudG9rZW5JZC50b1N0cmluZygpID09PSBmaWx0ZXI/LnRva2VuSWQ/LnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyPy5jb3VudCAmJiBmaWx0ZXIuY291bnQgPCByYXdMaXN0aW5ncy5sZW5ndGggPyByYXdMaXN0aW5ncy5zbGljZSgwLCBmaWx0ZXIuY291bnQpIDogcmF3TGlzdGluZ3M7XG4gIH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRW5nbGlzaEF1Y3Rpb25JbnB1dFBhcmFtc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIG9mIHRoZSBhc3NldCBiZWluZyBhdWN0aW9uZWQuXG4gICAqL1xuICBhc3NldENvbnRyYWN0QWRkcmVzczogQWRkcmVzc1NjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgdG9rZW4gdG8gYXVjdGlvbi5cbiAgICovXG4gIHRva2VuSWQ6IEJpZ051bWJlcmlzaFNjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBxdWFudGl0eSBvZiB0b2tlbnMgdG8gaW5jbHVkZSBpbiB0aGUgbGlzdGluZy5cbiAgICpcbiAgICogRm9yIEVSQzcyMXMsIHRoaXMgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSAxIChhbmQgd2lsbCBiZSBmb3JjZWQgaW50ZXJuYWxseSByZWdhcmRsZXNzIG9mIHdoYXQgaXMgcGFzc2VkIGhlcmUpLlxuICAgKi9cbiAgcXVhbnRpdHk6IEJpZ051bWJlcmlzaFNjaGVtYS5kZWZhdWx0KDEpLFxuICAvKipcbiAgICogVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IHRvIGFjY2VwdCBmb3IgdGhlIGxpc3RpbmcuXG4gICAqL1xuICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogQWRkcmVzc1NjaGVtYS5kZWZhdWx0KE5BVElWRV9UT0tFTl9BRERSRVNTKSxcbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIHByaWNlIHRoYXQgYSBiaWQgbXVzdCBiZSBpbiBvcmRlciB0byBiZSBhY2NlcHRlZC5cbiAgICovXG4gIG1pbmltdW1CaWRBbW91bnQ6IEFtb3VudFNjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBidXlvdXQgcHJpY2Ugb2YgdGhlIGF1Y3Rpb24uXG4gICAqL1xuICBidXlvdXRCaWRBbW91bnQ6IEFtb3VudFNjaGVtYSxcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBidWZmZXIgZS5nLiB4IHNlY29uZHMuXG4gICAqXG4gICAqIElmIGEgbmV3IHdpbm5pbmcgYmlkIGlzIG1hZGUgbGVzcyB0aGFuIHggc2Vjb25kcyBiZWZvcmUgZXhwaXJhdGlvblRpbWVzdGFtcCwgdGhlXG4gICAqIGV4cGlyYXRpb25UaW1lc3RhbXAgaXMgaW5jcmVhc2VkIGJ5IHggc2Vjb25kcy5cbiAgICovXG4gIHRpbWVCdWZmZXJJblNlY29uZHM6IEJpZ051bWJlcmlzaFNjaGVtYS5kZWZhdWx0KDkwMCksXG4gIC8vIDE1IG1pbnV0ZXMgYnkgZGVmYXVsdFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgYnVmZmVyIGluIGJhc2lzIHBvaW50cyBlLmcuIHglLlxuICAgKlxuICAgKiBUbyBiZSBjb25zaWRlcmVkIGFzIGEgbmV3IHdpbm5pbmcgYmlkLCBhIGJpZCBtdXN0IGJlIGF0IGxlYXN0IHglIGdyZWF0ZXIgdGhhblxuICAgKiB0aGUgY3VycmVudCB3aW5uaW5nIGJpZC5cbiAgICovXG4gIGJpZEJ1ZmZlckJwczogQmlnTnVtYmVyaXNoU2NoZW1hLmRlZmF1bHQoNTAwKSxcbiAgLy8gNSUgYnkgZGVmYXVsdFxuXG4gIC8qKlxuICAgKiBUaGUgc3RhcnQgdGltZSBvZiB0aGUgYXVjdGlvbi5cbiAgICovXG4gIHN0YXJ0VGltZXN0YW1wOiBSYXdEYXRlU2NoZW1hLmRlZmF1bHQobmV3IERhdGUoKSksXG4gIC8qKlxuICAgKiBUaGUgZW5kIHRpbWUgb2YgdGhlIGF1Y3Rpb24uXG4gICAqL1xuICBlbmRUaW1lc3RhbXA6IEVuZERhdGVTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEhhbmRsZXMgYXVjdGlvbnNcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgTWFya2V0cGxhY2VWM0VuZ2xpc2hBdWN0aW9ucyB7XG4gIC8vIHV0aWxpdGllc1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZlYXR1cmVOYW1lXCIsIEZFQVRVUkVfRU5HTElTSF9BVUNUSU9OUy5uYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGVuZ2xpc2ggYXVjdGlvbnMuXG4gICAqIEByZXR1cm5zIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBhdWN0aW9ucyBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdG90YWxBdWN0aW9ucyA9IGF3YWl0IGNvbnRyYWN0LmVuZ2xpc2hBdWN0aW9ucy5nZXRUb3RhbENvdW50KCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgZ2V0VG90YWxDb3VudCgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnRvdGFsQXVjdGlvbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGF1Y3Rpb25zLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGF1Y3Rpb25zID0gYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmdldEFsbCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHRoZSBBdWN0aW9uIG9iamVjdCBhcnJheVxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsKGZpbHRlcikge1xuICAgIGNvbnN0IHRvdGFsQXVjdGlvbnMgPSBhd2FpdCB0aGlzLmdldFRvdGFsQ291bnQoKTtcbiAgICBsZXQgc3RhcnQgPSBCaWdOdW1iZXIuZnJvbShmaWx0ZXI/LnN0YXJ0IHx8IDApLnRvTnVtYmVyKCk7XG4gICAgbGV0IGVuZCA9IHRvdGFsQXVjdGlvbnMudG9OdW1iZXIoKTtcbiAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGF1Y3Rpb25zIGV4aXN0IG9uIHRoZSBjb250cmFjdC5gKTtcbiAgICB9XG4gICAgbGV0IHJhd0F1Y3Rpb25zID0gW107XG4gICAgbGV0IGJhdGNoZXMgPSBhd2FpdCBnZXRBbGxJbkJhdGNoZXMoc3RhcnQsIGVuZCwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldEFsbEF1Y3Rpb25zKTtcbiAgICByYXdBdWN0aW9ucyA9IGJhdGNoZXMuZmxhdCgpO1xuICAgIGNvbnN0IGZpbHRlcmVkQXVjdGlvbnMgPSB0aGlzLmFwcGx5RmlsdGVyKHJhd0F1Y3Rpb25zLCBmaWx0ZXIpO1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChmaWx0ZXJlZEF1Y3Rpb25zLm1hcChhdWN0aW9uID0+IHRoaXMubWFwQXVjdGlvbihhdWN0aW9uKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdmFsaWQgYXVjdGlvbnMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgYXVjdGlvbnMgPSBhd2FpdCBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMuZ2V0QWxsVmFsaWQoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXIgLSBvcHRpb25hbCBmaWx0ZXIgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB0aGUgQXVjdGlvbiBvYmplY3QgYXJyYXlcbiAgICovXG4gIGFzeW5jIGdldEFsbFZhbGlkKGZpbHRlcikge1xuICAgIGNvbnN0IHRvdGFsQXVjdGlvbnMgPSBhd2FpdCB0aGlzLmdldFRvdGFsQ291bnQoKTtcbiAgICBsZXQgc3RhcnQgPSBCaWdOdW1iZXIuZnJvbShmaWx0ZXI/LnN0YXJ0IHx8IDApLnRvTnVtYmVyKCk7XG4gICAgbGV0IGVuZCA9IHRvdGFsQXVjdGlvbnMudG9OdW1iZXIoKTtcbiAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGF1Y3Rpb25zIGV4aXN0IG9uIHRoZSBjb250cmFjdC5gKTtcbiAgICB9XG4gICAgbGV0IHJhd0F1Y3Rpb25zID0gW107XG4gICAgbGV0IGJhdGNoZXMgPSBhd2FpdCBnZXRBbGxJbkJhdGNoZXMoc3RhcnQsIGVuZCwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldEFsbFZhbGlkQXVjdGlvbnMpO1xuICAgIHJhd0F1Y3Rpb25zID0gYmF0Y2hlcy5mbGF0KCk7XG4gICAgY29uc3QgZmlsdGVyZWRBdWN0aW9ucyA9IHRoaXMuYXBwbHlGaWx0ZXIocmF3QXVjdGlvbnMsIGZpbHRlcik7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGZpbHRlcmVkQXVjdGlvbnMubWFwKGF1Y3Rpb24gPT4gdGhpcy5tYXBBdWN0aW9uKGF1Y3Rpb24pKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIEF1Y3Rpb24gYnkgaWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgYXVjdGlvbklkID0gMDtcbiAgICogY29uc3QgYXVjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmVuZ2xpc2hBdWN0aW9ucy5nZXRBdWN0aW9uKGF1Y3Rpb25JZCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gYXVjdGlvbklkIC0gdGhlIGF1Y3Rpb24gSWRcbiAgICogQHJldHVybnMgdGhlIEF1Y3Rpb24gb2JqZWN0XG4gICAqL1xuICBhc3luYyBnZXRBdWN0aW9uKGF1Y3Rpb25JZCkge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0QXVjdGlvbihhdWN0aW9uSWQpO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1hcEF1Y3Rpb24oYXVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEhpZ2hlc3QgQmlkXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgY3VycmVudCBoaWdoZXN0IGJpZCBvZiBhbiBhY3RpdmUgYXVjdGlvbi5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgSUQgb2YgdGhlIGF1Y3Rpb25cbiAgICogY29uc3QgYXVjdGlvbklkID0gMDtcbiAgICpcbiAgICogY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLlxuICAgKiAgIC5nZXRXaW5uaW5nQmlkKGF1Y3Rpb25JZClcbiAgICogICAudGhlbigoYmlkKSA9PiBjb25zb2xlLmxvZyhiaWQpKVxuICAgKiAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGdldFdpbm5pbmdCaWQoYXVjdGlvbklkKSB7XG4gICAgYXdhaXQgdGhpcy52YWxpZGF0ZUF1Y3Rpb24oQmlnTnVtYmVyLmZyb20oYXVjdGlvbklkKSk7XG4gICAgY29uc3QgYmlkID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldFdpbm5pbmdCaWQoYXVjdGlvbklkKTtcbiAgICBpZiAoYmlkLl9iaWRkZXIgPT09IGNvbnN0YW50cy5BZGRyZXNzWmVybykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWFwQmlkKGF1Y3Rpb25JZC50b1N0cmluZygpLCBiaWQuX2JpZGRlciwgYmlkLl9jdXJyZW5jeSwgYmlkLl9iaWRBbW91bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBiaWQtYW1vdW50IGlzL3dpbGwgYmUgYSB3aW5uaW5nIGJpZC5cbiAgICpcbiAgICogQHBhcmFtIGF1Y3Rpb25JZCAtIEF1Y3Rpb24gSWRcbiAgICogQHBhcmFtIGJpZEFtb3VudCAtIEFtb3VudCB0byBiaWRcbiAgICogQHJldHVybnMgdGhlIEF1Y3Rpb24gb2JqZWN0XG4gICAqL1xuICBhc3luYyBpc1dpbm5pbmdCaWQoYXVjdGlvbklkLCBiaWRBbW91bnQpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmlzTmV3V2lubmluZ0JpZChhdWN0aW9uSWQsIGJpZEFtb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEF1Y3Rpb24gV2lubmVyXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgd2lubmVyIG9mIHRoZSBhdWN0aW9uIGFmdGVyIGFuIGF1Y3Rpb24gZW5kcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgYXVjdGlvbiBJRCBvZiB0aGUgYXVjdGlvbiB0aGF0IGNsb3NlZFxuICAgKiBjb25zdCBhdWN0aW9uSWQgPSAwO1xuICAgKlxuICAgKiBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMuXG4gICAqICAgLmdldFdpbm5lcihhdWN0aW9uSWQpXG4gICAqICAgLnRoZW4oKGF1Y3Rpb25XaW5uZXIpID0+IGNvbnNvbGUubG9nKGF1Y3Rpb25XaW5uZXIpKVxuICAgKiAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGdldFdpbm5lcihhdWN0aW9uSWQpIHtcbiAgICBjb25zdCBhdWN0aW9uID0gYXdhaXQgdGhpcy52YWxpZGF0ZUF1Y3Rpb24oQmlnTnVtYmVyLmZyb20oYXVjdGlvbklkKSk7XG4gICAgY29uc3QgYmlkID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldFdpbm5pbmdCaWQoYXVjdGlvbklkKTtcbiAgICBjb25zdCBub3cgPSBCaWdOdW1iZXIuZnJvbShNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSk7XG4gICAgY29uc3QgZW5kVGltZSA9IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24uZW5kVGltZUluU2Vjb25kcyk7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgd2lubmVyIGluIHRoZSBtYXAgYW5kIHRoZSBjdXJyZW50IHRpbWUgaXMgcGFzdCB0aGUgZW5kdGltZSBvZiB0aGUgYXVjdGlvbiByZXR1cm4gdGhlIGFkZHJlc3Mgb2YgdGhlIHdpbm5lclxuICAgIGlmIChub3cuZ3QoZW5kVGltZSkgJiYgYmlkLl9iaWRkZXIgIT09IGNvbnN0YW50cy5BZGRyZXNzWmVybykge1xuICAgICAgcmV0dXJuIGJpZC5fYmlkZGVyO1xuICAgIH1cbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHF1ZXJ5IGZpbHRlciB0aGluZ3NcblxuICAgIC8vIFRPRE8gdGhpcyBzaG91bGQgYmUgdmlhIGluZGV4ZXIgb3IgZGlyZWN0IGNvbnRyYWN0IGNhbGxcbiAgICBjb25zdCBjbG9zZWRBdWN0aW9ucyA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5xdWVyeUZpbHRlcih0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZmlsdGVycy5BdWN0aW9uQ2xvc2VkKCkpO1xuICAgIGNvbnN0IGNsb3NlZCA9IGNsb3NlZEF1Y3Rpb25zLmZpbmQoYSA9PiBhLmFyZ3MuYXVjdGlvbklkLmVxKEJpZ051bWJlci5mcm9tKGF1Y3Rpb25JZCkpKTtcbiAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhdWN0aW9uIHdpdGggSUQgJHthdWN0aW9uSWR9IGluIGNsb3NlZCBhdWN0aW9uc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY2xvc2VkLmFyZ3Mud2lubmluZ0JpZGRlcjtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgQXVjdGlvblxuICAgKlxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBuZXcgYXVjdGlvbiB3aGVyZSBwZW9wbGUgY2FuIGJpZCBvbiBhbiBhc3NldC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBEYXRhIG9mIHRoZSBhdWN0aW9uIHlvdSB3YW50IHRvIGNyZWF0ZVxuICAgKiBjb25zdCBhdWN0aW9uID0ge1xuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGNvbnRyYWN0IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBhdWN0aW9uXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYXVjdGlvblxuICAgKiAgIHRva2VuSWQ6IFwiMFwiLFxuICAgKiAgIC8vIGhvdyBtYW55IG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBhdWN0aW9uXG4gICAqICAgcXVhbnRpdHk6IDEsXG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgY29udHJhY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcGF5IGZvciB0aGUgYXVjdGlvbmVkIHRva2Vuc1xuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyB0aGUgbWluaW11bSBiaWQgdGhhdCB3aWxsIGJlIGFjY2VwdGVkIGZvciB0aGUgdG9rZW5cbiAgICogICBtaW5pbXVtQmlkQW1vdW50OiBcIjEuNVwiLFxuICAgKiAgIC8vIGhvdyBtdWNoIHBlb3BsZSB3b3VsZCBoYXZlIHRvIGJpZCB0byBpbnN0YW50bHkgYnV5IHRoZSBhc3NldFxuICAgKiAgIGJ1eW91dEJpZEFtb3VudDogXCIxMFwiLFxuICAgKiAgIC8vIElmIGEgYmlkIGlzIG1hZGUgbGVzcyB0aGFuIHRoZXNlIG1hbnkgc2Vjb25kcyBiZWZvcmUgZXhwaXJhdGlvbiwgdGhlIGV4cGlyYXRpb24gdGltZSBpcyBpbmNyZWFzZWQgYnkgdGhpcy5cbiAgICogICB0aW1lQnVmZmVySW5TZWNvbmRzOiBcIjkwMFwiLCAvLyAxNSBtaW51dGVzIGJ5IGRlZmF1bHRcbiAgICogICAvLyBBIGJpZCBtdXN0IGJlIGF0IGxlYXN0IHRoaXMgbXVjaCBicHMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHdpbm5pbmcgYmlkXG4gICAqICAgYmlkQnVmZmVyQnBzOiBcIjUwMFwiLCAvLyA1JSBieSBkZWZhdWx0XG4gICAqICAgLy8gd2hlbiBzaG91bGQgdGhlIGF1Y3Rpb24gb3BlbiB1cCBmb3IgYmlkZGluZ1xuICAgKiAgIHN0YXJ0VGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpKSxcbiAgICogICAvLyBlbmQgdGltZSBvZiBhdWN0aW9uXG4gICAqICAgZW5kVGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmNyZWF0ZUF1Y3Rpb24oYXVjdGlvbik7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBpZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgYXVjdGlvblxuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGNyZWF0ZUF1Y3Rpb24oYXVjdGlvbikge1xuICAgIGNvbnN0IHBhcnNlZEF1Y3Rpb24gPSBFbmdsaXNoQXVjdGlvbklucHV0UGFyYW1zU2NoZW1hLnBhcnNlKGF1Y3Rpb24pO1xuICAgIGF3YWl0IGhhbmRsZVRva2VuQXBwcm92YWwodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMuZ2V0QWRkcmVzcygpLCBwYXJzZWRBdWN0aW9uLmFzc2V0Q29udHJhY3RBZGRyZXNzLCBwYXJzZWRBdWN0aW9uLnRva2VuSWQsIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEJ1eW91dEFtb3VudCA9IGF3YWl0IG5vcm1hbGl6ZVByaWNlVmFsdWUodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcGFyc2VkQXVjdGlvbi5idXlvdXRCaWRBbW91bnQsIHBhcnNlZEF1Y3Rpb24uY3VycmVuY3lDb250cmFjdEFkZHJlc3MpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRNaW5CaWRBbW91bnQgPSBhd2FpdCBub3JtYWxpemVQcmljZVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHBhcnNlZEF1Y3Rpb24ubWluaW11bUJpZEFtb3VudCwgcGFyc2VkQXVjdGlvbi5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcyk7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLmdldEJsb2NrKFwibGF0ZXN0XCIpO1xuICAgIGNvbnN0IGJsb2NrVGltZSA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBpZiAocGFyc2VkQXVjdGlvbi5zdGFydFRpbWVzdGFtcC5sdChibG9ja1RpbWUpKSB7XG4gICAgICBwYXJzZWRBdWN0aW9uLnN0YXJ0VGltZXN0YW1wID0gQmlnTnVtYmVyLmZyb20oYmxvY2tUaW1lKTtcbiAgICB9XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImNyZWF0ZUF1Y3Rpb25cIiwgW3tcbiAgICAgIGFzc2V0Q29udHJhY3Q6IHBhcnNlZEF1Y3Rpb24uYXNzZXRDb250cmFjdEFkZHJlc3MsXG4gICAgICB0b2tlbklkOiBwYXJzZWRBdWN0aW9uLnRva2VuSWQsXG4gICAgICBxdWFudGl0eTogcGFyc2VkQXVjdGlvbi5xdWFudGl0eSxcbiAgICAgIGN1cnJlbmN5OiBjbGVhbkN1cnJlbmN5QWRkcmVzcyhwYXJzZWRBdWN0aW9uLmN1cnJlbmN5Q29udHJhY3RBZGRyZXNzKSxcbiAgICAgIG1pbmltdW1CaWRBbW91bnQ6IG5vcm1hbGl6ZWRNaW5CaWRBbW91bnQsXG4gICAgICBidXlvdXRCaWRBbW91bnQ6IG5vcm1hbGl6ZWRCdXlvdXRBbW91bnQsXG4gICAgICB0aW1lQnVmZmVySW5TZWNvbmRzOiBwYXJzZWRBdWN0aW9uLnRpbWVCdWZmZXJJblNlY29uZHMsXG4gICAgICBiaWRCdWZmZXJCcHM6IHBhcnNlZEF1Y3Rpb24uYmlkQnVmZmVyQnBzLFxuICAgICAgc3RhcnRUaW1lc3RhbXA6IHBhcnNlZEF1Y3Rpb24uc3RhcnRUaW1lc3RhbXAsXG4gICAgICBlbmRUaW1lc3RhbXA6IHBhcnNlZEF1Y3Rpb24uZW5kVGltZXN0YW1wXG4gICAgfV0sIHtcbiAgICAgIC8vIEhpZ2hlciBnYXMgbGltaXQgZm9yIGNyZWF0ZSBhdWN0aW9uXG4gICAgICBnYXNMaW1pdDogNTAwMDAwXG4gICAgfSk7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmNvbnRyYWN0V3JhcHBlci5wYXJzZUxvZ3MoXCJOZXdBdWN0aW9uXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXZlbnRbMF0uYXJncy5hdWN0aW9uSWQsXG4gICAgICByZWNlaXB0XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXlvdXQgQXVjdGlvblxuICAgKlxuICAgKiBAcmVtYXJrcyBCdXkgYSBzcGVjaWZpYyBhdWN0aW9uIGZyb20gdGhlIG1hcmtldHBsYWNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBhdWN0aW9uIElEIG9mIHRoZSBhc3NldCB5b3Ugd2FudCB0byBidXlcbiAgICogY29uc3QgYXVjdGlvbklkID0gMDtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmJ1eW91dEF1Y3Rpb24oYXVjdGlvbklkKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBidXlvdXRBdWN0aW9uKGF1Y3Rpb25JZCkge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKTtcbiAgICBjb25zdCBjdXJyZW5jeU1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIGF1Y3Rpb24uY3VycmVuY3lDb250cmFjdEFkZHJlc3MpO1xuICAgIHJldHVybiB0aGlzLm1ha2VCaWQoYXVjdGlvbklkLCBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYXVjdGlvbi5idXlvdXRCaWRBbW91bnQsIGN1cnJlbmN5TWV0YWRhdGEuZGVjaW1hbHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaWQgT24gQXVjdGlvblxuICAgKlxuICAgKiBAcmVtYXJrcyBNYWtlIGEgYmlkIG9uIGFuIGF1Y3Rpb25cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgYXVjdGlvbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYmlkIG9uXG4gICAqIGNvbnN0IGF1Y3Rpb25JZCA9IDA7XG4gICAqIC8vIFRoZSB0b3RhbCBhbW91bnQgeW91IGFyZSB3aWxsaW5nIHRvIGJpZCBmb3IgYXVjdGlvbmVkIHRva2Vuc1xuICAgKiBjb25zdCBiaWRBbW91bnQgPSAxO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMubWFrZUJpZChhdWN0aW9uSWQsIGJpZEFtb3VudCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgbWFrZUJpZChhdWN0aW9uSWQsIGJpZEFtb3VudCkge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKTtcbiAgICBjb25zdCBub3JtYWxpemVkQmlkQW1vdW50ID0gYXdhaXQgbm9ybWFsaXplUHJpY2VWYWx1ZSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBiaWRBbW91bnQsIGF1Y3Rpb24uY3VycmVuY3lDb250cmFjdEFkZHJlc3MpO1xuICAgIGlmIChub3JtYWxpemVkQmlkQW1vdW50LmVxKEJpZ051bWJlci5mcm9tKDApKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG1ha2UgYSBiaWQgd2l0aCAwIHZhbHVlXCIpO1xuICAgIH1cbiAgICBpZiAoQmlnTnVtYmVyLmZyb20oYXVjdGlvbi5idXlvdXRCaWRBbW91bnQpLmd0KDApICYmIG5vcm1hbGl6ZWRCaWRBbW91bnQuZ3QoYXVjdGlvbi5idXlvdXRCaWRBbW91bnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaWQgYW1vdW50IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGJ1eW91dEJpZEFtb3VudFwiKTtcbiAgICB9XG4gICAgY29uc3Qgd2lubmluZ0JpZCA9IGF3YWl0IHRoaXMuZ2V0V2lubmluZ0JpZChhdWN0aW9uSWQpO1xuICAgIGlmICh3aW5uaW5nQmlkKSB7XG4gICAgICBjb25zdCBpc1dpbm5uZXIgPSBhd2FpdCB0aGlzLmlzV2lubmluZ0JpZChhdWN0aW9uSWQsIG5vcm1hbGl6ZWRCaWRBbW91bnQpO1xuICAgICAgaW52YXJpYW50KGlzV2lubm5lciwgXCJCaWQgcHJpY2UgaXMgdG9vIGxvdyBiYXNlZCBvbiB0aGUgY3VycmVudCB3aW5uaW5nIGJpZCBhbmQgdGhlIGJpZCBidWZmZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRva2VuUHJpY2UgPSBub3JtYWxpemVkQmlkQW1vdW50O1xuICAgICAgY29uc3QgbWluaW11bUJpZEFtb3VudCA9IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24ubWluaW11bUJpZEFtb3VudCk7XG4gICAgICBpbnZhcmlhbnQodG9rZW5QcmljZS5ndGUobWluaW11bUJpZEFtb3VudCksIFwiQmlkIHByaWNlIGlzIHRvbyBsb3cgYmFzZWQgb24gbWluaW11bSBiaWQgYW1vdW50XCIpO1xuICAgIH1cbiAgICBjb25zdCBvdmVycmlkZXMgPSAoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0Q2FsbE92ZXJyaWRlcygpKSB8fCB7fTtcbiAgICBhd2FpdCBzZXRFcmMyMEFsbG93YW5jZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgbm9ybWFsaXplZEJpZEFtb3VudCwgYXVjdGlvbi5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcywgb3ZlcnJpZGVzKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYmlkSW5BdWN0aW9uXCIsIFthdWN0aW9uSWQsIG5vcm1hbGl6ZWRCaWRBbW91bnRdLCBvdmVycmlkZXMpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWwgQXVjdGlvblxuICAgKlxuICAgKiBAcmVtYXJrcyBDYW5jZWwgYW4gYXVjdGlvbiBvbiB0aGUgbWFya2V0cGxhY2VcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgSUQgb2YgdGhlIGF1Y3Rpb24geW91IHdhbnQgdG8gY2FuY2VsXG4gICAqIGNvbnN0IGF1Y3Rpb25JZCA9IFwiMFwiO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMuY2FuY2VsQXVjdGlvbihhdWN0aW9uSWQpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGNhbmNlbEF1Y3Rpb24oYXVjdGlvbklkKSB7XG4gICAgY29uc3Qgd2lubmluZ0JpZCA9IGF3YWl0IHRoaXMuZ2V0V2lubmluZ0JpZChhdWN0aW9uSWQpO1xuICAgIGlmICh3aW5uaW5nQmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJpZHMgYWxyZWFkeSBtYWRlLmApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiY2FuY2VsQXVjdGlvblwiLCBbYXVjdGlvbklkXSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBBdWN0aW9uIGZvciB0aGUgYnV5ZXJcbiAgICpcbiAgICogQHJlbWFya3MgQ2xvc2VzIHRoZSBBdWN0aW9uIGFuZCBleGVjdXRlcyB0aGUgc2FsZSBmb3IgdGhlIGJ1eWVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBJRCBvZiB0aGUgYXVjdGlvbiB5b3Ugd2FudCB0byBjbG9zZVxuICAgKiBjb25zdCBhdWN0aW9uID0gXCIwXCI7XG4gICAqIGF3YWl0IGNvbnRyYWN0LmVuZ2xpc2hBdWN0aW9ucy5jbG9zZUF1Y3Rpb25Gb3JCaWRkZXIoYXVjdGlvbklkKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBhdWN0aW9uSWQgLSB0aGUgYXVjdGlvbiBpZCB0byBjbG9zZVxuICAgKiBAcGFyYW0gY2xvc2VGb3IgLSBvcHRpb25hbGx5IHBhc3MgdGhlIHdpbm5pbmcgYmlkIG9mZmVyb3IgYWRkcmVzcyB0byBjbG9zZSB0aGUgYXVjdGlvbiBvbiB0aGVpciBiZWhhbGZcbiAgICovXG4gIGFzeW5jIGNsb3NlQXVjdGlvbkZvckJpZGRlcihhdWN0aW9uSWQsIGNsb3NlRm9yKSB7XG4gICAgaWYgKCFjbG9zZUZvcikge1xuICAgICAgY2xvc2VGb3IgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgfVxuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiY29sbGVjdEF1Y3Rpb25Ub2tlbnNcIiwgW0JpZ051bWJlci5mcm9tKGF1Y3Rpb25JZCldKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmNsdWRlcyhcIk1hcmtldHBsYWNlOiBhdWN0aW9uIHN0aWxsIGFjdGl2ZS5cIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1Y3Rpb25IYXNOb3RFbmRlZEVycm9yKGF1Y3Rpb25JZC50b1N0cmluZygpLCBhdWN0aW9uLmVuZFRpbWVJblNlY29uZHMudG9TdHJpbmcoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBBdWN0aW9uIGZvciB0aGUgc2VsbGVyLCBpLmUuIHRoZSBhdWN0aW9uIGNyZWF0b3JcbiAgICpcbiAgICogQHJlbWFya3MgQ2xvc2VzIHRoZSBBdWN0aW9uIGFuZCBleGVjdXRlcyB0aGUgc2FsZSBmb3IgdGhlIHNlbGxlci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgSUQgb2YgdGhlIGF1Y3Rpb24geW91IHdhbnQgdG8gY2xvc2VcbiAgICogY29uc3QgYXVjdGlvbklkID0gXCIwXCI7XG4gICAqIGF3YWl0IGNvbnRyYWN0LmVuZ2xpc2hBdWN0aW9ucy5jbG9zZUF1Y3Rpb25Gb3JTZWxsZXIoYXVjdGlvbklkKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBhdWN0aW9uSWQgLSB0aGUgYXVjdGlvbiBpZCB0byBjbG9zZVxuICAgKi9cbiAgYXN5bmMgY2xvc2VBdWN0aW9uRm9yU2VsbGVyKGF1Y3Rpb25JZCkge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiY29sbGVjdEF1Y3Rpb25QYXlvdXRcIiwgW0JpZ051bWJlci5mcm9tKGF1Y3Rpb25JZCldKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmNsdWRlcyhcIk1hcmtldHBsYWNlOiBhdWN0aW9uIHN0aWxsIGFjdGl2ZS5cIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF1Y3Rpb25IYXNOb3RFbmRlZEVycm9yKGF1Y3Rpb25JZC50b1N0cmluZygpLCBhdWN0aW9uLmVuZFRpbWVJblNlY29uZHMudG9TdHJpbmcoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgdGhlIEF1Y3Rpb24gU2FsZVxuICAgKlxuICAgKiBAcmVtYXJrcyBDbG9zZXMgdGhlIEF1Y3Rpb24gYW5kIGV4ZWN1dGVzIHRoZSBzYWxlIGZvciBib3RoIHBhcnRpZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIElEIG9mIHRoZSBhdWN0aW9uIHlvdSB3YW50IHRvIGNsb3NlXG4gICAqIGNvbnN0IGF1Y3Rpb24gPSBcIjBcIjtcbiAgICogYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmV4ZWN1dGVTYWxlKGF1Y3Rpb25JZCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gYXVjdGlvbklkIC0gdGhlIGF1Y3Rpb24gdG8gY2xvc2VcbiAgICovXG4gIGFzeW5jIGV4ZWN1dGVTYWxlKGF1Y3Rpb25JZCkge1xuICAgIGNvbnN0IGF1Y3Rpb24gPSBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKTtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2lubmluZ0JpZCA9IGF3YWl0IHRoaXMuZ2V0V2lubmluZ0JpZChhdWN0aW9uSWQpO1xuICAgICAgaW52YXJpYW50KHdpbm5pbmdCaWQsIFwiTm8gd2lubmluZyBiaWQgZm91bmRcIik7XG4gICAgICBjb25zdCBjbG9zZUZvclNlbGxlciA9IHRoaXMuZW5jb2Rlci5lbmNvZGUoXCJjb2xsZWN0QXVjdGlvblBheW91dFwiLCBbYXVjdGlvbklkXSk7XG4gICAgICBjb25zdCBjbG9zZUZvckJ1eWVyID0gdGhpcy5lbmNvZGVyLmVuY29kZShcImNvbGxlY3RBdWN0aW9uVG9rZW5zXCIsIFthdWN0aW9uSWRdKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5tdWx0aUNhbGwoW2Nsb3NlRm9yU2VsbGVyLCBjbG9zZUZvckJ1eWVyXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5jbHVkZXMoXCJNYXJrZXRwbGFjZTogYXVjdGlvbiBzdGlsbCBhY3RpdmUuXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBBdWN0aW9uSGFzTm90RW5kZWRFcnJvcihhdWN0aW9uSWQudG9TdHJpbmcoKSwgYXVjdGlvbi5lbmRUaW1lSW5TZWNvbmRzLnRvU3RyaW5nKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGJ1ZmZlciBpbiBiYXNpcyBwb2ludHMgYmV0d2VlbiBiaWRzIGZvciBhbiBhdWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gYXVjdGlvbklkIC0gaWQgb2YgdGhlIGF1Y3Rpb25cbiAgICovXG4gIGFzeW5jIGdldEJpZEJ1ZmZlckJwcyhhdWN0aW9uSWQpIHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuZ2V0QXVjdGlvbihhdWN0aW9uSWQpKS5iaWRCdWZmZXJCcHM7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgbWluaW11bSBiaWQgYSB1c2VyIGNhbiBwbGFjZSB0byBvdXRiaWQgdGhlIHByZXZpb3VzIGhpZ2hlc3QgYmlkXG4gICAqIEBwYXJhbSBhdWN0aW9uSWQgLSBpZCBvZiB0aGUgYXVjdGlvblxuICAgKi9cbiAgYXN5bmMgZ2V0TWluaW11bU5leHRCaWQoYXVjdGlvbklkKSB7XG4gICAgLy8gd2UgY2FuIGZldGNoIGFsbCBvZiB0aGVzZSBhdCB0aGUgc2FtZSB0aW1lIHVzaW5nIHByb21pc2UuYWxsXG4gICAgY29uc3QgW2N1cnJlbnRCaWRCdWZmZXJCcHMsIHdpbm5pbmdCaWQsIGF1Y3Rpb25dID0gYXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMuZ2V0QmlkQnVmZmVyQnBzKGF1Y3Rpb25JZCksIHRoaXMuZ2V0V2lubmluZ0JpZChhdWN0aW9uSWQpLCBhd2FpdCB0aGlzLnZhbGlkYXRlQXVjdGlvbihCaWdOdW1iZXIuZnJvbShhdWN0aW9uSWQpKV0pO1xuICAgIGNvbnN0IGN1cnJlbnRCaWRPclJlc2VydmVQcmljZSA9IHdpbm5pbmdCaWQgP1xuICAgIC8vIGlmIHRoZXJlIGlzIGEgd2lubmluZyBiaWQgdXNlIHRoZSB2YWx1ZSBvZiBpdFxuICAgIEJpZ051bWJlci5mcm9tKHdpbm5pbmdCaWQuYmlkQW1vdW50KSA6XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gd2lubmluZyBiaWQgdXNlIHRoZSByZXNlcnZlIHByaWNlXG4gICAgQmlnTnVtYmVyLmZyb20oYXVjdGlvbi5taW5pbXVtQmlkQW1vdW50KTtcbiAgICBjb25zdCBtaW5pbXVtTmV4dEJpZCA9IGN1cnJlbnRCaWRPclJlc2VydmVQcmljZS5hZGQoXG4gICAgLy8gdGhlIGFkZGl0aW9uIG9mIHRoZSBjdXJyZW50IGJpZCBhbmQgdGhlIGJ1ZmZlclxuICAgIC8vIChoYXZlIHRvIGRpdmlkZSBieSAxMDAwMCB0byBnZXQgdGhlIGZyYWN0aW9uIG9mIHRoZSBidWZmZXIgKHNpbmNlIGl0J3MgaW4gYmFzaXMgcG9pbnRzKSlcbiAgICBjdXJyZW50QmlkT3JSZXNlcnZlUHJpY2UubXVsKGN1cnJlbnRCaWRCdWZmZXJCcHMpLmRpdigxMDAwMCkpO1xuXG4gICAgLy8gaXQncyBtb3JlIHVzZWZ1bCB0byByZXR1cm4gYSBjdXJyZW5jeSB2YWx1ZSBoZXJlXG4gICAgcmV0dXJuIGZldGNoQ3VycmVuY3lWYWx1ZSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBhdWN0aW9uLmN1cnJlbmN5Q29udHJhY3RBZGRyZXNzLCBtaW5pbXVtTmV4dEJpZCk7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFBSSVZBVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBUaHJvd3MgZXJyb3IgaWYgYXVjdGlvbiBjb3VsZCBub3QgYmUgZm91bmRcbiAgICpcbiAgICogQHBhcmFtIGF1Y3Rpb25JZCAtIEF1Y3Rpb24gdG8gY2hlY2sgZm9yXG4gICAqL1xuICBhc3luYyB2YWxpZGF0ZUF1Y3Rpb24oYXVjdGlvbklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldEF1Y3Rpb24oYXVjdGlvbklkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgdGhlIGF1Y3Rpb24gd2l0aCBpZCAke2F1Y3Rpb25JZH1gKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCBtYXBzIHRoZSBhdWN0aW9uIHRvIHRoZSBhdWN0aW9uIGludGVyZmFjZS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqIEBwYXJhbSBhdWN0aW9uIC0gVGhlIGF1Y3Rpb24gdG8gbWFwLCBhcyByZXR1cm5lZCBmcm9tIHRoZSBjb250cmFjdC5cbiAgICogQHJldHVybnMgLSBUaGUgbWFwcGVkIGludGVyZmFjZS5cbiAgICovXG4gIGFzeW5jIG1hcEF1Y3Rpb24oYXVjdGlvbikge1xuICAgIGxldCBzdGF0dXMgPSBTdGF0dXMuVU5TRVQ7XG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLmdldEJsb2NrKFwibGF0ZXN0XCIpO1xuICAgIGNvbnN0IGJsb2NrVGltZSA9IGJsb2NrLnRpbWVzdGFtcDtcbiAgICBzd2l0Y2ggKGF1Y3Rpb24uc3RhdHVzKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHN0YXR1cyA9IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24uc3RhcnRUaW1lc3RhbXApLmd0KGJsb2NrVGltZSkgPyBTdGF0dXMuQ3JlYXRlZCA6IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24uZW5kVGltZXN0YW1wKS5sdChibG9ja1RpbWUpID8gU3RhdHVzLkV4cGlyZWQgOiBTdGF0dXMuQWN0aXZlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNvbXBsZXRlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN0YXR1cyA9IFN0YXR1cy5DYW5jZWxsZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGF1Y3Rpb24uYXVjdGlvbklkLnRvU3RyaW5nKCksXG4gICAgICBjcmVhdG9yQWRkcmVzczogYXVjdGlvbi5hdWN0aW9uQ3JlYXRvcixcbiAgICAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBhdWN0aW9uLmFzc2V0Q29udHJhY3QsXG4gICAgICB0b2tlbklkOiBhdWN0aW9uLnRva2VuSWQudG9TdHJpbmcoKSxcbiAgICAgIHF1YW50aXR5OiBhdWN0aW9uLnF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogYXVjdGlvbi5jdXJyZW5jeSxcbiAgICAgIG1pbmltdW1CaWRBbW91bnQ6IGF1Y3Rpb24ubWluaW11bUJpZEFtb3VudC50b1N0cmluZygpLFxuICAgICAgbWluaW11bUJpZEN1cnJlbmN5VmFsdWU6IGF3YWl0IGZldGNoQ3VycmVuY3lWYWx1ZSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBhdWN0aW9uLmN1cnJlbmN5LCBhdWN0aW9uLm1pbmltdW1CaWRBbW91bnQpLFxuICAgICAgYnV5b3V0QmlkQW1vdW50OiBhdWN0aW9uLmJ1eW91dEJpZEFtb3VudC50b1N0cmluZygpLFxuICAgICAgYnV5b3V0Q3VycmVuY3lWYWx1ZTogYXdhaXQgZmV0Y2hDdXJyZW5jeVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIGF1Y3Rpb24uY3VycmVuY3ksIGF1Y3Rpb24uYnV5b3V0QmlkQW1vdW50KSxcbiAgICAgIHRpbWVCdWZmZXJJblNlY29uZHM6IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24udGltZUJ1ZmZlckluU2Vjb25kcykudG9OdW1iZXIoKSxcbiAgICAgIGJpZEJ1ZmZlckJwczogQmlnTnVtYmVyLmZyb20oYXVjdGlvbi5iaWRCdWZmZXJCcHMpLnRvTnVtYmVyKCksXG4gICAgICBzdGFydFRpbWVJblNlY29uZHM6IEJpZ051bWJlci5mcm9tKGF1Y3Rpb24uc3RhcnRUaW1lc3RhbXApLnRvTnVtYmVyKCksXG4gICAgICBlbmRUaW1lSW5TZWNvbmRzOiBCaWdOdW1iZXIuZnJvbShhdWN0aW9uLmVuZFRpbWVzdGFtcCkudG9OdW1iZXIoKSxcbiAgICAgIGFzc2V0OiBhd2FpdCBmZXRjaFRva2VuTWV0YWRhdGFGb3JDb250cmFjdChhdWN0aW9uLmFzc2V0Q29udHJhY3QsIHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIGF1Y3Rpb24udG9rZW5JZCwgdGhpcy5zdG9yYWdlKSxcbiAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIGFuIGF1Y3Rpb24tYmlkIHRvIHRoZSBzdHJpY3QgaW50ZXJmYWNlXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gYmlkXG4gICAqIEByZXR1cm5zIC0gQSBgQmlkYCBvYmplY3RcbiAgICovXG4gIGFzeW5jIG1hcEJpZChhdWN0aW9uSWQsIGJpZGRlckFkZHJlc3MsIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzLCBiaWRBbW91bnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXVjdGlvbklkLFxuICAgICAgYmlkZGVyQWRkcmVzcyxcbiAgICAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzLFxuICAgICAgYmlkQW1vdW50LFxuICAgICAgYmlkQW1vdW50Q3VycmVuY3lWYWx1ZTogYXdhaXQgZmV0Y2hDdXJyZW5jeVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzLCBiaWRBbW91bnQpXG4gICAgfTtcbiAgfVxuICBhcHBseUZpbHRlcihhdWN0aW9ucywgZmlsdGVyKSB7XG4gICAgbGV0IHJhd0F1Y3Rpb25zID0gWy4uLmF1Y3Rpb25zXTtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBpZiAoZmlsdGVyLnNlbGxlcikge1xuICAgICAgICByYXdBdWN0aW9ucyA9IHJhd0F1Y3Rpb25zLmZpbHRlcihzZWxsZXIgPT4gc2VsbGVyLmF1Y3Rpb25DcmVhdG9yLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PT0gZmlsdGVyPy5zZWxsZXI/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuQ29udHJhY3QpIHtcbiAgICAgICAgcmF3QXVjdGlvbnMgPSByYXdBdWN0aW9ucy5maWx0ZXIodG9rZW5Db250cmFjdCA9PiB0b2tlbkNvbnRyYWN0LmFzc2V0Q29udHJhY3QudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBmaWx0ZXI/LnRva2VuQ29udHJhY3Q/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByYXdBdWN0aW9ucyA9IHJhd0F1Y3Rpb25zLmZpbHRlcih0b2tlbkNvbnRyYWN0ID0+IHRva2VuQ29udHJhY3QudG9rZW5JZC50b1N0cmluZygpID09PSBmaWx0ZXI/LnRva2VuSWQ/LnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyPy5jb3VudCAmJiBmaWx0ZXIuY291bnQgPCByYXdBdWN0aW9ucy5sZW5ndGggPyByYXdBdWN0aW9ucy5zbGljZSgwLCBmaWx0ZXIuY291bnQpIDogcmF3QXVjdGlvbnM7XG4gIH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgT2ZmZXJJbnB1dFBhcmFtc1NjaGVtYSA9IHoub2JqZWN0KHtcbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIG9mIHRoZSBhc3NldCBiZWluZyBzb3VnaHQuXG4gICAqL1xuICBhc3NldENvbnRyYWN0QWRkcmVzczogQWRkcmVzc1NjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgdG9rZW4uXG4gICAqL1xuICB0b2tlbklkOiBCaWdOdW1iZXJpc2hTY2hlbWEsXG4gIC8qKlxuICAgKiBUaGUgcXVhbnRpdHkgb2YgdG9rZW5zIHRvIGJ1eS5cbiAgICpcbiAgICogRm9yIEVSQzcyMXMsIHRoaXMgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSAxIChhbmQgd2lsbCBiZSBmb3JjZWQgaW50ZXJuYWxseSByZWdhcmRsZXNzIG9mIHdoYXQgaXMgcGFzc2VkIGhlcmUpLlxuICAgKi9cbiAgcXVhbnRpdHk6IEJpZ051bWJlcmlzaFNjaGVtYS5kZWZhdWx0KDEpLFxuICAvKipcbiAgICogVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IG9mZmVyZWQgZm9yIHRoZSBORlRzLlxuICAgKi9cbiAgY3VycmVuY3lDb250cmFjdEFkZHJlc3M6IEFkZHJlc3NTY2hlbWEuZGVmYXVsdChOQVRJVkVfVE9LRU5fQUREUkVTUyksXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgb2ZmZXIgYW1vdW50IGZvciB0aGUgTkZUcy5cbiAgICovXG4gIHRvdGFsUHJpY2U6IEFtb3VudFNjaGVtYSxcbiAgLyoqXG4gICAqIFRoZSBlbmQgdGltZSBvZiB0aGUgb2ZmZXIuXG4gICAqL1xuICBlbmRUaW1lc3RhbXA6IEVuZERhdGVTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEhhbmRsZXMgbWFya2V0cGxhY2Ugb2ZmZXJzXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIE1hcmtldHBsYWNlVjNPZmZlcnMge1xuICAvLyB1dGlsaXRpZXNcblxuICBjb25zdHJ1Y3Rvcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJmZWF0dXJlTmFtZVwiLCBGRUFUVVJFX09GRkVSUy5uYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIG9mZmVyc1xuICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2Ygb2ZmZXJzIGNyZWF0ZWQuXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB0b3RhbE9mZmVycyA9IGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5nZXRUb3RhbENvdW50KCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgZ2V0VG90YWxDb3VudCgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnRvdGFsT2ZmZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBvZmZlcnMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3Qgb2ZmZXJzID0gYXdhaXQgY29udHJhY3Qub2ZmZXJzLmdldEFsbCgpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGZpbHRlciAtIG9wdGlvbmFsIGZpbHRlciBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm5zIHRoZSBPZmZlciBvYmplY3QgYXJyYXlcbiAgICovXG4gIGFzeW5jIGdldEFsbChmaWx0ZXIpIHtcbiAgICBjb25zdCB0b3RhbE9mZmVycyA9IGF3YWl0IHRoaXMuZ2V0VG90YWxDb3VudCgpO1xuICAgIGxldCBzdGFydCA9IEJpZ051bWJlci5mcm9tKGZpbHRlcj8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBsZXQgZW5kID0gdG90YWxPZmZlcnMudG9OdW1iZXIoKTtcbiAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG9mZmVycyBleGlzdCBvbiB0aGUgY29udHJhY3QuYCk7XG4gICAgfVxuICAgIGxldCByYXdPZmZlcnMgPSBbXTtcbiAgICBsZXQgYmF0Y2hlcyA9IGF3YWl0IGdldEFsbEluQmF0Y2hlcyhzdGFydCwgZW5kLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0QWxsT2ZmZXJzKTtcbiAgICByYXdPZmZlcnMgPSBiYXRjaGVzLmZsYXQoKTtcbiAgICBjb25zdCBmaWx0ZXJlZE9mZmVycyA9IHRoaXMuYXBwbHlGaWx0ZXIocmF3T2ZmZXJzLCBmaWx0ZXIpO1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChmaWx0ZXJlZE9mZmVycy5tYXAob2ZmZXIgPT4gdGhpcy5tYXBPZmZlcihvZmZlcikpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHZhbGlkIG9mZmVycy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBvZmZlcnMgPSBhd2FpdCBjb250cmFjdC5vZmZlcnMuZ2V0QWxsVmFsaWQoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXIgLSBvcHRpb25hbCBmaWx0ZXIgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB0aGUgT2ZmZXIgb2JqZWN0IGFycmF5XG4gICAqL1xuICBhc3luYyBnZXRBbGxWYWxpZChmaWx0ZXIpIHtcbiAgICBjb25zdCB0b3RhbE9mZmVycyA9IGF3YWl0IHRoaXMuZ2V0VG90YWxDb3VudCgpO1xuICAgIGxldCBzdGFydCA9IEJpZ051bWJlci5mcm9tKGZpbHRlcj8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBsZXQgZW5kID0gdG90YWxPZmZlcnMudG9OdW1iZXIoKTtcbiAgICBpZiAoZW5kID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG9mZmVycyBleGlzdCBvbiB0aGUgY29udHJhY3QuYCk7XG4gICAgfVxuICAgIGxldCByYXdPZmZlcnMgPSBbXTtcbiAgICBsZXQgYmF0Y2hlcyA9IGF3YWl0IGdldEFsbEluQmF0Y2hlcyhzdGFydCwgZW5kLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0QWxsVmFsaWRPZmZlcnMpO1xuICAgIHJhd09mZmVycyA9IGJhdGNoZXMuZmxhdCgpO1xuICAgIGNvbnN0IGZpbHRlcmVkT2ZmZXJzID0gdGhpcy5hcHBseUZpbHRlcihyYXdPZmZlcnMsIGZpbHRlcik7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKGZpbHRlcmVkT2ZmZXJzLm1hcChvZmZlciA9PiB0aGlzLm1hcE9mZmVyKG9mZmVyKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIG9mZmVyIGJ5IGlkXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3Qgb2ZmZXJJZCA9IDA7XG4gICAqIGNvbnN0IG9mZmVyID0gYXdhaXQgY29udHJhY3Qub2ZmZXJzLmdldE9mZmVyKG9mZmVySWQpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG9mZmVySWQgLSB0aGUgbGlzdGluZyBpZFxuICAgKiBAcmV0dXJucyB0aGUgRGlyZWN0IGxpc3Rpbmcgb2JqZWN0XG4gICAqL1xuICBhc3luYyBnZXRPZmZlcihvZmZlcklkKSB7XG4gICAgY29uc3Qgb2ZmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0T2ZmZXIob2ZmZXJJZCk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubWFwT2ZmZXIob2ZmZXIpO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBXUklURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIE1ha2UgT2ZmZXJcbiAgICpcbiAgICogQHJlbWFya3MgTWFrZSBhbiBvZmZlciBvbiB0aGUgbWFya2V0cGxhY2UgZm9yIGFuIGFzc2V0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIERhdGEgb2YgdGhlIG9mZmVyIHlvdSB3YW50IHRvIG1ha2VcbiAgICogY29uc3Qgb2ZmZXIgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIG1ha2UgYW4gb2ZmZXIgZm9yXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqICAgdG9rZW5JZDogXCIwXCIsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgeW91IG9mZmVyIHRvIHBheSBpblxuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyBUb3RhbCBwcmljZSB5b3Ugb2ZmZXIgdG8gcGF5IGZvciB0aGUgbWVudGlvbmVkIHRva2VuKHMpXG4gICAqICAgdG90YWxQcmljZTogXCIxLjVcIixcbiAgICogICAvLyBPZmZlciB2YWxpZCB1bnRpbFxuICAgKiAgIGVuZFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5tYWtlT2ZmZXIob2ZmZXIpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgaWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBuZXdseSBjcmVhdGVkIG9mZmVyXG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgbWFrZU9mZmVyKG9mZmVyKSB7XG4gICAgY29uc3QgcGFyc2VkT2ZmZXIgPSBPZmZlcklucHV0UGFyYW1zU2NoZW1hLnBhcnNlKG9mZmVyKTtcbiAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0Q2hhaW5JRCgpO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gaXNOYXRpdmVUb2tlbihwYXJzZWRPZmZlci5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcykgPyBOQVRJVkVfVE9LRU5TW2NoYWluSWRdLndyYXBwZWQuYWRkcmVzcyA6IHBhcnNlZE9mZmVyLmN1cnJlbmN5Q29udHJhY3RBZGRyZXNzO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRUb3RhbFByaWNlID0gYXdhaXQgbm9ybWFsaXplUHJpY2VWYWx1ZSh0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBwYXJzZWRPZmZlci50b3RhbFByaWNlLCBjdXJyZW5jeSk7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0Q2FsbE92ZXJyaWRlcygpO1xuICAgIGF3YWl0IHNldEVyYzIwQWxsb3dhbmNlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBub3JtYWxpemVkVG90YWxQcmljZSwgY3VycmVuY3ksIG92ZXJyaWRlcyk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcIm1ha2VPZmZlclwiLCBbe1xuICAgICAgYXNzZXRDb250cmFjdDogcGFyc2VkT2ZmZXIuYXNzZXRDb250cmFjdEFkZHJlc3MsXG4gICAgICB0b2tlbklkOiBwYXJzZWRPZmZlci50b2tlbklkLFxuICAgICAgcXVhbnRpdHk6IHBhcnNlZE9mZmVyLnF1YW50aXR5LFxuICAgICAgY3VycmVuY3k6IGN1cnJlbmN5LFxuICAgICAgdG90YWxQcmljZTogbm9ybWFsaXplZFRvdGFsUHJpY2UsXG4gICAgICBleHBpcmF0aW9uVGltZXN0YW1wOiBwYXJzZWRPZmZlci5lbmRUaW1lc3RhbXBcbiAgICB9XSwge1xuICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3IgY3JlYXRlIGxpc3RpbmdcbiAgICAgIGdhc0xpbWl0OiA1MDAwMDBcbiAgICB9KTtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIk5ld09mZmVyXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZXZlbnRbMF0uYXJncy5vZmZlcklkLFxuICAgICAgcmVjZWlwdFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIE9mZmVyXG4gICAqXG4gICAqIEByZW1hcmtzIENhbmNlbCBhbiBvZmZlciBvbiB0aGUgbWFya2V0cGxhY2VcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgSUQgb2YgdGhlIG9mZmVyIHlvdSB3YW50IHRvIGNhbmNlbFxuICAgKiBjb25zdCBvZmZlcklkID0gXCIwXCI7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5jYW5jZWxPZmZlcihvZmZlcklkKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBjYW5jZWxPZmZlcihvZmZlcklkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY2VpcHQ6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImNhbmNlbE9mZmVyXCIsIFtvZmZlcklkXSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBhbiBvZmZlclxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBJRCBvZiB0aGUgb2ZmZXIgeW91IHdhbnQgdG8gYWNjZXB0XG4gICAqIGNvbnN0IG9mZmVySWQgPSAwO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5vZmZlcnMuYWNjZXB0T2ZmZXIob2ZmZXJJZCk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gb2ZmZXJJZCAtIFRoZSBvZmZlciBpZFxuICAgKi9cbiAgYXN5bmMgYWNjZXB0T2ZmZXIob2ZmZXJJZCkge1xuICAgIGNvbnN0IG9mZmVyID0gYXdhaXQgdGhpcy52YWxpZGF0ZU9mZmVyKEJpZ051bWJlci5mcm9tKG9mZmVySWQpKTtcbiAgICBjb25zdCB7XG4gICAgICB2YWxpZCxcbiAgICAgIGVycm9yXG4gICAgfSA9IGF3YWl0IHRoaXMuaXNTdGlsbFZhbGlkT2ZmZXIob2ZmZXIpO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT2ZmZXIgJHtvZmZlcklkfSBpcyBubyBsb25nZXIgdmFsaWQuICR7ZXJyb3J9YCk7XG4gICAgfVxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IChhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRDYWxsT3ZlcnJpZGVzKCkpIHx8IHt9O1xuICAgIGF3YWl0IGhhbmRsZVRva2VuQXBwcm92YWwodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMuZ2V0QWRkcmVzcygpLCBvZmZlci5hc3NldENvbnRyYWN0QWRkcmVzcywgb2ZmZXIudG9rZW5JZCwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYWNjZXB0T2ZmZXJcIiwgW29mZmVySWRdLCBvdmVycmlkZXMpXG4gICAgfTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUFJJVkFURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFRocm93cyBlcnJvciBpZiBvZmZlciBjb3VsZCBub3QgYmUgZm91bmRcbiAgICpcbiAgICogQHBhcmFtIG9mZmVySWQgLSBvZmZlciB0byBjaGVjayBmb3JcbiAgICovXG4gIGFzeW5jIHZhbGlkYXRlT2ZmZXIob2ZmZXJJZCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRPZmZlcihvZmZlcklkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGdldHRpbmcgdGhlIG9mZmVyIHdpdGggaWQgJHtvZmZlcklkfWApO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIG1hcHMgdGhlIG9mZmVyIHRvIHRoZSBvZmZlciBpbnRlcmZhY2UuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gb2ZmZXIgLSBUaGUgb2ZmZXIgdG8gbWFwLCBhcyByZXR1cm5lZCBmcm9tIHRoZSBjb250cmFjdC5cbiAgICogQHJldHVybnMgLSBUaGUgbWFwcGVkIGludGVyZmFjZS5cbiAgICovXG4gIGFzeW5jIG1hcE9mZmVyKG9mZmVyKSB7XG4gICAgbGV0IHN0YXR1cyA9IFN0YXR1cy5VTlNFVDtcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCkuZ2V0QmxvY2soXCJsYXRlc3RcIik7XG4gICAgY29uc3QgYmxvY2tUaW1lID0gYmxvY2sudGltZXN0YW1wO1xuICAgIHN3aXRjaCAob2ZmZXIuc3RhdHVzKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHN0YXR1cyA9IEJpZ051bWJlci5mcm9tKG9mZmVyLmV4cGlyYXRpb25UaW1lc3RhbXApLmx0KGJsb2NrVGltZSkgPyBTdGF0dXMuRXhwaXJlZCA6IFN0YXR1cy5BY3RpdmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ29tcGxldGVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc3RhdHVzID0gU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpZDogb2ZmZXIub2ZmZXJJZC50b1N0cmluZygpLFxuICAgICAgb2ZmZXJvckFkZHJlc3M6IG9mZmVyLm9mZmVyb3IsXG4gICAgICBhc3NldENvbnRyYWN0QWRkcmVzczogb2ZmZXIuYXNzZXRDb250cmFjdCxcbiAgICAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBvZmZlci5jdXJyZW5jeSxcbiAgICAgIHRva2VuSWQ6IG9mZmVyLnRva2VuSWQudG9TdHJpbmcoKSxcbiAgICAgIHF1YW50aXR5OiBvZmZlci5xdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgdG90YWxQcmljZTogb2ZmZXIudG90YWxQcmljZS50b1N0cmluZygpLFxuICAgICAgY3VycmVuY3lWYWx1ZTogYXdhaXQgZmV0Y2hDdXJyZW5jeVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIG9mZmVyLmN1cnJlbmN5LCBvZmZlci50b3RhbFByaWNlKSxcbiAgICAgIGFzc2V0OiBhd2FpdCBmZXRjaFRva2VuTWV0YWRhdGFGb3JDb250cmFjdChvZmZlci5hc3NldENvbnRyYWN0LCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpLCBvZmZlci50b2tlbklkLCB0aGlzLnN0b3JhZ2UpLFxuICAgICAgZW5kVGltZUluU2Vjb25kczogQmlnTnVtYmVyLmZyb20ob2ZmZXIuZXhwaXJhdGlvblRpbWVzdGFtcCkudG9OdW1iZXIoKSxcbiAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gY2hlY2sgaWYgYW4gb2ZmZXIgaXMgc3RpbGwgdmFsaWQuXG4gICAqXG4gICAqIFdheXMgYW4gb2ZmZXIgY2FuIGJlY29tZSBpbnZhbGlkOlxuICAgKiAxLiBUaGUgb2ZmZXIgaGFzIGV4cGlyZWRcbiAgICogMi4gVGhlIG9mZmVyb3IgZG9lc24ndCBoYXZlIGVub3VnaCBiYWxhbmNlIG9mIGN1cnJlbmN5IHRva2Vuc1xuICAgKiAzLiBUaGUgb2ZmZXJvciByZW1vdmVkIHRoZSBhcHByb3ZhbCBvZiBjdXJyZW5jeSB0b2tlbnMgb24gdGhlIG1hcmtldHBsYWNlXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAcGFyYW0gb2ZmZXIgLSBUaGUgb2ZmZXIgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIC0gVHJ1ZSBpZiB0aGUgb2ZmZXIgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIGFzeW5jIGlzU3RpbGxWYWxpZE9mZmVyKG9mZmVyKSB7XG4gICAgY29uc3Qgbm93ID0gQmlnTnVtYmVyLmZyb20oTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkpO1xuICAgIGlmIChub3cuZ3Qob2ZmZXIuZW5kVGltZUluU2Vjb25kcykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGBPZmZlciB3aXRoIElEICR7b2ZmZXIuaWR9IGhhcyBleHBpcmVkYFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgY2hhaW5JZCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldENoYWluSUQoKTtcbiAgICBjb25zdCBjdXJyZW5jeSA9IGlzTmF0aXZlVG9rZW4ob2ZmZXIuY3VycmVuY3lDb250cmFjdEFkZHJlc3MpID8gTkFUSVZFX1RPS0VOU1tjaGFpbklkXS53cmFwcGVkLmFkZHJlc3MgOiBvZmZlci5jdXJyZW5jeUNvbnRyYWN0QWRkcmVzcztcbiAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCk7XG4gICAgY29uc3QgZXJjMjAgPSBuZXcgQ29udHJhY3RXcmFwcGVyKHByb3ZpZGVyLCBjdXJyZW5jeSwgRVJDMjBBYmksIHt9KTtcbiAgICBjb25zdCBvZmZlcm9yQmFsYW5jZSA9IGF3YWl0IGVyYzIwLnJlYWRDb250cmFjdC5iYWxhbmNlT2Yob2ZmZXIub2ZmZXJvckFkZHJlc3MpO1xuICAgIGlmIChvZmZlcm9yQmFsYW5jZS5sdChvZmZlci50b3RhbFByaWNlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYE9mZmVyb3IgJHtvZmZlci5vZmZlcm9yQWRkcmVzc30gZG9lc24ndCBoYXZlIGVub3VnaCBiYWxhbmNlIG9mIHRva2VuICR7Y3VycmVuY3l9YFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgb2ZmZXJvckFsbG93YW5jZSA9IGF3YWl0IGVyYzIwLnJlYWRDb250cmFjdC5hbGxvd2FuY2Uob2ZmZXIub2ZmZXJvckFkZHJlc3MsIHRoaXMuZ2V0QWRkcmVzcygpKTtcbiAgICBpZiAob2ZmZXJvckFsbG93YW5jZS5sdChvZmZlci50b3RhbFByaWNlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYE9mZmVyb3IgJHtvZmZlci5vZmZlcm9yQWRkcmVzc30gaGFzbid0IGFwcHJvdmVkIGVub3VnaCBhbW91bnQgb2YgdG9rZW4gJHtjdXJyZW5jeX1gXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICBlcnJvcjogXCJcIlxuICAgIH07XG4gIH1cbiAgYXBwbHlGaWx0ZXIob2ZmZXJzLCBmaWx0ZXIpIHtcbiAgICBsZXQgcmF3T2ZmZXJzID0gWy4uLm9mZmVyc107XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgaWYgKGZpbHRlci5vZmZlcm9yKSB7XG4gICAgICAgIHJhd09mZmVycyA9IHJhd09mZmVycy5maWx0ZXIob2ZmZXJvciA9PiBvZmZlcm9yLm9mZmVyb3IudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PSBmaWx0ZXI/Lm9mZmVyb3I/LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLnRva2VuQ29udHJhY3QpIHtcbiAgICAgICAgcmF3T2ZmZXJzID0gcmF3T2ZmZXJzLmZpbHRlcih0b2tlbkNvbnRyYWN0ID0+IHRva2VuQ29udHJhY3QuYXNzZXRDb250cmFjdC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IGZpbHRlcj8udG9rZW5Db250cmFjdD8udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIudG9rZW5JZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJhd09mZmVycyA9IHJhd09mZmVycy5maWx0ZXIodG9rZW5Db250cmFjdCA9PiB0b2tlbkNvbnRyYWN0LnRva2VuSWQudG9TdHJpbmcoKSA9PT0gZmlsdGVyPy50b2tlbklkPy50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcj8uY291bnQgJiYgZmlsdGVyLmNvdW50IDwgcmF3T2ZmZXJzLmxlbmd0aCA/IHJhd09mZmVycy5zbGljZSgwLCBmaWx0ZXIuY291bnQpIDogcmF3T2ZmZXJzO1xuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIHlvdXIgb3duIHdoaXRlbGFiZWwgbWFya2V0cGxhY2UgdGhhdCBlbmFibGVzIHVzZXJzIHRvIGJ1eSBhbmQgc2VsbCBhbnkgZGlnaXRhbCBhc3NldHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwibWFya2V0cGxhY2VcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIE1hcmtldHBsYWNlVjMge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIC8qKlxuICAgKiBEaXJlY3QgbGlzdGluZ3NcbiAgICogQHJlbWFya3MgQ3JlYXRlIGFuZCBtYW5hZ2UgZGlyZWN0IGxpc3RpbmdzIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgbGlzdGluZyA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdCBpcyBvblxuICAgKiAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGxpc3RcbiAgICogICB0b2tlbklkOiBcIjBcIixcbiAgICogICAvLyBob3cgbWFueSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gbGlzdFxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBheSBmb3IgdGhlIGxpc3RpbmdcbiAgICogICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogTkFUSVZFX1RPS0VOX0FERFJFU1MsXG4gICAqICAgLy8gVGhlIHByaWNlIHRvIHBheSBwZXIgdW5pdCBvZiBORlRzIGxpc3RlZC5cbiAgICogICBwcmljZVBlclRva2VuOiAxLjUsXG4gICAqICAgLy8gd2hlbiBzaG91bGQgdGhlIGxpc3Rpbmcgb3BlbiB1cCBmb3Igb2ZmZXJzXG4gICAqICAgc3RhcnRUaW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkpLFxuICAgKiAgIC8vIGhvdyBsb25nIHRoZSBsaXN0aW5nIHdpbGwgYmUgb3BlbiBmb3JcbiAgICogICBlbmRUaW1lc3RhbXA6IG5ldyBEYXRlKERhdGUubm93KCkgKyA1ICogMjQgKiA2MCAqIDYwICogMTAwMCksXG4gICAqICAgLy8gV2hldGhlciB0aGUgbGlzdGluZyBpcyByZXNlcnZlZCBmb3IgYSBzcGVjaWZpYyBzZXQgb2YgYnV5ZXJzLlxuICAgKiAgIGlzUmVzZXJ2ZWRMaXN0aW5nOiBmYWxzZVxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZGlyZWN0TGlzdGluZ3MuY3JlYXRlTGlzdGluZyhsaXN0aW5nKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IGlkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgbmV3bHkgY3JlYXRlZCBsaXN0aW5nXG4gICAqXG4gICAqIC8vIEFuZCBvbiB0aGUgYnV5ZXJzIHNpZGU6XG4gICAqIC8vIFRoZSBJRCBvZiB0aGUgbGlzdGluZyB5b3Ugd2FudCB0byBidXkgZnJvbVxuICAgKiBjb25zdCBsaXN0aW5nSWQgPSAwO1xuICAgKiAvLyBRdWFudGl0eSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqIGNvbnN0IHF1YW50aXR5RGVzaXJlZCA9IDE7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpcmVjdExpc3RpbmdzLmJ1eUZyb21MaXN0aW5nKGxpc3RpbmdJZCwgcXVhbnRpdHlEZXNpcmVkKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQgZGlyZWN0TGlzdGluZ3MoKSB7XG4gICAgcmV0dXJuIGFzc2VydEVuYWJsZWQodGhpcy5kZXRlY3REaXJlY3RMaXN0aW5ncygpLCBGRUFUVVJFX0RJUkVDVF9MSVNUSU5HUyk7XG4gIH1cbiAgLyoqXG4gICAqIEF1Y3Rpb25zXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhbmQgbWFuYWdlIGF1Y3Rpb25zIGluIHlvdXIgbWFya2V0cGxhY2UuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gRGF0YSBvZiB0aGUgYXVjdGlvbiB5b3Ugd2FudCB0byBjcmVhdGVcbiAgICogY29uc3QgYXVjdGlvbiA9IHtcbiAgICogICAvLyBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYXVjdGlvblxuICAgKiAgIGFzc2V0Q29udHJhY3RBZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgLy8gdG9rZW4gSUQgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGF1Y3Rpb25cbiAgICogICB0b2tlbklkOiBcIjBcIixcbiAgICogICAvLyBob3cgbWFueSBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYXVjdGlvblxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBheSBmb3IgdGhlIGF1Y3Rpb25lZCB0b2tlbnNcbiAgICogICBjdXJyZW5jeUNvbnRyYWN0QWRkcmVzczogTkFUSVZFX1RPS0VOX0FERFJFU1MsXG4gICAqICAgLy8gdGhlIG1pbmltdW0gYmlkIHRoYXQgd2lsbCBiZSBhY2NlcHRlZCBmb3IgdGhlIHRva2VuXG4gICAqICAgbWluaW11bUJpZEFtb3VudDogXCIxLjVcIixcbiAgICogICAvLyBob3cgbXVjaCBwZW9wbGUgd291bGQgaGF2ZSB0byBiaWQgdG8gaW5zdGFudGx5IGJ1eSB0aGUgYXNzZXRcbiAgICogICBidXlvdXRCaWRBbW91bnQ6IFwiMTBcIixcbiAgICogICAvLyBJZiBhIGJpZCBpcyBtYWRlIGxlc3MgdGhhbiB0aGVzZSBtYW55IHNlY29uZHMgYmVmb3JlIGV4cGlyYXRpb24sIHRoZSBleHBpcmF0aW9uIHRpbWUgaXMgaW5jcmVhc2VkIGJ5IHRoaXMuXG4gICAqICAgdGltZUJ1ZmZlckluU2Vjb25kczogXCIxMDAwXCIsXG4gICAqICAgLy8gQSBiaWQgbXVzdCBiZSBhdCBsZWFzdCB0aGlzIG11Y2ggYnBzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB3aW5uaW5nIGJpZFxuICAgKiAgIGJpZEJ1ZmZlckJwczogXCIxMDBcIiwgLy8gMTAwIGJwcyBzdGFuZHMgZm9yIDElXG4gICAqICAgLy8gd2hlbiBzaG91bGQgdGhlIGF1Y3Rpb24gb3BlbiB1cCBmb3IgYmlkZGluZ1xuICAgKiAgIHN0YXJ0VGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpKSxcbiAgICogICAvLyBlbmQgdGltZSBvZiBhdWN0aW9uXG4gICAqICAgZW5kVGltZXN0YW1wOiBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuZW5nbGlzaEF1Y3Rpb25zLmNyZWF0ZUF1Y3Rpb24oYXVjdGlvbik7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBpZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgYXVjdGlvblxuICAgKlxuICAgKiAvLyBBbmQgb24gdGhlIGJ1eWVycyBzaWRlOlxuICAgKiAvLyBUaGUgYXVjdGlvbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYmlkIG9uXG4gICAqIGNvbnN0IGF1Y3Rpb25JZCA9IDA7XG4gICAqIC8vIFRoZSB0b3RhbCBhbW91bnQgeW91IGFyZSB3aWxsaW5nIHRvIGJpZCBmb3IgYXVjdGlvbmVkIHRva2Vuc1xuICAgKiBjb25zdCBiaWRBbW91bnQgPSAxO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5lbmdsaXNoQXVjdGlvbnMubWFrZUJpZChhdWN0aW9uSWQsIGJpZEFtb3VudCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0IGVuZ2xpc2hBdWN0aW9ucygpIHtcbiAgICByZXR1cm4gYXNzZXJ0RW5hYmxlZCh0aGlzLmRldGVjdEVuZ2xpc2hBdWN0aW9ucygpLCBGRUFUVVJFX0VOR0xJU0hfQVVDVElPTlMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9mZmVyc1xuICAgKiBAcmVtYXJrcyBNYWtlIGFuZCBtYW5hZ2Ugb2ZmZXJzLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIERhdGEgb2YgdGhlIG9mZmVyIHlvdSB3YW50IHRvIG1ha2VcbiAgICogY29uc3Qgb2ZmZXIgPSB7XG4gICAqICAgLy8gYWRkcmVzcyBvZiB0aGUgY29udHJhY3QgdGhlIGFzc2V0IHlvdSB3YW50IHRvIG1ha2UgYW4gb2ZmZXIgZm9yXG4gICAqICAgYXNzZXRDb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAvLyB0b2tlbiBJRCBvZiB0aGUgYXNzZXQgeW91IHdhbnQgdG8gYnV5XG4gICAqICAgdG9rZW5JZDogXCIwXCIsXG4gICAqICAgLy8gaG93IG1hbnkgb2YgdGhlIGFzc2V0IHlvdSB3YW50IHRvIGJ1eVxuICAgKiAgIHF1YW50aXR5OiAxLFxuICAgKiAgIC8vIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRoYXQgeW91IG9mZmVyIHRvIHBheSBpblxuICAgKiAgIGN1cnJlbmN5Q29udHJhY3RBZGRyZXNzOiBOQVRJVkVfVE9LRU5fQUREUkVTUyxcbiAgICogICAvLyBUb3RhbCBwcmljZSB5b3Ugb2ZmZXIgdG8gcGF5IGZvciB0aGUgbWVudGlvbmVkIHRva2VuKHMpXG4gICAqICAgdG90YWxQcmljZTogXCIxLjVcIixcbiAgICogICAvLyBPZmZlciB2YWxpZCB1bnRpbFxuICAgKiAgIGVuZFRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5tYWtlT2ZmZXIob2ZmZXIpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgaWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBuZXdseSBjcmVhdGVkIG9mZmVyXG4gICAqXG4gICAqIC8vIEFuZCBvbiB0aGUgc2VsbGVyJ3Mgc2lkZTpcbiAgICogLy8gVGhlIElEIG9mIHRoZSBvZmZlciB5b3Ugd2FudCB0byBhY2NlcHRcbiAgICogY29uc3Qgb2ZmZXJJZCA9IDA7XG4gICAqIGF3YWl0IGNvbnRyYWN0Lm9mZmVycy5hY2NlcHRPZmZlcihvZmZlcklkKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQgb2ZmZXJzKCkge1xuICAgIHJldHVybiBhc3NlcnRFbmFibGVkKHRoaXMuZGV0ZWN0T2ZmZXJzKCksIEZFQVRVUkVfT0ZGRVJTKTtcbiAgfVxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtRmVlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jaGFpbklkXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIE1hcmtldHBsYWNlQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBNYXJrZXRwbGFjZVYzLmNvbnRyYWN0Um9sZXMpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqXG4gICAqIEZFQVRVUkUgREVURUNUSU9OXG4gICAqICoqKioqKioqKioqKioqKioqKioqL1xuXG4gIGRldGVjdERpcmVjdExpc3RpbmdzKCkge1xuICAgIGlmIChkZXRlY3RDb250cmFjdEZlYXR1cmUodGhpcy5jb250cmFjdFdyYXBwZXIsIFwiRGlyZWN0TGlzdGluZ3NcIikpIHtcbiAgICAgIHJldHVybiBuZXcgTWFya2V0cGxhY2VWM0RpcmVjdExpc3RpbmdzKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGRldGVjdEVuZ2xpc2hBdWN0aW9ucygpIHtcbiAgICBpZiAoZGV0ZWN0Q29udHJhY3RGZWF0dXJlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBcIkVuZ2xpc2hBdWN0aW9uc1wiKSkge1xuICAgICAgcmV0dXJuIG5ldyBNYXJrZXRwbGFjZVYzRW5nbGlzaEF1Y3Rpb25zKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGRldGVjdE9mZmVycygpIHtcbiAgICBpZiAoZGV0ZWN0Q29udHJhY3RGZWF0dXJlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBcIk9mZmVyc1wiKSkge1xuICAgICAgcmV0dXJuIG5ldyBNYXJrZXRwbGFjZVYzT2ZmZXJzKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoTWFya2V0cGxhY2VWMywgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibGlzdGVyXCIsIFwiYXNzZXRcIl0pO1xuXG5leHBvcnQgeyBNYXJrZXRwbGFjZVYzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=