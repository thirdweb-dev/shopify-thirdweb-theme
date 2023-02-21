"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_token-drop-b51e01f9_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/token-drop-b51e01f9.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/token-drop-b51e01f9.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenDrop": () => (/* binding */ TokenDrop)
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
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token-drop");
 * ```
 *
 */
class TokenDrop extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ay {
  /**
   * Configure claim conditions
   * @remarks Define who can claim Tokens, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
   *     price: 0.001, // presale price per token
   *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.008, // public sale price per token
   *   }
   * ]);
   * await contract.claimConditions.set(claimConditions);
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "claimConditions", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d6, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, TokenDrop.contractRoles);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.claimConditions = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ap(this.contractWrapper, this.metadata, this.storage);
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
   * Claim a certain amount of tokens
   * @remarks See {@link TokenDrop.claimTo}
   * @param amount - the amount of tokens to mint
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   */
  async claim(amount) {
    let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.claimTo(await this.contractWrapper.getSignerAddress(), amount, checkERC20Allowance);
  }

  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - The transaction receipt
   */
  async claimTo(destinationAddress, amount) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc20.claimTo(destinationAddress, amount, {
      checkERC20Allowance
    });
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
  async burnTokens(amount) {
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(TokenDrop, "contractRoles", ["admin", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXRva2VuLWRyb3AtYjUxZTAxZjktZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUM0UztBQUM5VTtBQUNwQjtBQUNGO0FBQzhDO0FBQ0E7QUFDQztBQUNwQztBQUMwQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDUTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNHO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ0w7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNMO0FBQ0M7QUFDRDtBQUN0QztBQUNTO0FBQ1A7QUFDc0M7QUFDOUI7QUFDbUM7QUFDUjtBQUNXO0FBQy9DO0FBQ0c7QUFDWDtBQUNxRDtBQUNDO0FBQ1E7QUFDZjtBQUNDO0FBQ087QUFDUTtBQUNDO0FBQ2hFOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLG1FQUFlO0FBQ2pIO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQjtBQUNBLHdCQUF3QixtRUFBZ0IsdUJBQXVCLG1FQUF1QjtBQUN0RixxQkFBcUIsbUVBQWE7QUFDbEMsdUJBQXVCLG1FQUFlO0FBQ3RDLHlCQUF5QixtRUFBZ0I7QUFDekMsc0JBQXNCLG1FQUFjO0FBQ3BDLHFCQUFxQixtRUFBbUI7QUFDeEMsNEJBQTRCLG1FQUFtQjtBQUMvQywyQkFBMkIsbUVBQW1CO0FBQzlDLCtCQUErQixtRUFBbUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVFQUFXLGNBQWMsZ0RBQXFCO0FBQzVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEdBQUc7QUFDM0MsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvdG9rZW4tZHJvcC1iNTFlMDFmOS5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXyBhcyBfZGVmaW5lUHJvcGVydHkgfSBmcm9tICcuL1F1ZXJ5UGFyYW1zLWRhODhkMjdjLmVzbS5qcyc7XG5pbXBvcnQgeyBheSBhcyBTdGFuZGFyZEVyYzIwLCBjSyBhcyBDb250cmFjdFdyYXBwZXIsIGFrIGFzIENvbnRyYWN0TWV0YWRhdGEsIGQ2IGFzIERyb3BFcmMyMENvbnRyYWN0U2NoZW1hLCBhbCBhcyBDb250cmFjdFJvbGVzLCBhaiBhcyBDb250cmFjdEVuY29kZXIsIGFVIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFWIGFzIENvbnRyYWN0RXZlbnRzLCBhbiBhcyBDb250cmFjdFByaW1hcnlTYWxlLCBhWCBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBhVyBhcyBDb250cmFjdEludGVyY2VwdG9yLCBhcCBhcyBEcm9wQ2xhaW1Db25kaXRpb25zLCBiQSBhcyBnZXRSb2xlSGFzaCB9IGZyb20gJy4vdGhpcmR3ZWItY2hlY2tvdXQtMzNmMTM5NTUuZXNtLmpzJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgJ2JuLmpzJztcbmltcG9ydCAnem9kJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxNjUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ3RpbnktaW52YXJpYW50JztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzIwX1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2VfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNdWx0aWNhbGwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkM3MjFfVjMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFTdXBwbHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTGF6eU1pbnQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvTGF6eU1pbnRXaXRoVGllci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMTE1NV9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTVfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTWludGFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRVJDMjc3MUNvbnRleHQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQXBwVVJJLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNvbnRyYWN0TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGlyZWN0TGlzdGluZ3MuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRW5nbGlzaEF1Y3Rpb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU9mZmVycy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQYWNrVlJGRGlyZWN0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBlcm1pc3Npb25zRW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQbGF0Zm9ybUZlZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQcmltYXJ5U2FsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm95YWx0eS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL093bmFibGUuanNvbic7XG5pbXBvcnQgJ2Nyb3NzLWZldGNoJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jaGFpbnMnO1xuaW1wb3J0ICdldmVudGVtaXR0ZXIzJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0ZvcndhcmRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9zdG9yYWdlJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyME1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVRoaXJkd2ViQ29udHJhY3QuanNvbic7XG5pbXBvcnQgJ21lcmtsZXRyZWVqcyc7XG5pbXBvcnQgJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgJ3V1aWQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEZWxheWVkUmV2ZWFsRGVwcmVjYXRlZC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXRmFjdG9yeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXUmVnaXN0cnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Db250cmFjdFB1Ymxpc2hlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5TG9naWMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeVJvdXRlci5qc29uJztcbmltcG9ydCAnYnM1OCc7XG5cbi8qKlxuICogQ3JlYXRlIGEgRHJvcCBjb250cmFjdCBmb3IgYSBzdGFuZGFyZCBjcnlwdG8gdG9rZW4gb3IgY3J5cHRvY3VycmVuY3kuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwidG9rZW4tZHJvcFwiKTtcbiAqIGBgYFxuICpcbiAqL1xuY2xhc3MgVG9rZW5Ecm9wIGV4dGVuZHMgU3RhbmRhcmRFcmMyMCB7XG4gIC8qKlxuICAgKiBDb25maWd1cmUgY2xhaW0gY29uZGl0aW9uc1xuICAgKiBAcmVtYXJrcyBEZWZpbmUgd2hvIGNhbiBjbGFpbSBUb2tlbnMsIHdoZW4gYW5kIGhvdyBtYW55LlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHByZXNhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgKiBjb25zdCBwdWJsaWNTYWxlU3RhcnRUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogNjAgKiAyNCAqIDEwMDApO1xuICAgKiBjb25zdCBjbGFpbUNvbmRpdGlvbnMgPSBbXG4gICAqICAge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwcmVzYWxlU3RhcnRUaW1lLCAvLyBzdGFydCB0aGUgcHJlc2FsZSBub3dcbiAgICogICAgIG1heFF1YW50aXR5OiAzMTE3LjQyLCAvLyBsaW1pdCBob3cgbWFueSB0b2tlbnMgYXJlIHJlbGVhc2VkIGluIHRoaXMgcHJlc2FsZVxuICAgKiAgICAgcHJpY2U6IDAuMDAxLCAvLyBwcmVzYWxlIHByaWNlIHBlciB0b2tlblxuICAgKiAgICAgc25hcHNob3Q6IFsnMHguLi4nLCAnMHguLi4nXSwgLy8gbGltaXQgY2xhaW1pbmcgdG8gb25seSBjZXJ0YWluIGFkZHJlc3Nlc1xuICAgKiAgIH0sXG4gICAqICAge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwdWJsaWNTYWxlU3RhcnRUaW1lLCAvLyAyNGggYWZ0ZXIgcHJlc2FsZSwgc3RhcnQgcHVibGljIHNhbGVcbiAgICogICAgIHByaWNlOiAwLjAwOCwgLy8gcHVibGljIHNhbGUgcHJpY2UgcGVyIHRva2VuXG4gICAqICAgfVxuICAgKiBdKTtcbiAgICogYXdhaXQgY29udHJhY3QuY2xhaW1Db25kaXRpb25zLnNldChjbGFpbUNvbmRpdGlvbnMpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJldmVudHNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFpbUNvbmRpdGlvbnNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIHRoaXMuYWJpID0gYWJpO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgRHJvcEVyYzIwQ29udHJhY3RTY2hlbWEsIHRoaXMuc3RvcmFnZSk7XG4gICAgdGhpcy5yb2xlcyA9IG5ldyBDb250cmFjdFJvbGVzKHRoaXMuY29udHJhY3RXcmFwcGVyLCBUb2tlbkRyb3AuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5pbnRlcmNlcHRvciA9IG5ldyBDb250cmFjdEludGVyY2VwdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmNsYWltQ29uZGl0aW9ucyA9IG5ldyBEcm9wQ2xhaW1Db25kaXRpb25zKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBSRUFEIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogR2V0IHlvdXIgd2FsbGV0IHZvdGluZyBwb3dlciBmb3IgdGhlIGN1cnJlbnQgY2hlY2twb2ludHNcbiAgICpcbiAgICogQHJldHVybnMgdGhlIGFtb3VudCBvZiB2b3RpbmcgcG93ZXIgaW4gdG9rZW5zXG4gICAqL1xuICBhc3luYyBnZXRWb3RlQmFsYW5jZSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRWb3RlQmFsYW5jZU9mKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSk7XG4gIH1cbiAgYXN5bmMgZ2V0Vm90ZUJhbGFuY2VPZihhY2NvdW50KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZXJjMjAuZ2V0VmFsdWUoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmdldFZvdGVzKGFjY291bnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgeW91ciB2b3RpbmcgZGVsZWdhdGVlIGFkZHJlc3NcbiAgICpcbiAgICogQHJldHVybnMgdGhlIGFkZHJlc3Mgb2YgeW91ciB2b3RlIGRlbGVnYXRlZVxuICAgKi9cbiAgYXN5bmMgZ2V0RGVsZWdhdGlvbigpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXREZWxlZ2F0aW9uT2YoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuZ2V0U2lnbmVyQWRkcmVzcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBzcGVjaWZpYyBhZGRyZXNzIHZvdGluZyBkZWxlZ2F0ZWUgYWRkcmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgYWRkcmVzcyBvZiB5b3VyIHZvdGUgZGVsZWdhdGVlXG4gICAqL1xuICBhc3luYyBnZXREZWxlZ2F0aW9uT2YoYWNjb3VudCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuZGVsZWdhdGVzKGFjY291bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciB0b2tlbnMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDbGFpbSBhIGNlcnRhaW4gYW1vdW50IG9mIHRva2Vuc1xuICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIFRva2VuRHJvcC5jbGFpbVRvfVxuICAgKiBAcGFyYW0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB0b2tlbnMgdG8gbWludFxuICAgKiBAcGFyYW0gY2hlY2tFUkMyMEFsbG93YW5jZSAtIE9wdGlvbmFsLCBjaGVjayBpZiB0aGUgd2FsbGV0IGhhcyBlbm91Z2ggRVJDMjAgYWxsb3dhbmNlIHRvIGNsYWltIHRoZSB0b2tlbnMsIGFuZCBpZiBub3QsIGFwcHJvdmUgdGhlIHRyYW5zZmVyXG4gICAqL1xuICBhc3luYyBjbGFpbShhbW91bnQpIHtcbiAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5jbGFpbVRvKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKSwgYW1vdW50LCBjaGVja0VSQzIwQWxsb3dhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFpbSBhIGNlcnRhaW4gYW1vdW50IG9mIHRva2VucyB0byBhIHNwZWNpZmljIFdhbGxldFxuICAgKlxuICAgKiBAcmVtYXJrcyBMZXQgdGhlIHNwZWNpZmllZCB3YWxsZXQgY2xhaW0gVG9rZW5zLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiOyAvLyBhZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gY2xhaW0gdGhlIE5GVHNcbiAgICogY29uc3QgcXVhbnRpdHkgPSA0Mi42OTsgLy8gaG93IG1hbnkgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QuY2xhaW1UbyhhZGRyZXNzLCBxdWFudGl0eSk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uQWRkcmVzcyAtIEFkZHJlc3MgeW91IHdhbnQgdG8gc2VuZCB0aGUgdG9rZW4gdG9cbiAgICogQHBhcmFtIGFtb3VudCAtIFF1YW50aXR5IG9mIHRoZSB0b2tlbnMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgKlxuICAgKiBAcmV0dXJucyAtIFRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqL1xuICBhc3luYyBjbGFpbVRvKGRlc3RpbmF0aW9uQWRkcmVzcywgYW1vdW50KSB7XG4gICAgbGV0IGNoZWNrRVJDMjBBbGxvd2FuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZXJjMjAuY2xhaW1UbyhkZXN0aW5hdGlvbkFkZHJlc3MsIGFtb3VudCwge1xuICAgICAgY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgeW91IGRlbGVnYXRlIHlvdXIgdm90aW5nIHBvd2VyIHRvIHRoZSBkZWxlZ2F0ZWVBZGRyZXNzXG4gICAqXG4gICAqIEBwYXJhbSBkZWxlZ2F0ZWVBZGRyZXNzIC0gZGVsZWdhdGVlIHdhbGxldCBhZGRyZXNzXG4gICAqIEBhbHBoYVxuICAgKi9cbiAgYXN5bmMgZGVsZWdhdGVUbyhkZWxlZ2F0ZWVBZGRyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY2VpcHQ6IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnNlbmRUcmFuc2FjdGlvbihcImRlbGVnYXRlXCIsIFtkZWxlZ2F0ZWVBZGRyZXNzXSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1cm4gVG9rZW5zXG4gICAqXG4gICAqIEByZW1hcmtzIEJ1cm4gdG9rZW5zIGhlbGQgYnkgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBUaGUgYW1vdW50IG9mIHRoaXMgdG9rZW4geW91IHdhbnQgdG8gYnVyblxuICAgKiBjb25zdCBhbW91bnQgPSAxLjI7XG4gICAqXG4gICAqIGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbnMoYW1vdW50KTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBidXJuVG9rZW5zKGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLmVyYzIwLmJ1cm4oYW1vdW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXJuIFRva2Vuc1xuICAgKlxuICAgKiBAcmVtYXJrcyBCdXJuIHRva2VucyBoZWxkIGJ5IHRoZSBzcGVjaWZpZWQgd2FsbGV0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHNlbmRpbmcgdGhlIHRva2Vuc1xuICAgKiBjb25zdCBob2xkZXJBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICpcbiAgICogLy8gVGhlIGFtb3VudCBvZiB0aGlzIHRva2VuIHlvdSB3YW50IHRvIGJ1cm5cbiAgICogY29uc3QgYW1vdW50ID0gMS4yO1xuICAgKlxuICAgKiBhd2FpdCBjb250cmFjdC5idXJuRnJvbShob2xkZXJBZGRyZXNzLCBhbW91bnQpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJ1cm5Gcm9tKGhvbGRlciwgYW1vdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMjAuYnVybkZyb20oaG9sZGVyLCBhbW91bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCAuLi5hcmdzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KFRva2VuRHJvcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBUb2tlbkRyb3AgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==