"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_vote-7a55d2e0_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/vote-7a55d2e0.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/vote-7a55d2e0.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vote": () => (/* binding */ Vote)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC20.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC20.json");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/hash/lib.esm/id.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
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
 * Create a decentralized organization for token holders to vote on proposals.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "vote");
 * ```
 *
 * @public
 */
class Vote {
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "_chainId", void 0);
    this._chainId = chainId;
    this.abi = abi;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d8, this.storage);
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
   * Get a proposal by id.
   *
   * @param proposalId - The proposal id to get.
   * @returns - The proposal.
   */
  async get(proposalId) {
    const all = await this.getAll();
    const proposals = all.filter(p => p.proposalId.eq(ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(proposalId)));
    if (proposals.length === 0) {
      throw new Error("proposal not found");
    }
    return proposals[0];
  }

  /**
   * Get All Proposals
   *
   * @remarks Get all the proposals in this contract.
   *
   * @example
   * ```javascript
   * const proposals = await contract.getAll();
   * console.log(proposals);
   * ```
   *
   * @returns - All the proposals in the contract.
   */
  async getAll() {
    return Promise.all((await this.contractWrapper.readContract.getAllProposals()).map(async data => ({
      proposalId: data.proposalId,
      proposer: data.proposer,
      description: data.description,
      startBlock: data.startBlock,
      endBlock: data.endBlock,
      state: await this.contractWrapper.readContract.state(data.proposalId),
      votes: await this.getProposalVotes(data.proposalId),
      executions: data[3].map((c, i) => ({
        toAddress: data.targets[i],
        nativeTokenValue: c,
        transactionData: data.calldatas[i]
      }))
    })));
  }

  /**
   * Get the votes for a specific proposal
   * @param proposalId - the proposalId
   */
  async getProposalVotes(proposalId) {
    const votes = await this.contractWrapper.readContract.proposalVotes(proposalId);
    return [{
      type: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b4.Against,
      label: "Against",
      count: votes.againstVotes
    }, {
      type: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b4.For,
      label: "For",
      count: votes.forVotes
    }, {
      type: _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b4.Abstain,
      label: "Abstain",
      count: votes.abstainVotes
    }];
  }

  /**
   * Check If Wallet Voted
   *
   * @remarks Check if a specified wallet has voted a specific proposal
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * // The address of the wallet you want to check to see if they voted
   * const address = "{{wallet_address}}";
   *
   * await contract.hasVoted(proposalId, address);
   * ```
   *
   * @param proposalId - The unique identifier of a proposal .
   * @param account - (optional) wallet account address. Defaults to connected signer.
   * @returns - True if the account has already voted on the proposal.
   */
  async hasVoted(proposalId, account) {
    if (!account) {
      account = await this.contractWrapper.getSignerAddress();
    }
    return this.contractWrapper.readContract.hasVoted(proposalId, account);
  }

  /**
   * Can Execute
   *
   * @remarks Check if a proposal can be executed (if the proposal has succeeded).
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * const canExecute = await contract.canExecute(proposalId);
   * console.log(canExecute);
   * ```
   *
   * @param proposalId - The proposal ID to check.
   * @returns - True if the proposal can be executed, false otherwise.
   */
  async canExecute(proposalId) {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = ethers__WEBPACK_IMPORTED_MODULE_69__.id(proposal.description);
    try {
      await this.contractWrapper.callStatic().execute(tos, values, datas, descriptionHash);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Check the balance of the project wallet in the native token of the chain
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balance() {
    const balance = await this.contractWrapper.readContract.provider.getBalance(this.contractWrapper.readContract.address);
    return {
      name: "",
      symbol: "",
      decimals: 18,
      value: balance,
      displayValue: ethers__WEBPACK_IMPORTED_MODULE_70__.formatUnits(balance, 18)
    };
  }

  /**
   * Check the balance of the project wallet in a particular
   * ERC20 token contract
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balanceOfToken(tokenAddress) {
    const erc20 = new ethers__WEBPACK_IMPORTED_MODULE_71__.Contract(tokenAddress, _thirdweb_dev_contracts_js_dist_abis_IERC20_json__WEBPACK_IMPORTED_MODULE_0__, this.contractWrapper.getProvider());
    return await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b6)(this.contractWrapper.getProvider(), tokenAddress, await erc20.balanceOf(this.contractWrapper.readContract.address));
  }

  /**
   * Find a proposal by its id.
   *
   * @internal
   * @param proposalId - Proposal to check for
   */
  async ensureExists(proposalId) {
    try {
      await this.contractWrapper.readContract.state(proposalId);
    } catch (e) {
      throw Error(`Proposal ${proposalId} not found`);
    }
  }

  /**
   * Get the Vote contract configuration
   */
  async settings() {
    const [votingDelay, votingPeriod, votingTokenAddress, votingQuorumFraction, proposalTokenThreshold] = await Promise.all([this.contractWrapper.readContract.votingDelay(), this.contractWrapper.readContract.votingPeriod(), this.contractWrapper.readContract.token(), this.contractWrapper.readContract["quorumNumerator()"](), this.contractWrapper.readContract.proposalThreshold()]);
    const votingTokenMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b7)(this.contractWrapper.getProvider(), votingTokenAddress);
    return {
      votingDelay: votingDelay.toString(),
      votingPeriod: votingPeriod.toString(),
      votingTokenAddress,
      votingTokenMetadata,
      votingQuorumFraction: votingQuorumFraction.toString(),
      proposalTokenThreshold: proposalTokenThreshold.toString()
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Proposal
   *
   * @remarks Create a new proposal for token holders to vote on.
   *
   * @example
   * ```javascript
   * // The description of the proposal you want to pass
   * const description = "This is a great proposal - vote for it!"
   * // You can (optionally) pass in contract calls that will get executed when the proposal is executed.
   * const executions = [
   *   {
   *     // The contract you want to make a call to
   *     toAddress: "0x...",
   *     // The amount of the native currency to send in this transaction
   *     nativeTokenValue: 0,
   *     // Transaction data that will be executed when the proposal is executed
   *     // This is an example transfer transaction with a token contract (which you would need to setup in code)
   *     transactionData: tokenContract.encoder.encode(
   *       "transfer", [
   *         fromAddress,
   *         amount,
   *       ]
   *     ),
   *   }
   * ]
   *
   * const proposal = await contract.propose(description, executions);
   * ```
   *
   * @param description - The description of the proposal.
   * @param executions - A set of executable transactions that will be run if the proposal is passed and executed.
   * @returns - The id of the created proposal and the transaction receipt.
   */
  async propose(description, executions) {
    if (!executions) {
      executions = [{
        toAddress: this.contractWrapper.readContract.address,
        nativeTokenValue: 0,
        transactionData: "0x"
      }];
    }
    const tos = executions.map(p => p.toAddress);
    const values = executions.map(p => p.nativeTokenValue);
    const datas = executions.map(p => p.transactionData);
    const receipt = await this.contractWrapper.sendTransaction("propose", [tos, values, datas, description]);
    const event = this.contractWrapper.parseLogs("ProposalCreated", receipt?.logs);
    return {
      id: event[0].args.proposalId,
      receipt
    };
  }

  /**
   * Vote
   *
   * @remarks Vote on an active proposal
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to vote on
   * const proposalId = "0";
   * // The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
   * const voteType = VoteType.For;
   * // The (optional) reason for the vote
   * const reason = "I like this proposal!";
   *
   * await contract.vote(proposalId, voteType, reason);
   * ```
   * @param proposalId - The proposal to cast a vote on.
   * @param voteType - The position the voter is taking on their vote.
   * @param reason - (optional) The reason for the vote.
   */
  async vote(proposalId, voteType) {
    let reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    await this.ensureExists(proposalId);
    return {
      receipt: await this.contractWrapper.sendTransaction("castVoteWithReason", [proposalId, voteType, reason])
    };
  }

  /**
   * Execute Proposal
   *
   * @remarks Execute the related transactions for a proposal if the proposal succeeded.
   *
   * @example
   * ```javascript
   * // The proposal ID ofthe proposal you want to execute
   * const proposalId = "0"
   * await contract.execute(proposalId);
   * ```
   *
   * @param proposalId - The proposal id to execute.
   */
  async execute(proposalId) {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = ethers__WEBPACK_IMPORTED_MODULE_69__.id(proposal.description);
    return {
      receipt: await this.contractWrapper.sendTransaction("execute", [tos, values, datas, descriptionHash])
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
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXZvdGUtN2E1NWQyZTAtZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNnTztBQUM3TjtBQUNuQjtBQUN0QztBQUNGO0FBQzhDO0FBQ0E7QUFDQztBQUNwQztBQUMwQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ0w7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDRztBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNMO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDTDtBQUNDO0FBQ0Q7QUFDdEM7QUFDUztBQUNQO0FBQ3NDO0FBQzlCO0FBQ21DO0FBQ1I7QUFDVztBQUMvQztBQUNHO0FBQ1g7QUFDcUQ7QUFDQztBQUNRO0FBQ2Y7QUFDQztBQUNPO0FBQ1E7QUFDQztBQUNoRTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csbUVBQWU7QUFDakgsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBLDJGQUEyRixhQUFhO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L3ZvdGUtN2E1NWQyZTAuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBkOCBhcyBWb3RlQ29udHJhY3RTY2hlbWEsIGFqIGFzIENvbnRyYWN0RW5jb2RlciwgYVUgYXMgR2FzQ29zdEVzdGltYXRvciwgYVYgYXMgQ29udHJhY3RFdmVudHMsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGI0IGFzIFZvdGVUeXBlLCBiNiBhcyBmZXRjaEN1cnJlbmN5VmFsdWUsIGI3IGFzIGZldGNoQ3VycmVuY3lNZXRhZGF0YSB9IGZyb20gJy4vdGhpcmR3ZWItY2hlY2tvdXQtMzNmMTM5NTUuZXNtLmpzJztcbmltcG9ydCBFUkMyMEFiaSBmcm9tICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBldGhlcnMsIENvbnRyYWN0IH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Sb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdiczU4JztcblxuLyoqXG4gKiBDcmVhdGUgYSBkZWNlbnRyYWxpemVkIG9yZ2FuaXphdGlvbiBmb3IgdG9rZW4gaG9sZGVycyB0byB2b3RlIG9uIHByb3Bvc2Fscy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJ2b3RlXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBWb3RlIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBnZXQgY2hhaW5JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hhaW5JZDtcbiAgfVxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb250cmFjdFdyYXBwZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzdG9yYWdlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaW50ZXJjZXB0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY2hhaW5JZFwiLCB2b2lkIDApO1xuICAgIHRoaXMuX2NoYWluSWQgPSBjaGFpbklkO1xuICAgIHRoaXMuYWJpID0gYWJpO1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyID0gY29udHJhY3RXcmFwcGVyO1xuICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBWb3RlQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBhIHByb3Bvc2FsIGJ5IGlkLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvcG9zYWxJZCAtIFRoZSBwcm9wb3NhbCBpZCB0byBnZXQuXG4gICAqIEByZXR1cm5zIC0gVGhlIHByb3Bvc2FsLlxuICAgKi9cbiAgYXN5bmMgZ2V0KHByb3Bvc2FsSWQpIHtcbiAgICBjb25zdCBhbGwgPSBhd2FpdCB0aGlzLmdldEFsbCgpO1xuICAgIGNvbnN0IHByb3Bvc2FscyA9IGFsbC5maWx0ZXIocCA9PiBwLnByb3Bvc2FsSWQuZXEoQmlnTnVtYmVyLmZyb20ocHJvcG9zYWxJZCkpKTtcbiAgICBpZiAocHJvcG9zYWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvcG9zYWwgbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcG9zYWxzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBbGwgUHJvcG9zYWxzXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhbGwgdGhlIHByb3Bvc2FscyBpbiB0aGlzIGNvbnRyYWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHByb3Bvc2FscyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbCgpO1xuICAgKiBjb25zb2xlLmxvZyhwcm9wb3NhbHMpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHJldHVybnMgLSBBbGwgdGhlIHByb3Bvc2FscyBpbiB0aGUgY29udHJhY3QuXG4gICAqL1xuICBhc3luYyBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKChhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0QWxsUHJvcG9zYWxzKCkpLm1hcChhc3luYyBkYXRhID0+ICh7XG4gICAgICBwcm9wb3NhbElkOiBkYXRhLnByb3Bvc2FsSWQsXG4gICAgICBwcm9wb3NlcjogZGF0YS5wcm9wb3NlcixcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgc3RhcnRCbG9jazogZGF0YS5zdGFydEJsb2NrLFxuICAgICAgZW5kQmxvY2s6IGRhdGEuZW5kQmxvY2ssXG4gICAgICBzdGF0ZTogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnN0YXRlKGRhdGEucHJvcG9zYWxJZCksXG4gICAgICB2b3RlczogYXdhaXQgdGhpcy5nZXRQcm9wb3NhbFZvdGVzKGRhdGEucHJvcG9zYWxJZCksXG4gICAgICBleGVjdXRpb25zOiBkYXRhWzNdLm1hcCgoYywgaSkgPT4gKHtcbiAgICAgICAgdG9BZGRyZXNzOiBkYXRhLnRhcmdldHNbaV0sXG4gICAgICAgIG5hdGl2ZVRva2VuVmFsdWU6IGMsXG4gICAgICAgIHRyYW5zYWN0aW9uRGF0YTogZGF0YS5jYWxsZGF0YXNbaV1cbiAgICAgIH0pKVxuICAgIH0pKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2b3RlcyBmb3IgYSBzcGVjaWZpYyBwcm9wb3NhbFxuICAgKiBAcGFyYW0gcHJvcG9zYWxJZCAtIHRoZSBwcm9wb3NhbElkXG4gICAqL1xuICBhc3luYyBnZXRQcm9wb3NhbFZvdGVzKHByb3Bvc2FsSWQpIHtcbiAgICBjb25zdCB2b3RlcyA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5wcm9wb3NhbFZvdGVzKHByb3Bvc2FsSWQpO1xuICAgIHJldHVybiBbe1xuICAgICAgdHlwZTogVm90ZVR5cGUuQWdhaW5zdCxcbiAgICAgIGxhYmVsOiBcIkFnYWluc3RcIixcbiAgICAgIGNvdW50OiB2b3Rlcy5hZ2FpbnN0Vm90ZXNcbiAgICB9LCB7XG4gICAgICB0eXBlOiBWb3RlVHlwZS5Gb3IsXG4gICAgICBsYWJlbDogXCJGb3JcIixcbiAgICAgIGNvdW50OiB2b3Rlcy5mb3JWb3Rlc1xuICAgIH0sIHtcbiAgICAgIHR5cGU6IFZvdGVUeXBlLkFic3RhaW4sXG4gICAgICBsYWJlbDogXCJBYnN0YWluXCIsXG4gICAgICBjb3VudDogdm90ZXMuYWJzdGFpblZvdGVzXG4gICAgfV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgSWYgV2FsbGV0IFZvdGVkXG4gICAqXG4gICAqIEByZW1hcmtzIENoZWNrIGlmIGEgc3BlY2lmaWVkIHdhbGxldCBoYXMgdm90ZWQgYSBzcGVjaWZpYyBwcm9wb3NhbFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBwcm9wb3NhbCBJRCBvZiB0aGUgcHJvcG9zYWwgeW91IHdhbnQgdG8gY2hlY2tcbiAgICogY29uc3QgcHJvcG9zYWxJZCA9IFwiMFwiO1xuICAgKiAvLyBUaGUgYWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIGNoZWNrIHRvIHNlZSBpZiB0aGV5IHZvdGVkXG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5oYXNWb3RlZChwcm9wb3NhbElkLCBhZGRyZXNzKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wb3NhbElkIC0gVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIGEgcHJvcG9zYWwgLlxuICAgKiBAcGFyYW0gYWNjb3VudCAtIChvcHRpb25hbCkgd2FsbGV0IGFjY291bnQgYWRkcmVzcy4gRGVmYXVsdHMgdG8gY29ubmVjdGVkIHNpZ25lci5cbiAgICogQHJldHVybnMgLSBUcnVlIGlmIHRoZSBhY2NvdW50IGhhcyBhbHJlYWR5IHZvdGVkIG9uIHRoZSBwcm9wb3NhbC5cbiAgICovXG4gIGFzeW5jIGhhc1ZvdGVkKHByb3Bvc2FsSWQsIGFjY291bnQpIHtcbiAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzVm90ZWQocHJvcG9zYWxJZCwgYWNjb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuIEV4ZWN1dGVcbiAgICpcbiAgICogQHJlbWFya3MgQ2hlY2sgaWYgYSBwcm9wb3NhbCBjYW4gYmUgZXhlY3V0ZWQgKGlmIHRoZSBwcm9wb3NhbCBoYXMgc3VjY2VlZGVkKS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgcHJvcG9zYWwgSUQgb2YgdGhlIHByb3Bvc2FsIHlvdSB3YW50IHRvIGNoZWNrXG4gICAqIGNvbnN0IHByb3Bvc2FsSWQgPSBcIjBcIjtcbiAgICogY29uc3QgY2FuRXhlY3V0ZSA9IGF3YWl0IGNvbnRyYWN0LmNhbkV4ZWN1dGUocHJvcG9zYWxJZCk7XG4gICAqIGNvbnNvbGUubG9nKGNhbkV4ZWN1dGUpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSBUaGUgcHJvcG9zYWwgSUQgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIC0gVHJ1ZSBpZiB0aGUgcHJvcG9zYWwgY2FuIGJlIGV4ZWN1dGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBhc3luYyBjYW5FeGVjdXRlKHByb3Bvc2FsSWQpIHtcbiAgICBhd2FpdCB0aGlzLmVuc3VyZUV4aXN0cyhwcm9wb3NhbElkKTtcbiAgICBjb25zdCBwcm9wb3NhbCA9IGF3YWl0IHRoaXMuZ2V0KHByb3Bvc2FsSWQpO1xuICAgIGNvbnN0IHRvcyA9IHByb3Bvc2FsLmV4ZWN1dGlvbnMubWFwKHAgPT4gcC50b0FkZHJlc3MpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHByb3Bvc2FsLmV4ZWN1dGlvbnMubWFwKHAgPT4gcC5uYXRpdmVUb2tlblZhbHVlKTtcbiAgICBjb25zdCBkYXRhcyA9IHByb3Bvc2FsLmV4ZWN1dGlvbnMubWFwKHAgPT4gcC50cmFuc2FjdGlvbkRhdGEpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSGFzaCA9IGV0aGVycy51dGlscy5pZChwcm9wb3NhbC5kZXNjcmlwdGlvbik7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGxTdGF0aWMoKS5leGVjdXRlKHRvcywgdmFsdWVzLCBkYXRhcywgZGVzY3JpcHRpb25IYXNoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGJhbGFuY2Ugb2YgdGhlIHByb2plY3Qgd2FsbGV0IGluIHRoZSBuYXRpdmUgdG9rZW4gb2YgdGhlIGNoYWluXG4gICAqXG4gICAqIEByZXR1cm5zIC0gVGhlIGJhbGFuY2Ugb2YgdGhlIHByb2plY3QgaW4gdGhlIG5hdGl2ZSB0b2tlbiBvZiB0aGUgY2hhaW5cbiAgICovXG4gIGFzeW5jIGJhbGFuY2UoKSB7XG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5wcm92aWRlci5nZXRCYWxhbmNlKHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5hZGRyZXNzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIHN5bWJvbDogXCJcIixcbiAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgIHZhbHVlOiBiYWxhbmNlLFxuICAgICAgZGlzcGxheVZhbHVlOiBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYmFsYW5jZSwgMTgpXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgYmFsYW5jZSBvZiB0aGUgcHJvamVjdCB3YWxsZXQgaW4gYSBwYXJ0aWN1bGFyXG4gICAqIEVSQzIwIHRva2VuIGNvbnRyYWN0XG4gICAqXG4gICAqIEByZXR1cm5zIC0gVGhlIGJhbGFuY2Ugb2YgdGhlIHByb2plY3QgaW4gdGhlIG5hdGl2ZSB0b2tlbiBvZiB0aGUgY2hhaW5cbiAgICovXG4gIGFzeW5jIGJhbGFuY2VPZlRva2VuKHRva2VuQWRkcmVzcykge1xuICAgIGNvbnN0IGVyYzIwID0gbmV3IENvbnRyYWN0KHRva2VuQWRkcmVzcywgRVJDMjBBYmksIHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCkpO1xuICAgIHJldHVybiBhd2FpdCBmZXRjaEN1cnJlbmN5VmFsdWUodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgdG9rZW5BZGRyZXNzLCBhd2FpdCBlcmMyMC5iYWxhbmNlT2YodGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgcHJvcG9zYWwgYnkgaXRzIGlkLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSBQcm9wb3NhbCB0byBjaGVjayBmb3JcbiAgICovXG4gIGFzeW5jIGVuc3VyZUV4aXN0cyhwcm9wb3NhbElkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5zdGF0ZShwcm9wb3NhbElkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBFcnJvcihgUHJvcG9zYWwgJHtwcm9wb3NhbElkfSBub3QgZm91bmRgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBWb3RlIGNvbnRyYWN0IGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIGFzeW5jIHNldHRpbmdzKCkge1xuICAgIGNvbnN0IFt2b3RpbmdEZWxheSwgdm90aW5nUGVyaW9kLCB2b3RpbmdUb2tlbkFkZHJlc3MsIHZvdGluZ1F1b3J1bUZyYWN0aW9uLCBwcm9wb3NhbFRva2VuVGhyZXNob2xkXSA9IGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3Qudm90aW5nRGVsYXkoKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnZvdGluZ1BlcmlvZCgpLCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QudG9rZW4oKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0W1wicXVvcnVtTnVtZXJhdG9yKClcIl0oKSwgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LnByb3Bvc2FsVGhyZXNob2xkKCldKTtcbiAgICBjb25zdCB2b3RpbmdUb2tlbk1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHZvdGluZ1Rva2VuQWRkcmVzcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZvdGluZ0RlbGF5OiB2b3RpbmdEZWxheS50b1N0cmluZygpLFxuICAgICAgdm90aW5nUGVyaW9kOiB2b3RpbmdQZXJpb2QudG9TdHJpbmcoKSxcbiAgICAgIHZvdGluZ1Rva2VuQWRkcmVzcyxcbiAgICAgIHZvdGluZ1Rva2VuTWV0YWRhdGEsXG4gICAgICB2b3RpbmdRdW9ydW1GcmFjdGlvbjogdm90aW5nUXVvcnVtRnJhY3Rpb24udG9TdHJpbmcoKSxcbiAgICAgIHByb3Bvc2FsVG9rZW5UaHJlc2hvbGQ6IHByb3Bvc2FsVG9rZW5UaHJlc2hvbGQudG9TdHJpbmcoKVxuICAgIH07XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogQ3JlYXRlIFByb3Bvc2FsXG4gICAqXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhIG5ldyBwcm9wb3NhbCBmb3IgdG9rZW4gaG9sZGVycyB0byB2b3RlIG9uLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvcG9zYWwgeW91IHdhbnQgdG8gcGFzc1xuICAgKiBjb25zdCBkZXNjcmlwdGlvbiA9IFwiVGhpcyBpcyBhIGdyZWF0IHByb3Bvc2FsIC0gdm90ZSBmb3IgaXQhXCJcbiAgICogLy8gWW91IGNhbiAob3B0aW9uYWxseSkgcGFzcyBpbiBjb250cmFjdCBjYWxscyB0aGF0IHdpbGwgZ2V0IGV4ZWN1dGVkIHdoZW4gdGhlIHByb3Bvc2FsIGlzIGV4ZWN1dGVkLlxuICAgKiBjb25zdCBleGVjdXRpb25zID0gW1xuICAgKiAgIHtcbiAgICogICAgIC8vIFRoZSBjb250cmFjdCB5b3Ugd2FudCB0byBtYWtlIGEgY2FsbCB0b1xuICAgKiAgICAgdG9BZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgICAvLyBUaGUgYW1vdW50IG9mIHRoZSBuYXRpdmUgY3VycmVuY3kgdG8gc2VuZCBpbiB0aGlzIHRyYW5zYWN0aW9uXG4gICAqICAgICBuYXRpdmVUb2tlblZhbHVlOiAwLFxuICAgKiAgICAgLy8gVHJhbnNhY3Rpb24gZGF0YSB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgcHJvcG9zYWwgaXMgZXhlY3V0ZWRcbiAgICogICAgIC8vIFRoaXMgaXMgYW4gZXhhbXBsZSB0cmFuc2ZlciB0cmFuc2FjdGlvbiB3aXRoIGEgdG9rZW4gY29udHJhY3QgKHdoaWNoIHlvdSB3b3VsZCBuZWVkIHRvIHNldHVwIGluIGNvZGUpXG4gICAqICAgICB0cmFuc2FjdGlvbkRhdGE6IHRva2VuQ29udHJhY3QuZW5jb2Rlci5lbmNvZGUoXG4gICAqICAgICAgIFwidHJhbnNmZXJcIiwgW1xuICAgKiAgICAgICAgIGZyb21BZGRyZXNzLFxuICAgKiAgICAgICAgIGFtb3VudCxcbiAgICogICAgICAgXVxuICAgKiAgICAgKSxcbiAgICogICB9XG4gICAqIF1cbiAgICpcbiAgICogY29uc3QgcHJvcG9zYWwgPSBhd2FpdCBjb250cmFjdC5wcm9wb3NlKGRlc2NyaXB0aW9uLCBleGVjdXRpb25zKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBkZXNjcmlwdGlvbiAtIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvcG9zYWwuXG4gICAqIEBwYXJhbSBleGVjdXRpb25zIC0gQSBzZXQgb2YgZXhlY3V0YWJsZSB0cmFuc2FjdGlvbnMgdGhhdCB3aWxsIGJlIHJ1biBpZiB0aGUgcHJvcG9zYWwgaXMgcGFzc2VkIGFuZCBleGVjdXRlZC5cbiAgICogQHJldHVybnMgLSBUaGUgaWQgb2YgdGhlIGNyZWF0ZWQgcHJvcG9zYWwgYW5kIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0LlxuICAgKi9cbiAgYXN5bmMgcHJvcG9zZShkZXNjcmlwdGlvbiwgZXhlY3V0aW9ucykge1xuICAgIGlmICghZXhlY3V0aW9ucykge1xuICAgICAgZXhlY3V0aW9ucyA9IFt7XG4gICAgICAgIHRvQWRkcmVzczogdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3MsXG4gICAgICAgIG5hdGl2ZVRva2VuVmFsdWU6IDAsXG4gICAgICAgIHRyYW5zYWN0aW9uRGF0YTogXCIweFwiXG4gICAgICB9XTtcbiAgICB9XG4gICAgY29uc3QgdG9zID0gZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRvQWRkcmVzcyk7XG4gICAgY29uc3QgdmFsdWVzID0gZXhlY3V0aW9ucy5tYXAocCA9PiBwLm5hdGl2ZVRva2VuVmFsdWUpO1xuICAgIGNvbnN0IGRhdGFzID0gZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcInByb3Bvc2VcIiwgW3RvcywgdmFsdWVzLCBkYXRhcywgZGVzY3JpcHRpb25dKTtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuY29udHJhY3RXcmFwcGVyLnBhcnNlTG9ncyhcIlByb3Bvc2FsQ3JlYXRlZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGV2ZW50WzBdLmFyZ3MucHJvcG9zYWxJZCxcbiAgICAgIHJlY2VpcHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZvdGVcbiAgICpcbiAgICogQHJlbWFya3MgVm90ZSBvbiBhbiBhY3RpdmUgcHJvcG9zYWxcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgcHJvcG9zYWwgSUQgb2YgdGhlIHByb3Bvc2FsIHlvdSB3YW50IHRvIHZvdGUgb25cbiAgICogY29uc3QgcHJvcG9zYWxJZCA9IFwiMFwiO1xuICAgKiAvLyBUaGUgdm90ZSB0eXBlIHlvdSB3YW50IHRvIGNhc3QsIGNhbiBiZSBWb3RlVHlwZS5BZ2FpbnN0LCBWb3RlVHlwZS5Gb3IsIG9yIFZvdGVUeXBlLkFic3RhaW5cbiAgICogY29uc3Qgdm90ZVR5cGUgPSBWb3RlVHlwZS5Gb3I7XG4gICAqIC8vIFRoZSAob3B0aW9uYWwpIHJlYXNvbiBmb3IgdGhlIHZvdGVcbiAgICogY29uc3QgcmVhc29uID0gXCJJIGxpa2UgdGhpcyBwcm9wb3NhbCFcIjtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3Qudm90ZShwcm9wb3NhbElkLCB2b3RlVHlwZSwgcmVhc29uKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSBwcm9wb3NhbElkIC0gVGhlIHByb3Bvc2FsIHRvIGNhc3QgYSB2b3RlIG9uLlxuICAgKiBAcGFyYW0gdm90ZVR5cGUgLSBUaGUgcG9zaXRpb24gdGhlIHZvdGVyIGlzIHRha2luZyBvbiB0aGVpciB2b3RlLlxuICAgKiBAcGFyYW0gcmVhc29uIC0gKG9wdGlvbmFsKSBUaGUgcmVhc29uIGZvciB0aGUgdm90ZS5cbiAgICovXG4gIGFzeW5jIHZvdGUocHJvcG9zYWxJZCwgdm90ZVR5cGUpIHtcbiAgICBsZXQgcmVhc29uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBcIlwiO1xuICAgIGF3YWl0IHRoaXMuZW5zdXJlRXhpc3RzKHByb3Bvc2FsSWQpO1xuICAgIHJldHVybiB7XG4gICAgICByZWNlaXB0OiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJjYXN0Vm90ZVdpdGhSZWFzb25cIiwgW3Byb3Bvc2FsSWQsIHZvdGVUeXBlLCByZWFzb25dKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZSBQcm9wb3NhbFxuICAgKlxuICAgKiBAcmVtYXJrcyBFeGVjdXRlIHRoZSByZWxhdGVkIHRyYW5zYWN0aW9ucyBmb3IgYSBwcm9wb3NhbCBpZiB0aGUgcHJvcG9zYWwgc3VjY2VlZGVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIFRoZSBwcm9wb3NhbCBJRCBvZnRoZSBwcm9wb3NhbCB5b3Ugd2FudCB0byBleGVjdXRlXG4gICAqIGNvbnN0IHByb3Bvc2FsSWQgPSBcIjBcIlxuICAgKiBhd2FpdCBjb250cmFjdC5leGVjdXRlKHByb3Bvc2FsSWQpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHByb3Bvc2FsSWQgLSBUaGUgcHJvcG9zYWwgaWQgdG8gZXhlY3V0ZS5cbiAgICovXG4gIGFzeW5jIGV4ZWN1dGUocHJvcG9zYWxJZCkge1xuICAgIGF3YWl0IHRoaXMuZW5zdXJlRXhpc3RzKHByb3Bvc2FsSWQpO1xuICAgIGNvbnN0IHByb3Bvc2FsID0gYXdhaXQgdGhpcy5nZXQocHJvcG9zYWxJZCk7XG4gICAgY29uc3QgdG9zID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRvQWRkcmVzcyk7XG4gICAgY29uc3QgdmFsdWVzID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLm5hdGl2ZVRva2VuVmFsdWUpO1xuICAgIGNvbnN0IGRhdGFzID0gcHJvcG9zYWwuZXhlY3V0aW9ucy5tYXAocCA9PiBwLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25IYXNoID0gZXRoZXJzLnV0aWxzLmlkKHByb3Bvc2FsLmRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiZXhlY3V0ZVwiLCBbdG9zLCB2YWx1ZXMsIGRhdGFzLCBkZXNjcmlwdGlvbkhhc2hdKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICB9XG59XG5cbmV4cG9ydCB7IFZvdGUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==