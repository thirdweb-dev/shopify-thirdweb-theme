"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_multiwrap-49e16338_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/multiwrap-49e16338.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/multiwrap-49e16338.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiwrap": () => (/* binding */ Multiwrap)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC165_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC165.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC165.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC721_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC721.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC721.json");
/* harmony import */ var _thirdweb_dev_contracts_js_dist_abis_IERC1155_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thirdweb-dev/contracts-js/dist/abis/IERC1155.json */ "./node_modules/@thirdweb-dev/contracts-js/dist/abis/IERC1155.json");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");
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









































































/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */
class Multiwrap extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aI {
  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cK(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cZ, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, Multiwrap.contractRoles);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.owner = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aZ(this.contractWrapper);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the contents of a wrapped token bundle
   * @example
   * ```javascript
   * const contents = await contract.getWrappedContents(wrappedTokenId);
   * console.log(contents.erc20Tokens);
   * console.log(contents.erc721Tokens);
   * console.log(contents.erc1155Tokens);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   */
  async getWrappedContents(wrappedTokenId) {
    const wrappedTokens = await this.contractWrapper.readContract.getWrappedContents(wrappedTokenId);
    const erc20Tokens = [];
    const erc721Tokens = [];
    const erc1155Tokens = [];
    for (const token of wrappedTokens) {
      switch (token.tokenType) {
        case 0:
          {
            const tokenMetadata = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b7)(this.contractWrapper.getProvider(), token.assetContract);
            erc20Tokens.push({
              contractAddress: token.assetContract,
              quantity: ethers__WEBPACK_IMPORTED_MODULE_68__.formatUnits(token.totalAmount, tokenMetadata.decimals)
            });
            break;
          }
        case 1:
          {
            erc721Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId
            });
            break;
          }
        case 2:
          {
            erc1155Tokens.push({
              contractAddress: token.assetContract,
              tokenId: token.tokenId,
              quantity: token.totalAmount.toString()
            });
            break;
          }
      }
    }
    return {
      erc20Tokens,
      erc721Tokens,
      erc1155Tokens
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
   * @example
   * ```javascript
   * const tx = await contract.wrap({
   *   erc20Tokens: [{
   *     contractAddress: "0x...",
   *     quantity: "0.8"
   *   }],
   *   erc721Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "0"
   *   }],
   *   erc1155Tokens: [{
   *     contractAddress: "0x...",
   *     tokenId: "1",
   *     quantity: "2"
   *   }]
   * }, {
   *     name: "Wrapped bundle",
   *     description: "This is a wrapped bundle of tokens and NFTs",
   *     image: "ipfs://...",
   * });
   * const receipt = tx.receipt(); // the transaction receipt
   * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
   * ```
   * @param contents - the contents to wrap
   * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the wrapped token bundle to
   */
  async wrap(contents, wrappedTokenMetadata, recipientAddress) {
    const uri = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.c_)(wrappedTokenMetadata, this.storage);
    const recipient = recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress();
    const tokens = await this.toTokenStructList(contents);
    const receipt = await this.contractWrapper.sendTransaction("wrap", [tokens, uri, recipient]);
    const event = this.contractWrapper.parseLogs("TokensWrapped", receipt?.logs);
    if (event.length === 0) {
      throw new Error("TokensWrapped event not found");
    }
    const tokenId = event[0].args.tokenIdOfWrappedToken;
    return {
      id: tokenId,
      receipt,
      data: () => this.get(tokenId)
    };
  }

  /**
   * Unwrap a wrapped token bundle, and retrieve its contents
   * @example
   * ```javascript
   * await contract.unwrap(wrappedTokenId);
   * ```
   * @param wrappedTokenId - the id of the wrapped token bundle
   * @param recipientAddress - Optional. The address to send the unwrapped tokens to
   */
  async unwrap(wrappedTokenId, recipientAddress) {
    const recipient = recipientAddress ? recipientAddress : await this.contractWrapper.getSignerAddress();
    return {
      receipt: await this.contractWrapper.sendTransaction("unwrap", [wrappedTokenId, recipient])
    };
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async toTokenStructList(contents) {
    const tokens = [];
    const provider = this.contractWrapper.getProvider();
    const owner = await this.contractWrapper.getSignerAddress();
    if (contents.erc20Tokens) {
      for (const erc20 of contents.erc20Tokens) {
        const normalizedQuantity = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.b8)(provider, erc20.quantity, erc20.contractAddress);
        const hasAllowance = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.c$)(this.contractWrapper, erc20.contractAddress, normalizedQuantity);
        if (!hasAllowance) {
          throw new Error(`ERC20 token with contract address "${erc20.contractAddress}" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("${erc20.contractAddress}").setAllowance("${this.getAddress()}", ${erc20.quantity});\n\n`);
        }
        tokens.push({
          assetContract: erc20.contractAddress,
          totalAmount: normalizedQuantity,
          tokenId: 0,
          tokenType: 0
        });
      }
    }
    if (contents.erc721Tokens) {
      for (const erc721 of contents.erc721Tokens) {
        const isApproved = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cW)(this.contractWrapper.getProvider(), this.getAddress(), erc721.contractAddress, erc721.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC721 token "${erc721.tokenId}" with contract address "${erc721.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("${erc721.contractAddress}").setApprovalForToken("${this.getAddress()}", ${erc721.tokenId});\n\n`);
        }
        tokens.push({
          assetContract: erc721.contractAddress,
          totalAmount: 0,
          tokenId: erc721.tokenId,
          tokenType: 1
        });
      }
    }
    if (contents.erc1155Tokens) {
      for (const erc1155 of contents.erc1155Tokens) {
        const isApproved = await (0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cW)(this.contractWrapper.getProvider(), this.getAddress(), erc1155.contractAddress, erc1155.tokenId, owner);
        if (!isApproved) {
          throw new Error(`ERC1155 token "${erc1155.tokenId}" with contract address "${erc1155.contractAddress}" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("${erc1155.contractAddress}").setApprovalForAll("${this.getAddress()}", true);\n\n`);
        }
        tokens.push({
          assetContract: erc1155.contractAddress,
          totalAmount: erc1155.quantity,
          tokenId: erc1155.tokenId,
          tokenType: 2
        });
      }
    }
    return tokens;
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(Multiwrap, "contractRoles", ["admin", "transfer", "minter", "unwrap", "asset"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW11bHRpd3JhcC00OWUxNjMzOC1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ3VXO0FBQzVZO0FBQ2pCO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNRO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0w7QUFDQztBQUNEO0FBQ3RDO0FBQ1M7QUFDUDtBQUNzQztBQUM5QjtBQUNtQztBQUNSO0FBQ1c7QUFDL0M7QUFDRztBQUNYO0FBQ3FEO0FBQ0M7QUFDUTtBQUNmO0FBQ0M7QUFDTztBQUNRO0FBQ0M7QUFDaEU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxtRUFBZTtBQUNqSDtBQUNBLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQjtBQUNBLHdCQUF3QixtRUFBZ0IsdUJBQXVCLG1FQUF1QjtBQUN0RixxQkFBcUIsbUVBQWE7QUFDbEMsdUJBQXVCLG1FQUFlO0FBQ3RDLHlCQUF5QixtRUFBZ0I7QUFDekMsc0JBQXNCLG1FQUFjO0FBQ3BDLHlCQUF5QixtRUFBZTtBQUN4QyxxQkFBcUIsbUVBQWE7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsdUVBQXFCO0FBQzdEO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQXdCO0FBQ2hELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVFQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVFQUFtQjtBQUM1RCxtQ0FBbUMsdUVBQWlCO0FBQ3BEO0FBQ0EsZ0VBQWdFLHNCQUFzQiwrSkFBK0osc0JBQXNCLG1CQUFtQixrQkFBa0IsS0FBSyxlQUFlLEVBQUU7QUFDdFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVFQUEwQjtBQUMzRDtBQUNBLDJDQUEyQyxlQUFlLDJCQUEyQix1QkFBdUIsb0pBQW9KLHVCQUF1QiwwQkFBMEIsa0JBQWtCLEtBQUssZUFBZSxFQUFFO0FBQ3pWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RUFBMEI7QUFDM0Q7QUFDQSw0Q0FBNEMsZ0JBQWdCLDJCQUEyQix3QkFBd0IsOElBQThJLHdCQUF3Qix3QkFBd0Isa0JBQWtCLFNBQVM7QUFDeFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFlOztBQUVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L211bHRpd3JhcC00OWUxNjMzOC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLWRhODhkMjdjLmVzbS5qcyc7XG5pbXBvcnQgeyBhSSBhcyBTdGFuZGFyZEVyYzcyMSwgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBjWiBhcyBNdWx0aXdyYXBDb250cmFjdFNjaGVtYSwgYWwgYXMgQ29udHJhY3RSb2xlcywgYWogYXMgQ29udHJhY3RFbmNvZGVyLCBhVSBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhViBhcyBDb250cmFjdEV2ZW50cywgYW0gYXMgQ29udHJhY3RSb3lhbHR5LCBhWiBhcyBDb250cmFjdE93bmVyLCBiNyBhcyBmZXRjaEN1cnJlbmN5TWV0YWRhdGEsIGNfIGFzIHVwbG9hZE9yRXh0cmFjdFVSSSwgYjggYXMgbm9ybWFsaXplUHJpY2VWYWx1ZSwgYyQgYXMgaGFzRVJDMjBBbGxvd2FuY2UsIGNXIGFzIGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Sb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdiczU4JztcblxuLyoqXG4gKiBNdWx0aXdyYXAgbGV0cyB5b3Ugd3JhcCBhbnkgbnVtYmVyIG9mIEVSQzIwLCBFUkM3MjEgYW5kIEVSQzExNTUgdG9rZW5zIHlvdSBvd24gaW50byBhIHNpbmdsZSB3cmFwcGVkIHRva2VuIGJ1bmRsZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJtdWx0aXdyYXBcIik7XG4gKiBgYGBcbiAqXG4gKiBAYmV0YVxuICovXG5jbGFzcyBNdWx0aXdyYXAgZXh0ZW5kcyBTdGFuZGFyZEVyYzcyMSB7XG4gIC8qKlxuICAgKiBDb25maWd1cmUgcm95YWx0aWVzXG4gICAqIEByZW1hcmtzIFNldCB5b3VyIG93biByb3lhbHRpZXMgZm9yIHRoZSBlbnRpcmUgY29udHJhY3Qgb3IgcGVyIHRva2VuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gcm95YWx0aWVzIG9uIHRoZSB3aG9sZSBjb250cmFjdFxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0RGVmYXVsdFJveWFsdHlJbmZvKHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogMTAwLCAvLyAxJVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogLy8gb3ZlcnJpZGUgcm95YWx0eSBmb3IgYSBwYXJ0aWN1bGFyIHRva2VuXG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXRUb2tlblJveWFsdHlJbmZvKHRva2VuSWQsIHtcbiAgICogICBzZWxsZXJfZmVlX2Jhc2lzX3BvaW50czogNTAwLCAvLyA1JVxuICAgKiAgIGZlZV9yZWNpcGllbnQ6IFwiMHguLi5cIlxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIHRoaXMuYWJpID0gYWJpO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTXVsdGl3cmFwQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBNdWx0aXdyYXAuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucm95YWx0aWVzID0gbmV3IENvbnRyYWN0Um95YWx0eSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSk7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY29udGVudHMgb2YgYSB3cmFwcGVkIHRva2VuIGJ1bmRsZVxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgY29udHJhY3QuZ2V0V3JhcHBlZENvbnRlbnRzKHdyYXBwZWRUb2tlbklkKTtcbiAgICogY29uc29sZS5sb2coY29udGVudHMuZXJjMjBUb2tlbnMpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmM3MjFUb2tlbnMpO1xuICAgKiBjb25zb2xlLmxvZyhjb250ZW50cy5lcmMxMTU1VG9rZW5zKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB3cmFwcGVkVG9rZW5JZCAtIHRoZSBpZCBvZiB0aGUgd3JhcHBlZCB0b2tlbiBidW5kbGVcbiAgICovXG4gIGFzeW5jIGdldFdyYXBwZWRDb250ZW50cyh3cmFwcGVkVG9rZW5JZCkge1xuICAgIGNvbnN0IHdyYXBwZWRUb2tlbnMgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZ2V0V3JhcHBlZENvbnRlbnRzKHdyYXBwZWRUb2tlbklkKTtcbiAgICBjb25zdCBlcmMyMFRva2VucyA9IFtdO1xuICAgIGNvbnN0IGVyYzcyMVRva2VucyA9IFtdO1xuICAgIGNvbnN0IGVyYzExNTVUb2tlbnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHdyYXBwZWRUb2tlbnMpIHtcbiAgICAgIHN3aXRjaCAodG9rZW4udG9rZW5UeXBlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgZmV0Y2hDdXJyZW5jeU1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRva2VuLmFzc2V0Q29udHJhY3QpO1xuICAgICAgICAgICAgZXJjMjBUb2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbnRyYWN0QWRkcmVzczogdG9rZW4uYXNzZXRDb250cmFjdCxcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyh0b2tlbi50b3RhbEFtb3VudCwgdG9rZW5NZXRhZGF0YS5kZWNpbWFscylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjNzIxVG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICBjb250cmFjdEFkZHJlc3M6IHRva2VuLmFzc2V0Q29udHJhY3QsXG4gICAgICAgICAgICAgIHRva2VuSWQ6IHRva2VuLnRva2VuSWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJjMTE1NVRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiB0b2tlbi5hc3NldENvbnRyYWN0LFxuICAgICAgICAgICAgICB0b2tlbklkOiB0b2tlbi50b2tlbklkLFxuICAgICAgICAgICAgICBxdWFudGl0eTogdG9rZW4udG90YWxBbW91bnQudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlcmMyMFRva2VucyxcbiAgICAgIGVyYzcyMVRva2VucyxcbiAgICAgIGVyYzExNTVUb2tlbnNcbiAgICB9O1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBXUklURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIFdyYXAgYW55IG51bWJlciBvZiBFUkMyMC9FUkM3MjEvRVJDMTE1NSB0b2tlbnMgaW50byBhIHNpbmdsZSB3cmFwcGVkIHRva2VuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC53cmFwKHtcbiAgICogICBlcmMyMFRva2VuczogW3tcbiAgICogICAgIGNvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLFxuICAgKiAgICAgcXVhbnRpdHk6IFwiMC44XCJcbiAgICogICB9XSxcbiAgICogICBlcmM3MjFUb2tlbnM6IFt7XG4gICAqICAgICBjb250cmFjdEFkZHJlc3M6IFwiMHguLi5cIixcbiAgICogICAgIHRva2VuSWQ6IFwiMFwiXG4gICAqICAgfV0sXG4gICAqICAgZXJjMTE1NVRva2VuczogW3tcbiAgICogICAgIGNvbnRyYWN0QWRkcmVzczogXCIweC4uLlwiLFxuICAgKiAgICAgdG9rZW5JZDogXCIxXCIsXG4gICAqICAgICBxdWFudGl0eTogXCIyXCJcbiAgICogICB9XVxuICAgKiB9LCB7XG4gICAqICAgICBuYW1lOiBcIldyYXBwZWQgYnVuZGxlXCIsXG4gICAqICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgd3JhcHBlZCBidW5kbGUgb2YgdG9rZW5zIGFuZCBORlRzXCIsXG4gICAqICAgICBpbWFnZTogXCJpcGZzOi8vLi4uXCIsXG4gICAqIH0pO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdCgpOyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCB3cmFwcGVkVG9rZW5JZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIHdyYXBwZWQgdG9rZW4gYnVuZGxlXG4gICAqIGBgYFxuICAgKiBAcGFyYW0gY29udGVudHMgLSB0aGUgY29udGVudHMgdG8gd3JhcFxuICAgKiBAcGFyYW0gd3JhcHBlZFRva2VuTWV0YWRhdGEgLSBtZXRhZGF0YSB0byByZXByZXNlbnQgdGhlIHdyYXBwZWQgdG9rZW4gYnVuZGxlXG4gICAqIEBwYXJhbSByZWNpcGllbnRBZGRyZXNzIC0gT3B0aW9uYWwuIFRoZSBhZGRyZXNzIHRvIHNlbmQgdGhlIHdyYXBwZWQgdG9rZW4gYnVuZGxlIHRvXG4gICAqL1xuICBhc3luYyB3cmFwKGNvbnRlbnRzLCB3cmFwcGVkVG9rZW5NZXRhZGF0YSwgcmVjaXBpZW50QWRkcmVzcykge1xuICAgIGNvbnN0IHVyaSA9IGF3YWl0IHVwbG9hZE9yRXh0cmFjdFVSSSh3cmFwcGVkVG9rZW5NZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICBjb25zdCByZWNpcGllbnQgPSByZWNpcGllbnRBZGRyZXNzID8gcmVjaXBpZW50QWRkcmVzcyA6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKTtcbiAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCB0aGlzLnRvVG9rZW5TdHJ1Y3RMaXN0KGNvbnRlbnRzKTtcbiAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwid3JhcFwiLCBbdG9rZW5zLCB1cmksIHJlY2lwaWVudF0pO1xuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5jb250cmFjdFdyYXBwZXIucGFyc2VMb2dzKFwiVG9rZW5zV3JhcHBlZFwiLCByZWNlaXB0Py5sb2dzKTtcbiAgICBpZiAoZXZlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb2tlbnNXcmFwcGVkIGV2ZW50IG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5JZCA9IGV2ZW50WzBdLmFyZ3MudG9rZW5JZE9mV3JhcHBlZFRva2VuO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdG9rZW5JZCxcbiAgICAgIHJlY2VpcHQsXG4gICAgICBkYXRhOiAoKSA9PiB0aGlzLmdldCh0b2tlbklkKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVW53cmFwIGEgd3JhcHBlZCB0b2tlbiBidW5kbGUsIGFuZCByZXRyaWV2ZSBpdHMgY29udGVudHNcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBhd2FpdCBjb250cmFjdC51bndyYXAod3JhcHBlZFRva2VuSWQpO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHdyYXBwZWRUb2tlbklkIC0gdGhlIGlkIG9mIHRoZSB3cmFwcGVkIHRva2VuIGJ1bmRsZVxuICAgKiBAcGFyYW0gcmVjaXBpZW50QWRkcmVzcyAtIE9wdGlvbmFsLiBUaGUgYWRkcmVzcyB0byBzZW5kIHRoZSB1bndyYXBwZWQgdG9rZW5zIHRvXG4gICAqL1xuICBhc3luYyB1bndyYXAod3JhcHBlZFRva2VuSWQsIHJlY2lwaWVudEFkZHJlc3MpIHtcbiAgICBjb25zdCByZWNpcGllbnQgPSByZWNpcGllbnRBZGRyZXNzID8gcmVjaXBpZW50QWRkcmVzcyA6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwidW53cmFwXCIsIFt3cmFwcGVkVG9rZW5JZCwgcmVjaXBpZW50XSlcbiAgICB9O1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBQUklWQVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBhc3luYyB0b1Rva2VuU3RydWN0TGlzdChjb250ZW50cykge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKTtcbiAgICBjb25zdCBvd25lciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKTtcbiAgICBpZiAoY29udGVudHMuZXJjMjBUb2tlbnMpIHtcbiAgICAgIGZvciAoY29uc3QgZXJjMjAgb2YgY29udGVudHMuZXJjMjBUb2tlbnMpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFF1YW50aXR5ID0gYXdhaXQgbm9ybWFsaXplUHJpY2VWYWx1ZShwcm92aWRlciwgZXJjMjAucXVhbnRpdHksIGVyYzIwLmNvbnRyYWN0QWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGhhc0FsbG93YW5jZSA9IGF3YWl0IGhhc0VSQzIwQWxsb3dhbmNlKHRoaXMuY29udHJhY3RXcmFwcGVyLCBlcmMyMC5jb250cmFjdEFkZHJlc3MsIG5vcm1hbGl6ZWRRdWFudGl0eSk7XG4gICAgICAgIGlmICghaGFzQWxsb3dhbmNlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUkMyMCB0b2tlbiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzIwLmNvbnRyYWN0QWRkcmVzc31cIiBkb2VzIG5vdCBoYXZlIGVub3VnaCBhbGxvd2FuY2UgdG8gdHJhbnNmZXIuXFxuXFxuWW91IGNhbiBzZXQgYWxsb3dhbmNlIHRvIHRoZSBtdWx0aXdyYXAgY29udHJhY3QgdG8gdHJhbnNmZXIgdGhlc2UgdG9rZW5zIGJ5IHJ1bm5pbmc6XFxuXFxuYXdhaXQgc2RrLmdldFRva2VuKFwiJHtlcmMyMC5jb250cmFjdEFkZHJlc3N9XCIpLnNldEFsbG93YW5jZShcIiR7dGhpcy5nZXRBZGRyZXNzKCl9XCIsICR7ZXJjMjAucXVhbnRpdHl9KTtcXG5cXG5gKTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgICAgYXNzZXRDb250cmFjdDogZXJjMjAuY29udHJhY3RBZGRyZXNzLFxuICAgICAgICAgIHRvdGFsQW1vdW50OiBub3JtYWxpemVkUXVhbnRpdHksXG4gICAgICAgICAgdG9rZW5JZDogMCxcbiAgICAgICAgICB0b2tlblR5cGU6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb250ZW50cy5lcmM3MjFUb2tlbnMpIHtcbiAgICAgIGZvciAoY29uc3QgZXJjNzIxIG9mIGNvbnRlbnRzLmVyYzcyMVRva2Vucykge1xuICAgICAgICBjb25zdCBpc0FwcHJvdmVkID0gYXdhaXQgaXNUb2tlbkFwcHJvdmVkRm9yVHJhbnNmZXIodGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0UHJvdmlkZXIoKSwgdGhpcy5nZXRBZGRyZXNzKCksIGVyYzcyMS5jb250cmFjdEFkZHJlc3MsIGVyYzcyMS50b2tlbklkLCBvd25lcik7XG4gICAgICAgIGlmICghaXNBcHByb3ZlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJDNzIxIHRva2VuIFwiJHtlcmM3MjEudG9rZW5JZH1cIiB3aXRoIGNvbnRyYWN0IGFkZHJlc3MgXCIke2VyYzcyMS5jb250cmFjdEFkZHJlc3N9XCIgaXMgbm90IGFwcHJvdmVkIGZvciB0cmFuc2Zlci5cXG5cXG5Zb3UgY2FuIGdpdmUgYXBwcm92YWwgdGhlIG11bHRpd3JhcCBjb250cmFjdCB0byB0cmFuc2ZlciB0aGlzIHRva2VuIGJ5IHJ1bm5pbmc6XFxuXFxuYXdhaXQgc2RrLmdldE5GVENvbGxlY3Rpb24oXCIke2VyYzcyMS5jb250cmFjdEFkZHJlc3N9XCIpLnNldEFwcHJvdmFsRm9yVG9rZW4oXCIke3RoaXMuZ2V0QWRkcmVzcygpfVwiLCAke2VyYzcyMS50b2tlbklkfSk7XFxuXFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICAgIGFzc2V0Q29udHJhY3Q6IGVyYzcyMS5jb250cmFjdEFkZHJlc3MsXG4gICAgICAgICAgdG90YWxBbW91bnQ6IDAsXG4gICAgICAgICAgdG9rZW5JZDogZXJjNzIxLnRva2VuSWQsXG4gICAgICAgICAgdG9rZW5UeXBlOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGVudHMuZXJjMTE1NVRva2Vucykge1xuICAgICAgZm9yIChjb25zdCBlcmMxMTU1IG9mIGNvbnRlbnRzLmVyYzExNTVUb2tlbnMpIHtcbiAgICAgICAgY29uc3QgaXNBcHByb3ZlZCA9IGF3YWl0IGlzVG9rZW5BcHByb3ZlZEZvclRyYW5zZmVyKHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFByb3ZpZGVyKCksIHRoaXMuZ2V0QWRkcmVzcygpLCBlcmMxMTU1LmNvbnRyYWN0QWRkcmVzcywgZXJjMTE1NS50b2tlbklkLCBvd25lcik7XG4gICAgICAgIGlmICghaXNBcHByb3ZlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJDMTE1NSB0b2tlbiBcIiR7ZXJjMTE1NS50b2tlbklkfVwiIHdpdGggY29udHJhY3QgYWRkcmVzcyBcIiR7ZXJjMTE1NS5jb250cmFjdEFkZHJlc3N9XCIgaXMgbm90IGFwcHJvdmVkIGZvciB0cmFuc2Zlci5cXG5cXG5Zb3UgY2FuIGdpdmUgYXBwcm92YWwgdGhlIG11bHRpd3JhcCBjb250cmFjdCB0byB0cmFuc2ZlciB0aGlzIHRva2VuIGJ5IHJ1bm5pbmc6XFxuXFxuYXdhaXQgc2RrLmdldEVkaXRpb24oXCIke2VyYzExNTUuY29udHJhY3RBZGRyZXNzfVwiKS5zZXRBcHByb3ZhbEZvckFsbChcIiR7dGhpcy5nZXRBZGRyZXNzKCl9XCIsIHRydWUpO1xcblxcbmApO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICBhc3NldENvbnRyYWN0OiBlcmMxMTU1LmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgICB0b3RhbEFtb3VudDogZXJjMTE1NS5xdWFudGl0eSxcbiAgICAgICAgICB0b2tlbklkOiBlcmMxMTU1LnRva2VuSWQsXG4gICAgICAgICAgdG9rZW5UeXBlOiAyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCAuLi5hcmdzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KE11bHRpd3JhcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwidHJhbnNmZXJcIiwgXCJtaW50ZXJcIiwgXCJ1bndyYXBcIiwgXCJhc3NldFwiXSk7XG5cbmV4cG9ydCB7IE11bHRpd3JhcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9