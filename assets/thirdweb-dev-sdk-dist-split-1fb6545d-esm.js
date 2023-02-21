"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_split-1fb6545d_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/split-1fb6545d.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/split-1fb6545d.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Split": () => (/* binding */ Split)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC165.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC165.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155.json");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
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









































































/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
class Split {
  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cK(network, address, abi, options);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "contractWrapper", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "storage", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "_chainId", void 0);
    this._chainId = chainId;
    this.abi = abi;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d5, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, Split.contractRoles);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
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
   * Get Recipients of this splits contract
   *
   * @remarks Get the data about the shares of every split recipient on the contract
   *
   * @example
   * ```javascript
   * const recipients = await contract.getAllRecipients();
   * console.log(recipients);
   * ```
   */
  async getAllRecipients() {
    const recipients = [];
    let index = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(0);
    const totalRecipients = await this.contractWrapper.readContract.payeeCount();
    while (index.lt(totalRecipients)) {
      try {
        const recipientAddress = await this.contractWrapper.readContract.payee(index);
        recipients.push(await this.getRecipientSplitPercentage(recipientAddress));
        index = index.add(1);
      } catch (err) {
        // The only way we know how to detect that we've found all recipients
        // is if we get an error when trying to get the next recipient.
        if ("method" in err && err["method"].toLowerCase().includes("payee(uint256)")) {
          break;
        } else {
          throw err;
        }
      }
    }
    return recipients;
  }

  /**
   * Returns all the recipients and their balances in the native currency.
   *
   * @returns A map of recipient addresses to their balances in the native currency.
   */
  async balanceOfAllRecipients() {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOf(recipient.address);
    }
    return balances;
  }

  /**
   * Returns all the recipients and their balances in a non-native currency.
   *
   * @param tokenAddress - The address of the currency to check the balances in.
   * @returns A map of recipient addresses to their balances in the specified currency.
   */
  async balanceOfTokenAllRecipients(tokenAddress) {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOfToken(recipient.address, tokenAddress);
    }
    return balances;
  }

  /**
   * Get Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * const funds = await contract.balanceOf(address);
   * console.log(funds);
   * ```
   */
  async balanceOf(address) {
    const walletBalance = await this.contractWrapper.readContract.provider.getBalance(this.getAddress());
    const totalReleased = await this.contractWrapper.readContract["totalReleased()"]();
    const totalReceived = walletBalance.add(totalReleased);
    return this._pendingPayment(address, totalReceived, await this.contractWrapper.readContract["released(address)"](address));
  }

  /**
   * Get non-native Token Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * // The address of the currency to check the contracts funds of
   * const tokenAddress = "0x..."
   * const funds = await contract.balanceOfToken(address, tokenAddress);
   * console.log(funds);
   * ```
   */
  async balanceOfToken(walletAddress, tokenAddress) {
    const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_69__.Contract(tokenAddress, _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_0__, this.contractWrapper.getProvider());
    const walletBalance = await erc20.balanceOf(this.getAddress());
    const totalReleased = await this.contractWrapper.readContract["totalReleased(address)"](tokenAddress);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(walletAddress, totalReceived, await this.contractWrapper.readContract["released(address,address)"](tokenAddress, walletAddress));
    return await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b6)(this.contractWrapper.getProvider(), tokenAddress, value);
  }

  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const [totalShares, walletsShares] = await Promise.all([this.contractWrapper.readContract.totalShares(), this.contractWrapper.readContract.shares(address)]);
    // We convert to basis points to avoid floating point loss of precision
    return {
      address,
      splitPercentage: walletsShares.mul(ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Withdraw Funds
   * @remarks Triggers a transfer to account of the amount of native currency they are owed.
   *
   * @example
   * ```javascript
   * // the wallet address that wants to withdraw their funds
   * const walletAddress = "{{wallet_address}}"
   * await contract.withdraw(walletAddress);
   * ```
   *
   * @param walletAddress - The address to distributes the amount to
   */
  async withdraw(walletAddress) {
    return {
      receipt: await this.contractWrapper.sendTransaction("release(address)", [walletAddress])
    };
  }

  /**
   * Triggers a transfer to account of the amount of a given currency they are owed.
   *
   * @param walletAddress - The address to distributes the amount to
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  async withdrawToken(walletAddress, tokenAddress) {
    return {
      receipt: await this.contractWrapper.sendTransaction("release(address,address)", [tokenAddress, walletAddress])
    };
  }

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * await contract.distribute();
   * ```
   */
  async distribute() {
    return {
      receipt: await this.contractWrapper.sendTransaction("distribute()", [])
    };
  }

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * // The address of the currency to distribute funds
   * const tokenAddress = "0x..."
   * await contract.distributeToken(tokenAddress);
   * ```
   *
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  async distributeToken(tokenAddress) {
    return {
      receipt: await this.contractWrapper.sendTransaction("distribute(address)", [tokenAddress])
    };
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const addressReceived = totalReceived.mul(await this.contractWrapper.readContract.shares(address));
    const totalRoyaltyAvailable = addressReceived.div(await this.contractWrapper.readContract.totalShares());
    return totalRoyaltyAvailable.sub(alreadyReleased);
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(Split, "contractRoles", ["admin"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXNwbGl0LTFmYjY1NDVkLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQzBNO0FBQ3ZNO0FBQzNCO0FBQzlCO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDTDtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNHO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ0w7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNMO0FBQ0M7QUFDRDtBQUN0QztBQUNTO0FBQ1A7QUFDc0M7QUFDOUI7QUFDbUM7QUFDUjtBQUNXO0FBQy9DO0FBQ0c7QUFDWDtBQUNxRDtBQUNDO0FBQ1E7QUFDZjtBQUNDO0FBQ087QUFDUTtBQUNDO0FBQ2hFOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxtRUFBZTtBQUNqSCxJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFnQix1QkFBdUIsbUVBQW9CO0FBQ25GLHFCQUFxQixtRUFBYTtBQUNsQyx1QkFBdUIsbUVBQWU7QUFDdEMseUJBQXlCLG1FQUFnQjtBQUN6QyxzQkFBc0IsbUVBQWM7QUFDcEMsMkJBQTJCLG1FQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFRLGVBQWUsNkVBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUVBQWtCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtREFBYztBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3Qvc3BsaXQtMWZiNjU0NWQuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBkNSBhcyBTcGxpdHNDb250cmFjdFNjaGVtYSwgYWwgYXMgQ29udHJhY3RSb2xlcywgYWogYXMgQ29udHJhY3RFbmNvZGVyLCBhVSBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhViBhcyBDb250cmFjdEV2ZW50cywgYVcgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYjYgYXMgZmV0Y2hDdXJyZW5jeVZhbHVlIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IEVSQzIwQWJpIGZyb20gJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgeyBCaWdOdW1iZXIsIENvbnRyYWN0IH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Sb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdiczU4JztcblxuLyoqXG4gKiBDcmVhdGUgY3VzdG9tIHJveWFsdHkgc3BsaXRzIHRvIGRpc3RyaWJ1dGUgZnVuZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwic3BsaXRcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFNwbGl0IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jaGFpbklkXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5fY2hhaW5JZCA9IGNoYWluSWQ7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIgPSBjb250cmFjdFdyYXBwZXI7XG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIFNwbGl0c0NvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgU3BsaXQuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBSZWNpcGllbnRzIG9mIHRoaXMgc3BsaXRzIGNvbnRyYWN0XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgZGF0YSBhYm91dCB0aGUgc2hhcmVzIG9mIGV2ZXJ5IHNwbGl0IHJlY2lwaWVudCBvbiB0aGUgY29udHJhY3RcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCByZWNpcGllbnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsUmVjaXBpZW50cygpO1xuICAgKiBjb25zb2xlLmxvZyhyZWNpcGllbnRzKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBnZXRBbGxSZWNpcGllbnRzKCkge1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBbXTtcbiAgICBsZXQgaW5kZXggPSBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgICBjb25zdCB0b3RhbFJlY2lwaWVudHMgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QucGF5ZWVDb3VudCgpO1xuICAgIHdoaWxlIChpbmRleC5sdCh0b3RhbFJlY2lwaWVudHMpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNpcGllbnRBZGRyZXNzID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnBheWVlKGluZGV4KTtcbiAgICAgICAgcmVjaXBpZW50cy5wdXNoKGF3YWl0IHRoaXMuZ2V0UmVjaXBpZW50U3BsaXRQZXJjZW50YWdlKHJlY2lwaWVudEFkZHJlc3MpKTtcbiAgICAgICAgaW5kZXggPSBpbmRleC5hZGQoMSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgd2F5IHdlIGtub3cgaG93IHRvIGRldGVjdCB0aGF0IHdlJ3ZlIGZvdW5kIGFsbCByZWNpcGllbnRzXG4gICAgICAgIC8vIGlzIGlmIHdlIGdldCBhbiBlcnJvciB3aGVuIHRyeWluZyB0byBnZXQgdGhlIG5leHQgcmVjaXBpZW50LlxuICAgICAgICBpZiAoXCJtZXRob2RcIiBpbiBlcnIgJiYgZXJyW1wibWV0aG9kXCJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwYXllZSh1aW50MjU2KVwiKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVjaXBpZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgcmVjaXBpZW50cyBhbmQgdGhlaXIgYmFsYW5jZXMgaW4gdGhlIG5hdGl2ZSBjdXJyZW5jeS5cbiAgICpcbiAgICogQHJldHVybnMgQSBtYXAgb2YgcmVjaXBpZW50IGFkZHJlc3NlcyB0byB0aGVpciBiYWxhbmNlcyBpbiB0aGUgbmF0aXZlIGN1cnJlbmN5LlxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mQWxsUmVjaXBpZW50cygpIHtcbiAgICBjb25zdCByZWNpcGllbnRzID0gYXdhaXQgdGhpcy5nZXRBbGxSZWNpcGllbnRzKCk7XG4gICAgY29uc3QgYmFsYW5jZXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHJlY2lwaWVudCBvZiByZWNpcGllbnRzKSB7XG4gICAgICBiYWxhbmNlc1tyZWNpcGllbnQuYWRkcmVzc10gPSBhd2FpdCB0aGlzLmJhbGFuY2VPZihyZWNpcGllbnQuYWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiBiYWxhbmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCB0aGUgcmVjaXBpZW50cyBhbmQgdGhlaXIgYmFsYW5jZXMgaW4gYSBub24tbmF0aXZlIGN1cnJlbmN5LlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5BZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IHRvIGNoZWNrIHRoZSBiYWxhbmNlcyBpbi5cbiAgICogQHJldHVybnMgQSBtYXAgb2YgcmVjaXBpZW50IGFkZHJlc3NlcyB0byB0aGVpciBiYWxhbmNlcyBpbiB0aGUgc3BlY2lmaWVkIGN1cnJlbmN5LlxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZU9mVG9rZW5BbGxSZWNpcGllbnRzKHRva2VuQWRkcmVzcykge1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBhd2FpdCB0aGlzLmdldEFsbFJlY2lwaWVudHMoKTtcbiAgICBjb25zdCBiYWxhbmNlcyA9IHt9O1xuICAgIGZvciAoY29uc3QgcmVjaXBpZW50IG9mIHJlY2lwaWVudHMpIHtcbiAgICAgIGJhbGFuY2VzW3JlY2lwaWVudC5hZGRyZXNzXSA9IGF3YWl0IHRoaXMuYmFsYW5jZU9mVG9rZW4ocmVjaXBpZW50LmFkZHJlc3MsIHRva2VuQWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiBiYWxhbmNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgRnVuZHMgb3dlZCB0byBhIHBhcnRpY3VsYXIgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgYW1vdW50IG9mIGZ1bmRzIGluIHRoZSBuYXRpdmUgY3VycmVuY3kgaGVsZCBieSB0aGUgY29udHJhY3QgdGhhdCBpcyBvd2VkIHRvIGEgc3BlY2lmaWMgcmVjaXBpZW50LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBhZGRyZXNzIHRvIGNoZWNrIHRoZSBmdW5kcyBvZlxuICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICogY29uc3QgZnVuZHMgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWRkcmVzcyk7XG4gICAqIGNvbnNvbGUubG9nKGZ1bmRzKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBiYWxhbmNlT2YoYWRkcmVzcykge1xuICAgIGNvbnN0IHdhbGxldEJhbGFuY2UgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QucHJvdmlkZXIuZ2V0QmFsYW5jZSh0aGlzLmdldEFkZHJlc3MoKSk7XG4gICAgY29uc3QgdG90YWxSZWxlYXNlZCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdFtcInRvdGFsUmVsZWFzZWQoKVwiXSgpO1xuICAgIGNvbnN0IHRvdGFsUmVjZWl2ZWQgPSB3YWxsZXRCYWxhbmNlLmFkZCh0b3RhbFJlbGVhc2VkKTtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1BheW1lbnQoYWRkcmVzcywgdG90YWxSZWNlaXZlZCwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0W1wicmVsZWFzZWQoYWRkcmVzcylcIl0oYWRkcmVzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBub24tbmF0aXZlIFRva2VuIEZ1bmRzIG93ZWQgdG8gYSBwYXJ0aWN1bGFyIHdhbGxldFxuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgdGhlIGFtb3VudCBvZiBmdW5kcyBpbiB0aGUgbm9uLW5hdGl2ZSB0b2tlbnMgaGVsZCBieSB0aGUgY29udHJhY3QgdGhhdCBpcyBvd2VkIHRvIGEgc3BlY2lmaWMgcmVjaXBpZW50LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBhZGRyZXNzIHRvIGNoZWNrIHRoZSBmdW5kcyBvZlxuICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICogLy8gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IHRvIGNoZWNrIHRoZSBjb250cmFjdHMgZnVuZHMgb2ZcbiAgICogY29uc3QgdG9rZW5BZGRyZXNzID0gXCIweC4uLlwiXG4gICAqIGNvbnN0IGZ1bmRzID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mVG9rZW4oYWRkcmVzcywgdG9rZW5BZGRyZXNzKTtcbiAgICogY29uc29sZS5sb2coZnVuZHMpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJhbGFuY2VPZlRva2VuKHdhbGxldEFkZHJlc3MsIHRva2VuQWRkcmVzcykge1xuICAgIGNvbnN0IGVyYzIwID0gbmV3IENvbnRyYWN0KHRva2VuQWRkcmVzcywgRVJDMjBBYmksIHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCkpO1xuICAgIGNvbnN0IHdhbGxldEJhbGFuY2UgPSBhd2FpdCBlcmMyMC5iYWxhbmNlT2YodGhpcy5nZXRBZGRyZXNzKCkpO1xuICAgIGNvbnN0IHRvdGFsUmVsZWFzZWQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3RbXCJ0b3RhbFJlbGVhc2VkKGFkZHJlc3MpXCJdKHRva2VuQWRkcmVzcyk7XG4gICAgY29uc3QgdG90YWxSZWNlaXZlZCA9IHdhbGxldEJhbGFuY2UuYWRkKHRvdGFsUmVsZWFzZWQpO1xuICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5fcGVuZGluZ1BheW1lbnQod2FsbGV0QWRkcmVzcywgdG90YWxSZWNlaXZlZCwgYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0W1wicmVsZWFzZWQoYWRkcmVzcyxhZGRyZXNzKVwiXSh0b2tlbkFkZHJlc3MsIHdhbGxldEFkZHJlc3MpKTtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hDdXJyZW5jeVZhbHVlKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRva2VuQWRkcmVzcywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgJSBvZiBmdW5kcyBvd2VkIHRvIGEgZ2l2ZW4gYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyAtIHRoZSBhZGRyZXNzIHRvIGNoZWNrIHBlcmNlbnRhZ2Ugb2ZcbiAgICovXG4gIGFzeW5jIGdldFJlY2lwaWVudFNwbGl0UGVyY2VudGFnZShhZGRyZXNzKSB7XG4gICAgY29uc3QgW3RvdGFsU2hhcmVzLCB3YWxsZXRzU2hhcmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG90YWxTaGFyZXMoKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnNoYXJlcyhhZGRyZXNzKV0pO1xuICAgIC8vIFdlIGNvbnZlcnQgdG8gYmFzaXMgcG9pbnRzIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGxvc3Mgb2YgcHJlY2lzaW9uXG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3MsXG4gICAgICBzcGxpdFBlcmNlbnRhZ2U6IHdhbGxldHNTaGFyZXMubXVsKEJpZ051bWJlci5mcm9tKDFlNykpLmRpdih0b3RhbFNoYXJlcykudG9OdW1iZXIoKSAvIDFlNVxuICAgIH07XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogV2l0aGRyYXcgRnVuZHNcbiAgICogQHJlbWFya3MgVHJpZ2dlcnMgYSB0cmFuc2ZlciB0byBhY2NvdW50IG9mIHRoZSBhbW91bnQgb2YgbmF0aXZlIGN1cnJlbmN5IHRoZXkgYXJlIG93ZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gdGhlIHdhbGxldCBhZGRyZXNzIHRoYXQgd2FudHMgdG8gd2l0aGRyYXcgdGhlaXIgZnVuZHNcbiAgICogY29uc3Qgd2FsbGV0QWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCJcbiAgICogYXdhaXQgY29udHJhY3Qud2l0aGRyYXcod2FsbGV0QWRkcmVzcyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gd2FsbGV0QWRkcmVzcyAtIFRoZSBhZGRyZXNzIHRvIGRpc3RyaWJ1dGVzIHRoZSBhbW91bnQgdG9cbiAgICovXG4gIGFzeW5jIHdpdGhkcmF3KHdhbGxldEFkZHJlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwicmVsZWFzZShhZGRyZXNzKVwiLCBbd2FsbGV0QWRkcmVzc10pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhIHRyYW5zZmVyIHRvIGFjY291bnQgb2YgdGhlIGFtb3VudCBvZiBhIGdpdmVuIGN1cnJlbmN5IHRoZXkgYXJlIG93ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB3YWxsZXRBZGRyZXNzIC0gVGhlIGFkZHJlc3MgdG8gZGlzdHJpYnV0ZXMgdGhlIGFtb3VudCB0b1xuICAgKiBAcGFyYW0gdG9rZW5BZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRvIGRpc3RyaWJ1dGUgZnVuZHNcbiAgICovXG4gIGFzeW5jIHdpdGhkcmF3VG9rZW4od2FsbGV0QWRkcmVzcywgdG9rZW5BZGRyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY2VpcHQ6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcInJlbGVhc2UoYWRkcmVzcyxhZGRyZXNzKVwiLCBbdG9rZW5BZGRyZXNzLCB3YWxsZXRBZGRyZXNzXSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3RyaWJ1dGUgRnVuZHNcbiAgICpcbiAgICogQHJlbWFya3MgRGlzdHJpYnV0ZSBmdW5kcyBoZWxkIGJ5IHRoZSBjb250cmFjdCBpbiB0aGUgbmF0aXZlIGN1cnJlbmN5IHRvIGFsbCByZWNpcGllbnRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGF3YWl0IGNvbnRyYWN0LmRpc3RyaWJ1dGUoKTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBkaXN0cmlidXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWNlaXB0OiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJkaXN0cmlidXRlKClcIiwgW10pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXN0cmlidXRlIEZ1bmRzXG4gICAqXG4gICAqIEByZW1hcmtzIERpc3RyaWJ1dGUgZnVuZHMgaGVsZCBieSB0aGUgY29udHJhY3QgaW4gdGhlIG5hdGl2ZSBjdXJyZW5jeSB0byBhbGwgcmVjaXBpZW50cy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgYWRkcmVzcyBvZiB0aGUgY3VycmVuY3kgdG8gZGlzdHJpYnV0ZSBmdW5kc1xuICAgKiBjb25zdCB0b2tlbkFkZHJlc3MgPSBcIjB4Li4uXCJcbiAgICogYXdhaXQgY29udHJhY3QuZGlzdHJpYnV0ZVRva2VuKHRva2VuQWRkcmVzcyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5BZGRyZXNzIC0gVGhlIGFkZHJlc3Mgb2YgdGhlIGN1cnJlbmN5IGNvbnRyYWN0IHRvIGRpc3RyaWJ1dGUgZnVuZHNcbiAgICovXG4gIGFzeW5jIGRpc3RyaWJ1dGVUb2tlbih0b2tlbkFkZHJlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiZGlzdHJpYnV0ZShhZGRyZXNzKVwiLCBbdG9rZW5BZGRyZXNzXSlcbiAgICB9O1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBQUklWQVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBhc3luYyBfcGVuZGluZ1BheW1lbnQoYWRkcmVzcywgdG90YWxSZWNlaXZlZCwgYWxyZWFkeVJlbGVhc2VkKSB7XG4gICAgY29uc3QgYWRkcmVzc1JlY2VpdmVkID0gdG90YWxSZWNlaXZlZC5tdWwoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnNoYXJlcyhhZGRyZXNzKSk7XG4gICAgY29uc3QgdG90YWxSb3lhbHR5QXZhaWxhYmxlID0gYWRkcmVzc1JlY2VpdmVkLmRpdihhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG90YWxTaGFyZXMoKSk7XG4gICAgcmV0dXJuIHRvdGFsUm95YWx0eUF2YWlsYWJsZS5zdWIoYWxyZWFkeVJlbGVhc2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgLi4uYXJncyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShTcGxpdCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCJdKTtcblxuZXhwb3J0IHsgU3BsaXQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==