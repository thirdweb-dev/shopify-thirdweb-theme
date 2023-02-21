"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_edition-d41afbc8_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/edition-d41afbc8.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/edition-d41afbc8.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Edition": () => (/* binding */ Edition)
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
 * Create a collection of NFTs that lets you mint multiple copies of each NFT.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "edition");
 * ```
 *
 * @public
 */
class Edition extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aQ {
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

  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "signature", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "erc1155", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cM, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, Edition.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.signature = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aN(this.contractWrapper, this.storage, this.roles);
    this.erc1155 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aJ(this.contractWrapper, this.storage, chainId);
    this.owner = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aZ(this.contractWrapper);
  }

  /**
   * @internal
   */
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
   * Get All Minted NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

  /**
   * Get Owned NFTs
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of NFTs minted
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
  }

  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_68__.AddressZero);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Mint NFT for the connected wallet
   *
   * @remarks See {@link Edition.mintTo}
   */
  async mint(metadataWithSupply) {
    return this.erc1155.mint(metadataWithSupply);
  }

  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.mintTo(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  async mintTo(to, metadataWithSupply) {
    return this.erc1155.mintTo(to, metadataWithSupply);
  }

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadataWithSupply - The metadata of the NFT you want to mint
   */
  async getMintTransaction(receiver, metadataWithSupply) {
    return this.erc1155.getMintTransaction(receiver, metadataWithSupply);
  }

  /**
   * Increase the supply of an existing NFT and mint it to the connected wallet
   *
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   */
  async mintAdditionalSupply(tokenId, additionalSupply) {
    return this.erc1155.mintAdditionalSupply(tokenId, additionalSupply);
  }

  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   */
  async mintAdditionalSupplyTo(to, tokenId, additionalSupply) {
    return this.erc1155.mintAdditionalSupplyTo(to, tokenId, additionalSupply);
  }

  /**
   * Mint Many NFTs for the connected wallet
   *
   * @remarks See {@link Edition.mintBatchTo}
   */
  async mintBatch(metadatas) {
    return this.erc1155.mintBatch(metadatas);
  }

  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  async mintBatchTo(to, metadataWithSupply) {
    return this.erc1155.mintBatchTo(to, metadataWithSupply);
  }

  /**
   * Burn a specified amount of a NFT
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnTokens(tokenId, amount);
   * ```
   */
  async burn(tokenId, amount) {
    return this.erc1155.burn(tokenId, amount);
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(Edition, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LWVkaXRpb24tZDQxYWZiYzgtZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNpWDtBQUNuWjtBQUNwQjtBQUNGO0FBQzhDO0FBQ0E7QUFDQztBQUNwQztBQUMwQztBQUNUO0FBQ1E7QUFDRztBQUNHO0FBQ2I7QUFDUTtBQUNKO0FBQ1M7QUFDSjtBQUNDO0FBQ0Y7QUFDQTtBQUNHO0FBQ0o7QUFDSjtBQUNNO0FBQ0s7QUFDRztBQUNQO0FBQ0E7QUFDQztBQUNSO0FBQ007QUFDSztBQUNHO0FBQ0w7QUFDRjtBQUNLO0FBQ1A7QUFDUDtBQUNVO0FBQ0Y7QUFDQztBQUNUO0FBQ087QUFDRjtBQUNVO0FBQ1Y7QUFDQTtBQUNMO0FBQ0M7QUFDRDtBQUN0QztBQUNTO0FBQ1A7QUFDc0M7QUFDOUI7QUFDbUM7QUFDUjtBQUNXO0FBQy9DO0FBQ0c7QUFDWDtBQUNxRDtBQUNDO0FBQ1E7QUFDZjtBQUNDO0FBQ087QUFDUTtBQUNDO0FBQ2hFOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csbUVBQWU7QUFDakg7QUFDQSxJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CO0FBQ0Esd0JBQXdCLG1FQUFnQix1QkFBdUIsbUVBQTBCO0FBQ3pGLHFCQUFxQixtRUFBYTtBQUNsQyx5QkFBeUIsbUVBQWU7QUFDeEMscUJBQXFCLG1FQUFtQjtBQUN4Qyx1QkFBdUIsbUVBQWU7QUFDdEMseUJBQXlCLG1FQUFnQjtBQUN6QyxzQkFBc0IsbUVBQWM7QUFDcEMsNEJBQTRCLG1FQUFtQjtBQUMvQywyQkFBMkIsbUVBQW1CO0FBQzlDLHlCQUF5QixtRUFBd0I7QUFDakQsdUJBQXVCLG1FQUFPO0FBQzlCLHFCQUFxQixtRUFBYTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVFQUFXLGNBQWMsZ0RBQXFCO0FBQzVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFlOztBQUVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L2VkaXRpb24tZDQxYWZiYzguZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5IH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgYVEgYXMgU3RhbmRhcmRFcmMxMTU1LCBjSyBhcyBDb250cmFjdFdyYXBwZXIsIGFrIGFzIENvbnRyYWN0TWV0YWRhdGEsIGNNIGFzIFRva2VuRXJjMTE1NUNvbnRyYWN0U2NoZW1hLCBhbCBhcyBDb250cmFjdFJvbGVzLCBhbSBhcyBDb250cmFjdFJveWFsdHksIGFuIGFzIENvbnRyYWN0UHJpbWFyeVNhbGUsIGFqIGFzIENvbnRyYWN0RW5jb2RlciwgYVUgYXMgR2FzQ29zdEVzdGltYXRvciwgYVYgYXMgQ29udHJhY3RFdmVudHMsIGFYIGFzIENvbnRyYWN0UGxhdGZvcm1GZWUsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFOIGFzIEVyYzExNTVTaWduYXR1cmVNaW50YWJsZSwgYUogYXMgRXJjMTE1NSwgYVogYXMgQ29udHJhY3RPd25lciwgYkEgYXMgZ2V0Um9sZUhhc2ggfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTMzZjEzOTU1LmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1JvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ2JzNTgnO1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbGxlY3Rpb24gb2YgTkZUcyB0aGF0IGxldHMgeW91IG1pbnQgbXVsdGlwbGUgY29waWVzIG9mIGVhY2ggTkZULlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcImVkaXRpb25cIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEVkaXRpb24gZXh0ZW5kcyBTdGFuZGFyZEVyYzExNTUge1xuICAvKipcbiAgICogQ29uZmlndXJlIHJveWFsdGllc1xuICAgKiBAcmVtYXJrcyBTZXQgeW91ciBvd24gcm95YWx0aWVzIGZvciB0aGUgZW50aXJlIGNvbnRyYWN0IG9yIHBlciB0b2tlblxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciB0b2tlblxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0VG9rZW5Sb3lhbHR5SW5mbyh0b2tlbklkLCB7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDUwMCwgLy8gNSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogU2lnbmF0dXJlIE1pbnRpbmdcbiAgICogQHJlbWFya3MgR2VuZXJhdGUgZHluYW1pYyBORlRzIHdpdGggeW91ciBvd24gc2lnbmF0dXJlLCBhbmQgbGV0IG90aGVycyBtaW50IHRoZW0gdXNpbmcgdGhhdCBzaWduYXR1cmUuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gc2VlIGhvdyB0byBjcmFmdCBhIHBheWxvYWQgdG8gc2lnbiBpbiB0aGUgYGNvbnRyYWN0LnNpZ25hdHVyZS5nZW5lcmF0ZSgpYCBkb2N1bWVudGF0aW9uXG4gICAqIGNvbnN0IHNpZ25lZFBheWxvYWQgPSBjb250cmFjdC5zaWduYXR1cmUuZ2VuZXJhdGUocGF5bG9hZCk7XG4gICAqXG4gICAqIC8vIG5vdyBhbnlvbmUgY2FuIG1pbnQgdGhlIE5GVFxuICAgKiBjb25zdCB0eCA9IGNvbnRyYWN0LnNpZ25hdHVyZS5taW50KHNpZ25lZFBheWxvYWQpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIG1pbnQgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCBtaW50ZWRJZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCBtaW50ZWRcbiAgICogYGBgXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZW5jb2RlclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVzdGltYXRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV2ZW50c1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJveWFsdGllc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNpZ25hdHVyZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXJjMTE1NVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm93bmVyXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBUb2tlbkVyYzExNTVDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIEVkaXRpb24uY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5yb3lhbHRpZXMgPSBuZXcgQ29udHJhY3RSb3lhbHR5KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhKTtcbiAgICB0aGlzLnNhbGVzID0gbmV3IENvbnRyYWN0UHJpbWFyeVNhbGUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzExNTVTaWduYXR1cmVNaW50YWJsZSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCB0aGlzLnJvbGVzKTtcbiAgICB0aGlzLmVyYzExNTUgPSBuZXcgRXJjMTE1NSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBjaGFpbklkKTtcbiAgICB0aGlzLm93bmVyID0gbmV3IENvbnRyYWN0T3duZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBBbGwgTWludGVkIE5GVHNcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IGFsbCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggZXZlcnkgTkZUIGluIHRoaXMgY29udHJhY3QuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHJldHVybnMgdGhlIGZpcnN0IDEwMCBORlRzLCB1c2UgcXVlcnlQYXJhbXMgdG8gZmV0Y2ggbW9yZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBuZnRzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsKCk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgLSBvcHRpb25hbCBmaWx0ZXJpbmcgdG8gb25seSBmZXRjaCBhIHN1YnNldCBvZiByZXN1bHRzLlxuICAgKiBAcmV0dXJucyBUaGUgTkZUIG1ldGFkYXRhIGZvciBhbGwgTkZUcyBxdWVyaWVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsKHF1ZXJ5UGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5nZXRBbGwocXVlcnlQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBPd25lZCBORlRzXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhbGwgdGhlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoZSBORlRzIG93bmVkIGJ5IGEgc3BlY2lmaWMgd2FsbGV0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB0byBnZXQgdGhlIE5GVHMgb2ZcbiAgICogY29uc3QgYWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRPd25lZChhZGRyZXNzKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIGluIHRoZSBjb250cmFjdC5cbiAgICovXG4gIGFzeW5jIGdldE93bmVkKHdhbGxldEFkZHJlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldE93bmVkKHdhbGxldEFkZHJlc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIE5GVHMgbWludGVkXG4gICAqIEByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgTkZUcyBtaW50ZWQgaW4gdGhpcyBjb250cmFjdFxuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyBnZXRUb3RhbENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUudG90YWxDb3VudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHVzZXJzIGNhbiB0cmFuc2ZlciBORlRzIGZyb20gdGhpcyBjb250cmFjdFxuICAgKi9cbiAgYXN5bmMgaXNUcmFuc2ZlclJlc3RyaWN0ZWQoKSB7XG4gICAgY29uc3QgYW55b25lQ2FuVHJhbnNmZXIgPSBhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuaGFzUm9sZShnZXRSb2xlSGFzaChcInRyYW5zZmVyXCIpLCBjb25zdGFudHMuQWRkcmVzc1plcm8pO1xuICAgIHJldHVybiAhYW55b25lQ2FuVHJhbnNmZXI7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFdSSVRFIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogTWludCBORlQgZm9yIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgRWRpdGlvbi5taW50VG99XG4gICAqL1xuICBhc3luYyBtaW50KG1ldGFkYXRhV2l0aFN1cHBseSkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludChtZXRhZGF0YVdpdGhTdXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pbnQgYW4gTkZUIHdpdGggYSBsaW1pdGVkIHN1cHBseVxuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IGFuIE5GVCB3aXRoIGEgbGltaXRlZCBzdXBwbHkgdG8gYSBzcGVjaWZpZWQgd2FsbGV0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEFkZHJlc3Mgb2YgdGhlIHdhbGxldCB5b3Ugd2FudCB0byBtaW50IHRoZSBORlQgdG9cbiAgICogY29uc3QgdG9BZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIlxuICAgKlxuICAgKiAvLyBDdXN0b20gbWV0YWRhdGEgb2YgdGhlIE5GVCwgbm90ZSB0aGF0IHlvdSBjYW4gZnVsbHkgY3VzdG9taXplIHRoaXMgbWV0YWRhdGEgd2l0aCBvdGhlciBwcm9wZXJ0aWVzLlxuICAgKiBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLCAvLyBUaGlzIGNhbiBiZSBhbiBpbWFnZSB1cmwgb3IgZmlsZVxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IG1ldGFkYXRhV2l0aFN1cHBseSA9IHtcbiAgICogICBtZXRhZGF0YSxcbiAgICogICBzdXBwbHk6IDEwMDAsIC8vIFRoZSBudW1iZXIgb2YgdGhpcyBORlQgeW91IHdhbnQgdG8gbWludFxuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludFRvKHRvQWRkcmVzcywgbWV0YWRhdGFXaXRoU3VwcGx5KTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IHRva2VuSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAqIGNvbnN0IG5mdCA9IGF3YWl0IHR4LmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIG1pbnRlZCBORlRcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBtaW50VG8odG8sIG1ldGFkYXRhV2l0aFN1cHBseSkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludFRvKHRvLCBtZXRhZGF0YVdpdGhTdXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG1pbnQgdHJhbnNhY3Rpb24gd2l0aG91dCBleGVjdXRpbmcgaXQuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBlc3RpbWF0aW5nIHRoZSBnYXMgY29zdCBvZiBhIG1pbnQgdHJhbnNhY3Rpb24sIG92ZXJyaWRpbmcgdHJhbnNhY3Rpb24gb3B0aW9ucyBhbmQgaGF2aW5nIGZpbmUgZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIHRyYW5zYWN0aW9uIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIHJlY2VpdmVyIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgKiBAcGFyYW0gbWV0YWRhdGFXaXRoU3VwcGx5IC0gVGhlIG1ldGFkYXRhIG9mIHRoZSBORlQgeW91IHdhbnQgdG8gbWludFxuICAgKi9cbiAgYXN5bmMgZ2V0TWludFRyYW5zYWN0aW9uKHJlY2VpdmVyLCBtZXRhZGF0YVdpdGhTdXBwbHkpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldE1pbnRUcmFuc2FjdGlvbihyZWNlaXZlciwgbWV0YWRhdGFXaXRoU3VwcGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgc3VwcGx5IG9mIGFuIGV4aXN0aW5nIE5GVCBhbmQgbWludCBpdCB0byB0aGUgY29ubmVjdGVkIHdhbGxldFxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBpZCBvZiB0aGUgTkZUIHRvIGluY3JlYXNlIHN1cHBseSBvZlxuICAgKiBAcGFyYW0gYWRkaXRpb25hbFN1cHBseSAtIHRoZSBhZGRpdGlvbmFsIGFtb3VudCB0byBtaW50XG4gICAqL1xuICBhc3luYyBtaW50QWRkaXRpb25hbFN1cHBseSh0b2tlbklkLCBhZGRpdGlvbmFsU3VwcGx5KSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5taW50QWRkaXRpb25hbFN1cHBseSh0b2tlbklkLCBhZGRpdGlvbmFsU3VwcGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgc3VwcGx5IG9mIGFuIGV4aXN0aW5nIE5GVCBhbmQgbWludCBpdCB0byBhIGdpdmVuIHdhbGxldCBhZGRyZXNzXG4gICAqXG4gICAqIEBwYXJhbSB0byAtIHRoZSBhZGRyZXNzIHRvIG1pbnQgdG9cbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW4gaWQgb2YgdGhlIE5GVCB0byBpbmNyZWFzZSBzdXBwbHkgb2ZcbiAgICogQHBhcmFtIGFkZGl0aW9uYWxTdXBwbHkgLSB0aGUgYWRkaXRpb25hbCBhbW91bnQgdG8gbWludFxuICAgKi9cbiAgYXN5bmMgbWludEFkZGl0aW9uYWxTdXBwbHlUbyh0bywgdG9rZW5JZCwgYWRkaXRpb25hbFN1cHBseSkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUubWludEFkZGl0aW9uYWxTdXBwbHlUbyh0bywgdG9rZW5JZCwgYWRkaXRpb25hbFN1cHBseSk7XG4gIH1cblxuICAvKipcbiAgICogTWludCBNYW55IE5GVHMgZm9yIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgRWRpdGlvbi5taW50QmF0Y2hUb31cbiAgICovXG4gIGFzeW5jIG1pbnRCYXRjaChtZXRhZGF0YXMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1Lm1pbnRCYXRjaChtZXRhZGF0YXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pbnQgTWFueSBORlRzIHdpdGggbGltaXRlZCBzdXBwbGllc1xuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IG1hbnkgZGlmZmVyZW50IE5GVHMgd2l0aCBsaW1pdGVkIHN1cHBsaWVzIHRvIGEgc3BlY2lmaWVkIHdhbGxldC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBBZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gbWludCB0aGUgTkZUIHRvXG4gICAqIGNvbnN0IHRvQWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCJcbiAgICpcbiAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIGFuZCBzdXBwbGllcyBvZiB5b3VyIE5GVHNcbiAgICogY29uc3QgbWV0YWRhdGFXaXRoU3VwcGx5ID0gW3tcbiAgICogICBzdXBwbHk6IDUwLCAvLyBUaGUgbnVtYmVyIG9mIHRoaXMgTkZUIHlvdSB3YW50IHRvIG1pbnRcbiAgICogICBtZXRhZGF0YToge1xuICAgKiAgICAgbmFtZTogXCJDb29sIE5GVCAjMVwiLFxuICAgKiAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAqICAgICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAqICAgfSxcbiAgICogfSwge1xuICAgKiAgIHN1cHBseTogMTAwLFxuICAgKiAgIG1ldGFkYXRhOiB7XG4gICAqICAgICBuYW1lOiBcIkNvb2wgTkZUICMyXCIsXG4gICAqICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICogICAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICogICB9LFxuICAgKiB9XTtcbiAgICpcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50QmF0Y2hUbyh0b0FkZHJlc3MsIG1ldGFkYXRhV2l0aFN1cHBseSk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eFswXS5yZWNlaXB0OyAvLyBzYW1lIHRyYW5zYWN0aW9uIHJlY2VpcHQgZm9yIGFsbCBtaW50ZWQgTkZUc1xuICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICogY29uc3QgZmlyc3RORlQgPSBhd2FpdCB0eFswXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgbWludGVkIE5GVFxuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG1pbnRCYXRjaFRvKHRvLCBtZXRhZGF0YVdpdGhTdXBwbHkpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1Lm1pbnRCYXRjaFRvKHRvLCBtZXRhZGF0YVdpdGhTdXBwbHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1cm4gYSBzcGVjaWZpZWQgYW1vdW50IG9mIGEgTkZUXG4gICAqXG4gICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIElkIHRvIGJ1cm5cbiAgICogQHBhcmFtIGFtb3VudCAtIGFtb3VudCB0byBidXJuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuYnVyblRva2Vucyh0b2tlbklkLCBhbW91bnQpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJ1cm4odG9rZW5JZCwgYW1vdW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5idXJuKHRva2VuSWQsIGFtb3VudCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoRWRpdGlvbiwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBFZGl0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=