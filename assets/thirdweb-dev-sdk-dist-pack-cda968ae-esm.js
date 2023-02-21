"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_pack-cda968ae_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/pack-cda968ae.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/pack-cda968ae.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pack": () => (/* binding */ Pack)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ERC20_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPackVRFDirect_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! zod */ "./node_modules/zod/lib/index.mjs");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC165.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC165.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155.json");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC20_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDrop_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDrop.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDrop.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC20_V2_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase_V1_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC20_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMulticall_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMulticall.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMulticall.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC20_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC721_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IClaimableERC721_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDelayedReveal_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC721_V3_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Enumerable_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Supply_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ILazyMint_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ILazyMint.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC721_json__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC721_json__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC721_V1_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_LazyMintWithTier_json__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IBurnableERC1155_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IClaimableERC1155_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDrop1155_json__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDrop1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropERC1155_V2_json__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase1155_json__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDropSinglePhase1155_V1_json__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155Enumerable_json__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IMintableERC1155_json__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ISignatureMintERC1155_json__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ERC2771Context_json__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC2771Context.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IAppURI_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IAppURI.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IAppURI.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IContractMetadata_json__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDirectListings_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDirectListings.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IEnglishAuctions_json__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IOffers_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IOffers.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IOffers.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPermissions_json__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPermissions.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPermissions.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPermissionsEnumerable_json__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPlatformFee_json__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IPrimarySale_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IRouter_json__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IRouter.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IRouter.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IRoyalty_json__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IRoyalty.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Ownable_json__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Ownable.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Ownable.json");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Forwarder_json__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Forwarder.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Forwarder.json");
/* harmony import */ var _thirdweb_dev_storage__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @thirdweb-dev/storage */ "./node_modules/@thirdweb-dev/storage/dist/thirdweb-dev-storage.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20Metadata_json__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_Router_json__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/Router.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/Router.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IThirdwebContract_json__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! merkletreejs */ "./node_modules/merkletreejs/dist/index.js");
/* harmony import */ var merkletreejs__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(merkletreejs__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721Metadata_json__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155Metadata_json__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IDelayedRevealDeprecated_json__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWFactory_json__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWFactory.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWFactory.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWRegistry_json__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWRegistry.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_ContractPublisher_json__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWMultichainRegistryLogic_json__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_TWMultichainRegistryRouter_json__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_66__);










































































/**
 * @internal
 */
const CommonWrappableSchema = zod__WEBPACK_IMPORTED_MODULE_67__.z.object({
  contractAddress: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ad
});

/**
 * @internal
 */
const ERC20WrappableSchema = CommonWrappableSchema.extend({
  quantity: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__.A
});

/**
 * @internal
 */
const ERC721WrappableSchema = CommonWrappableSchema.extend({
  tokenId: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab
});

/**
 * @internal
 */
const ERC1155WrappableSchema = CommonWrappableSchema.extend({
  tokenId: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab,
  quantity: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab
});

/**
 * @internal
 */
const ERC20RewardSchema = ERC20WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__.A
});

/**
 * @internal
 */
const ERC721RewardSchema = ERC721WrappableSchema;

/**
 * @internal
 */
const ERC1155RewardSchema = ERC1155WrappableSchema.omit({
  quantity: true
}).extend({
  quantityPerReward: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab
});

/**
 * @internal
 */
const ERC20RewardContentsSchema = ERC20RewardSchema.extend({
  totalRewards: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab["default"]("1")
});

/**
 * @internal
 */
const ERC721RewardContentsSchema = ERC721RewardSchema;

/**
 * @internal
 */
const ERC1155RewardContentsSchema = ERC1155RewardSchema.extend({
  totalRewards: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab["default"]("1")
});

/**
 * @internal
 */
zod__WEBPACK_IMPORTED_MODULE_67__.z.object({
  erc20Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC20RewardSchema).default([]),
  erc721Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC721RewardSchema).default([]),
  erc1155Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC1155RewardSchema).default([])
});

/**
 * @internal
 */
const PackRewardsOutputSchema = zod__WEBPACK_IMPORTED_MODULE_67__.z.object({
  erc20Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC20RewardContentsSchema).default([]),
  erc721Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC721RewardContentsSchema).default([]),
  erc1155Rewards: zod__WEBPACK_IMPORTED_MODULE_67__.z.array(ERC1155RewardContentsSchema).default([])
});

/**
 * @internal
 */
const PackMetadataInputSchema = PackRewardsOutputSchema.extend({
  packMetadata: _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__.N,
  rewardsPerPack: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ab["default"]("1"),
  openStartTime: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ae["default"](new Date())
});

/**
 * @public
 */

class PackVRF {
  constructor(network, address, storage, options, chainId) {
    let contractWrapper = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cK(network, address, _thirdweb_dev_contracts_js_dist_abis_IPackVRFDirect_json__WEBPACK_IMPORTED_MODULE_1__, options);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "featureName", _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.d3.name);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "chainId", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "events", void 0);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.chainId = chainId;
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aV(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /**
   * Open a pack using Chainlink VRFs random number generation
   * This will return a transaction result with the requestId of the open request, NOT the contents of the pack
   * To get the contents of the pack, you must call claimRewards once the VRF request has been fulfilled
   * You can use the canClaimRewards method to check if the VRF request has been fulfilled
   * @param tokenId
   * @param amount
   * @returns
   */
  async open(tokenId) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    const receipt = await this.contractWrapper.sendTransaction("openPack", [tokenId, amount], {
      // Higher gas limit for opening packs
      gasLimit: 500000
    });
    let id = ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(0);
    try {
      const event = this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
      id = event[0].args.requestId;
    } catch (e) {}
    return {
      receipt,
      id
    };
  }

  /**
   * Claim the rewards from a pack that has been opened
   * This will return the contents of the pack
   * Make sure to check if the VRF request has been fulfilled using canClaimRewards() before calling this method
   * @returns the random rewards from opening a pack
   */
  async claimRewards() {
    const receipt = await this.contractWrapper.sendTransaction("claimRewards", [], {
      // Higher gas limit for opening packs
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
    if (event.length === 0) {
      throw new Error("PackOpened event not found");
    }
    const rewards = event[0].args.rewardUnitsDistributed;
    return this.parseRewards(rewards);
  }
  async parseRewards(rewards) {
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (const reward of rewards) {
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.b7)(this.contractWrapper.getProvider(), reward.assetContract);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: ethers__WEBPACK_IMPORTED_MODULE_71__.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: reward.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }

  /**
   * Setup a listener that will be called everytime a pack is opened in this contract
   * @param callback the listener to call when a pack is opened
   * @returns a unsubscribe function to cleanup the listener
   */
  async addPackOpenEventListener(callback) {
    return this.events.addEventListener("PackOpened", async event => {
      callback(event.data.packId.toString(), event.data.opener, await this.parseRewards(event.data.rewardUnitsDistributed));
    });
  }

  /**
   * Check if the connected address can claim rewards after opening a pack
   * @param claimerAddress Optional: the address to check if they can claim rewards, defaults to the connected address
   * @returns whether the connected address can claim rewards after opening a pack
   */
  async canClaimRewards(claimerAddress) {
    const address = claimerAddress || (await this.contractWrapper.getSignerAddress());
    return await this.contractWrapper.readContract.canClaimRewards(address);
  }

  /**
   * Open a pack and claim the rewards in one transaction.
   * This function will only start the flow of opening a pack, the rewards will be granted automatically to the connected address after VRF request is fulfilled
   * @param packId The id of the pack to open
   * @param amount Optional: the amount of packs to open, defaults to 1
   * @param gasLimit Optional: the gas limit to use for the VRF callback transaction, defaults to 500000
   * @returns
   */
  async openAndClaim(packId) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let gasLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500000;
    const receipt = await this.contractWrapper.sendTransaction("openPackAndClaimRewards", [packId, amount, gasLimit], {
      // Higher gas limit for opening packs
      gasLimit: ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(500000)
    });
    let id = ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(0);
    try {
      const event = this.contractWrapper.parseLogs("PackOpenRequested", receipt?.logs);
      id = event[0].args.requestId;
    } catch (e) {}
    return {
      receipt,
      id
    };
  }

  /**
   * Get the balance of LINK in the contract
   * @returns the balance of LINK in the contract
   */
  async getLinkBalance() {
    return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address);
  }

  /**
   * Transfer LINK to this contract
   * @param amount the amount of LINK to transfer to the contract
   */
  async transferLink(amount) {
    await this.getLinkContract().transfer(this.contractWrapper.readContract.address, amount);
  }
  getLinkContract() {
    const linkAddress = _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cf[this.chainId];
    if (!linkAddress) {
      throw new Error(`No LINK token address found for chainId ${this.chainId}`);
    }
    const contract = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cK(this.contractWrapper.getSignerOrProvider(), linkAddress, _thirdweb_dev_contracts_js_dist_abis_ERC20_json__WEBPACK_IMPORTED_MODULE_0__, this.contractWrapper.options);
    return new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.as(contract, this.storage, this.chainId);
  }
}

/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "pack");
 * ```
 *
 * @public
 */
class Pack extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aQ {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per pack
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular pack
   * contract.royalties.setTokenRoyaltyInfo(packId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * @internal
   */

  /**
   * If enabled in the contract, use the Chainlink VRF functionality to open packs
   */
  get vrf() {
    return (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.bX)(this._vrf, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.d3);
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cK(network, address, abi, options.gasless && "openzeppelin" in options.gasless ? {
      ...options,
      gasless: {
        openzeppelin: {
          ...options.gasless.openzeppelin,
          useEOAForwarder: true
        }
      }
    } : options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "erc1155", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "owner", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(this, "_vrf", void 0);
    this.abi = abi;
    this.erc1155 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aJ(this.contractWrapper, this.storage, chainId);
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.d4, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.al(this.contractWrapper, Pack.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.am(this.contractWrapper, this.metadata);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aV(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aW(this.contractWrapper);
    this.owner = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.aZ(this.contractWrapper);
    this._vrf = this.detectVrf();
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
    this._vrf?.onNetworkUpdated(network);
  }
  getAddress() {
    return this.contractWrapper.readContract.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a single Pack
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const pack = await contract.get(0);
   * console.log(packs;
   * ```
   */
  async get(tokenId) {
    return this.erc1155.get(tokenId);
  }

  /**
   * Get All Packs
   *
   * @remarks Get all the data associated with every pack in this contract.
   *
   * By default, returns the first 100 packs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const packs = await contract.getAll();
   * console.log(packs;
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The pack metadata for all packs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

  /**
   * Get Owned Packs
   *
   * @remarks Get all the data associated with the packs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the packs of
   * const address = "{{wallet_address}}";
   * const packss = await contract.getOwned(address);
   * ```
   *
   * @returns The pack metadata for all the owned packs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of packs created
   * @returns the total number of packs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }

  /**
   * Get whether users can transfer packs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.bA)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_72__.AddressZero);
    return !anyoneCanTransfer;
  }

  /**
   * Get Pack Contents
   * @remarks Get the rewards contained inside a pack.
   *
   * @param packId - The id of the pack to get the contents of.
   * @returns - The contents of the pack.
   *
   * @example
   * ```javascript
   * const packId = 0;
   * const contents = await contract.getPackContents(packId);
   * console.log(contents.erc20Rewards);
   * console.log(contents.erc721Rewards);
   * console.log(contents.erc1155Rewards);
   * ```
   */
  async getPackContents(packId) {
    const {
      contents,
      perUnitAmounts
    } = await this.contractWrapper.readContract.getPackContents(packId);
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (let i = 0; i < contents.length; i++) {
      const reward = contents[i];
      const amount = perUnitAmounts[i];
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.b7)(this.contractWrapper.getProvider(), reward.assetContract);
            const rewardAmount = ethers__WEBPACK_IMPORTED_MODULE_71__.formatUnits(reward.totalAmount, tokenMetadata.decimals);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: amount.toString(),
              totalRewards: ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(rewardAmount).div(amount).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: amount.toString(),
              totalRewards: ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(reward.totalAmount).div(amount).toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Pack
   * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
   * @remarks See {@link Pack.createTo}
   *
   * @param metadataWithRewards - the metadata and rewards to include in the pack
   * @example
   * ```javascript
   * const pack = {
   *   // The metadata for the pack NFT itself
   *   packMetadata: {
   *     name: "My Pack",
   *     description: "This is a new pack",
   *     image: "ipfs://...",
   *   },
   *   // ERC20 rewards to be included in the pack
   *   erc20Rewards: [
   *     {
   *       assetContract: "0x...",
   *       quantityPerReward: 5,
   *       quantity: 100,
   *       totalRewards: 20,
   *     }
   *   ],
   *   // ERC721 rewards to be included in the pack
   *   erc721Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *     }
   *   ],
   *   // ERC1155 rewards to be included in the pack
   *   erc1155Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *       quantityPerReward: 1,
   *       totalRewards: 100,
   *     }
   *   ],
   *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
   *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
   * }
   *
   * const tx = await contract.create(pack);
   * ```
   */
  async create(metadataWithRewards) {
    const signerAddress = await this.contractWrapper.getSignerAddress();
    return this.createTo(signerAddress, metadataWithRewards);
  }

  /**
   * Add Pack Contents
   * @remarks Add contents to an existing pack.
   * @remarks See {@link Pack.addPackContents}
   *
   * @param packId - token Id of the pack to add contents to
   * @param packContents - the rewards to include in the pack
   * @example
   * ```javascript
   * const packContents = {
   *   // ERC20 rewards to be included in the pack
   *   erc20Rewards: [
   *     {
   *       assetContract: "0x...",
   *       quantityPerReward: 5,
   *       quantity: 100,
   *       totalRewards: 20,
   *     }
   *   ],
   *   // ERC721 rewards to be included in the pack
   *   erc721Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *     }
   *   ],
   *   // ERC1155 rewards to be included in the pack
   *   erc1155Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *       quantityPerReward: 1,
   *       totalRewards: 100,
   *     }
   *   ],
   * }
   *
   * const tx = await contract.addPackContents(packId, packContents);
   * ```
   */
  async addPackContents(packId, packContents) {
    const signerAddress = await this.contractWrapper.getSignerAddress();
    const parsedContents = PackRewardsOutputSchema.parse(packContents);
    const {
      contents,
      numOfRewardUnits
    } = await this.toPackContentArgs(parsedContents);
    const receipt = await this.contractWrapper.sendTransaction("addPackContents", [packId, contents, numOfRewardUnits, signerAddress]);
    const event = this.contractWrapper.parseLogs("PackUpdated", receipt?.logs);
    if (event.length === 0) {
      throw new Error("PackUpdated event not found");
    }
    const id = event[0].args.packId;
    return {
      id: id,
      receipt,
      data: () => this.erc1155.get(id)
    };
  }

  /**
   * Create Pack To Wallet
   * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
   *
   * @param to - the address to mint the pack to
   * @param metadataWithRewards - the metadata and rewards to include in the pack
   *
   * @example
   * ```javascript
   * const pack = {
   *   // The metadata for the pack NFT itself
   *   packMetadata: {
   *     name: "My Pack",
   *     description: "This is a new pack",
   *     image: "ipfs://...",
   *   },
   *   // ERC20 rewards to be included in the pack
   *   erc20Rewards: [
   *     {
   *       assetContract: "0x...",
   *       quantityPerReward: 5,
   *       quantity: 100,
   *       totalRewards: 20,
   *     }
   *   ],
   *   // ERC721 rewards to be included in the pack
   *   erc721Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *     }
   *   ],
   *   // ERC1155 rewards to be included in the pack
   *   erc1155Rewards: [
   *     {
   *       assetContract: "0x...",
   *       tokenId: 0,
   *       quantityPerReward: 1,
   *       totalRewards: 100,
   *     }
   *   ],
   *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
   *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
   * }
   *
   * const tx = await contract.createTo("0x...", pack);
   * ```
   */
  async createTo(to, metadataWithRewards) {
    const uri = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.c_)(metadataWithRewards.packMetadata, this.storage);
    const parsedMetadata = PackMetadataInputSchema.parse(metadataWithRewards);
    const {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    } = parsedMetadata;
    const rewardsData = {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
    const {
      contents,
      numOfRewardUnits
    } = await this.toPackContentArgs(rewardsData);
    const receipt = await this.contractWrapper.sendTransaction("createPack", [contents, numOfRewardUnits, uri, parsedMetadata.openStartTime, parsedMetadata.rewardsPerPack, to]);
    const event = this.contractWrapper.parseLogs("PackCreated", receipt?.logs);
    if (event.length === 0) {
      throw new Error("PackCreated event not found");
    }
    const packId = event[0].args.packId;
    return {
      id: packId,
      receipt,
      data: () => this.erc1155.get(packId)
    };
  }

  /**
   * Open Pack
   *
   * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
   * the contained assets will be transferred to the opening users wallet.
   *
   * @param tokenId - the token ID of the pack you want to open
   * @param amount - the amount of packs you want to open
   *
   * @example
   * ```javascript
   * const tokenId = 0
   * const amount = 1
   * const tx = await contract.open(tokenId, amount);
   * ```
   */
  async open(tokenId) {
    let amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (this._vrf) {
      throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");
    }
    const receipt = await this.contractWrapper.sendTransaction("openPack", [tokenId, amount], {
      // Higher gas limit for opening packs
      gasLimit: 500000
    });
    const event = this.contractWrapper.parseLogs("PackOpened", receipt?.logs);
    if (event.length === 0) {
      throw new Error("PackOpened event not found");
    }
    const rewards = event[0].args.rewardUnitsDistributed;
    const erc20Rewards = [];
    const erc721Rewards = [];
    const erc1155Rewards = [];
    for (const reward of rewards) {
      switch (reward.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.b7)(this.contractWrapper.getProvider(), reward.assetContract);
            erc20Rewards.push({
              contractAddress: reward.assetContract,
              quantityPerReward: ethers__WEBPACK_IMPORTED_MODULE_71__.formatUnits(reward.totalAmount, tokenMetadata.decimals).toString()
            });
            break;
          }
        case 1:
          {
            erc721Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString()
            });
            break;
          }
        case 2:
          {
            erc1155Rewards.push({
              contractAddress: reward.assetContract,
              tokenId: reward.tokenId.toString(),
              quantityPerReward: reward.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    };
  }

  /** *****************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toPackContentArgs(metadataWithRewards) {
    const contents = [];
    const numOfRewardUnits = [];
    const {
      erc20Rewards,
      erc721Rewards,
      erc1155Rewards
    } = metadataWithRewards;
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    for (const erc20 of erc20Rewards) {
      const normalizedQuantity = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.b8)(provider, erc20.quantityPerReward, erc20.contractAddress);
      // Multiply the quantity of one reward by the number of rewards
      const totalQuantity = normalizedQuantity.mul(erc20.totalRewards);
      const hasAllowance = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.c$)(this.contractWrapper, erc20.contractAddress, totalQuantity);
      if (!hasAllowance) {
        throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${totalQuantity});\n\n`);
      }
      numOfRewardUnits.push(erc20.totalRewards);
      contents.push({
        assetContract: erc20.contractAddress,
        tokenType: 0,
        totalAmount: totalQuantity,
        tokenId: 0
      });
    }
    for (const erc721 of erc721Rewards) {
      const isApproved = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cW)(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
      }
      numOfRewardUnits.push("1");
      contents.push({
        assetContract: erc721.contractAddress,
        tokenType: 1,
        totalAmount: 1,
        tokenId: erc721.tokenId
      });
    }
    for (const erc1155 of erc1155Rewards) {
      const isApproved = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.cW)(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
      if (!isApproved) {
        throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
      }
      numOfRewardUnits.push(erc1155.totalRewards);
      contents.push({
        assetContract: erc1155.contractAddress,
        tokenType: 2,
        totalAmount: ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(erc1155.quantityPerReward).mul(ethers__WEBPACK_IMPORTED_MODULE_70__.BigNumber.from(erc1155.totalRewards)),
        tokenId: erc1155.tokenId
      });
    }
    return {
      contents,
      numOfRewardUnits
    };
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
  detectVrf() {
    if ((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_68__.bY)(this.contractWrapper, "PackVRF")) {
      return new PackVRF(this.contractWrapper.getSignerOrProvider(), this.contractWrapper.readContract.address, this.storage, this.contractWrapper.options, this.chainId);
    }
    return undefined;
  }
}
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_69__._)(Pack, "contractRoles", ["admin", "minter", "asset", "transfer"]);




/***/ }),

/***/ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json":
/*!**********************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/contracts-js/dist/abis/ERC20.json ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXBhY2stY2RhOTY4YWUtZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0g7QUFDd2lCO0FBQ25sQjtBQUNZO0FBQ3hDO0FBQ25CO0FBQ1Q7QUFDNEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNRO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDSztBQUNVO0FBQ1Y7QUFDQTtBQUNMO0FBQ0M7QUFDRDtBQUN0QztBQUNTO0FBQ1A7QUFDc0M7QUFDOUI7QUFDbUM7QUFDUjtBQUNXO0FBQy9DO0FBQ0c7QUFDWDtBQUNxRDtBQUNDO0FBQ1E7QUFDZjtBQUNDO0FBQ087QUFDUTtBQUNDO0FBQ2hFOztBQUVkO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBUTtBQUN0QyxtQkFBbUIsbUVBQWE7QUFDaEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQVk7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUVBQWtCO0FBQzdCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1FQUFrQjtBQUM3QixZQUFZLG1FQUFrQjtBQUM5QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCLDREQUFZO0FBQ2pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1RUFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVFQUFxQjtBQUM3RDtBQUNBO0FBQ0EsaUNBQWlDLGdEQUF3QjtBQUN6RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVFQUFtQjtBQUMxRDtBQUNBO0FBQ0EsaUNBQWlDLHVFQUFpQjtBQUNsRDtBQUNBLDhEQUE4RCxzQkFBc0IsK0pBQStKLHNCQUFzQixtQkFBbUIsa0JBQWtCLEtBQUssY0FBYyxFQUFFO0FBQ25VO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwrQkFBK0IsdUVBQTBCO0FBQ3pEO0FBQ0EseUNBQXlDLGVBQWUsMkJBQTJCLHVCQUF1QixvSkFBb0osdUJBQXVCLDBCQUEwQixrQkFBa0IsS0FBSyxlQUFlLEVBQUU7QUFDdlY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLCtCQUErQix1RUFBMEI7QUFDekQ7QUFDQSwwQ0FBMEMsZ0JBQWdCLDJCQUEyQix3QkFBd0IsOElBQThJLHdCQUF3Qix3QkFBd0Isa0JBQWtCLFNBQVM7QUFDdFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBYyxnQ0FBZ0MsbURBQWM7QUFDakY7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZTs7QUFFQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktdGhpcmR3ZWItdGhlbWUvLi9ub2RlX21vZHVsZXMvQHRoaXJkd2ViLWRldi9zZGsvZGlzdC9wYWNrLWNkYTk2OGFlLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBIGFzIEFtb3VudFNjaGVtYSwgTiBhcyBORlRJbnB1dE9yVXJpU2NoZW1hLCBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtZGE4OGQyN2MuZXNtLmpzJztcbmltcG9ydCB7IGFkIGFzIEFkZHJlc3NTY2hlbWEsIGFiIGFzIEJpZ051bWJlcmlzaFNjaGVtYSwgYWUgYXMgUmF3RGF0ZVNjaGVtYSwgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBkMyBhcyBGRUFUVVJFX1BBQ0tfVlJGLCBhViBhcyBDb250cmFjdEV2ZW50cywgYjcgYXMgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhLCBjZiBhcyBMSU5LX1RPS0VOX0FERFJFU1MsIGFzIGFzIEVyYzIwLCBhUSBhcyBTdGFuZGFyZEVyYzExNTUsIGJYIGFzIGFzc2VydEVuYWJsZWQsIGFKIGFzIEVyYzExNTUsIGFrIGFzIENvbnRyYWN0TWV0YWRhdGEsIGQ0IGFzIFBhY2tDb250cmFjdFNjaGVtYSwgYWwgYXMgQ29udHJhY3RSb2xlcywgYW0gYXMgQ29udHJhY3RSb3lhbHR5LCBhaiBhcyBDb250cmFjdEVuY29kZXIsIGFVIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFaIGFzIENvbnRyYWN0T3duZXIsIGJBIGFzIGdldFJvbGVIYXNoLCBjXyBhcyB1cGxvYWRPckV4dHJhY3RVUkksIGI4IGFzIG5vcm1hbGl6ZVByaWNlVmFsdWUsIGMkIGFzIGhhc0VSQzIwQWxsb3dhbmNlLCBjVyBhcyBpc1Rva2VuQXBwcm92ZWRGb3JUcmFuc2ZlciwgYlkgYXMgZGV0ZWN0Q29udHJhY3RGZWF0dXJlIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IEVSQzIwQWJpIGZyb20gJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyMC5qc29uJztcbmltcG9ydCBJUGFja1ZSRkFiaSBmcm9tICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnYnM1OCc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IENvbW1vbldyYXBwYWJsZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29udHJhY3RBZGRyZXNzOiBBZGRyZXNzU2NoZW1hXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDMjBXcmFwcGFibGVTY2hlbWEgPSBDb21tb25XcmFwcGFibGVTY2hlbWEuZXh0ZW5kKHtcbiAgcXVhbnRpdHk6IEFtb3VudFNjaGVtYVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IEVSQzcyMVdyYXBwYWJsZVNjaGVtYSA9IENvbW1vbldyYXBwYWJsZVNjaGVtYS5leHRlbmQoe1xuICB0b2tlbklkOiBCaWdOdW1iZXJpc2hTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkMxMTU1V3JhcHBhYmxlU2NoZW1hID0gQ29tbW9uV3JhcHBhYmxlU2NoZW1hLmV4dGVuZCh7XG4gIHRva2VuSWQ6IEJpZ051bWJlcmlzaFNjaGVtYSxcbiAgcXVhbnRpdHk6IEJpZ051bWJlcmlzaFNjaGVtYVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IEVSQzIwUmV3YXJkU2NoZW1hID0gRVJDMjBXcmFwcGFibGVTY2hlbWEub21pdCh7XG4gIHF1YW50aXR5OiB0cnVlXG59KS5leHRlbmQoe1xuICBxdWFudGl0eVBlclJld2FyZDogQW1vdW50U2NoZW1hXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDNzIxUmV3YXJkU2NoZW1hID0gRVJDNzIxV3JhcHBhYmxlU2NoZW1hO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkMxMTU1UmV3YXJkU2NoZW1hID0gRVJDMTE1NVdyYXBwYWJsZVNjaGVtYS5vbWl0KHtcbiAgcXVhbnRpdHk6IHRydWVcbn0pLmV4dGVuZCh7XG4gIHF1YW50aXR5UGVyUmV3YXJkOiBCaWdOdW1iZXJpc2hTY2hlbWFcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkMyMFJld2FyZENvbnRlbnRzU2NoZW1hID0gRVJDMjBSZXdhcmRTY2hlbWEuZXh0ZW5kKHtcbiAgdG90YWxSZXdhcmRzOiBCaWdOdW1iZXJpc2hTY2hlbWEuZGVmYXVsdChcIjFcIilcbn0pO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBFUkM3MjFSZXdhcmRDb250ZW50c1NjaGVtYSA9IEVSQzcyMVJld2FyZFNjaGVtYTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgRVJDMTE1NVJld2FyZENvbnRlbnRzU2NoZW1hID0gRVJDMTE1NVJld2FyZFNjaGVtYS5leHRlbmQoe1xuICB0b3RhbFJld2FyZHM6IEJpZ051bWJlcmlzaFNjaGVtYS5kZWZhdWx0KFwiMVwiKVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbnoub2JqZWN0KHtcbiAgZXJjMjBSZXdhcmRzOiB6LmFycmF5KEVSQzIwUmV3YXJkU2NoZW1hKS5kZWZhdWx0KFtdKSxcbiAgZXJjNzIxUmV3YXJkczogei5hcnJheShFUkM3MjFSZXdhcmRTY2hlbWEpLmRlZmF1bHQoW10pLFxuICBlcmMxMTU1UmV3YXJkczogei5hcnJheShFUkMxMTU1UmV3YXJkU2NoZW1hKS5kZWZhdWx0KFtdKVxufSk7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IFBhY2tSZXdhcmRzT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBlcmMyMFJld2FyZHM6IHouYXJyYXkoRVJDMjBSZXdhcmRDb250ZW50c1NjaGVtYSkuZGVmYXVsdChbXSksXG4gIGVyYzcyMVJld2FyZHM6IHouYXJyYXkoRVJDNzIxUmV3YXJkQ29udGVudHNTY2hlbWEpLmRlZmF1bHQoW10pLFxuICBlcmMxMTU1UmV3YXJkczogei5hcnJheShFUkMxMTU1UmV3YXJkQ29udGVudHNTY2hlbWEpLmRlZmF1bHQoW10pXG59KTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgUGFja01ldGFkYXRhSW5wdXRTY2hlbWEgPSBQYWNrUmV3YXJkc091dHB1dFNjaGVtYS5leHRlbmQoe1xuICBwYWNrTWV0YWRhdGE6IE5GVElucHV0T3JVcmlTY2hlbWEsXG4gIHJld2FyZHNQZXJQYWNrOiBCaWdOdW1iZXJpc2hTY2hlbWEuZGVmYXVsdChcIjFcIiksXG4gIG9wZW5TdGFydFRpbWU6IFJhd0RhdGVTY2hlbWEuZGVmYXVsdChuZXcgRGF0ZSgpKVxufSk7XG5cbi8qKlxuICogQHB1YmxpY1xuICovXG5cbmNsYXNzIFBhY2tWUkYge1xuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlLCBvcHRpb25zLCBjaGFpbklkKSB7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBJUGFja1ZSRkFiaSwgb3B0aW9ucyk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZmVhdHVyZU5hbWVcIiwgRkVBVFVSRV9QQUNLX1ZSRi5uYW1lKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hhaW5JZFwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyID0gY29udHJhY3RXcmFwcGVyO1xuICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgdGhpcy5jaGFpbklkID0gY2hhaW5JZDtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgcGFjayB1c2luZyBDaGFpbmxpbmsgVlJGcyByYW5kb20gbnVtYmVyIGdlbmVyYXRpb25cbiAgICogVGhpcyB3aWxsIHJldHVybiBhIHRyYW5zYWN0aW9uIHJlc3VsdCB3aXRoIHRoZSByZXF1ZXN0SWQgb2YgdGhlIG9wZW4gcmVxdWVzdCwgTk9UIHRoZSBjb250ZW50cyBvZiB0aGUgcGFja1xuICAgKiBUbyBnZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWNrLCB5b3UgbXVzdCBjYWxsIGNsYWltUmV3YXJkcyBvbmNlIHRoZSBWUkYgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWRcbiAgICogWW91IGNhbiB1c2UgdGhlIGNhbkNsYWltUmV3YXJkcyBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIFZSRiByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZFxuICAgKiBAcGFyYW0gdG9rZW5JZFxuICAgKiBAcGFyYW0gYW1vdW50XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBvcGVuKHRva2VuSWQpIHtcbiAgICBsZXQgYW1vdW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJvcGVuUGFja1wiLCBbdG9rZW5JZCwgYW1vdW50XSwge1xuICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMFxuICAgIH0pO1xuICAgIGxldCBpZCA9IEJpZ051bWJlci5mcm9tKDApO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlBhY2tPcGVuUmVxdWVzdGVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgICAgaWQgPSBldmVudFswXS5hcmdzLnJlcXVlc3RJZDtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZWNlaXB0LFxuICAgICAgaWRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsYWltIHRoZSByZXdhcmRzIGZyb20gYSBwYWNrIHRoYXQgaGFzIGJlZW4gb3BlbmVkXG4gICAqIFRoaXMgd2lsbCByZXR1cm4gdGhlIGNvbnRlbnRzIG9mIHRoZSBwYWNrXG4gICAqIE1ha2Ugc3VyZSB0byBjaGVjayBpZiB0aGUgVlJGIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIHVzaW5nIGNhbkNsYWltUmV3YXJkcygpIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kXG4gICAqIEByZXR1cm5zIHRoZSByYW5kb20gcmV3YXJkcyBmcm9tIG9wZW5pbmcgYSBwYWNrXG4gICAqL1xuICBhc3luYyBjbGFpbVJld2FyZHMoKSB7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImNsYWltUmV3YXJkc1wiLCBbXSwge1xuICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMFxuICAgIH0pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiUGFja09wZW5lZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICBpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYWNrT3BlbmVkIGV2ZW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmV3YXJkcyA9IGV2ZW50WzBdLmFyZ3MucmV3YXJkVW5pdHNEaXN0cmlidXRlZDtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJld2FyZHMocmV3YXJkcyk7XG4gIH1cbiAgYXN5bmMgcGFyc2VSZXdhcmRzKHJld2FyZHMpIHtcbiAgICBjb25zdCBlcmMyMFJld2FyZHMgPSBbXTtcbiAgICBjb25zdCBlcmM3MjFSZXdhcmRzID0gW107XG4gICAgY29uc3QgZXJjMTE1NVJld2FyZHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJld2FyZCBvZiByZXdhcmRzKSB7XG4gICAgICBzd2l0Y2ggKHJld2FyZC50b2tlblR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCBmZXRjaEN1cnJlbmN5TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcmV3YXJkLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHJld2FyZC50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscykudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcmM3MjFSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVyYzExNTVSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogcmV3YXJkLnRvdGFsQW1vdW50LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBhIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBjYWxsZWQgZXZlcnl0aW1lIGEgcGFjayBpcyBvcGVuZWQgaW4gdGhpcyBjb250cmFjdFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGxpc3RlbmVyIHRvIGNhbGwgd2hlbiBhIHBhY2sgaXMgb3BlbmVkXG4gICAqIEByZXR1cm5zIGEgdW5zdWJzY3JpYmUgZnVuY3Rpb24gdG8gY2xlYW51cCB0aGUgbGlzdGVuZXJcbiAgICovXG4gIGFzeW5jIGFkZFBhY2tPcGVuRXZlbnRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmV2ZW50cy5hZGRFdmVudExpc3RlbmVyKFwiUGFja09wZW5lZFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICBjYWxsYmFjayhldmVudC5kYXRhLnBhY2tJZC50b1N0cmluZygpLCBldmVudC5kYXRhLm9wZW5lciwgYXdhaXQgdGhpcy5wYXJzZVJld2FyZHMoZXZlbnQuZGF0YS5yZXdhcmRVbml0c0Rpc3RyaWJ1dGVkKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGNvbm5lY3RlZCBhZGRyZXNzIGNhbiBjbGFpbSByZXdhcmRzIGFmdGVyIG9wZW5pbmcgYSBwYWNrXG4gICAqIEBwYXJhbSBjbGFpbWVyQWRkcmVzcyBPcHRpb25hbDogdGhlIGFkZHJlc3MgdG8gY2hlY2sgaWYgdGhleSBjYW4gY2xhaW0gcmV3YXJkcywgZGVmYXVsdHMgdG8gdGhlIGNvbm5lY3RlZCBhZGRyZXNzXG4gICAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGNvbm5lY3RlZCBhZGRyZXNzIGNhbiBjbGFpbSByZXdhcmRzIGFmdGVyIG9wZW5pbmcgYSBwYWNrXG4gICAqL1xuICBhc3luYyBjYW5DbGFpbVJld2FyZHMoY2xhaW1lckFkZHJlc3MpIHtcbiAgICBjb25zdCBhZGRyZXNzID0gY2xhaW1lckFkZHJlc3MgfHwgKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5jYW5DbGFpbVJld2FyZHMoYWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBhIHBhY2sgYW5kIGNsYWltIHRoZSByZXdhcmRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIG9ubHkgc3RhcnQgdGhlIGZsb3cgb2Ygb3BlbmluZyBhIHBhY2ssIHRoZSByZXdhcmRzIHdpbGwgYmUgZ3JhbnRlZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBjb25uZWN0ZWQgYWRkcmVzcyBhZnRlciBWUkYgcmVxdWVzdCBpcyBmdWxmaWxsZWRcbiAgICogQHBhcmFtIHBhY2tJZCBUaGUgaWQgb2YgdGhlIHBhY2sgdG8gb3BlblxuICAgKiBAcGFyYW0gYW1vdW50IE9wdGlvbmFsOiB0aGUgYW1vdW50IG9mIHBhY2tzIHRvIG9wZW4sIGRlZmF1bHRzIHRvIDFcbiAgICogQHBhcmFtIGdhc0xpbWl0IE9wdGlvbmFsOiB0aGUgZ2FzIGxpbWl0IHRvIHVzZSBmb3IgdGhlIFZSRiBjYWxsYmFjayB0cmFuc2FjdGlvbiwgZGVmYXVsdHMgdG8gNTAwMDAwXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBvcGVuQW5kQ2xhaW0ocGFja0lkKSB7XG4gICAgbGV0IGFtb3VudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgICBsZXQgZ2FzTGltaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDUwMDAwMDtcbiAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwib3BlblBhY2tBbmRDbGFpbVJld2FyZHNcIiwgW3BhY2tJZCwgYW1vdW50LCBnYXNMaW1pdF0sIHtcbiAgICAgIC8vIEhpZ2hlciBnYXMgbGltaXQgZm9yIG9wZW5pbmcgcGFja3NcbiAgICAgIGdhc0xpbWl0OiBCaWdOdW1iZXIuZnJvbSg1MDAwMDApXG4gICAgfSk7XG4gICAgbGV0IGlkID0gQmlnTnVtYmVyLmZyb20oMCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiUGFja09wZW5SZXF1ZXN0ZWRcIiwgcmVjZWlwdD8ubG9ncyk7XG4gICAgICBpZCA9IGV2ZW50WzBdLmFyZ3MucmVxdWVzdElkO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY2VpcHQsXG4gICAgICBpZFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBiYWxhbmNlIG9mIExJTksgaW4gdGhlIGNvbnRyYWN0XG4gICAqIEByZXR1cm5zIHRoZSBiYWxhbmNlIG9mIExJTksgaW4gdGhlIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBnZXRMaW5rQmFsYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMaW5rQ29udHJhY3QoKS5iYWxhbmNlT2YodGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVyIExJTksgdG8gdGhpcyBjb250cmFjdFxuICAgKiBAcGFyYW0gYW1vdW50IHRoZSBhbW91bnQgb2YgTElOSyB0byB0cmFuc2ZlciB0byB0aGUgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIHRyYW5zZmVyTGluayhhbW91bnQpIHtcbiAgICBhd2FpdCB0aGlzLmdldExpbmtDb250cmFjdCgpLnRyYW5zZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5hZGRyZXNzLCBhbW91bnQpO1xuICB9XG4gIGdldExpbmtDb250cmFjdCgpIHtcbiAgICBjb25zdCBsaW5rQWRkcmVzcyA9IExJTktfVE9LRU5fQUREUkVTU1t0aGlzLmNoYWluSWRdO1xuICAgIGlmICghbGlua0FkZHJlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gTElOSyB0b2tlbiBhZGRyZXNzIGZvdW5kIGZvciBjaGFpbklkICR7dGhpcy5jaGFpbklkfWApO1xuICAgIH1cbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdFdyYXBwZXIodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyT3JQcm92aWRlcigpLCBsaW5rQWRkcmVzcywgRVJDMjBBYmksIHRoaXMuY29udHJhY3RXcmFwcGVyLm9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgRXJjMjAoY29udHJhY3QsIHRoaXMuc3RvcmFnZSwgdGhpcy5jaGFpbklkKTtcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBsb290Ym94ZXMgb2YgTkZUcyB3aXRoIHJhcml0eSBiYXNlZCBvcGVuIG1lY2hhbmljcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJwYWNrXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBQYWNrIGV4dGVuZHMgU3RhbmRhcmRFcmMxMTU1IHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgcGFja1xuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciBwYWNrXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHBhY2tJZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogSWYgZW5hYmxlZCBpbiB0aGUgY29udHJhY3QsIHVzZSB0aGUgQ2hhaW5saW5rIFZSRiBmdW5jdGlvbmFsaXR5IHRvIG9wZW4gcGFja3NcbiAgICovXG4gIGdldCB2cmYoKSB7XG4gICAgcmV0dXJuIGFzc2VydEVuYWJsZWQodGhpcy5fdnJmLCBGRUFUVVJFX1BBQ0tfVlJGKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zLmdhc2xlc3MgJiYgXCJvcGVuemVwcGVsaW5cIiBpbiBvcHRpb25zLmdhc2xlc3MgPyB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZ2FzbGVzczoge1xuICAgICAgICBvcGVuemVwcGVsaW46IHtcbiAgICAgICAgICAuLi5vcHRpb25zLmdhc2xlc3Mub3BlbnplcHBlbGluLFxuICAgICAgICAgIHVzZUVPQUZvcndhcmRlcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVyYzExNTVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl92cmZcIiwgdm9pZCAwKTtcbiAgICB0aGlzLmFiaSA9IGFiaTtcbiAgICB0aGlzLmVyYzExNTUgPSBuZXcgRXJjMTE1NSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBjaGFpbklkKTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIFBhY2tDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIFBhY2suY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5yb3lhbHRpZXMgPSBuZXcgQ29udHJhY3RSb3lhbHR5KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLm93bmVyID0gbmV3IENvbnRyYWN0T3duZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuX3ZyZiA9IHRoaXMuZGV0ZWN0VnJmKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk5ldHdvcmtVcGRhdGVkKG5ldHdvcmspIHtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlci51cGRhdGVTaWduZXJPclByb3ZpZGVyKG5ldHdvcmspO1xuICAgIHRoaXMuX3ZyZj8ub25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBQYWNrXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhbGwgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGV2ZXJ5IHBhY2sgaW4gdGhpcyBjb250cmFjdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgcmV0dXJucyB0aGUgZmlyc3QgMTAwIHBhY2tzLCB1c2UgcXVlcnlQYXJhbXMgdG8gZmV0Y2ggbW9yZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBwYWNrID0gYXdhaXQgY29udHJhY3QuZ2V0KDApO1xuICAgKiBjb25zb2xlLmxvZyhwYWNrcztcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXQodG9rZW5JZCkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0KHRva2VuSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBbGwgUGFja3NcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IGFsbCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggZXZlcnkgcGFjayBpbiB0aGlzIGNvbnRyYWN0LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCByZXR1cm5zIHRoZSBmaXJzdCAxMDAgcGFja3MsIHVzZSBxdWVyeVBhcmFtcyB0byBmZXRjaCBtb3JlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHBhY2tzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsKCk7XG4gICAqIGNvbnNvbGUubG9nKHBhY2tzO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIC0gb3B0aW9uYWwgZmlsdGVyaW5nIHRvIG9ubHkgZmV0Y2ggYSBzdWJzZXQgb2YgcmVzdWx0cy5cbiAgICogQHJldHVybnMgVGhlIHBhY2sgbWV0YWRhdGEgZm9yIGFsbCBwYWNrcyBxdWVyaWVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsKHF1ZXJ5UGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5nZXRBbGwocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBPd25lZCBQYWNrc1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFja3Mgb3duZWQgYnkgYSBzcGVjaWZpYyB3YWxsZXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHRvIGdldCB0aGUgcGFja3Mgb2ZcbiAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IHBhY2tzcyA9IGF3YWl0IGNvbnRyYWN0LmdldE93bmVkKGFkZHJlc3MpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHJldHVybnMgVGhlIHBhY2sgbWV0YWRhdGEgZm9yIGFsbCB0aGUgb3duZWQgcGFja3MgaW4gdGhlIGNvbnRyYWN0LlxuICAgKi9cbiAgYXN5bmMgZ2V0T3duZWQod2FsbGV0QWRkcmVzcykge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0T3duZWQod2FsbGV0QWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2YgcGFja3MgY3JlYXRlZFxuICAgKiBAcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIHBhY2tzIG1pbnRlZCBpbiB0aGlzIGNvbnRyYWN0XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIGdldFRvdGFsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS50b3RhbENvdW50KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgY2FuIHRyYW5zZmVyIHBhY2tzIGZyb20gdGhpcyBjb250cmFjdFxuICAgKi9cbiAgYXN5bmMgaXNUcmFuc2ZlclJlc3RyaWN0ZWQoKSB7XG4gICAgY29uc3QgYW55b25lQ2FuVHJhbnNmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcInRyYW5zZmVyXCIpLCBldGhlcnMuY29uc3RhbnRzLkFkZHJlc3NaZXJvKTtcbiAgICByZXR1cm4gIWFueW9uZUNhblRyYW5zZmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBQYWNrIENvbnRlbnRzXG4gICAqIEByZW1hcmtzIEdldCB0aGUgcmV3YXJkcyBjb250YWluZWQgaW5zaWRlIGEgcGFjay5cbiAgICpcbiAgICogQHBhcmFtIHBhY2tJZCAtIFRoZSBpZCBvZiB0aGUgcGFjayB0byBnZXQgdGhlIGNvbnRlbnRzIG9mLlxuICAgKiBAcmV0dXJucyAtIFRoZSBjb250ZW50cyBvZiB0aGUgcGFjay5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBwYWNrSWQgPSAwO1xuICAgKiBjb25zdCBjb250ZW50cyA9IGF3YWl0IGNvbnRyYWN0LmdldFBhY2tDb250ZW50cyhwYWNrSWQpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmMyMFJld2FyZHMpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmM3MjFSZXdhcmRzKTtcbiAgICogY29uc29sZS5sb2coY29udGVudHMuZXJjMTE1NVJld2FyZHMpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGdldFBhY2tDb250ZW50cyhwYWNrSWQpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb250ZW50cyxcbiAgICAgIHBlclVuaXRBbW91bnRzXG4gICAgfSA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5nZXRQYWNrQ29udGVudHMocGFja0lkKTtcbiAgICBjb25zdCBlcmMyMFJld2FyZHMgPSBbXTtcbiAgICBjb25zdCBlcmM3MjFSZXdhcmRzID0gW107XG4gICAgY29uc3QgZXJjMTE1NVJld2FyZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByZXdhcmQgPSBjb250ZW50c1tpXTtcbiAgICAgIGNvbnN0IGFtb3VudCA9IHBlclVuaXRBbW91bnRzW2ldO1xuICAgICAgc3dpdGNoIChyZXdhcmQudG9rZW5UeXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHJld2FyZC5hc3NldENvbnRyYWN0KTtcbiAgICAgICAgICAgIGNvbnN0IHJld2FyZEFtb3VudCA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhyZXdhcmQudG90YWxBbW91bnQsIHRva2VuTWV0YWRhdGEuZGVjaW1hbHMpO1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHRvdGFsUmV3YXJkczogQmlnTnVtYmVyLmZyb20ocmV3YXJkQW1vdW50KS5kaXYoYW1vdW50KS50b1N0cmluZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVyYzcyMVJld2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmV3YXJkLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHJld2FyZC50b2tlbklkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjMTE1NVJld2FyZHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogcmV3YXJkLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHJld2FyZC50b2tlbklkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgdG90YWxSZXdhcmRzOiBCaWdOdW1iZXIuZnJvbShyZXdhcmQudG90YWxBbW91bnQpLmRpdihhbW91bnQpLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgUGFja1xuICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBuZXcgcGFjayB3aXRoIHRoZSBnaXZlbiBtZXRhZGF0YSBhbmQgcmV3YXJkcyBhbmQgbWludCBpdCB0byB0aGUgY29ubmVjdGVkIHdhbGxldC5cbiAgICogQHJlbWFya3MgU2VlIHtAbGluayBQYWNrLmNyZWF0ZVRvfVxuICAgKlxuICAgKiBAcGFyYW0gbWV0YWRhdGFXaXRoUmV3YXJkcyAtIHRoZSBtZXRhZGF0YSBhbmQgcmV3YXJkcyB0byBpbmNsdWRlIGluIHRoZSBwYWNrXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcGFjayA9IHtcbiAgICogICAvLyBUaGUgbWV0YWRhdGEgZm9yIHRoZSBwYWNrIE5GVCBpdHNlbGZcbiAgICogICBwYWNrTWV0YWRhdGE6IHtcbiAgICogICAgIG5hbWU6IFwiTXkgUGFja1wiLFxuICAgKiAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIG5ldyBwYWNrXCIsXG4gICAqICAgICBpbWFnZTogXCJpcGZzOi8vLi4uXCIsXG4gICAqICAgfSxcbiAgICogICAvLyBFUkMyMCByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAqICAgZXJjMjBSZXdhcmRzOiBbXG4gICAqICAgICB7XG4gICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICogICAgICAgcXVhbnRpdHlQZXJSZXdhcmQ6IDUsXG4gICAqICAgICAgIHF1YW50aXR5OiAxMDAsXG4gICAqICAgICAgIHRvdGFsUmV3YXJkczogMjAsXG4gICAqICAgICB9XG4gICAqICAgXSxcbiAgICogICAvLyBFUkM3MjEgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgKiAgIGVyYzcyMVJld2FyZHM6IFtcbiAgICogICAgIHtcbiAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgKiAgICAgICB0b2tlbklkOiAwLFxuICAgKiAgICAgfVxuICAgKiAgIF0sXG4gICAqICAgLy8gRVJDMTE1NSByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAqICAgZXJjMTE1NVJld2FyZHM6IFtcbiAgICogICAgIHtcbiAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgKiAgICAgICB0b2tlbklkOiAwLFxuICAgKiAgICAgICBxdWFudGl0eVBlclJld2FyZDogMSxcbiAgICogICAgICAgdG90YWxSZXdhcmRzOiAxMDAsXG4gICAqICAgICB9XG4gICAqICAgXSxcbiAgICogICBvcGVuU3RhcnRUaW1lOiBuZXcgRGF0ZSgpLCAvLyB0aGUgZGF0ZSB0aGF0IHBhY2tzIGNhbiBzdGFydCB0byBiZSBvcGVuZWQsIGRlZmF1bHRzIHRvIG5vd1xuICAgKiAgIHJld2FyZHNQZXJQYWNrOiAxLCAvLyB0aGUgbnVtYmVyIG9mIHJld2FyZHMgaW4gZWFjaCBwYWNrLCBkZWZhdWx0cyB0byAxXG4gICAqIH1cbiAgICpcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jcmVhdGUocGFjayk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgY3JlYXRlKG1ldGFkYXRhV2l0aFJld2FyZHMpIHtcbiAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVRvKHNpZ25lckFkZHJlc3MsIG1ldGFkYXRhV2l0aFJld2FyZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBQYWNrIENvbnRlbnRzXG4gICAqIEByZW1hcmtzIEFkZCBjb250ZW50cyB0byBhbiBleGlzdGluZyBwYWNrLlxuICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIFBhY2suYWRkUGFja0NvbnRlbnRzfVxuICAgKlxuICAgKiBAcGFyYW0gcGFja0lkIC0gdG9rZW4gSWQgb2YgdGhlIHBhY2sgdG8gYWRkIGNvbnRlbnRzIHRvXG4gICAqIEBwYXJhbSBwYWNrQ29udGVudHMgLSB0aGUgcmV3YXJkcyB0byBpbmNsdWRlIGluIHRoZSBwYWNrXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcGFja0NvbnRlbnRzID0ge1xuICAgKiAgIC8vIEVSQzIwIHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICogICBlcmMyMFJld2FyZHM6IFtcbiAgICogICAgIHtcbiAgICogICAgICAgYXNzZXRDb250cmFjdDogXCIweC4uLlwiLFxuICAgKiAgICAgICBxdWFudGl0eVBlclJld2FyZDogNSxcbiAgICogICAgICAgcXVhbnRpdHk6IDEwMCxcbiAgICogICAgICAgdG90YWxSZXdhcmRzOiAyMCxcbiAgICogICAgIH1cbiAgICogICBdLFxuICAgKiAgIC8vIEVSQzcyMSByZXdhcmRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBwYWNrXG4gICAqICAgZXJjNzIxUmV3YXJkczogW1xuICAgKiAgICAge1xuICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAqICAgICAgIHRva2VuSWQ6IDAsXG4gICAqICAgICB9XG4gICAqICAgXSxcbiAgICogICAvLyBFUkMxMTU1IHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICogICBlcmMxMTU1UmV3YXJkczogW1xuICAgKiAgICAge1xuICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAqICAgICAgIHRva2VuSWQ6IDAsXG4gICAqICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiAxLFxuICAgKiAgICAgICB0b3RhbFJld2FyZHM6IDEwMCxcbiAgICogICAgIH1cbiAgICogICBdLFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuYWRkUGFja0NvbnRlbnRzKHBhY2tJZCwgcGFja0NvbnRlbnRzKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBhZGRQYWNrQ29udGVudHMocGFja0lkLCBwYWNrQ29udGVudHMpIHtcbiAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpO1xuICAgIGNvbnN0IHBhcnNlZENvbnRlbnRzID0gUGFja1Jld2FyZHNPdXRwdXRTY2hlbWEucGFyc2UocGFja0NvbnRlbnRzKTtcbiAgICBjb25zdCB7XG4gICAgICBjb250ZW50cyxcbiAgICAgIG51bU9mUmV3YXJkVW5pdHNcbiAgICB9ID0gYXdhaXQgdGhpcy50b1BhY2tDb250ZW50QXJncyhwYXJzZWRDb250ZW50cyk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImFkZFBhY2tDb250ZW50c1wiLCBbcGFja0lkLCBjb250ZW50cywgbnVtT2ZSZXdhcmRVbml0cywgc2lnbmVyQWRkcmVzc10pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiUGFja1VwZGF0ZWRcIiwgcmVjZWlwdD8ubG9ncyk7XG4gICAgaWYgKGV2ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFja1VwZGF0ZWQgZXZlbnQgbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGV2ZW50WzBdLmFyZ3MucGFja0lkO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogaWQsXG4gICAgICByZWNlaXB0LFxuICAgICAgZGF0YTogKCkgPT4gdGhpcy5lcmMxMTU1LmdldChpZClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBQYWNrIFRvIFdhbGxldFxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBuZXcgcGFjayB3aXRoIHRoZSBnaXZlbiBtZXRhZGF0YSBhbmQgcmV3YXJkcyBhbmQgbWludCBpdCB0byB0aGUgc3BlY2lmaWVkIGFkZHJlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB0byAtIHRoZSBhZGRyZXNzIHRvIG1pbnQgdGhlIHBhY2sgdG9cbiAgICogQHBhcmFtIG1ldGFkYXRhV2l0aFJld2FyZHMgLSB0aGUgbWV0YWRhdGEgYW5kIHJld2FyZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGFja1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHBhY2sgPSB7XG4gICAqICAgLy8gVGhlIG1ldGFkYXRhIGZvciB0aGUgcGFjayBORlQgaXRzZWxmXG4gICAqICAgcGFja01ldGFkYXRhOiB7XG4gICAqICAgICBuYW1lOiBcIk15IFBhY2tcIixcbiAgICogICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuZXcgcGFja1wiLFxuICAgKiAgICAgaW1hZ2U6IFwiaXBmczovLy4uLlwiLFxuICAgKiAgIH0sXG4gICAqICAgLy8gRVJDMjAgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgKiAgIGVyYzIwUmV3YXJkczogW1xuICAgKiAgICAge1xuICAgKiAgICAgICBhc3NldENvbnRyYWN0OiBcIjB4Li4uXCIsXG4gICAqICAgICAgIHF1YW50aXR5UGVyUmV3YXJkOiA1LFxuICAgKiAgICAgICBxdWFudGl0eTogMTAwLFxuICAgKiAgICAgICB0b3RhbFJld2FyZHM6IDIwLFxuICAgKiAgICAgfVxuICAgKiAgIF0sXG4gICAqICAgLy8gRVJDNzIxIHJld2FyZHMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIHBhY2tcbiAgICogICBlcmM3MjFSZXdhcmRzOiBbXG4gICAqICAgICB7XG4gICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICogICAgICAgdG9rZW5JZDogMCxcbiAgICogICAgIH1cbiAgICogICBdLFxuICAgKiAgIC8vIEVSQzExNTUgcmV3YXJkcyB0byBiZSBpbmNsdWRlZCBpbiB0aGUgcGFja1xuICAgKiAgIGVyYzExNTVSZXdhcmRzOiBbXG4gICAqICAgICB7XG4gICAqICAgICAgIGFzc2V0Q29udHJhY3Q6IFwiMHguLi5cIixcbiAgICogICAgICAgdG9rZW5JZDogMCxcbiAgICogICAgICAgcXVhbnRpdHlQZXJSZXdhcmQ6IDEsXG4gICAqICAgICAgIHRvdGFsUmV3YXJkczogMTAwLFxuICAgKiAgICAgfVxuICAgKiAgIF0sXG4gICAqICAgb3BlblN0YXJ0VGltZTogbmV3IERhdGUoKSwgLy8gdGhlIGRhdGUgdGhhdCBwYWNrcyBjYW4gc3RhcnQgdG8gYmUgb3BlbmVkLCBkZWZhdWx0cyB0byBub3dcbiAgICogICByZXdhcmRzUGVyUGFjazogMSwgLy8gdGhlIG51bWJlciBvZiByZXdhcmRzIGluIGVhY2ggcGFjaywgZGVmYXVsdHMgdG8gMVxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlVG8oXCIweC4uLlwiLCBwYWNrKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBjcmVhdGVUbyh0bywgbWV0YWRhdGFXaXRoUmV3YXJkcykge1xuICAgIGNvbnN0IHVyaSA9IGF3YWl0IHVwbG9hZE9yRXh0cmFjdFVSSShtZXRhZGF0YVdpdGhSZXdhcmRzLnBhY2tNZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICBjb25zdCBwYXJzZWRNZXRhZGF0YSA9IFBhY2tNZXRhZGF0YUlucHV0U2NoZW1hLnBhcnNlKG1ldGFkYXRhV2l0aFJld2FyZHMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGVyYzIwUmV3YXJkcyxcbiAgICAgIGVyYzcyMVJld2FyZHMsXG4gICAgICBlcmMxMTU1UmV3YXJkc1xuICAgIH0gPSBwYXJzZWRNZXRhZGF0YTtcbiAgICBjb25zdCByZXdhcmRzRGF0YSA9IHtcbiAgICAgIGVyYzIwUmV3YXJkcyxcbiAgICAgIGVyYzcyMVJld2FyZHMsXG4gICAgICBlcmMxMTU1UmV3YXJkc1xuICAgIH07XG4gICAgY29uc3Qge1xuICAgICAgY29udGVudHMsXG4gICAgICBudW1PZlJld2FyZFVuaXRzXG4gICAgfSA9IGF3YWl0IHRoaXMudG9QYWNrQ29udGVudEFyZ3MocmV3YXJkc0RhdGEpO1xuICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJjcmVhdGVQYWNrXCIsIFtjb250ZW50cywgbnVtT2ZSZXdhcmRVbml0cywgdXJpLCBwYXJzZWRNZXRhZGF0YS5vcGVuU3RhcnRUaW1lLCBwYXJzZWRNZXRhZGF0YS5yZXdhcmRzUGVyUGFjaywgdG9dKTtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlBhY2tDcmVhdGVkXCIsIHJlY2VpcHQ/LmxvZ3MpO1xuICAgIGlmIChldmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhY2tDcmVhdGVkIGV2ZW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcGFja0lkID0gZXZlbnRbMF0uYXJncy5wYWNrSWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBwYWNrSWQsXG4gICAgICByZWNlaXB0LFxuICAgICAgZGF0YTogKCkgPT4gdGhpcy5lcmMxMTU1LmdldChwYWNrSWQpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIFBhY2tcbiAgICpcbiAgICogQHJlbWFya3MgLSBPcGVuIGEgcGFjayB0byByZXZlYWwgdGhlIGNvbnRhaW5lZCByZXdhcmRzLiBUaGlzIHdpbGwgYnVybiB0aGUgc3BlY2lmaWVkIHBhY2sgYW5kXG4gICAqIHRoZSBjb250YWluZWQgYXNzZXRzIHdpbGwgYmUgdHJhbnNmZXJyZWQgdG8gdGhlIG9wZW5pbmcgdXNlcnMgd2FsbGV0LlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBJRCBvZiB0aGUgcGFjayB5b3Ugd2FudCB0byBvcGVuXG4gICAqIEBwYXJhbSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHBhY2tzIHlvdSB3YW50IHRvIG9wZW5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB0b2tlbklkID0gMFxuICAgKiBjb25zdCBhbW91bnQgPSAxXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3Qub3Blbih0b2tlbklkLCBhbW91bnQpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG9wZW4odG9rZW5JZCkge1xuICAgIGxldCBhbW91bnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gICAgaWYgKHRoaXMuX3ZyZikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBjb250cmFjdCBpcyB1c2luZyBDaGFpbmxpbmsgVlJGLCB1c2UgYGNvbnRyYWN0LnZyZi5vcGVuKClgIG9yIGBjb250cmFjdC52cmYub3BlbkFuZENsYWltKClgIGluc3RlYWRcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJvcGVuUGFja1wiLCBbdG9rZW5JZCwgYW1vdW50XSwge1xuICAgICAgLy8gSGlnaGVyIGdhcyBsaW1pdCBmb3Igb3BlbmluZyBwYWNrc1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMFxuICAgIH0pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiUGFja09wZW5lZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICBpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYWNrT3BlbmVkIGV2ZW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmV3YXJkcyA9IGV2ZW50WzBdLmFyZ3MucmV3YXJkVW5pdHNEaXN0cmlidXRlZDtcbiAgICBjb25zdCBlcmMyMFJld2FyZHMgPSBbXTtcbiAgICBjb25zdCBlcmM3MjFSZXdhcmRzID0gW107XG4gICAgY29uc3QgZXJjMTE1NVJld2FyZHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHJld2FyZCBvZiByZXdhcmRzKSB7XG4gICAgICBzd2l0Y2ggKHJld2FyZC50b2tlblR5cGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCBmZXRjaEN1cnJlbmN5TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgcmV3YXJkLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgZXJjMjBSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHJld2FyZC50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscykudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcmM3MjFSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVyYzExNTVSZXdhcmRzLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHJld2FyZC5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiByZXdhcmQudG9rZW5JZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICBxdWFudGl0eVBlclJld2FyZDogcmV3YXJkLnRvdGFsQW1vdW50LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBQUklWQVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBhc3luYyB0b1BhY2tDb250ZW50QXJncyhtZXRhZGF0YVdpdGhSZXdhcmRzKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBbXTtcbiAgICBjb25zdCBudW1PZlJld2FyZFVuaXRzID0gW107XG4gICAgY29uc3Qge1xuICAgICAgZXJjMjBSZXdhcmRzLFxuICAgICAgZXJjNzIxUmV3YXJkcyxcbiAgICAgIGVyYzExNTVSZXdhcmRzXG4gICAgfSA9IG1ldGFkYXRhV2l0aFJld2FyZHM7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRQcm92aWRlcigpO1xuICAgIGNvbnN0IG93bmVyID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpO1xuICAgIGZvciAoY29uc3QgZXJjMjAgb2YgZXJjMjBSZXdhcmRzKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkUXVhbnRpdHkgPSBhd2FpdCBub3JtYWxpemVQcmljZVZhbHVlKHByb3ZpZGVyLCBlcmMyMC5xdWFudGl0eVBlclJld2FyZCwgZXJjMjAuY29udHJhY3RBZGRyZXNzKTtcbiAgICAgIC8vIE11bHRpcGx5IHRoZSBxdWFudGl0eSBvZiBvbmUgcmV3YXJkIGJ5IHRoZSBudW1iZXIgb2YgcmV3YXJkc1xuICAgICAgY29uc3QgdG90YWxRdWFudGl0eSA9IG5vcm1hbGl6ZWRRdWFudGl0eS5tdWwoZXJjMjAudG90YWxSZXdhcmRzKTtcbiAgICAgIGNvbnN0IGhhc0FsbG93YW5jZSA9IGF3YWl0IGhhc0VSQzIwQWxsb3dhbmNlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBlcmMyMC5jb250cmFjdEFkZHJlc3MsIHRvdGFsUXVhbnRpdHkpO1xuICAgICAgaWYgKCFoYXNBbGxvd2FuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUkMyMCB0b2tlbiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzIwLmNvbnRyYWN0QWRkcmVzc31cIiBkb2VzIG5vdCBoYXZlIGVub3VnaCBhbGxvd2FuY2UgdG8gdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBzZXQgYWxsb3dhbmNlIHRvIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhlc2UgdG9rZW5zIGJ5IHJ1bm5pbmc6XFxuXFxuYXdhaXQgc2RrLmdldFRva2VuKFwiJHtlcmMyMC5jb250cmFjdEFkZHJlc3N9XCIpLnNldEFsbG93YW5jZShcIiR7dGhpcy5nZXRBZGRyZXNzKCl9XCIsICR7dG90YWxRdWFudGl0eX0pO1xcblxcbmApO1xuICAgICAgfVxuICAgICAgbnVtT2ZSZXdhcmRVbml0cy5wdXNoKGVyYzIwLnRvdGFsUmV3YXJkcyk7XG4gICAgICBjb250ZW50cy5wdXNoKHtcbiAgICAgICAgYXNzZXRDb250cmFjdDogZXJjMjAuY29udHJhY3RBZGRyZXNzLFxuICAgICAgICB0b2tlblR5cGU6IDAsXG4gICAgICAgIHRvdGFsQW1vdW50OiB0b3RhbFF1YW50aXR5LFxuICAgICAgICB0b2tlbklkOiAwXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlcmM3MjEgb2YgZXJjNzIxUmV3YXJkcykge1xuICAgICAgY29uc3QgaXNBcHByb3ZlZCA9IGF3YWl0IGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRoaXMuZ2V0QWRkcmVzcygpLCBlcmM3MjEuY29udHJhY3RBZGRyZXNzLCBlcmM3MjEudG9rZW5JZCwgb3duZXIpO1xuICAgICAgaWYgKCFpc0FwcHJvdmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJDNzIxIHRva2VuIFwiJHtlcmM3MjEudG9rZW5JZH1cIiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzcyMS5jb250cmFjdEFkZHJlc3N9XCIgaXMgbm90IGFwcHJvdmVkIGZvciB0cmFuc2Zlci5cXG5cXG5Zb3UgY2FuIGdpdmUgYXBwcm92YWwgdGhlIG11bHRpd3JhcCBjb250cmFjdCB0byB0cmFuc2ZlciB0aGlzIHRva2VuIGJ5IHJ1bm5pbmc6XFxuXFxuYXdhaXQgc2RrLmdldE5GVENvbGxlY3Rpb24oXCIke2VyYzcyMS5jb250cmFjdEFkZHJlc3N9XCIpLnNldEFwcHJvdmFsRm9yVG9rZW4oXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCAke2VyYzcyMS50b2tlbklkfSk7XFxuXFxuYCk7XG4gICAgICB9XG4gICAgICBudW1PZlJld2FyZFVuaXRzLnB1c2goXCIxXCIpO1xuICAgICAgY29udGVudHMucHVzaCh7XG4gICAgICAgIGFzc2V0Q29udHJhY3Q6IGVyYzcyMS5jb250cmFjdEFkZHJlc3MsXG4gICAgICAgIHRva2VuVHlwZTogMSxcbiAgICAgICAgdG90YWxBbW91bnQ6IDEsXG4gICAgICAgIHRva2VuSWQ6IGVyYzcyMS50b2tlbklkXG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlcmMxMTU1IG9mIGVyYzExNTVSZXdhcmRzKSB7XG4gICAgICBjb25zdCBpc0FwcHJvdmVkID0gYXdhaXQgaXNUb2tlbkFwcHJvdmVkRm9yVHJhbnNmZXIodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgdGhpcy5nZXRBZGRyZXNzKCksIGVyYzExNTUuY29udHJhY3RBZGRyZXNzLCBlcmMxMTU1LnRva2VuSWQsIG93bmVyKTtcbiAgICAgIGlmICghaXNBcHByb3ZlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSQzExNTUgdG9rZW4gXCIke2VyYzExNTUudG9rZW5JZH1cIiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzExNTUuY29udHJhY3RBZGRyZXNzfVwiIGlzIG5vdCBhcHByb3ZlZCBmb3IgdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBnaXZlIGFwcHJvdmFsIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhpcyB0b2tlbiBieSBydW5uaW5nOlxcblxcbmF3YWl0IHNkay5nZXRFZGl0aW9uKFwiJHtlcmMxMTU1LmNvbnRyYWN0QWRkcmVzc31cIikuc2V0QXBwcm92YWxGb3JBbGwoXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCB0cnVlKTtcXG5cXG5gKTtcbiAgICAgIH1cbiAgICAgIG51bU9mUmV3YXJkVW5pdHMucHVzaChlcmMxMTU1LnRvdGFsUmV3YXJkcyk7XG4gICAgICBjb250ZW50cy5wdXNoKHtcbiAgICAgICAgYXNzZXRDb250cmFjdDogZXJjMTE1NS5jb250cmFjdEFkZHJlc3MsXG4gICAgICAgIHRva2VuVHlwZTogMixcbiAgICAgICAgdG90YWxBbW91bnQ6IEJpZ051bWJlci5mcm9tKGVyYzExNTUucXVhbnRpdHlQZXJSZXdhcmQpLm11bChCaWdOdW1iZXIuZnJvbShlcmMxMTU1LnRvdGFsUmV3YXJkcykpLFxuICAgICAgICB0b2tlbklkOiBlcmMxMTU1LnRva2VuSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29udGVudHMsXG4gICAgICBudW1PZlJld2FyZFVuaXRzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgLi4uYXJncyk7XG4gIH1cbiAgZGV0ZWN0VnJmKCkge1xuICAgIGlmIChkZXRlY3RDb250cmFjdEZlYXR1cmUodGhpcy5jb250cmFjdFdyYXBwZXIsIFwiUGFja1ZSRlwiKSkge1xuICAgICAgcmV0dXJuIG5ldyBQYWNrVlJGKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lck9yUHJvdmlkZXIoKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MsIHRoaXMuc3RvcmFnZSwgdGhpcy5jb250cmFjdFdyYXBwZXIub3B0aW9ucywgdGhpcy5jaGFpbklkKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KFBhY2ssIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcIm1pbnRlclwiLCBcImFzc2V0XCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBQYWNrIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=