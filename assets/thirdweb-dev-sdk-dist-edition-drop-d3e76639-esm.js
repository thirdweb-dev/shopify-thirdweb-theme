"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_edition-drop-d3e76639_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/edition-drop-d3e76639.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/edition-drop-d3e76639.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditionDrop": () => (/* binding */ EditionDrop)
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
 * Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "edition-drop");
 * ```
 *
 * @public
 */
class EditionDrop extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aQ {
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
   * Configure claim conditions for each NFT
   * @remarks Define who can claim each NFT in the edition, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await contract.claimConditions.set(tokenId, claimConditions);
   * ```
   */

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cK(network, address, abi, options);
    super(contractWrapper, storage, chainId);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "abi", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "claimConditions", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "checkout", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "history", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "erc1155", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cL, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, EditionDrop.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.claimConditions = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aq(this.contractWrapper, this.metadata, this.storage);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.history = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ar(this.events);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.erc1155 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aJ(this.contractWrapper, this.storage, chainId);
    this.checkout = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cJ(this.contractWrapper);
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

  // TODO getAllClaimerAddresses() - should be done via an indexer

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
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  async createBatch(metadatas, options) {
    return this.erc1155.lazyMint(metadatas, options);
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional claim verification data (e.g. price, allowlist proof, etc...)
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return this.erc1155.getClaimTransaction(destinationAddress, tokenId, quantity, {
      checkERC20Allowance
    });
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param proofs - Array of proofs
   *
   * @returns - Receipt for the transaction
   */
  async claimTo(destinationAddress, tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return this.erc1155.claimTo(destinationAddress, tokenId, quantity, {
      checkERC20Allowance
    });
  }

  /**
   * Claim a token to the connected wallet
   *
   * @remarks See {@link EditionDrop.claimTo}
   *
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param proofs - Array of proofs
   *
   * @returns - Receipt for the transaction
   */
  async claim(tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const address = await this.contractWrapper.getSignerAddress();
    return this.claimTo(address, tokenId, quantity, checkERC20Allowance);
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
  async burnTokens(tokenId, amount) {
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(EditionDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LWVkaXRpb24tZHJvcC1kM2U3NjYzOS1lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ2lhO0FBQ25jO0FBQ3BCO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNRO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0w7QUFDQztBQUNEO0FBQ3RDO0FBQ1M7QUFDUDtBQUNzQztBQUM5QjtBQUNtQztBQUNSO0FBQ1c7QUFDL0M7QUFDRztBQUNYO0FBQ3FEO0FBQ0M7QUFDUTtBQUNmO0FBQ0M7QUFDTztBQUNRO0FBQ0M7QUFDaEU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLG1FQUFlO0FBQ2pIO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkI7QUFDQSx3QkFBd0IsbUVBQWdCLHVCQUF1QixtRUFBeUI7QUFDeEYscUJBQXFCLG1FQUFhO0FBQ2xDLHlCQUF5QixtRUFBZTtBQUN4QyxxQkFBcUIsbUVBQW1CO0FBQ3hDLCtCQUErQixtRUFBMEI7QUFDekQsc0JBQXNCLG1FQUFjO0FBQ3BDLHVCQUF1QixtRUFBa0I7QUFDekMsdUJBQXVCLG1FQUFlO0FBQ3RDLHlCQUF5QixtRUFBZ0I7QUFDekMsNEJBQTRCLG1FQUFtQjtBQUMvQywyQkFBMkIsbUVBQW1CO0FBQzlDLHVCQUF1QixtRUFBTztBQUM5Qix3QkFBd0IsbUVBQWE7QUFDckMscUJBQXFCLG1FQUFhO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsdUVBQVcsY0FBYyxnREFBcUI7QUFDNUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLDREQUE0RDtBQUM1RCx5Q0FBeUM7QUFDekMsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEdBQUc7QUFDM0Msd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3QvZWRpdGlvbi1kcm9wLWQzZTc2NjM5LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSB9IGZyb20gJy4vUXVlcnlQYXJhbXMtZGE4OGQyN2MuZXNtLmpzJztcbmltcG9ydCB7IGFRIGFzIFN0YW5kYXJkRXJjMTE1NSwgY0sgYXMgQ29udHJhY3RXcmFwcGVyLCBhayBhcyBDb250cmFjdE1ldGFkYXRhLCBjTCBhcyBEcm9wRXJjMTE1NUNvbnRyYWN0U2NoZW1hLCBhbCBhcyBDb250cmFjdFJvbGVzLCBhbSBhcyBDb250cmFjdFJveWFsdHksIGFuIGFzIENvbnRyYWN0UHJpbWFyeVNhbGUsIGFxIGFzIERyb3BFcmMxMTU1Q2xhaW1Db25kaXRpb25zLCBhViBhcyBDb250cmFjdEV2ZW50cywgYXIgYXMgRHJvcEVyYzExNTVIaXN0b3J5LCBhaiBhcyBDb250cmFjdEVuY29kZXIsIGFVIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFYIGFzIENvbnRyYWN0UGxhdGZvcm1GZWUsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFKIGFzIEVyYzExNTUsIGNKIGFzIFBhcGVyQ2hlY2tvdXQsIGFaIGFzIENvbnRyYWN0T3duZXIsIGJBIGFzIGdldFJvbGVIYXNoIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCAnYm4uanMnO1xuaW1wb3J0ICd6b2QnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzE2NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NS5qc29uJztcbmltcG9ydCAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDMjBfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU11bHRpY2FsbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ2xhaW1hYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWwuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzcyMV9WMy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMVN1cHBseS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lMYXp5TWludC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjFfVjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9MYXp5TWludFdpdGhUaWVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUJ1cm5hYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3AxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMxMTU1X1YyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BTaW5nbGVQaGFzZTExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1RW51bWVyYWJsZS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lNaW50YWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9FUkMyNzcxQ29udGV4dC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lBcHBVUkkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQ29udHJhY3RNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEaXJlY3RMaXN0aW5ncy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFbmdsaXNoQXVjdGlvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JT2ZmZXJzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBhY2tWUkZEaXJlY3QuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGVybWlzc2lvbnNFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVBsYXRmb3JtRmVlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVByaW1hcnlTYWxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lSb3lhbHR5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvT3duYWJsZS5qc29uJztcbmltcG9ydCAnY3Jvc3MtZmV0Y2gnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NoYWlucyc7XG5pbXBvcnQgJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvRm9yd2FyZGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L3N0b3JhZ2UnO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Sb3V0ZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JVGhpcmR3ZWJDb250cmFjdC5qc29uJztcbmltcG9ydCAnbWVya2xldHJlZWpzJztcbmltcG9ydCAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCAndXVpZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxTWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTE1NU1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURlbGF5ZWRSZXZlYWxEZXByZWNhdGVkLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdGYWN0b3J5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdSZWdpc3RyeS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0NvbnRyYWN0UHVibGlzaGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlMb2dpYy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1RXTXVsdGljaGFpblJlZ2lzdHJ5Um91dGVyLmpzb24nO1xuaW1wb3J0ICdiczU4JztcblxuLyoqXG4gKiBTZXR1cCBhIGNvbGxlY3Rpb24gb2YgTkZUcyB3aXRoIGEgY3VzdG9taXphYmxlIG51bWJlciBvZiBlYWNoIE5GVCB0aGF0IGFyZSBtaW50ZWQgYXMgdXNlcnMgY2xhaW0gdGhlbS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJlZGl0aW9uLWRyb3BcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEVkaXRpb25Ecm9wIGV4dGVuZHMgU3RhbmRhcmRFcmMxMTU1IHtcbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgdG9rZW5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyByb3lhbHRpZXMgb24gdGhlIHdob2xlIGNvbnRyYWN0XG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXREZWZhdWx0Um95YWx0eUluZm8oe1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiAxMDAsIC8vIDElXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiAvLyBvdmVycmlkZSByb3lhbHR5IGZvciBhIHBhcnRpY3VsYXIgdG9rZW5cbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldFRva2VuUm95YWx0eUluZm8odG9rZW5JZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBjbGFpbSBjb25kaXRpb25zIGZvciBlYWNoIE5GVFxuICAgKiBAcmVtYXJrcyBEZWZpbmUgd2hvIGNhbiBjbGFpbSBlYWNoIE5GVCBpbiB0aGUgZWRpdGlvbiwgd2hlbiBhbmQgaG93IG1hbnkuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcHJlc2FsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAqIGNvbnN0IHB1YmxpY1NhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNjAgKiA2MCAqIDI0ICogMTAwMCk7XG4gICAqIGNvbnN0IGNsYWltQ29uZGl0aW9ucyA9IFtcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHByZXNhbGVTdGFydFRpbWUsIC8vIHN0YXJ0IHRoZSBwcmVzYWxlIG5vd1xuICAgKiAgICAgbWF4UXVhbnRpdHk6IDIsIC8vIGxpbWl0IGhvdyBtYW55IG1pbnRzIGZvciB0aGlzIHByZXNhbGVcbiAgICogICAgIHByaWNlOiAwLjAxLCAvLyBwcmVzYWxlIHByaWNlXG4gICAqICAgICBzbmFwc2hvdDogWycweC4uLicsICcweC4uLiddLCAvLyBsaW1pdCBtaW50aW5nIHRvIG9ubHkgY2VydGFpbiBhZGRyZXNzZXNcbiAgICogICB9LFxuICAgKiAgIHtcbiAgICogICAgIHN0YXJ0VGltZTogcHVibGljU2FsZVN0YXJ0VGltZSwgLy8gMjRoIGFmdGVyIHByZXNhbGUsIHN0YXJ0IHB1YmxpYyBzYWxlXG4gICAqICAgICBwcmljZTogMC4wOCwgLy8gcHVibGljIHNhbGUgcHJpY2VcbiAgICogICB9XG4gICAqIF0pO1xuICAgKlxuICAgKiBjb25zdCB0b2tlbklkID0gMDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgdG8gc2V0IGNsYWltIGNvbmRpdGlvbnMgb25cbiAgICogYXdhaXQgY29udHJhY3QuY2xhaW1Db25kaXRpb25zLnNldCh0b2tlbklkLCBjbGFpbUNvbmRpdGlvbnMpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIENoZWNrb3V0XG4gICAqIEByZW1hcmtzIENyZWF0ZSBhIEZJQVQgY3VycmVuY3kgY2hlY2tvdXQgZm9yIHlvdXIgTkZUIGRyb3AuXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKG5ldHdvcmssIGFkZHJlc3MsIHN0b3JhZ2UpIHtcbiAgICBsZXQgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgbGV0IGFiaSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ID8gYXJndW1lbnRzWzRdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjaGFpbklkID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNvbnRyYWN0V3JhcHBlciA9IGFyZ3VtZW50cy5sZW5ndGggPiA2ICYmIGFyZ3VtZW50c1s2XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzZdIDogbmV3IENvbnRyYWN0V3JhcHBlcihuZXR3b3JrLCBhZGRyZXNzLCBhYmksIG9wdGlvbnMpO1xuICAgIHN1cGVyKGNvbnRyYWN0V3JhcHBlciwgc3RvcmFnZSwgY2hhaW5JZCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWJpXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2FsZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwbGF0Zm9ybUZlZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbmNvZGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXN0aW1hdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWV0YWRhdGFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyb2xlc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJveWFsdGllc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltQ29uZGl0aW9uc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNoZWNrb3V0XCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGlzdG9yeVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImludGVyY2VwdG9yXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXJjMTE1NVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm93bmVyXCIsIHZvaWQgMCk7XG4gICAgdGhpcy5hYmkgPSBhYmk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG5ldyBDb250cmFjdE1ldGFkYXRhKHRoaXMuY29udHJhY3RXcmFwcGVyLCBEcm9wRXJjMTE1NUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgRWRpdGlvbkRyb3AuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5yb3lhbHRpZXMgPSBuZXcgQ29udHJhY3RSb3lhbHR5KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhKTtcbiAgICB0aGlzLnNhbGVzID0gbmV3IENvbnRyYWN0UHJpbWFyeVNhbGUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuY2xhaW1Db25kaXRpb25zID0gbmV3IERyb3BFcmMxMTU1Q2xhaW1Db25kaXRpb25zKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmhpc3RvcnkgPSBuZXcgRHJvcEVyYzExNTVIaXN0b3J5KHRoaXMuZXZlbnRzKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXJjMTE1NSA9IG5ldyBFcmMxMTU1KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIHRoaXMuY2hlY2tvdXQgPSBuZXcgUGFwZXJDaGVja291dCh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIFRPRE8gZ2V0QWxsQ2xhaW1lckFkZHJlc3NlcygpIC0gc2hvdWxkIGJlIGRvbmUgdmlhIGFuIGluZGV4ZXJcblxuICAvKipcbiAgICogR2V0IEFsbCBNaW50ZWQgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgYWxsIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCBldmVyeSBORlQgaW4gdGhpcyBjb250cmFjdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgcmV0dXJucyB0aGUgZmlyc3QgMTAwIE5GVHMsIHVzZSBxdWVyeVBhcmFtcyB0byBmZXRjaCBtb3JlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IG5mdHMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGwoKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGwocXVlcnlQYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmMxMTU1LmdldEFsbChxdWVyeVBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IE93bmVkIE5GVHNcbiAgICpcbiAgICogQHJlbWFya3MgR2V0IGFsbCB0aGUgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhlIE5GVHMgb3duZWQgYnkgYSBzcGVjaWZpYyB3YWxsZXQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQWRkcmVzcyBvZiB0aGUgd2FsbGV0IHRvIGdldCB0aGUgTkZUcyBvZlxuICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjtcbiAgICogY29uc3QgbmZ0cyA9IGF3YWl0IGNvbnRyYWN0LmdldE93bmVkKGFkZHJlc3MpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHJldHVybnMgVGhlIE5GVCBtZXRhZGF0YSBmb3IgYWxsIE5GVHMgaW4gdGhlIGNvbnRyYWN0LlxuICAgKi9cbiAgYXN5bmMgZ2V0T3duZWQod2FsbGV0QWRkcmVzcykge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0T3duZWQod2FsbGV0QWRkcmVzcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2YgTkZUcyBtaW50ZWRcbiAgICogQHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBORlRzIG1pbnRlZCBpbiB0aGlzIGNvbnRyYWN0XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIGdldFRvdGFsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS50b3RhbENvdW50KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgY2FuIHRyYW5zZmVyIE5GVHMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBiYXRjaCBvZiBORlRzIHRvIGJlIGNsYWltZWQgaW4gdGhlIGZ1dHVyZVxuICAgKlxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYmF0Y2ggYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBiYXRjaCBvZiBtYW55IE5GVHMgaW4gb25lIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIEN1c3RvbSBtZXRhZGF0YSBvZiB0aGUgTkZUcyB0byBjcmVhdGVcbiAgICogY29uc3QgbWV0YWRhdGFzID0gW3tcbiAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLCAvLyBUaGlzIGNhbiBiZSBhbiBpbWFnZSB1cmwgb3IgZmlsZVxuICAgKiB9LCB7XG4gICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSxcbiAgICogfV07XG4gICAqXG4gICAqIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCYXRjaChtZXRhZGF0YXMpOyAvLyB1cGxvYWRzIGFuZCBjcmVhdGVzIHRoZSBORlRzIG9uIGNoYWluXG4gICAqIGNvbnN0IGZpcnN0VG9rZW5JZCA9IHJlc3VsdHNbMF0uaWQ7IC8vIHRva2VuIGlkIG9mIHRoZSBmaXJzdCBjcmVhdGVkIE5GVFxuICAgKiBjb25zdCBmaXJzdE5GVCA9IGF3YWl0IHJlc3VsdHNbMF0uZGF0YSgpOyAvLyAob3B0aW9uYWwpIGZldGNoIGRldGFpbHMgb2YgdGhlIGZpcnN0IGNyZWF0ZWQgTkZUXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gbWV0YWRhdGFzIC0gVGhlIG1ldGFkYXRhIHRvIGluY2x1ZGUgaW4gdGhlIGJhdGNoLlxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9wdGlvbmFsIHVwbG9hZCBwcm9ncmVzcyBjYWxsYmFja1xuICAgKi9cbiAgYXN5bmMgY3JlYXRlQmF0Y2gobWV0YWRhdGFzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5sYXp5TWludChtZXRhZGF0YXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIGNsYWltIHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBjbGFpbSB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgKiBAcGFyYW0gdG9rZW5JZCAtIElkIG9mIHRoZSB0b2tlbiB5b3Ugd2FudCB0byBjbGFpbVxuICAgKiBAcGFyYW0gcXVhbnRpdHkgLSBRdWFudGl0eSBvZiB0aGUgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlIC0gT3B0aW9uYWwsIGNoZWNrIGlmIHRoZSB3YWxsZXQgaGFzIGVub3VnaCBFUkMyMCBhbGxvd2FuY2UgdG8gY2xhaW0gdGhlIHRva2VucywgYW5kIGlmIG5vdCwgYXBwcm92ZSB0aGUgdHJhbnNmZXJcbiAgICogQHBhcmFtIGNsYWltRGF0YSAtIE9wdGlvbmFsIGNsYWltIHZlcmlmaWNhdGlvbiBkYXRhIChlLmcuIHByaWNlLCBhbGxvd2xpc3QgcHJvb2YsIGV0Yy4uLilcbiAgICovXG4gIGFzeW5jIGdldENsYWltVHJhbnNhY3Rpb24oZGVzdGluYXRpb25BZGRyZXNzLCB0b2tlbklkLCBxdWFudGl0eSkge1xuICAgIGxldCBjaGVja0VSQzIwQWxsb3dhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuZ2V0Q2xhaW1UcmFuc2FjdGlvbihkZXN0aW5hdGlvbkFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5LCB7XG4gICAgICBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xhaW0gTkZUcyB0byBhIHNwZWNpZmljIFdhbGxldFxuICAgKlxuICAgKiBAcmVtYXJrcyBMZXQgdGhlIHNwZWNpZmllZCB3YWxsZXQgY2xhaW0gTkZUcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBhZGRyZXNzID0gXCJ7e3dhbGxldF9hZGRyZXNzfX1cIjsgLy8gYWRkcmVzcyBvZiB0aGUgd2FsbGV0IHlvdSB3YW50IHRvIGNsYWltIHRoZSBORlRzXG4gICAqIGNvbnN0IHRva2VuSWQgPSAwOyAvLyB0aGUgaWQgb2YgdGhlIE5GVCB5b3Ugd2FudCB0byBjbGFpbVxuICAgKiBjb25zdCBxdWFudGl0eSA9IDE7IC8vIGhvdyBtYW55IE5GVHMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICpcbiAgICogY29uc3QgdHggPSBhd2FpdCBjb250cmFjdC5jbGFpbVRvKGFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5KTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzIC0gQWRkcmVzcyB5b3Ugd2FudCB0byBzZW5kIHRoZSB0b2tlbiB0b1xuICAgKiBAcGFyYW0gdG9rZW5JZCAtIElkIG9mIHRoZSB0b2tlbiB5b3Ugd2FudCB0byBjbGFpbVxuICAgKiBAcGFyYW0gcXVhbnRpdHkgLSBRdWFudGl0eSBvZiB0aGUgdG9rZW5zIHlvdSB3YW50IHRvIGNsYWltXG4gICAqIEBwYXJhbSBjaGVja0VSQzIwQWxsb3dhbmNlIC0gT3B0aW9uYWwsIGNoZWNrIGlmIHRoZSB3YWxsZXQgaGFzIGVub3VnaCBFUkMyMCBhbGxvd2FuY2UgdG8gY2xhaW0gdGhlIHRva2VucywgYW5kIGlmIG5vdCwgYXBwcm92ZSB0aGUgdHJhbnNmZXJcbiAgICogQHBhcmFtIHByb29mcyAtIEFycmF5IG9mIHByb29mc1xuICAgKlxuICAgKiBAcmV0dXJucyAtIFJlY2VpcHQgZm9yIHRoZSB0cmFuc2FjdGlvblxuICAgKi9cbiAgYXN5bmMgY2xhaW1UbyhkZXN0aW5hdGlvbkFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5KSB7XG4gICAgbGV0IGNoZWNrRVJDMjBBbGxvd2FuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZXJjMTE1NS5jbGFpbVRvKGRlc3RpbmF0aW9uQWRkcmVzcywgdG9rZW5JZCwgcXVhbnRpdHksIHtcbiAgICAgIGNoZWNrRVJDMjBBbGxvd2FuY2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFpbSBhIHRva2VuIHRvIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIFNlZSB7QGxpbmsgRWRpdGlvbkRyb3AuY2xhaW1Ub31cbiAgICpcbiAgICogQHBhcmFtIHRva2VuSWQgLSBJZCBvZiB0aGUgdG9rZW4geW91IHdhbnQgdG8gY2xhaW1cbiAgICogQHBhcmFtIHF1YW50aXR5IC0gUXVhbnRpdHkgb2YgdGhlIHRva2VucyB5b3Ugd2FudCB0byBjbGFpbVxuICAgKiBAcGFyYW0gY2hlY2tFUkMyMEFsbG93YW5jZSAtIE9wdGlvbmFsLCBjaGVjayBpZiB0aGUgd2FsbGV0IGhhcyBlbm91Z2ggRVJDMjAgYWxsb3dhbmNlIHRvIGNsYWltIHRoZSB0b2tlbnMsIGFuZCBpZiBub3QsIGFwcHJvdmUgdGhlIHRyYW5zZmVyXG4gICAqIEBwYXJhbSBwcm9vZnMgLSBBcnJheSBvZiBwcm9vZnNcbiAgICpcbiAgICogQHJldHVybnMgLSBSZWNlaXB0IGZvciB0aGUgdHJhbnNhY3Rpb25cbiAgICovXG4gIGFzeW5jIGNsYWltKHRva2VuSWQsIHF1YW50aXR5KSB7XG4gICAgbGV0IGNoZWNrRVJDMjBBbGxvd2FuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLmdldFNpZ25lckFkZHJlc3MoKTtcbiAgICByZXR1cm4gdGhpcy5jbGFpbVRvKGFkZHJlc3MsIHRva2VuSWQsIHF1YW50aXR5LCBjaGVja0VSQzIwQWxsb3dhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXJuIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBhIE5GVFxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBJZCB0byBidXJuXG4gICAqIEBwYXJhbSBhbW91bnQgLSBhbW91bnQgdG8gYnVyblxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJ1cm5Ub2tlbnModG9rZW5JZCwgYW1vdW50KTtcbiAgICogYGBgXG4gICAqL1xuICBhc3luYyBidXJuVG9rZW5zKHRva2VuSWQsIGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLmVyYzExNTUuYnVybih0b2tlbklkLCBhbW91bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgY2FsbChmdW5jdGlvbk5hbWUpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RXcmFwcGVyLmNhbGwoZnVuY3Rpb25OYW1lLCAuLi5hcmdzKTtcbiAgfVxufVxuX2RlZmluZVByb3BlcnR5KEVkaXRpb25Ecm9wLCBcImNvbnRyYWN0Um9sZXNcIiwgW1wiYWRtaW5cIiwgXCJtaW50ZXJcIiwgXCJ0cmFuc2ZlclwiXSk7XG5cbmV4cG9ydCB7IEVkaXRpb25Ecm9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=