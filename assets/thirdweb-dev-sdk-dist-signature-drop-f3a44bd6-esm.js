"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_signature-drop-f3a44bd6_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/signature-drop-f3a44bd6.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/signature-drop-f3a44bd6.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignatureDrop": () => (/* binding */ SignatureDrop)
/* harmony export */ });
/* harmony import */ var _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./QueryParams-da88d27c.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/QueryParams-da88d27c.esm.js");
/* harmony import */ var _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./thirdweb-checkout-33f13955.esm.js */ "./node_modules/@thirdweb-dev/sdk/dist/thirdweb-checkout-33f13955.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/constants/lib.esm/addresses.js");
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
 * Setup a collection of NFTs where when it comes to minting, you can authorize
 * some external party to mint tokens on your contract, and specify what exactly
 * will be minted by that external party..
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "signature-drop");
 * ```
 *
 * @public
 */
class SignatureDrop extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aI {
  /**
   * @internal
   */

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
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const claimCondition = {
   *     startTime: presaleStartTime, // start the presale now
   *     maxQuantity: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   * };
   * await contract.claimConditions.set([claimCondition]);
   * ```
   */

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "erc721", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "encoder", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "estimator", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "metadata", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "sales", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "platformFees", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "events", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "roles", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "interceptor", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "royalties", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "claimConditions", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "revealer", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "signature", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "checkout", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d1, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, SignatureDrop.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
    this.erc721 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.az(this.contractWrapper, this.storage, chainId);
    this.claimConditions = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ap(this.contractWrapper, this.metadata, this.storage);
    this.signature = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aC(this.contractWrapper, this.storage);
    this.revealer = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ao(this.contractWrapper, this.storage, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d2.name, () => this.erc721.nextTokenIdToMint());
    this.signature = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aC(this.contractWrapper, this.storage);
    this.owner = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aZ(this.contractWrapper);
    this.checkout = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.cJ(this.contractWrapper);
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
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */
  async totalSupply() {
    const claimed = await this.totalClaimedSupply();
    const unclaimed = await this.totalUnclaimedSupply();
    return claimed.add(unclaimed);
  }

  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */
  async getAllClaimed(queryParams) {
    const start = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(queryParams?.count || _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__.c).toNumber();
    const maxId = Math.min((await this.totalClaimedSupply()).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map(i => this.get(i.toString())));
  }

  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAllUnclaimed(queryParams) {
    const start = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(queryParams?.count || _QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__.c).toNumber();
    const firstTokenId = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(Math.max((await this.totalClaimedSupply()).toNumber(), start));
    const maxId = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map(i => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns the claimed supply
   */
  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }

  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   */
  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
  }

  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.readContract.hasRole((0,_thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.bA)("transfer"), ethers__WEBPACK_IMPORTED_MODULE_69__.AddressZero);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
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
    return this.erc721.lazyMint(metadatas, options);
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param checkERC20Allowance
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    return this.erc721.getClaimTransaction(destinationAddress, quantity, options);
  }

  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  async claimTo(destinationAddress, quantity, options) {
    return this.erc721.claimTo(destinationAddress, quantity, options);
  }

  /**
   * Claim NFTs to the connected wallet.
   *
   * @remarks See {@link NFTDrop.claimTo}
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  async claim(quantity, options) {
    return this.erc721.claim(quantity, options);
  }

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(SignatureDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LXNpZ25hdHVyZS1kcm9wLWYzYTQ0YmQ2LWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1HO0FBQzZiO0FBQ2xmO0FBQy9CO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNRO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0w7QUFDQztBQUNEO0FBQ3RDO0FBQ1M7QUFDUDtBQUNzQztBQUM5QjtBQUNtQztBQUNSO0FBQ1c7QUFDL0M7QUFDRztBQUNYO0FBQ3FEO0FBQ0M7QUFDUTtBQUNmO0FBQ0M7QUFDTztBQUNRO0FBQ0M7QUFDaEU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxtRUFBZTtBQUNqSDtBQUNBLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkI7QUFDQSx3QkFBd0IsbUVBQWdCLHVCQUF1QixtRUFBd0I7QUFDdkYscUJBQXFCLG1FQUFhO0FBQ2xDLHlCQUF5QixtRUFBZTtBQUN4QyxxQkFBcUIsbUVBQW1CO0FBQ3hDLHVCQUF1QixtRUFBZTtBQUN0Qyx5QkFBeUIsbUVBQWdCO0FBQ3pDLHNCQUFzQixtRUFBYztBQUNwQyw0QkFBNEIsbUVBQW1CO0FBQy9DLDJCQUEyQixtRUFBbUI7QUFDOUMsc0JBQXNCLG1FQUFNO0FBQzVCLCtCQUErQixtRUFBbUI7QUFDbEQseUJBQXlCLG1FQUFtQztBQUM1RCx3QkFBd0IsbUVBQWEscUNBQXFDLHdFQUEyQjtBQUNyRyx5QkFBeUIsbUVBQW1DO0FBQzVELHFCQUFxQixtRUFBYTtBQUNsQyx3QkFBd0IsbUVBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBYztBQUNoQyxrQkFBa0IsbURBQWMsdUJBQXVCLDREQUF1QjtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFjO0FBQ2hDLGtCQUFrQixtREFBYyx1QkFBdUIsNERBQXVCO0FBQzlFLHlCQUF5QixtREFBYztBQUN2QyxrQkFBa0IsbURBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVFQUFXLGNBQWMsZ0RBQXFCO0FBQzVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSw0REFBNEQ7QUFDNUQseUNBQXlDO0FBQ3pDLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQixHQUFHO0FBQzNDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWU7O0FBRVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LXRoaXJkd2ViLXRoZW1lLy4vbm9kZV9tb2R1bGVzL0B0aGlyZHdlYi1kZXYvc2RrL2Rpc3Qvc2lnbmF0dXJlLWRyb3AtZjNhNDRiZDYuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF8gYXMgX2RlZmluZVByb3BlcnR5LCBjIGFzIERFRkFVTFRfUVVFUllfQUxMX0NPVU5UIH0gZnJvbSAnLi9RdWVyeVBhcmFtcy1kYTg4ZDI3Yy5lc20uanMnO1xuaW1wb3J0IHsgYUkgYXMgU3RhbmRhcmRFcmM3MjEsIGNLIGFzIENvbnRyYWN0V3JhcHBlciwgYWsgYXMgQ29udHJhY3RNZXRhZGF0YSwgZDEgYXMgRHJvcEVyYzcyMUNvbnRyYWN0U2NoZW1hLCBhbCBhcyBDb250cmFjdFJvbGVzLCBhbSBhcyBDb250cmFjdFJveWFsdHksIGFuIGFzIENvbnRyYWN0UHJpbWFyeVNhbGUsIGFqIGFzIENvbnRyYWN0RW5jb2RlciwgYVUgYXMgR2FzQ29zdEVzdGltYXRvciwgYVYgYXMgQ29udHJhY3RFdmVudHMsIGFYIGFzIENvbnRyYWN0UGxhdGZvcm1GZWUsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGF6IGFzIEVyYzcyMSwgYXAgYXMgRHJvcENsYWltQ29uZGl0aW9ucywgYUMgYXMgRXJjNzIxV2l0aFF1YW50aXR5U2lnbmF0dXJlTWludGFibGUsIGFvIGFzIERlbGF5ZWRSZXZlYWwsIGQyIGFzIEZFQVRVUkVfTkZUX1JFVkVBTEFCTEUsIGFaIGFzIENvbnRyYWN0T3duZXIsIGNKIGFzIFBhcGVyQ2hlY2tvdXQsIGJBIGFzIGdldFJvbGVIYXNoIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1JvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ2JzNTgnO1xuXG4vKipcbiAqIFNldHVwIGEgY29sbGVjdGlvbiBvZiBORlRzIHdoZXJlIHdoZW4gaXQgY29tZXMgdG8gbWludGluZywgeW91IGNhbiBhdXRob3JpemVcbiAqIHNvbWUgZXh0ZXJuYWwgcGFydHkgdG8gbWludCB0b2tlbnMgb24geW91ciBjb250cmFjdCwgYW5kIHNwZWNpZnkgd2hhdCBleGFjdGx5XG4gKiB3aWxsIGJlIG1pbnRlZCBieSB0aGF0IGV4dGVybmFsIHBhcnR5Li5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCI7XG4gKlxuICogY29uc3Qgc2RrID0gbmV3IFRoaXJkd2ViU0RLKFwie3tjaGFpbk5hbWV9fVwiKTtcbiAqIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgc2RrLmdldENvbnRyYWN0KFwie3tjb250cmFjdF9hZGRyZXNzfX1cIiwgXCJzaWduYXR1cmUtZHJvcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgU2lnbmF0dXJlRHJvcCBleHRlbmRzIFN0YW5kYXJkRXJjNzIxIHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICAvKipcbiAgICogQ29uZmlndXJlIHJveWFsdGllc1xuICAgKiBAcmVtYXJrcyBTZXQgeW91ciBvd24gcm95YWx0aWVzIGZvciB0aGUgZW50aXJlIGNvbnRyYWN0IG9yIHBlciB0b2tlblxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHJveWFsdGllcyBvbiB0aGUgd2hvbGUgY29udHJhY3RcbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldERlZmF1bHRSb3lhbHR5SW5mbyh7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDEwMCwgLy8gMSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIC8vIG92ZXJyaWRlIHJveWFsdHkgZm9yIGEgcGFydGljdWxhciB0b2tlblxuICAgKiBjb250cmFjdC5yb3lhbHRpZXMuc2V0VG9rZW5Sb3lhbHR5SW5mbyh0b2tlbklkLCB7XG4gICAqICAgc2VsbGVyX2ZlZV9iYXNpc19wb2ludHM6IDUwMCwgLy8gNSVcbiAgICogICBmZWVfcmVjaXBpZW50OiBcIjB4Li4uXCJcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQ29uZmlndXJlIGNsYWltIGNvbmRpdGlvbnNcbiAgICogQHJlbWFya3MgRGVmaW5lIHdobyBjYW4gY2xhaW0gTkZUcyBpbiB0aGUgY29sbGVjdGlvbiwgd2hlbiBhbmQgaG93IG1hbnkuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcHJlc2FsZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAqIGNvbnN0IGNsYWltQ29uZGl0aW9uID0ge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwcmVzYWxlU3RhcnRUaW1lLCAvLyBzdGFydCB0aGUgcHJlc2FsZSBub3dcbiAgICogICAgIG1heFF1YW50aXR5OiAyLCAvLyBsaW1pdCBob3cgbWFueSBtaW50cyBmb3IgdGhpcyBwcmVzYWxlXG4gICAqICAgICBwcmljZTogMC4wMSwgLy8gcHJlc2FsZSBwcmljZVxuICAgKiAgICAgc25hcHNob3Q6IFsnMHguLi4nLCAnMHguLi4nXSwgLy8gbGltaXQgbWludGluZyB0byBvbmx5IGNlcnRhaW4gYWRkcmVzc2VzXG4gICAqIH07XG4gICAqIGF3YWl0IGNvbnRyYWN0LmNsYWltQ29uZGl0aW9ucy5zZXQoW2NsYWltQ29uZGl0aW9uXSk7XG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogRGVsYXllZCByZXZlYWxcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgYmF0Y2ggb2YgZW5jcnlwdGVkIE5GVHMgdGhhdCBjYW4gYmUgcmV2ZWFsZWQgYXQgYSBsYXRlciB0aW1lLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHRoZSByZWFsIE5GVHMsIHRoZXNlIHdpbGwgYmUgZW5jcnlwdGVkIHVudGlsIHlvdSByZXZlYWwgdGhlbVxuICAgKiBjb25zdCByZWFsTkZUcyA9IFt7XG4gICAqICAgbmFtZTogXCJDb21tb24gTkZUICMxXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiQ29tbW9uIE5GVCwgb25lIG9mIG1hbnkuXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLFxuICAgKiB9LCB7XG4gICAqICAgbmFtZTogXCJTdXBlciBSYXJlIE5GVCAjMlwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIllvdSBnb3QgYSBTdXBlciBSYXJlIE5GVCFcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksXG4gICAqIH1dO1xuICAgKiAvLyBBIHBsYWNlaG9sZGVyIE5GVCB0aGF0IHBlb3BsZSB3aWxsIGdldCBpbW1lZGlhdGVseSBpbiB0aGVpciB3YWxsZXQsIGFuZCB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgcmVhbCBORlQgYXQgcmV2ZWFsIHRpbWVcbiAgICogY29uc3QgcGxhY2Vob2xkZXJORlQgPSB7XG4gICAqICAgbmFtZTogXCJIaWRkZW4gTkZUXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiV2lsbCBiZSByZXZlYWxlZCBuZXh0IHdlZWshXCJcbiAgICogfTtcbiAgICogLy8gQ3JlYXRlIGFuZCBlbmNyeXB0IHRoZSBORlRzXG4gICAqIGF3YWl0IGNvbnRyYWN0LnJldmVhbGVyLmNyZWF0ZURlbGF5ZWRSZXZlYWxCYXRjaChcbiAgICogICBwbGFjZWhvbGRlck5GVCxcbiAgICogICByZWFsTkZUcyxcbiAgICogICBcIm15IHNlY3JldCBwYXNzd29yZFwiLFxuICAgKiApO1xuICAgKiAvLyBXaGVuZXZlciB5b3UncmUgcmVhZHksIHJldmVhbCB5b3VyIE5GVHMgYXQgYW55IHRpbWVcbiAgICogY29uc3QgYmF0Y2hJZCA9IDA7IC8vIHRoZSBiYXRjaCB0byByZXZlYWxcbiAgICogYXdhaXQgY29udHJhY3QucmV2ZWFsZXIucmV2ZWFsKGJhdGNoSWQsIFwibXkgc2VjcmV0IHBhc3N3b3JkXCIpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIFNpZ25hdHVyZSBNaW50aW5nXG4gICAqIEByZW1hcmtzIEdlbmVyYXRlIGR5bmFtaWMgTkZUcyB3aXRoIHlvdXIgb3duIHNpZ25hdHVyZSwgYW5kIGxldCBvdGhlcnMgbWludCB0aGVtIHVzaW5nIHRoYXQgc2lnbmF0dXJlLlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIC8vIHNlZSBob3cgdG8gY3JhZnQgYSBwYXlsb2FkIHRvIHNpZ24gaW4gdGhlIGBjb250cmFjdC5zaWduYXR1cmUuZ2VuZXJhdGUoKWAgZG9jdW1lbnRhdGlvblxuICAgKiBjb25zdCBzaWduZWRQYXlsb2FkID0gY29udHJhY3Quc2lnbmF0dXJlLmdlbmVyYXRlKHBheWxvYWQpO1xuICAgKlxuICAgKiAvLyBub3cgYW55b25lIGNhbiBtaW50IHRoZSBORlRcbiAgICogY29uc3QgdHggPSBjb250cmFjdC5zaWduYXR1cmUubWludChzaWduZWRQYXlsb2FkKTtcbiAgICogY29uc3QgcmVjZWlwdCA9IHR4LnJlY2VpcHQ7IC8vIHRoZSBtaW50IHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgbWludGVkSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgbWludGVkXG4gICAqIGBgYFxuICAgKi9cblxuICAvKipcbiAgICogQ2hlY2tvdXRcbiAgICogQHJlbWFya3MgQ3JlYXRlIGEgRklBVCBjdXJyZW5jeSBjaGVja291dCBmb3IgeW91ciBORlQgZHJvcC5cbiAgICovXG5cbiAgY29uc3RydWN0b3IobmV0d29yaywgYWRkcmVzcywgc3RvcmFnZSkge1xuICAgIGxldCBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICBsZXQgYWJpID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IGNoYWluSWQgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY29udHJhY3RXcmFwcGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDYgJiYgYXJndW1lbnRzWzZdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNl0gOiBuZXcgQ29udHJhY3RXcmFwcGVyKG5ldHdvcmssIGFkZHJlc3MsIGFiaSwgb3B0aW9ucyk7XG4gICAgc3VwZXIoY29udHJhY3RXcmFwcGVyLCBzdG9yYWdlLCBjaGFpbklkKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhYmlcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlcmM3MjFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJveWFsdGllc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltQ29uZGl0aW9uc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJldmVhbGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2lnbmF0dXJlXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hlY2tvdXRcIiwgdm9pZCAwKTtcbiAgICB0aGlzLmFiaSA9IGFiaTtcbiAgICB0aGlzLm1ldGFkYXRhID0gbmV3IENvbnRyYWN0TWV0YWRhdGEodGhpcy5jb250cmFjdFdyYXBwZXIsIERyb3BFcmM3MjFDb250cmFjdFNjaGVtYSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLnJvbGVzID0gbmV3IENvbnRyYWN0Um9sZXModGhpcy5jb250cmFjdFdyYXBwZXIsIFNpZ25hdHVyZURyb3AuY29udHJhY3RSb2xlcyk7XG4gICAgdGhpcy5yb3lhbHRpZXMgPSBuZXcgQ29udHJhY3RSb3lhbHR5KHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhKTtcbiAgICB0aGlzLnNhbGVzID0gbmV3IENvbnRyYWN0UHJpbWFyeVNhbGUodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZW5jb2RlciA9IG5ldyBDb250cmFjdEVuY29kZXIodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXN0aW1hdG9yID0gbmV3IEdhc0Nvc3RFc3RpbWF0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IENvbnRyYWN0RXZlbnRzKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLnBsYXRmb3JtRmVlcyA9IG5ldyBDb250cmFjdFBsYXRmb3JtRmVlKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmludGVyY2VwdG9yID0gbmV3IENvbnRyYWN0SW50ZXJjZXB0b3IodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICAgIHRoaXMuZXJjNzIxID0gbmV3IEVyYzcyMSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBjaGFpbklkKTtcbiAgICB0aGlzLmNsYWltQ29uZGl0aW9ucyA9IG5ldyBEcm9wQ2xhaW1Db25kaXRpb25zKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLm1ldGFkYXRhLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzcyMVdpdGhRdWFudGl0eVNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucmV2ZWFsZXIgPSBuZXcgRGVsYXllZFJldmVhbCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBGRUFUVVJFX05GVF9SRVZFQUxBQkxFLm5hbWUsICgpID0+IHRoaXMuZXJjNzIxLm5leHRUb2tlbklkVG9NaW50KCkpO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gbmV3IEVyYzcyMVdpdGhRdWFudGl0eVNpZ25hdHVyZU1pbnRhYmxlKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMub3duZXIgPSBuZXcgQ29udHJhY3RPd25lcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5jaGVja291dCA9IG5ldyBQYXBlckNoZWNrb3V0KHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uTmV0d29ya1VwZGF0ZWQobmV0d29yaykge1xuICAgIHRoaXMuY29udHJhY3RXcmFwcGVyLnVwZGF0ZVNpZ25lck9yUHJvdmlkZXIobmV0d29yayk7XG4gIH1cbiAgZ2V0QWRkcmVzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0LmFkZHJlc3M7XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFJFQUQgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvdGFsIGNvdW50IE5GVHMgaW4gdGhpcyBkcm9wIGNvbnRyYWN0LCBib3RoIGNsYWltZWQgYW5kIHVuY2xhaW1lZFxuICAgKi9cbiAgYXN5bmMgdG90YWxTdXBwbHkoKSB7XG4gICAgY29uc3QgY2xhaW1lZCA9IGF3YWl0IHRoaXMudG90YWxDbGFpbWVkU3VwcGx5KCk7XG4gICAgY29uc3QgdW5jbGFpbWVkID0gYXdhaXQgdGhpcy50b3RhbFVuY2xhaW1lZFN1cHBseSgpO1xuICAgIHJldHVybiBjbGFpbWVkLmFkZCh1bmNsYWltZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBbGwgQ2xhaW1lZCBORlRzXG4gICAqXG4gICAqIEByZW1hcmtzIEZldGNoIGFsbCB0aGUgTkZUcyAoYW5kIHRoZWlyIG93bmVycykgdGhhdCBoYXZlIGJlZW4gY2xhaW1lZCBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjbGFpbWVkTkZUcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbENsYWltZWQoKTtcbiAgICogY29uc3QgZmlyc3RPd25lciA9IGNsYWltZWRORlRzWzBdLm93bmVyO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIC0gb3B0aW9uYWwgZmlsdGVyaW5nIHRvIG9ubHkgZmV0Y2ggYSBzdWJzZXQgb2YgcmVzdWx0cy5cbiAgICogQHJldHVybnMgVGhlIE5GVCBtZXRhZGF0YSBhbmQgdGhlaXIgb3duZXJzZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGxDbGFpbWVkKHF1ZXJ5UGFyYW1zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBCaWdOdW1iZXIuZnJvbShxdWVyeVBhcmFtcz8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBjb3VudCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5jb3VudCB8fCBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBtYXhJZCA9IE1hdGgubWluKChhd2FpdCB0aGlzLnRvdGFsQ2xhaW1lZFN1cHBseSgpKS50b051bWJlcigpLCBzdGFydCArIGNvdW50KTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShBcnJheShtYXhJZCkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmdldChpLnRvU3RyaW5nKCkpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFsbCBVbmNsYWltZWQgTkZUc1xuICAgKlxuICAgKiBAcmVtYXJrcyBGZXRjaCBhbGwgdGhlIE5GVHMgdGhhdCBoYXZlIGJlZW4gbm90IGJlZW4gY2xhaW1lZCB5ZXQgaW4gdGhpcyBEcm9wLlxuICAgKlxuICAgKiAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgdW5jbGFpbWVkTkZUcyA9IGF3YWl0IGNvbnRyYWN0LmdldEFsbFVuY2xhaW1lZCgpO1xuICAgKiBjb25zdCBmaXJzdFVuY2xhaW1lZE5GVCA9IHVuY2xhaW1lZE5GVHNbMF0ubmFtZTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtcyAtIG9wdGlvbmFsIGZpbHRlcmluZyB0byBvbmx5IGZldGNoIGEgc3Vic2V0IG9mIHJlc3VsdHMuXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGEgZm9yIGFsbCBORlRzIHF1ZXJpZWQuXG4gICAqL1xuICBhc3luYyBnZXRBbGxVbmNsYWltZWQocXVlcnlQYXJhbXMpIHtcbiAgICBjb25zdCBzdGFydCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGNvbnN0IGNvdW50ID0gQmlnTnVtYmVyLmZyb20ocXVlcnlQYXJhbXM/LmNvdW50IHx8IERFRkFVTFRfUVVFUllfQUxMX0NPVU5UKS50b051bWJlcigpO1xuICAgIGNvbnN0IGZpcnN0VG9rZW5JZCA9IEJpZ051bWJlci5mcm9tKE1hdGgubWF4KChhd2FpdCB0aGlzLnRvdGFsQ2xhaW1lZFN1cHBseSgpKS50b051bWJlcigpLCBzdGFydCkpO1xuICAgIGNvbnN0IG1heElkID0gQmlnTnVtYmVyLmZyb20oTWF0aC5taW4oKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5uZXh0VG9rZW5JZFRvTWludCgpKS50b051bWJlcigpLCBmaXJzdFRva2VuSWQudG9OdW1iZXIoKSArIGNvdW50KSk7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oQXJyYXkobWF4SWQuc3ViKGZpcnN0VG9rZW5JZCkudG9OdW1iZXIoKSkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmVyYzcyMS5nZXRUb2tlbk1ldGFkYXRhKGZpcnN0VG9rZW5JZC5hZGQoaSkudG9TdHJpbmcoKSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsYWltZWQgc3VwcGx5XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgbnVtYmVyIG9mIGNsYWltZWQgTkZUcyBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjbGFpbWVkTkZUQ291bnQgPSBhd2FpdCBjb250cmFjdC50b3RhbENsYWltZWRTdXBwbHkoKTtcbiAgICogY29uc29sZS5sb2coYE5GVHMgY2xhaW1lZCBzbyBmYXI6ICR7Y2xhaW1lZE5GVENvdW50fWApO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMgdGhlIGNsYWltZWQgc3VwcGx5XG4gICAqL1xuICBhc3luYyB0b3RhbENsYWltZWRTdXBwbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLnRvdGFsQ2xhaW1lZFN1cHBseSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdW5jbGFpbWVkIHN1cHBseVxuICAgKlxuICAgKiBAcmVtYXJrcyBHZXQgdGhlIG51bWJlciBvZiB1bmNsYWltZWQgTkZUcyBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB1bmNsYWltZWRORlRDb3VudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsVW5jbGFpbWVkU3VwcGx5KCk7XG4gICAqIGNvbnNvbGUubG9nKGBORlRzIGxlZnQgdG8gY2xhaW06ICR7dW5jbGFpbWVkTkZUQ291bnR9YCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB0aGUgdW5jbGFpbWVkIHN1cHBseVxuICAgKi9cbiAgYXN5bmMgdG90YWxVbmNsYWltZWRTdXBwbHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLnRvdGFsVW5jbGFpbWVkU3VwcGx5KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdXNlcnMgY2FuIHRyYW5zZmVyIE5GVHMgZnJvbSB0aGlzIGNvbnRyYWN0XG4gICAqL1xuICBhc3luYyBpc1RyYW5zZmVyUmVzdHJpY3RlZCgpIHtcbiAgICBjb25zdCBhbnlvbmVDYW5UcmFuc2ZlciA9IGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5oYXNSb2xlKGdldFJvbGVIYXNoKFwidHJhbnNmZXJcIiksIGNvbnN0YW50cy5BZGRyZXNzWmVybyk7XG4gICAgcmV0dXJuICFhbnlvbmVDYW5UcmFuc2ZlcjtcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogV1JJVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBiYXRjaCBvZiB1bmlxdWUgTkZUcyB0byBiZSBjbGFpbWVkIGluIHRoZSBmdXR1cmVcbiAgICpcbiAgICogQHJlbWFya3MgQ3JlYXRlIGJhdGNoIGFsbG93cyB5b3UgdG8gY3JlYXRlIGEgYmF0Y2ggb2YgbWFueSB1bmlxdWUgTkZUcyBpbiBvbmUgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogLy8gQ3VzdG9tIG1ldGFkYXRhIG9mIHRoZSBORlRzIHRvIGNyZWF0ZVxuICAgKiBjb25zdCBtZXRhZGF0YXMgPSBbe1xuICAgKiAgIG5hbWU6IFwiQ29vbCBORlRcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksIC8vIFRoaXMgY2FuIGJlIGFuIGltYWdlIHVybCBvciBmaWxlXG4gICAqIH0sIHtcbiAgICogICBuYW1lOiBcIkNvb2wgTkZUXCIsXG4gICAqICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvb2wgTkZUXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLFxuICAgKiB9XTtcbiAgICpcbiAgICogY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJhdGNoKG1ldGFkYXRhcyk7IC8vIHVwbG9hZHMgYW5kIGNyZWF0ZXMgdGhlIE5GVHMgb24gY2hhaW5cbiAgICogY29uc3QgZmlyc3RUb2tlbklkID0gcmVzdWx0c1swXS5pZDsgLy8gdG9rZW4gaWQgb2YgdGhlIGZpcnN0IGNyZWF0ZWQgTkZUXG4gICAqIGNvbnN0IGZpcnN0TkZUID0gYXdhaXQgcmVzdWx0c1swXS5kYXRhKCk7IC8vIChvcHRpb25hbCkgZmV0Y2ggZGV0YWlscyBvZiB0aGUgZmlyc3QgY3JlYXRlZCBORlRcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBtZXRhZGF0YXMgLSBUaGUgbWV0YWRhdGEgdG8gaW5jbHVkZSBpbiB0aGUgYmF0Y2guXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gb3B0aW9uYWwgdXBsb2FkIHByb2dyZXNzIGNhbGxiYWNrXG4gICAqL1xuICBhc3luYyBjcmVhdGVCYXRjaChtZXRhZGF0YXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEubGF6eU1pbnQobWV0YWRhdGFzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBjbGFpbSB0cmFuc2FjdGlvbiB3aXRob3V0IGV4ZWN1dGluZyBpdC5cbiAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGVzdGltYXRpbmcgdGhlIGdhcyBjb3N0IG9mIGEgY2xhaW0gdHJhbnNhY3Rpb24sIG92ZXJyaWRpbmcgdHJhbnNhY3Rpb24gb3B0aW9ucyBhbmQgaGF2aW5nIGZpbmUgZ3JhaW5lZCBjb250cm9sIG92ZXIgdGhlIHRyYW5zYWN0aW9uIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uQWRkcmVzc1xuICAgKiBAcGFyYW0gcXVhbnRpdHlcbiAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2VcbiAgICovXG4gIGFzeW5jIGdldENsYWltVHJhbnNhY3Rpb24oZGVzdGluYXRpb25BZGRyZXNzLCBxdWFudGl0eSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5nZXRDbGFpbVRyYW5zYWN0aW9uKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHksIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsYWltIHVuaXF1ZSBORlRzIHRvIGEgc3BlY2lmaWMgV2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIExldCB0aGUgc3BlY2lmaWVkIHdhbGxldCBjbGFpbSBORlRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiOyAvLyBhZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gY2xhaW0gdGhlIE5GVHNcbiAgICogY29uc3QgcXVhbnRpdHkgPSAxOyAvLyBob3cgbWFueSB1bmlxdWUgTkZUcyB5b3Ugd2FudCB0byBjbGFpbVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG8oYWRkcmVzcywgcXVhbnRpdHkpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHgucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgY2xhaW1lZFRva2VuSWQgPSB0eC5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgY2xhaW1lZFxuICAgKiBjb25zdCBjbGFpbWVkTkZUID0gYXdhaXQgdHguZGF0YSgpOyAvLyAob3B0aW9uYWwpIGdldCB0aGUgY2xhaW1lZCBORlQgbWV0YWRhdGFcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkFkZHJlc3MgLSBBZGRyZXNzIHlvdSB3YW50IHRvIHNlbmQgdGhlIHRva2VuIHRvXG4gICAqIEBwYXJhbSBxdWFudGl0eSAtIFF1YW50aXR5IG9mIHRoZSB0b2tlbnMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgKlxuICAgKiBAcmV0dXJucyAtIGFuIGFycmF5IG9mIHJlc3VsdHMgY29udGFpbmluZyB0aGUgaWQgb2YgdGhlIHRva2VuIGNsYWltZWQsIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0IGFuZCBhIHByb21pc2UgdG8gb3B0aW9uYWxseSBmZXRjaCB0aGUgbmZ0IG1ldGFkYXRhXG4gICAqL1xuICBhc3luYyBjbGFpbVRvKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuY2xhaW1UbyhkZXN0aW5hdGlvbkFkZHJlc3MsIHF1YW50aXR5LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFpbSBORlRzIHRvIHRoZSBjb25uZWN0ZWQgd2FsbGV0LlxuICAgKlxuICAgKiBAcmVtYXJrcyBTZWUge0BsaW5rIE5GVERyb3AuY2xhaW1Ub31cbiAgICpcbiAgICogQHJldHVybnMgLSBhbiBhcnJheSBvZiByZXN1bHRzIGNvbnRhaW5pbmcgdGhlIGlkIG9mIHRoZSB0b2tlbiBjbGFpbWVkLCB0aGUgdHJhbnNhY3Rpb24gcmVjZWlwdCBhbmQgYSBwcm9taXNlIHRvIG9wdGlvbmFsbHkgZmV0Y2ggdGhlIG5mdCBtZXRhZGF0YVxuICAgKi9cbiAgYXN5bmMgY2xhaW0ocXVhbnRpdHksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuY2xhaW0ocXVhbnRpdHksIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1cm4gYSBzaW5nbGUgTkZUXG4gICAqIEBwYXJhbSB0b2tlbklkIC0gdGhlIHRva2VuIElkIHRvIGJ1cm5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5idXJuVG9rZW4odG9rZW5JZCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgYnVybih0b2tlbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmJ1cm4odG9rZW5JZCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoU2lnbmF0dXJlRHJvcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBTaWduYXR1cmVEcm9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=