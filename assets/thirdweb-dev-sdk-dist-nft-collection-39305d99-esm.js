"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_nft-collection-39305d99_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/nft-collection-39305d99.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/nft-collection-39305d99.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFTCollection": () => (/* binding */ NFTCollection)
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
 * Create a collection of one-of-one NFTs.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-collection");
 * ```
 *
 * @public
 */
class NFTCollection extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aI {
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
   * const signedPayload = contract.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "signature", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "erc721", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d0, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, NFTCollection.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.erc721 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.az(this.contractWrapper, this.storage, chainId);
    this.signature = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aC(this.contractWrapper, this.storage);
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
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.mint(metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  async mint(metadata) {
    return this.erc721.mint(metadata);
  }

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.mintTo(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  async mintTo(walletAddress, metadata) {
    return this.erc721.mintTo(walletAddress, metadata);
  }

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   */
  async getMintTransaction(receiver, metadata) {
    return this.erc721.getMintTransaction(receiver, metadata);
  }

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to the connected wallet
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mintBatch(metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  async mintBatch(metadata) {
    return this.erc721.mintBatch(metadata);
  }

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mintBatchTo(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  async mintBatchTo(walletAddress, metadata) {
    return this.erc721.mintBatchTo(walletAddress, metadata);
  }

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   */
  async burn(tokenId) {
    return this.erc721.burn(tokenId);
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(NFTCollection, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW5mdC1jb2xsZWN0aW9uLTM5MzA1ZDk5LWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDeVg7QUFDM1o7QUFDcEI7QUFDRjtBQUM4QztBQUNBO0FBQ0M7QUFDcEM7QUFDMEM7QUFDVDtBQUNRO0FBQ0c7QUFDRztBQUNiO0FBQ1E7QUFDSjtBQUNTO0FBQ0o7QUFDQztBQUNGO0FBQ0E7QUFDRztBQUNKO0FBQ0o7QUFDTTtBQUNLO0FBQ0c7QUFDUDtBQUNBO0FBQ0M7QUFDUjtBQUNNO0FBQ0s7QUFDRztBQUNMO0FBQ0Y7QUFDSztBQUNQO0FBQ1A7QUFDVTtBQUNGO0FBQ0M7QUFDVDtBQUNPO0FBQ0Y7QUFDVTtBQUNWO0FBQ0E7QUFDTDtBQUNDO0FBQ0Q7QUFDdEM7QUFDUztBQUNQO0FBQ3NDO0FBQzlCO0FBQ21DO0FBQ1I7QUFDVztBQUMvQztBQUNHO0FBQ1g7QUFDcUQ7QUFDQztBQUNRO0FBQ2Y7QUFDQztBQUNPO0FBQ1E7QUFDQztBQUNoRTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qyw2Q0FBNkMsa0JBQWtCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxtRUFBZTtBQUNqSDtBQUNBLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkI7QUFDQSx3QkFBd0IsbUVBQWdCLHVCQUF1QixtRUFBeUI7QUFDeEYscUJBQXFCLG1FQUFhO0FBQ2xDLHlCQUF5QixtRUFBZTtBQUN4QyxxQkFBcUIsbUVBQW1CO0FBQ3hDLHVCQUF1QixtRUFBZTtBQUN0Qyx5QkFBeUIsbUVBQWdCO0FBQ3pDLHNCQUFzQixtRUFBYztBQUNwQyw0QkFBNEIsbUVBQW1CO0FBQy9DLDJCQUEyQixtRUFBbUI7QUFDOUMsc0JBQXNCLG1FQUFNO0FBQzVCLHlCQUF5QixtRUFBbUM7QUFDNUQscUJBQXFCLG1FQUFhO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsdUVBQVcsY0FBYyxnREFBcUI7QUFDNUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFlOztBQUVVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L25mdC1jb2xsZWN0aW9uLTM5MzA1ZDk5LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtZGE4OGQyN2MuZXNtLmpzJztcbmltcG9ydCB7IGFJIGFzIFN0YW5kYXJkRXJjNzIxLCBjSyBhcyBDb250cmFjdFdyYXBwZXIsIGFrIGFzIENvbnRyYWN0TWV0YWRhdGEsIGQwIGFzIFRva2VuRXJjNzIxQ29udHJhY3RTY2hlbWEsIGFsIGFzIENvbnRyYWN0Um9sZXMsIGFtIGFzIENvbnRyYWN0Um95YWx0eSwgYW4gYXMgQ29udHJhY3RQcmltYXJ5U2FsZSwgYWogYXMgQ29udHJhY3RFbmNvZGVyLCBhVSBhcyBHYXNDb3N0RXN0aW1hdG9yLCBhViBhcyBDb250cmFjdEV2ZW50cywgYVggYXMgQ29udHJhY3RQbGF0Zm9ybUZlZSwgYVcgYXMgQ29udHJhY3RJbnRlcmNlcHRvciwgYXogYXMgRXJjNzIxLCBhQyBhcyBFcmM3MjFXaXRoUXVhbnRpdHlTaWduYXR1cmVNaW50YWJsZSwgYVogYXMgQ29udHJhY3RPd25lciwgYkEgYXMgZ2V0Um9sZUhhc2ggfSBmcm9tICcuL3RoaXJkd2ViLWNoZWNrb3V0LTMzZjEzOTU1LmVzbS5qcyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1JvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ2JzNTgnO1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbGxlY3Rpb24gb2Ygb25lLW9mLW9uZSBORlRzLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIjtcbiAqXG4gKiBjb25zdCBzZGsgPSBuZXcgVGhpcmR3ZWJTREsoXCJ7e2NoYWluTmFtZX19XCIpO1xuICogY29uc3QgY29udHJhY3QgPSBhd2FpdCBzZGsuZ2V0Q29udHJhY3QoXCJ7e2NvbnRyYWN0X2FkZHJlc3N9fVwiLCBcIm5mdC1jb2xsZWN0aW9uXCIpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBORlRDb2xsZWN0aW9uIGV4dGVuZHMgU3RhbmRhcmRFcmM3MjEge1xuICAvKipcbiAgICogQ29uZmlndXJlIHJveWFsdGllc1xuICAgKiBAcmVtYXJrcyBTZXQgeW91ciBvd24gcm95YWx0aWVzIGZvciB0aGUgZW50aXJlIGNvbnRyYWN0IG9yIHBlciB0b2tlblxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciB0b2tlblxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0VG9rZW5Sb3lhbHR5SW5mbyh0b2tlbklkLCB7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDUwMCwgLy8gNSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogU2lnbmF0dXJlIE1pbnRpbmdcbiAgICogQHJlbWFya3MgR2VuZXJhdGUgZHluYW1pYyBORlRzIHdpdGggeW91ciBvd24gc2lnbmF0dXJlLCBhbmQgbGV0IG90aGVycyBtaW50IHRoZW0gdXNpbmcgdGhhdCBzaWduYXR1cmUuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gc2VlIGhvdyB0byBjcmFmdCBhIHBheWxvYWQgdG8gc2lnbiBpbiB0aGUgYGNvbnRyYWN0LnNpZ25hdHVyZS5nZW5lcmF0ZSgpYCBkb2N1bWVudGF0aW9uXG4gICAqIGNvbnN0IHNpZ25lZFBheWxvYWQgPSBjb250cmFjdC5zaWduYXR1cmUoKS5nZW5lcmF0ZShwYXlsb2FkKTtcbiAgICpcbiAgICogLy8gbm93IGFueW9uZSBjYW4gbWludCB0aGUgTkZUXG4gICAqIGNvbnN0IHR4ID0gY29udHJhY3Quc2lnbmF0dXJlLm1pbnQoc2lnbmVkUGF5bG9hZCk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgbWludCB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGNvbnN0IG1pbnRlZElkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgTkZUIG1pbnRlZFxuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm1ldGFkYXRhXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb3lhbHRpZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNpZ25hdHVyZVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXJjNzIxXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBUb2tlbkVyYzcyMUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTkZUQ29sbGVjdGlvbi5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLnJveWFsdGllcyA9IG5ldyBDb250cmFjdFJveWFsdHkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IENvbnRyYWN0RW5jb2Rlcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lc3RpbWF0b3IgPSBuZXcgR2FzQ29zdEVzdGltYXRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgQ29udHJhY3RFdmVudHModGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMucGxhdGZvcm1GZWVzID0gbmV3IENvbnRyYWN0UGxhdGZvcm1GZWUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lcmM3MjEgPSBuZXcgRXJjNzIxKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzcyMVdpdGhRdWFudGl0eVNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMub3duZXIgPSBuZXcgQ29udHJhY3RPd25lcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbk5ldHdvcmtVcGRhdGVkKG5ldHdvcmspIHtcbiAgICB0aGlzLmNvbnRyYWN0V3JhcHBlci51cGRhdGVTaWduZXJPclByb3ZpZGVyKG5ldHdvcmspO1xuICB9XG4gIGdldEFkZHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5hZGRyZXNzO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBSRUFEIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgY2FuIHRyYW5zZmVyIE5GVHMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBNaW50IGEgdW5pcXVlIE5GVFxuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IGEgdW5pcXVlIE5GVCB0byBhIHNwZWNpZmllZCB3YWxsZXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHQqXG4gICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZULCBub3RlIHRoYXQgeW91IGNhbiBmdWxseSBjdXN0b21pemUgdGhpcyBtZXRhZGF0YSB3aXRoIG90aGVyIHByb3BlcnRpZXMuXG4gICAqIGNvbnN0IG1ldGFkYXRhID0ge1xuICAgKiAgIG5hbWU6IFwiQ29vbCBORlRcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAqIH07XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludChtZXRhZGF0YSk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eC5yZWNlaXB0OyAvLyB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdFxuICAgKiBjb25zdCB0b2tlbklkID0gdHguaWQ7IC8vIHRoZSBpZCBvZiB0aGUgTkZUIG1pbnRlZFxuICAgKiBjb25zdCBuZnQgPSBhd2FpdCB0eC5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiBtaW50ZWQgTkZUXG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgbWludChtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5taW50KG1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaW50IGEgdW5pcXVlIE5GVFxuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IGEgdW5pcXVlIE5GVCB0byBhIHNwZWNpZmllZCB3YWxsZXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIG1pbnQgdGhlIE5GVCB0b1xuICAgKiBjb25zdCB3YWxsZXRBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICpcbiAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIG9mIHRoZSBORlQsIG5vdGUgdGhhdCB5b3UgY2FuIGZ1bGx5IGN1c3RvbWl6ZSB0aGlzIG1ldGFkYXRhIHdpdGggb3RoZXIgcHJvcGVydGllcy5cbiAgICogY29uc3QgbWV0YWRhdGEgPSB7XG4gICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICogfTtcbiAgICpcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5taW50VG8od2FsbGV0QWRkcmVzcywgbWV0YWRhdGEpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgdG9rZW5JZCA9IHR4LmlkOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCBtaW50ZWRcbiAgICogY29uc3QgbmZ0ID0gYXdhaXQgdHguZGF0YSgpOyAvLyAob3B0aW9uYWwpIGZldGNoIGRldGFpbHMgb2YgbWludGVkIE5GVFxuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG1pbnRUbyh3YWxsZXRBZGRyZXNzLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5taW50VG8od2FsbGV0QWRkcmVzcywgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIG1pbnQgdHJhbnNhY3Rpb24gd2l0aG91dCBleGVjdXRpbmcgaXQuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBlc3RpbWF0aW5nIHRoZSBnYXMgY29zdCBvZiBhIG1pbnQgdHJhbnNhY3Rpb24sIG92ZXJyaWRpbmcgdHJhbnNhY3Rpb24gb3B0aW9ucyBhbmQgaGF2aW5nIGZpbmUgZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIHRyYW5zYWN0aW9uIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIHJlY2VpdmVyIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgKiBAcGFyYW0gbWV0YWRhdGEgLSBUaGUgbWV0YWRhdGEgb2YgdGhlIE5GVCB5b3Ugd2FudCB0byBtaW50XG4gICAqL1xuICBhc3luYyBnZXRNaW50VHJhbnNhY3Rpb24ocmVjZWl2ZXIsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmdldE1pbnRUcmFuc2FjdGlvbihyZWNlaXZlciwgbWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pbnQgTWFueSB1bmlxdWUgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IG1hbnkgdW5pcXVlIE5GVHMgYXQgb25jZSB0byB0aGUgY29ubmVjdGVkIHdhbGxldFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0KlxuICAgKiAvLyBDdXN0b20gbWV0YWRhdGEgb2YgdGhlIE5GVHMgeW91IHdhbnQgdG8gbWludC5cbiAgICogY29uc3QgbWV0YWRhdGFzID0gW3tcbiAgICogICBuYW1lOiBcIkNvb2wgTkZUICMxXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLCAvLyBUaGlzIGNhbiBiZSBhbiBpbWFnZSB1cmwgb3IgZmlsZVxuICAgKiB9LCB7XG4gICAqICAgbmFtZTogXCJDb29sIE5GVCAjMlwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL290aGVyL2ltYWdlLnBuZ1wiKSxcbiAgICogfV07XG4gICAqXG4gICAqIGNvbnN0IHR4ID0gYXdhaXQgY29udHJhY3QubWludEJhdGNoKG1ldGFkYXRhcyk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eFswXS5yZWNlaXB0OyAvLyBzYW1lIHRyYW5zYWN0aW9uIHJlY2VpcHQgZm9yIGFsbCBtaW50ZWQgTkZUc1xuICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICogY29uc3QgZmlyc3RORlQgPSBhd2FpdCB0eFswXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgbWludGVkIE5GVFxuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG1pbnRCYXRjaChtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5taW50QmF0Y2gobWV0YWRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pbnQgTWFueSB1bmlxdWUgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBNaW50IG1hbnkgdW5pcXVlIE5GVHMgYXQgb25jZSB0byBhIHNwZWNpZmllZCB3YWxsZXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIG1pbnQgdGhlIE5GVCB0b1xuICAgKiBjb25zdCB3YWxsZXRBZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICpcbiAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIG9mIHRoZSBORlRzIHlvdSB3YW50IHRvIG1pbnQuXG4gICAqIGNvbnN0IG1ldGFkYXRhcyA9IFt7XG4gICAqICAgbmFtZTogXCJDb29sIE5GVCAjMVwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICogfSwge1xuICAgKiAgIG5hbWU6IFwiQ29vbCBORlQgIzJcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9vdGhlci9pbWFnZS5wbmdcIiksXG4gICAqIH1dO1xuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm1pbnRCYXRjaFRvKHdhbGxldEFkZHJlc3MsIG1ldGFkYXRhcyk7XG4gICAqIGNvbnN0IHJlY2VpcHQgPSB0eFswXS5yZWNlaXB0OyAvLyBzYW1lIHRyYW5zYWN0aW9uIHJlY2VpcHQgZm9yIGFsbCBtaW50ZWQgTkZUc1xuICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IG1pbnRlZCBORlRcbiAgICogY29uc3QgZmlyc3RORlQgPSBhd2FpdCB0eFswXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgbWludGVkIE5GVFxuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIG1pbnRCYXRjaFRvKHdhbGxldEFkZHJlc3MsIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLm1pbnRCYXRjaFRvKHdhbGxldEFkZHJlc3MsIG1ldGFkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXJuIGEgc2luZ2xlIE5GVFxuICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBJZCB0byBidXJuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuYnVyblRva2VuKHRva2VuSWQpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJ1cm4odG9rZW5JZCkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5idXJuKHRva2VuSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCAuLi5hcmdzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KE5GVENvbGxlY3Rpb24sIFwiY29udHJhY3RSb2xlc1wiLCBbXCJhZG1pblwiLCBcIm1pbnRlclwiLCBcInRyYW5zZmVyXCJdKTtcblxuZXhwb3J0IHsgTkZUQ29sbGVjdGlvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9