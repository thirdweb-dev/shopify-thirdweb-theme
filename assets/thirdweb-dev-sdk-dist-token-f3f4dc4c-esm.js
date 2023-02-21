"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_token-f3f4dc4c_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/token-f3f4dc4c.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/token-f3f4dc4c.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
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
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @public
 */
class Token extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ay {
  /**
   * Signature Minting
   * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the tokens
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cK(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "history", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "signature", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d7, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, Token.contractRoles);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.history = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.av(this.contractWrapper, this.events);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.signature = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aw(this.contractWrapper, this.roles);
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get your wallet voting power for the current checkpoints
   *
   * @returns the amount of voting power in tokens
   */
  async getVoteBalance() {
    return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress());
  }
  async getVoteBalanceOf(account) {
    return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(account));
  }

  /**
   * Get your voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegation() {
    return await this.getDelegationOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get a specific address voting delegatee address
   *
   * @returns the address of your vote delegatee
   */
  async getDelegationOf(account) {
    return await this.contractWrapper.readContract.delegates(account);
  }

  /**
   * Get whether users can transfer tokens from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Mint Tokens for the connected wallet
   *
   * @remarks See {@link Token.mintTo}
   */
  async mint(amount) {
    return this.erc20.mint(amount);
  }

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   *
   * await contract.mintTo(toAddress, amount);
   * ```
   */
  async mintTo(to, amount) {
    return this.erc20.mintTo(to, amount);
  }

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   */
  async getMintTransaction(to, amount) {
    return this.erc20.getMintTransaction(to, amount);
  }

  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.mintBatchTo(data);
   * ```
   */
  async mintBatchTo(args) {
    return this.erc20.mintBatchTo(args);
  }

  /**
   * Lets you delegate your voting power to the delegateeAddress
   *
   * @param delegateeAddress - delegatee wallet address
   * @alpha
   */
  async delegateTo(delegateeAddress) {
    return {
      receipt: await this.contractWrapper.sendTransaction("delegate", [delegateeAddress])
    };
  }

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnTokens(amount);
   * ```
   */
  async burn(amount) {
    return this.erc20.burn(amount);
  }

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.burnFrom(holderAddress, amount);
   * ```
   */
  async burnFrom(holder, amount) {
    return this.erc20.burnFrom(holder, amount);
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(Token, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXRva2VuLWYzZjRkYzRjLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDeVU7QUFDM1c7QUFDcEI7QUFDRjtBQUM4QztBQUNBO0FBQ0M7QUFDcEM7QUFDMEM7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ1E7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDRztBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNMO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDTDtBQUNDO0FBQ0Q7QUFDdEM7QUFDUztBQUNQO0FBQ3NDO0FBQzlCO0FBQ21DO0FBQ1I7QUFDVztBQUMvQztBQUNHO0FBQ1g7QUFDcUQ7QUFDQztBQUNRO0FBQ2Y7QUFDQztBQUNPO0FBQ1E7QUFDQztBQUNoRTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLG1FQUFlO0FBQ2pIO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CO0FBQ0Esd0JBQXdCLG1FQUFnQix1QkFBdUIsbUVBQXdCO0FBQ3ZGLHFCQUFxQixtRUFBYTtBQUNsQyxxQkFBcUIsbUVBQW1CO0FBQ3hDLHNCQUFzQixtRUFBYztBQUNwQyx1QkFBdUIsbUVBQWlCO0FBQ3hDLHVCQUF1QixtRUFBZTtBQUN0Qyx5QkFBeUIsbUVBQWdCO0FBQ3pDLDRCQUE0QixtRUFBbUI7QUFDL0MsMkJBQTJCLG1FQUFtQjtBQUM5Qyx5QkFBeUIsbUVBQXNCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSx1RUFBVyxjQUFjLGdEQUFxQjtBQUM1SDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEdBQUc7QUFDN0MsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvdG9rZW4tZjNmNGRjNGMuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgYXkgYXMgU3RhbmRhcmRFcmMyMCwgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBkNyBhcyBUb2tlbkVyYzIwQ29udHJhY3RTY2hlbWEsIGFsIGFzIENvbnRyYWN0Um9sZXMsIGFuIGFzIENvbnRyYWN0UHJpbWFyeVNhbGUsIGFWIGFzIENvbnRyYWN0RXZlbnRzLCBhdiBhcyBUb2tlbkVSQzIwSGlzdG9yeSwgYWogYXMgQ29udHJhY3RFbmNvZGVyLCBhVSBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhWCBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBhVyBhcyBDb250cmFjdEludGVyY2VwdG9yLCBhdyBhcyBFcmMyMFNpZ25hdHVyZU1pbnRhYmxlLCBiQSBhcyBnZXRSb2xlSGFzaCB9IGZyb20gJy4vdGhpcmR3ZWItY2hlY2tvdXQtMzNmMTM5NTUuZXNtLmpzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnem9kJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnYnM1OCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgc3RhbmRhcmQgY3J5cHRvIHRva2VuIG9yIGNyeXB0b2N1cnJlbmN5LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcInRva2VuXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBUb2tlbiBleHRlbmRzIFN0YW5kYXJkRXJjMjAge1xuICAvKipcbiAgICogU2lnbmF0dXJlIE1pbnRpbmdcbiAgICogQHJlbWFya3MgR2VuZXJhdGUgdG9rZW5zIHRoYXQgY2FuIGJlIG1pbnRlZCBvbmx5IHdpdGggeW91ciBvd24gc2lnbmF0dXJlLCBhdHRhY2hpbmcgeW91ciBvd24gc2V0IG9mIG1pbnQgY29uZGl0aW9ucy5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBzZWUgaG93IHRvIGNyYWZ0IGEgcGF5bG9hZCB0byBzaWduIGluIHRoZSBgY29udHJhY3Quc2lnbmF0dXJlLmdlbmVyYXRlKClgIGRvY3VtZW50YXRpb25cbiAgICogY29uc3Qgc2lnbmVkUGF5bG9hZCA9IGNvbnRyYWN0LnNpZ25hdHVyZS5nZW5lcmF0ZShwYXlsb2FkKTtcbiAgICpcbiAgICogLy8gbm93IGFueW9uZSBjYW4gbWludCB0aGUgdG9rZW5zXG4gICAqIGNvbnN0IHR4ID0gY29udHJhY3Quc2lnbmF0dXJlLm1pbnQoc2lnbmVkUGF5bG9hZCk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgbWludCB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoaXN0b3J5XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzaWduYXR1cmVcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIHRoaXMuYWJpID0gYWJpO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgVG9rZW5FcmMyMENvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgVG9rZW4uY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5zYWxlcyA9IG5ldyBDb250cmFjdFByaW1hcnlTYWxlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5oaXN0b3J5ID0gbmV3IFRva2VuRVJDMjBIaXN0b3J5KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLmV2ZW50cyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IG5ldyBFcmMyMFNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnJvbGVzKTtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB5b3VyIHdhbGxldCB2b3RpbmcgcG93ZXIgZm9yIHRoZSBjdXJyZW50IGNoZWNrcG9pbnRzXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBhbW91bnQgb2Ygdm90aW5nIHBvd2VyIGluIHRva2Vuc1xuICAgKi9cbiAgYXN5bmMgZ2V0Vm90ZUJhbGFuY2UoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0Vm90ZUJhbGFuY2VPZihhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCkpO1xuICB9XG4gIGFzeW5jIGdldFZvdGVCYWxhbmNlT2YoYWNjb3VudCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmVyYzIwLmdldFZhbHVlKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5nZXRWb3RlcyhhY2NvdW50KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHlvdXIgdm90aW5nIGRlbGVnYXRlZSBhZGRyZXNzXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIG9mIHlvdXIgdm90ZSBkZWxlZ2F0ZWVcbiAgICovXG4gIGFzeW5jIGdldERlbGVnYXRpb24oKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RGVsZWdhdGlvbk9mKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc3BlY2lmaWMgYWRkcmVzcyB2b3RpbmcgZGVsZWdhdGVlIGFkZHJlc3NcbiAgICpcbiAgICogQHJldHVybnMgdGhlIGFkZHJlc3Mgb2YgeW91ciB2b3RlIGRlbGVnYXRlZVxuICAgKi9cbiAgYXN5bmMgZ2V0RGVsZWdhdGlvbk9mKGFjY291bnQpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmRlbGVnYXRlcyhhY2NvdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB1c2VycyBjYW4gdHJhbnNmZXIgdG9rZW5zIGZyb20gdGhpcyBjb250cmFjdFxuICAgKi9cbiAgYXN5bmMgaXNUcmFuc2ZlclJlc3RyaWN0ZWQoKSB7XG4gICAgY29uc3QgYW55b25lQ2FuVHJhbnNmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcInRyYW5zZmVyXCIpLCBjb25zdGFudHMuQWRkcmVzc1plcm8pO1xuICAgIHJldHVybiAhYW55b25lQ2FuVHJhbnNmZXI7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogTWludCBUb2tlbnMgZm9yIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgVG9rZW4ubWludFRvfVxuICAgKi9cbiAgYXN5bmMgbWludChhbW91bnQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMyMC5taW50KGFtb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogTWludCBUb2tlbnNcbiAgICpcbiAgICogQHJlbWFya3MgTWludCB0b2tlbnMgdG8gYSBzcGVjaWZpZWQgYWRkcmVzcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB0b0FkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiOyAvLyBBZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gbWludCB0aGUgdG9rZW5zIHRvXG4gICAqIGNvbnN0IGFtb3VudCA9IFwiMS41XCI7IC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBtaW50XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0Lm1pbnRUbyh0b0FkZHJlc3MsIGFtb3VudCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgbWludFRvKHRvLCBhbW91bnQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMyMC5taW50VG8odG8sIGFtb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgbWludCB0cmFuc2FjdGlvbiB3aXRob3V0IGV4ZWN1dGluZyBpdC5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGVzdGltYXRpbmcgdGhlIGdhcyBjb3N0IG9mIGEgbWludCB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gcmVjZWl2ZXIgLSBBZGRyZXNzIHlvdSB3YW50IHRvIHNlbmQgdGhlIHRva2VuIHRvXG4gICAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIHRva2VucyB5b3Ugd2FudCB0byBtaW50XG4gICAqL1xuICBhc3luYyBnZXRNaW50VHJhbnNhY3Rpb24odG8sIGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLmVyYzIwLmdldE1pbnRUcmFuc2FjdGlvbih0bywgYW1vdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaW50IFRva2VucyBUbyBNYW55IFdhbGxldHNcbiAgICpcbiAgICogQHJlbWFya3MgTWludCB0b2tlbnMgdG8gbWFueSB3YWxsZXRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBEYXRhIG9mIHRoZSB0b2tlbnMgeW91IHdhbnQgdG8gbWludFxuICAgKiBjb25zdCBkYXRhID0gW1xuICAgKiAgIHtcbiAgICogICAgIHRvQWRkcmVzczogXCJ7e3dhbGxldF9hZGRyZXNzfX1cIiwgLy8gQWRkcmVzcyB0byBtaW50IHRva2VucyB0b1xuICAgKiAgICAgYW1vdW50OiAwLjIsIC8vIEhvdyBtYW55IHRva2VucyB0byBtaW50IHRvIHNwZWNpZmllZCBhZGRyZXNzXG4gICAqICAgfSxcbiAgICogIHtcbiAgICogICAgdG9BZGRyZXNzOiBcIjB4Li4uXCIsXG4gICAqICAgIGFtb3VudDogMS40LFxuICAgKiAgfVxuICAgKiBdXG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0Lm1pbnRCYXRjaFRvKGRhdGEpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG1pbnRCYXRjaFRvKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMyMC5taW50QmF0Y2hUbyhhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMZXRzIHlvdSBkZWxlZ2F0ZSB5b3VyIHZvdGluZyBwb3dlciB0byB0aGUgZGVsZWdhdGVlQWRkcmVzc1xuICAgKlxuICAgKiBAcGFyYW0gZGVsZWdhdGVlQWRkcmVzcyAtIGRlbGVnYXRlZSB3YWxsZXQgYWRkcmVzc1xuICAgKiBAYWxwaGFcbiAgICovXG4gIGFzeW5jIGRlbGVnYXRlVG8oZGVsZWdhdGVlQWRkcmVzcykge1xuICAgIHJldHVybiB7XG4gICAgICByZWNlaXB0OiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5zZW5kVHJhbnNhY3Rpb24oXCJkZWxlZ2F0ZVwiLCBbZGVsZWdhdGVlQWRkcmVzc10pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXJuIFRva2Vuc1xuICAgKlxuICAgKiBAcmVtYXJrcyBCdXJuIHRva2VucyBoZWxkIGJ5IHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gVGhlIGFtb3VudCBvZiB0aGlzIHRva2VuIHlvdSB3YW50IHRvIGJ1cm5cbiAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5idXJuVG9rZW5zKGFtb3VudCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgYnVybihhbW91bnQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMyMC5idXJuKGFtb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogQnVybiBUb2tlbnNcbiAgICpcbiAgICogQHJlbWFya3MgQnVybiB0b2tlbnMgaGVsZCBieSB0aGUgc3BlY2lmaWVkIHdhbGxldFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCBzZW5kaW5nIHRoZSB0b2tlbnNcbiAgICogY29uc3QgaG9sZGVyQWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqXG4gICAqIC8vIFRoZSBhbW91bnQgb2YgdGhpcyB0b2tlbiB5b3Ugd2FudCB0byBidXJuXG4gICAqIGNvbnN0IGFtb3VudCA9IDEuMjtcbiAgICpcbiAgICogYXdhaXQgY29udHJhY3QuYnVybkZyb20oaG9sZGVyQWRkcmVzcywgYW1vdW50KTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBidXJuRnJvbShob2xkZXIsIGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLmVyYzIwLmJ1cm5Gcm9tKGhvbGRlciwgYW1vdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIGNhbGwoZnVuY3Rpb25OYW1lKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5jYWxsKGZ1bmN0aW9uTmFtZSwgLi4uYXJncyk7XG4gIH1cbn1cbl9kZWZpbmVQcm9wZXJ0eShUb2tlbiwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBUb2tlbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9