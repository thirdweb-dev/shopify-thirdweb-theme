"use strict";
(self["webpackChunkshopify_thirdweb_theme"] = self["webpackChunkshopify_thirdweb_theme"] || []).push([["vendors-node_modules_thirdweb-dev_sdk_dist_nft-drop-8b184e7a_esm_js"],{

/***/ "./node_modules/@thirdweb-dev/sdk/dist/nft-drop-8b184e7a.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@thirdweb-dev/sdk/dist/nft-drop-8b184e7a.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFTDrop": () => (/* binding */ NFTDrop)
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
 * Setup a collection of one-of-one NFTs that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @public
 */
class NFTDrop extends _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aI {
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
   * await contract.claimConditions.set(claimConditions);
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
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "checkout", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "erc721", void 0);
    (0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(this, "owner", void 0);
    this.abi = abi;
    this.metadata = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ak(this.contractWrapper, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d1, this.storage);
    this.roles = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.al(this.contractWrapper, NFTDrop.contractRoles);
    this.royalties = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.am(this.contractWrapper, this.metadata);
    this.sales = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.an(this.contractWrapper);
    this.claimConditions = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ap(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aj(this.contractWrapper);
    this.estimator = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aU(this.contractWrapper);
    this.events = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aV(this.contractWrapper);
    this.platformFees = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aX(this.contractWrapper);
    this.erc721 = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.az(this.contractWrapper, this.storage, chainId);
    this.revealer = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.ao(this.contractWrapper, this.storage, _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.d2.name, () => this.erc721.nextTokenIdToMint());
    this.interceptor = new _thirdweb_checkout_33f13955_esm_js__WEBPACK_IMPORTED_MODULE_66__.aW(this.contractWrapper);
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
    const maxId = Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start + count);
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
    const firstTokenId = ethers__WEBPACK_IMPORTED_MODULE_68__.BigNumber.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(), start));
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
   * @returns the unclaimed supply
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
  async getClaimTransaction(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.getClaimTransaction(destinationAddress, quantity, {
      checkERC20Allowance
    });
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
   * const receipt = tx[0].receipt; // the transaction receipt
   * const claimedTokenId = tx[0].id; // the id of the NFT claimed
   * const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  async claimTo(destinationAddress, quantity) {
    let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return this.erc721.claimTo(destinationAddress, quantity, {
      checkERC20Allowance
    });
  }

  /**
   * Claim NFTs to the connected wallet.
   *
   * @remarks See {@link NFTDrop.claimTo}
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  async claim(quantity) {
    let checkERC20Allowance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return this.claimTo(await this.contractWrapper.getSignerAddress(), quantity, checkERC20Allowance);
  }

  /**
   * Burn a single NFT
   *
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   *
   */
  async burn(tokenId) {
    return this.erc721.burn(tokenId);
  }

  /******************************
   * STANDARD ERC721 FUNCTIONS
   ******************************/

  /**
   * Get a single NFT Metadata
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */
  async get(tokenId) {
    return this.erc721.get(tokenId);
  }

  /**
   * Get the current owner of a given NFT within this Contract
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   */
  async ownerOf(tokenId) {
    return this.erc721.ownerOf(tokenId);
  }

  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   */
  async balanceOf(address) {
    return this.erc721.balanceOf(address);
  }

  /**
   * Get NFT Balance for the currently connected wallet
   */
  async balance() {
    return this.erc721.balance();
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return this.erc721.isApproved(address, operator);
  }

  /**
   * Transfer a single NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.transfer(walletAddress, tokenId);
   * ```
   */
  async transfer(to, tokenId) {
    return this.erc721.transfer(to, tokenId);
  }

  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */
  async setApprovalForAll(operator, approved) {
    return this.erc721.setApprovalForAll(operator, approved);
  }

  /**
   * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */
  async setApprovalForToken(operator, tokenId) {
    return {
      receipt: await this.contractWrapper.sendTransaction("approve", [operator, tokenId])
    };
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
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
(0,_QueryParams_da88d27c_esm_js__WEBPACK_IMPORTED_MODULE_67__._)(NFTDrop, "contractRoles", ["admin", "minter", "transfer"]);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmR3ZWItZGV2LXNkay1kaXN0LW5mdC1kcm9wLThiMTg0ZTdhLWVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1HO0FBQ2taO0FBQ3ZjO0FBQy9CO0FBQ0Y7QUFDOEM7QUFDQTtBQUNDO0FBQ3BDO0FBQzBDO0FBQ1Q7QUFDUTtBQUNHO0FBQ0c7QUFDYjtBQUNRO0FBQ0o7QUFDUztBQUNKO0FBQ0M7QUFDRjtBQUNBO0FBQ0c7QUFDSjtBQUNKO0FBQ007QUFDSztBQUNHO0FBQ1A7QUFDQTtBQUNDO0FBQ1I7QUFDTTtBQUNLO0FBQ0c7QUFDTDtBQUNGO0FBQ0s7QUFDUDtBQUNQO0FBQ1U7QUFDRjtBQUNDO0FBQ1Q7QUFDTztBQUNGO0FBQ1U7QUFDVjtBQUNBO0FBQ0w7QUFDQztBQUNEO0FBQ3RDO0FBQ1M7QUFDUDtBQUNzQztBQUM5QjtBQUNtQztBQUNSO0FBQ1c7QUFDL0M7QUFDRztBQUNYO0FBQ3FEO0FBQ0M7QUFDUTtBQUNmO0FBQ0M7QUFDTztBQUNRO0FBQ0M7QUFDaEU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0MsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBYztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxtRUFBZTtBQUNqSDtBQUNBLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CLElBQUksZ0VBQWU7QUFDbkIsSUFBSSxnRUFBZTtBQUNuQixJQUFJLGdFQUFlO0FBQ25CO0FBQ0Esd0JBQXdCLG1FQUFnQix1QkFBdUIsbUVBQXdCO0FBQ3ZGLHFCQUFxQixtRUFBYTtBQUNsQyx5QkFBeUIsbUVBQWU7QUFDeEMscUJBQXFCLG1FQUFtQjtBQUN4QywrQkFBK0IsbUVBQW1CO0FBQ2xELHVCQUF1QixtRUFBZTtBQUN0Qyx5QkFBeUIsbUVBQWdCO0FBQ3pDLHNCQUFzQixtRUFBYztBQUNwQyw0QkFBNEIsbUVBQW1CO0FBQy9DLHNCQUFzQixtRUFBTTtBQUM1Qix3QkFBd0IsbUVBQWEscUNBQXFDLHdFQUEyQjtBQUNyRywyQkFBMkIsbUVBQW1CO0FBQzlDLHFCQUFxQixtRUFBYTtBQUNsQyx3QkFBd0IsbUVBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtREFBYztBQUNoQyxrQkFBa0IsbURBQWMsdUJBQXVCLDREQUF1QjtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFjO0FBQ2hDLGtCQUFrQixtREFBYyx1QkFBdUIsNERBQXVCO0FBQzlFLHlCQUF5QixtREFBYztBQUN2QyxrQkFBa0IsbURBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGdCQUFnQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVFQUFXLGNBQWMsZ0RBQXFCO0FBQzVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSw0REFBNEQ7QUFDNUQseUNBQXlDO0FBQ3pDLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEdBQUc7QUFDM0MseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFlOztBQUVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS10aGlyZHdlYi10aGVtZS8uL25vZGVfbW9kdWxlcy9AdGhpcmR3ZWItZGV2L3Nkay9kaXN0L25mdC1kcm9wLThiMTg0ZTdhLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfIGFzIF9kZWZpbmVQcm9wZXJ0eSwgYyBhcyBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCB9IGZyb20gJy4vUXVlcnlQYXJhbXMtZGE4OGQyN2MuZXNtLmpzJztcbmltcG9ydCB7IGFJIGFzIFN0YW5kYXJkRXJjNzIxLCBjSyBhcyBDb250cmFjdFdyYXBwZXIsIGFrIGFzIENvbnRyYWN0TWV0YWRhdGEsIGQxIGFzIERyb3BFcmM3MjFDb250cmFjdFNjaGVtYSwgYWwgYXMgQ29udHJhY3RSb2xlcywgYW0gYXMgQ29udHJhY3RSb3lhbHR5LCBhbiBhcyBDb250cmFjdFByaW1hcnlTYWxlLCBhcCBhcyBEcm9wQ2xhaW1Db25kaXRpb25zLCBhaiBhcyBDb250cmFjdEVuY29kZXIsIGFVIGFzIEdhc0Nvc3RFc3RpbWF0b3IsIGFWIGFzIENvbnRyYWN0RXZlbnRzLCBhWCBhcyBDb250cmFjdFBsYXRmb3JtRmVlLCBheiBhcyBFcmM3MjEsIGFvIGFzIERlbGF5ZWRSZXZlYWwsIGQyIGFzIEZFQVRVUkVfTkZUX1JFVkVBTEFCTEUsIGFXIGFzIENvbnRyYWN0SW50ZXJjZXB0b3IsIGFaIGFzIENvbnRyYWN0T3duZXIsIGNKIGFzIFBhcGVyQ2hlY2tvdXQsIGJBIGFzIGdldFJvbGVIYXNoIH0gZnJvbSAnLi90aGlyZHdlYi1jaGVja291dC0zM2YxMzk1NS5lc20uanMnO1xuaW1wb3J0IHsgQmlnTnVtYmVyLCBjb25zdGFudHMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICdibi5qcyc7XG5pbXBvcnQgJ3pvZCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMTY1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICd0aW55LWludmFyaWFudCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURyb3BFUkMyMF9WMi5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlX1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzIwLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMjAuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JTXVsdGljYWxsLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkMyMC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lCdXJuYWJsZUVSQzcyMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDbGFpbWFibGVFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wRVJDNzIxX1YzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzcyMUVudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDNzIxU3VwcGx5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUxhenlNaW50Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDNzIxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVNpZ25hdHVyZU1pbnRFUkM3MjEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JU2lnbmF0dXJlTWludEVSQzcyMV9WMS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0xhenlNaW50V2l0aFRpZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JQnVybmFibGVFUkMxMTU1Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUNsYWltYWJsZUVSQzExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcDExNTUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcEVSQzExNTVfVjIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRHJvcFNpbmdsZVBoYXNlMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lEcm9wU2luZ2xlUGhhc2UxMTU1X1YxLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVSQzExNTVFbnVtZXJhYmxlLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSU1pbnRhYmxlRVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lTaWduYXR1cmVNaW50RVJDMTE1NS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0VSQzI3NzFDb250ZXh0Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUFwcFVSSS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lDb250cmFjdE1ldGFkYXRhLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSURpcmVjdExpc3RpbmdzLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSUVuZ2xpc2hBdWN0aW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lPZmZlcnMuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGFja1ZSRkRpcmVjdC5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9ucy5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lQZXJtaXNzaW9uc0VudW1lcmFibGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUGxhdGZvcm1GZWUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUHJpbWFyeVNhbGUuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JUm91dGVyLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvSVJveWFsdHkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Pd25hYmxlLmpzb24nO1xuaW1wb3J0ICdjcm9zcy1mZXRjaCc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY2hhaW5zJztcbmltcG9ydCAnZXZlbnRlbWl0dGVyMyc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9Gb3J3YXJkZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvc3RvcmFnZSc7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRVJDMjBNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL1JvdXRlci5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lUaGlyZHdlYkNvbnRyYWN0Lmpzb24nO1xuaW1wb3J0ICdtZXJrbGV0cmVlanMnO1xuaW1wb3J0ICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0ICd1dWlkJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkM3MjFNZXRhZGF0YS5qc29uJztcbmltcG9ydCAnQHRoaXJkd2ViLWRldi9jb250cmFjdHMtanMvZGlzdC9hYmlzL0lFUkMxMTU1TWV0YWRhdGEuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9JRGVsYXllZFJldmVhbERlcHJlY2F0ZWQuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV0ZhY3RvcnkuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV1JlZ2lzdHJ5Lmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvQ29udHJhY3RQdWJsaXNoZXIuanNvbic7XG5pbXBvcnQgJ0B0aGlyZHdlYi1kZXYvY29udHJhY3RzLWpzL2Rpc3QvYWJpcy9UV011bHRpY2hhaW5SZWdpc3RyeUxvZ2ljLmpzb24nO1xuaW1wb3J0ICdAdGhpcmR3ZWItZGV2L2NvbnRyYWN0cy1qcy9kaXN0L2FiaXMvVFdNdWx0aWNoYWluUmVnaXN0cnlSb3V0ZXIuanNvbic7XG5pbXBvcnQgJ2JzNTgnO1xuXG4vKipcbiAqIFNldHVwIGEgY29sbGVjdGlvbiBvZiBvbmUtb2Ytb25lIE5GVHMgdGhhdCBhcmUgbWludGVkIGFzIHVzZXJzIGNsYWltIHRoZW0uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBUaGlyZHdlYlNESyB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3Nka1wiO1xuICpcbiAqIGNvbnN0IHNkayA9IG5ldyBUaGlyZHdlYlNESyhcInt7Y2hhaW5OYW1lfX1cIik7XG4gKiBjb25zdCBjb250cmFjdCA9IGF3YWl0IHNkay5nZXRDb250cmFjdChcInt7Y29udHJhY3RfYWRkcmVzc319XCIsIFwibmZ0LWRyb3BcIik7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIE5GVERyb3AgZXh0ZW5kcyBTdGFuZGFyZEVyYzcyMSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSByb3lhbHRpZXNcbiAgICogQHJlbWFya3MgU2V0IHlvdXIgb3duIHJveWFsdGllcyBmb3IgdGhlIGVudGlyZSBjb250cmFjdCBvciBwZXIgdG9rZW5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyByb3lhbHRpZXMgb24gdGhlIHdob2xlIGNvbnRyYWN0XG4gICAqIGNvbnRyYWN0LnJveWFsdGllcy5zZXREZWZhdWx0Um95YWx0eUluZm8oe1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiAxMDAsIC8vIDElXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiAvLyBvdmVycmlkZSByb3lhbHR5IGZvciBhIHBhcnRpY3VsYXIgdG9rZW5cbiAgICogY29udHJhY3Qucm95YWx0aWVzLnNldFRva2VuUm95YWx0eUluZm8odG9rZW5JZCwge1xuICAgKiAgIHNlbGxlcl9mZWVfYmFzaXNfcG9pbnRzOiA1MDAsIC8vIDUlXG4gICAqICAgZmVlX3JlY2lwaWVudDogXCIweC4uLlwiXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBjbGFpbSBjb25kaXRpb25zXG4gICAqIEByZW1hcmtzIERlZmluZSB3aG8gY2FuIGNsYWltIE5GVHMgaW4gdGhlIGNvbGxlY3Rpb24sIHdoZW4gYW5kIGhvdyBtYW55LlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHByZXNhbGVTdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgKiBjb25zdCBwdWJsaWNTYWxlU3RhcnRUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDYwICogNjAgKiAyNCAqIDEwMDApO1xuICAgKiBjb25zdCBjbGFpbUNvbmRpdGlvbnMgPSBbXG4gICAqICAge1xuICAgKiAgICAgc3RhcnRUaW1lOiBwcmVzYWxlU3RhcnRUaW1lLCAvLyBzdGFydCB0aGUgcHJlc2FsZSBub3dcbiAgICogICAgIG1heFF1YW50aXR5OiAyLCAvLyBsaW1pdCBob3cgbWFueSBtaW50cyBmb3IgdGhpcyBwcmVzYWxlXG4gICAqICAgICBwcmljZTogMC4wMSwgLy8gcHJlc2FsZSBwcmljZVxuICAgKiAgICAgc25hcHNob3Q6IFsnMHguLi4nLCAnMHguLi4nXSwgLy8gbGltaXQgbWludGluZyB0byBvbmx5IGNlcnRhaW4gYWRkcmVzc2VzXG4gICAqICAgfSxcbiAgICogICB7XG4gICAqICAgICBzdGFydFRpbWU6IHB1YmxpY1NhbGVTdGFydFRpbWUsIC8vIDI0aCBhZnRlciBwcmVzYWxlLCBzdGFydCBwdWJsaWMgc2FsZVxuICAgKiAgICAgcHJpY2U6IDAuMDgsIC8vIHB1YmxpYyBzYWxlIHByaWNlXG4gICAqICAgfVxuICAgKiBdKTtcbiAgICogYXdhaXQgY29udHJhY3QuY2xhaW1Db25kaXRpb25zLnNldChjbGFpbUNvbmRpdGlvbnMpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgLyoqXG4gICAqIERlbGF5ZWQgcmV2ZWFsXG4gICAqIEByZW1hcmtzIENyZWF0ZSBhIGJhdGNoIG9mIGVuY3J5cHRlZCBORlRzIHRoYXQgY2FuIGJlIHJldmVhbGVkIGF0IGEgbGF0ZXIgdGltZS5cbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyB0aGUgcmVhbCBORlRzLCB0aGVzZSB3aWxsIGJlIGVuY3J5cHRlZCB1bnRpbCB5b3UgcmV2ZWFsIHRoZW1cbiAgICogY29uc3QgcmVhbE5GVHMgPSBbe1xuICAgKiAgIG5hbWU6IFwiQ29tbW9uIE5GVCAjMVwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIkNvbW1vbiBORlQsIG9uZSBvZiBtYW55LlwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSxcbiAgICogfSwge1xuICAgKiAgIG5hbWU6IFwiU3VwZXIgUmFyZSBORlQgIzJcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJZb3UgZ290IGEgU3VwZXIgUmFyZSBORlQhXCIsXG4gICAqICAgaW1hZ2U6IGZzLnJlYWRGaWxlU3luYyhcInBhdGgvdG8vaW1hZ2UucG5nXCIpLFxuICAgKiB9XTtcbiAgICogLy8gQSBwbGFjZWhvbGRlciBORlQgdGhhdCBwZW9wbGUgd2lsbCBnZXQgaW1tZWRpYXRlbHkgaW4gdGhlaXIgd2FsbGV0LCBhbmQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHJlYWwgTkZUIGF0IHJldmVhbCB0aW1lXG4gICAqIGNvbnN0IHBsYWNlaG9sZGVyTkZUID0ge1xuICAgKiAgIG5hbWU6IFwiSGlkZGVuIE5GVFwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIldpbGwgYmUgcmV2ZWFsZWQgbmV4dCB3ZWVrIVwiXG4gICAqIH07XG4gICAqIC8vIENyZWF0ZSBhbmQgZW5jcnlwdCB0aGUgTkZUc1xuICAgKiBhd2FpdCBjb250cmFjdC5yZXZlYWxlci5jcmVhdGVEZWxheWVkUmV2ZWFsQmF0Y2goXG4gICAqICAgcGxhY2Vob2xkZXJORlQsXG4gICAqICAgcmVhbE5GVHMsXG4gICAqICAgXCJteSBzZWNyZXQgcGFzc3dvcmRcIixcbiAgICogKTtcbiAgICogLy8gV2hlbmV2ZXIgeW91J3JlIHJlYWR5LCByZXZlYWwgeW91ciBORlRzIGF0IGFueSB0aW1lXG4gICAqIGNvbnN0IGJhdGNoSWQgPSAwOyAvLyB0aGUgYmF0Y2ggdG8gcmV2ZWFsXG4gICAqIGF3YWl0IGNvbnRyYWN0LnJldmVhbGVyLnJldmVhbChiYXRjaElkLCBcIm15IHNlY3JldCBwYXNzd29yZFwiKTtcbiAgICogYGBgXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDaGVja291dFxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYSBGSUFUIGN1cnJlbmN5IGNoZWNrb3V0IGZvciB5b3VyIE5GVCBkcm9wLlxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihuZXR3b3JrLCBhZGRyZXNzLCBzdG9yYWdlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgIGxldCBhYmkgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgY2hhaW5JZCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgIGxldCBjb250cmFjdFdyYXBwZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gNiAmJiBhcmd1bWVudHNbNl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s2XSA6IG5ldyBDb250cmFjdFdyYXBwZXIobmV0d29yaywgYWRkcmVzcywgYWJpLCBvcHRpb25zKTtcbiAgICBzdXBlcihjb250cmFjdFdyYXBwZXIsIHN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFiaVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVuY29kZXJcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlc3RpbWF0b3JcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtZXRhZGF0YVwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNhbGVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGxhdGZvcm1GZWVzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXZlbnRzXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicm9sZXNcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbnRlcmNlcHRvclwiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJveWFsdGllc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNsYWltQ29uZGl0aW9uc1wiLCB2b2lkIDApO1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJldmVhbGVyXCIsIHZvaWQgMCk7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY2hlY2tvdXRcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlcmM3MjFcIiwgdm9pZCAwKTtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvd25lclwiLCB2b2lkIDApO1xuICAgIHRoaXMuYWJpID0gYWJpO1xuICAgIHRoaXMubWV0YWRhdGEgPSBuZXcgQ29udHJhY3RNZXRhZGF0YSh0aGlzLmNvbnRyYWN0V3JhcHBlciwgRHJvcEVyYzcyMUNvbnRyYWN0U2NoZW1hLCB0aGlzLnN0b3JhZ2UpO1xuICAgIHRoaXMucm9sZXMgPSBuZXcgQ29udHJhY3RSb2xlcyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgTkZURHJvcC5jb250cmFjdFJvbGVzKTtcbiAgICB0aGlzLnJveWFsdGllcyA9IG5ldyBDb250cmFjdFJveWFsdHkodGhpcy5jb250cmFjdFdyYXBwZXIsIHRoaXMubWV0YWRhdGEpO1xuICAgIHRoaXMuc2FsZXMgPSBuZXcgQ29udHJhY3RQcmltYXJ5U2FsZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5jbGFpbUNvbmRpdGlvbnMgPSBuZXcgRHJvcENsYWltQ29uZGl0aW9ucyh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5tZXRhZGF0YSwgdGhpcy5zdG9yYWdlKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgQ29udHJhY3RFbmNvZGVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmVzdGltYXRvciA9IG5ldyBHYXNDb3N0RXN0aW1hdG9yKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBDb250cmFjdEV2ZW50cyh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5wbGF0Zm9ybUZlZXMgPSBuZXcgQ29udHJhY3RQbGF0Zm9ybUZlZSh0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5lcmM3MjEgPSBuZXcgRXJjNzIxKHRoaXMuY29udHJhY3RXcmFwcGVyLCB0aGlzLnN0b3JhZ2UsIGNoYWluSWQpO1xuICAgIHRoaXMucmV2ZWFsZXIgPSBuZXcgRGVsYXllZFJldmVhbCh0aGlzLmNvbnRyYWN0V3JhcHBlciwgdGhpcy5zdG9yYWdlLCBGRUFUVVJFX05GVF9SRVZFQUxBQkxFLm5hbWUsICgpID0+IHRoaXMuZXJjNzIxLm5leHRUb2tlbklkVG9NaW50KCkpO1xuICAgIHRoaXMuaW50ZXJjZXB0b3IgPSBuZXcgQ29udHJhY3RJbnRlcmNlcHRvcih0aGlzLmNvbnRyYWN0V3JhcHBlcik7XG4gICAgdGhpcy5vd25lciA9IG5ldyBDb250cmFjdE93bmVyKHRoaXMuY29udHJhY3RXcmFwcGVyKTtcbiAgICB0aGlzLmNoZWNrb3V0ID0gbmV3IFBhcGVyQ2hlY2tvdXQodGhpcy5jb250cmFjdFdyYXBwZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25OZXR3b3JrVXBkYXRlZChuZXR3b3JrKSB7XG4gICAgdGhpcy5jb250cmFjdFdyYXBwZXIudXBkYXRlU2lnbmVyT3JQcm92aWRlcihuZXR3b3JrKTtcbiAgfVxuICBnZXRBZGRyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0V3JhcHBlci5yZWFkQ29udHJhY3QuYWRkcmVzcztcbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogUkVBRCBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdG90YWwgY291bnQgTkZUcyBpbiB0aGlzIGRyb3AgY29udHJhY3QsIGJvdGggY2xhaW1lZCBhbmQgdW5jbGFpbWVkXG4gICAqL1xuICBhc3luYyB0b3RhbFN1cHBseSgpIHtcbiAgICBjb25zdCBjbGFpbWVkID0gYXdhaXQgdGhpcy50b3RhbENsYWltZWRTdXBwbHkoKTtcbiAgICBjb25zdCB1bmNsYWltZWQgPSBhd2FpdCB0aGlzLnRvdGFsVW5jbGFpbWVkU3VwcGx5KCk7XG4gICAgcmV0dXJuIGNsYWltZWQuYWRkKHVuY2xhaW1lZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFsbCBDbGFpbWVkIE5GVHNcbiAgICpcbiAgICogQHJlbWFya3MgRmV0Y2ggYWxsIHRoZSBORlRzIChhbmQgdGhlaXIgb3duZXJzKSB0aGF0IGhhdmUgYmVlbiBjbGFpbWVkIGluIHRoaXMgRHJvcC5cbiAgICpcbiAgICogKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGNsYWltZWRORlRzID0gYXdhaXQgY29udHJhY3QuZ2V0QWxsQ2xhaW1lZCgpO1xuICAgKiBjb25zdCBmaXJzdE93bmVyID0gY2xhaW1lZE5GVHNbMF0ub3duZXI7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgLSBvcHRpb25hbCBmaWx0ZXJpbmcgdG8gb25seSBmZXRjaCBhIHN1YnNldCBvZiByZXN1bHRzLlxuICAgKiBAcmV0dXJucyBUaGUgTkZUIG1ldGFkYXRhIGFuZCB0aGVpciBvd25lcnNmb3IgYWxsIE5GVHMgcXVlcmllZC5cbiAgICovXG4gIGFzeW5jIGdldEFsbENsYWltZWQocXVlcnlQYXJhbXMpIHtcbiAgICBjb25zdCBzdGFydCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5zdGFydCB8fCAwKS50b051bWJlcigpO1xuICAgIGNvbnN0IGNvdW50ID0gQmlnTnVtYmVyLmZyb20ocXVlcnlQYXJhbXM/LmNvdW50IHx8IERFRkFVTFRfUVVFUllfQUxMX0NPVU5UKS50b051bWJlcigpO1xuICAgIGNvbnN0IG1heElkID0gTWF0aC5taW4oKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5uZXh0VG9rZW5JZFRvQ2xhaW0oKSkudG9OdW1iZXIoKSwgc3RhcnQgKyBjb3VudCk7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oQXJyYXkobWF4SWQpLmtleXMoKSkubWFwKGkgPT4gdGhpcy5nZXQoaS50b1N0cmluZygpKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBbGwgVW5jbGFpbWVkIE5GVHNcbiAgICpcbiAgICogQHJlbWFya3MgRmV0Y2ggYWxsIHRoZSBORlRzIHRoYXQgaGF2ZSBiZWVuIG5vdCBiZWVuIGNsYWltZWQgeWV0IGluIHRoaXMgRHJvcC5cbiAgICpcbiAgICogKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHVuY2xhaW1lZE5GVHMgPSBhd2FpdCBjb250cmFjdC5nZXRBbGxVbmNsYWltZWQoKTtcbiAgICogY29uc3QgZmlyc3RVbmNsYWltZWRORlQgPSB1bmNsYWltZWRORlRzWzBdLm5hbWU7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlQYXJhbXMgLSBvcHRpb25hbCBmaWx0ZXJpbmcgdG8gb25seSBmZXRjaCBhIHN1YnNldCBvZiByZXN1bHRzLlxuICAgKiBAcmV0dXJucyBUaGUgTkZUIG1ldGFkYXRhIGZvciBhbGwgTkZUcyBxdWVyaWVkLlxuICAgKi9cbiAgYXN5bmMgZ2V0QWxsVW5jbGFpbWVkKHF1ZXJ5UGFyYW1zKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBCaWdOdW1iZXIuZnJvbShxdWVyeVBhcmFtcz8uc3RhcnQgfHwgMCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBjb3VudCA9IEJpZ051bWJlci5mcm9tKHF1ZXJ5UGFyYW1zPy5jb3VudCB8fCBERUZBVUxUX1FVRVJZX0FMTF9DT1VOVCkudG9OdW1iZXIoKTtcbiAgICBjb25zdCBmaXJzdFRva2VuSWQgPSBCaWdOdW1iZXIuZnJvbShNYXRoLm1heCgoYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lm5leHRUb2tlbklkVG9DbGFpbSgpKS50b051bWJlcigpLCBzdGFydCkpO1xuICAgIGNvbnN0IG1heElkID0gQmlnTnVtYmVyLmZyb20oTWF0aC5taW4oKGF3YWl0IHRoaXMuY29udHJhY3RXcmFwcGVyLnJlYWRDb250cmFjdC5uZXh0VG9rZW5JZFRvTWludCgpKS50b051bWJlcigpLCBmaXJzdFRva2VuSWQudG9OdW1iZXIoKSArIGNvdW50KSk7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKEFycmF5LmZyb20oQXJyYXkobWF4SWQuc3ViKGZpcnN0VG9rZW5JZCkudG9OdW1iZXIoKSkua2V5cygpKS5tYXAoaSA9PiB0aGlzLmVyYzcyMS5nZXRUb2tlbk1ldGFkYXRhKGZpcnN0VG9rZW5JZC5hZGQoaSkudG9TdHJpbmcoKSkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNsYWltZWQgc3VwcGx5XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgbnVtYmVyIG9mIGNsYWltZWQgTkZUcyBpbiB0aGlzIERyb3AuXG4gICAqXG4gICAqICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCBjbGFpbWVkTkZUQ291bnQgPSBhd2FpdCBjb250cmFjdC50b3RhbENsYWltZWRTdXBwbHkoKTtcbiAgICogY29uc29sZS5sb2coYE5GVHMgY2xhaW1lZCBzbyBmYXI6ICR7Y2xhaW1lZE5GVENvdW50fWApO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMgdGhlIHVuY2xhaW1lZCBzdXBwbHlcbiAgICovXG4gIGFzeW5jIHRvdGFsQ2xhaW1lZFN1cHBseSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEudG90YWxDbGFpbWVkU3VwcGx5KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1bmNsYWltZWQgc3VwcGx5XG4gICAqXG4gICAqIEByZW1hcmtzIEdldCB0aGUgbnVtYmVyIG9mIHVuY2xhaW1lZCBORlRzIGluIHRoaXMgRHJvcC5cbiAgICpcbiAgICogKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHVuY2xhaW1lZE5GVENvdW50ID0gYXdhaXQgY29udHJhY3QudG90YWxVbmNsYWltZWRTdXBwbHkoKTtcbiAgICogY29uc29sZS5sb2coYE5GVHMgbGVmdCB0byBjbGFpbTogJHt1bmNsYWltZWRORlRDb3VudH1gKTtcbiAgICogYGBgXG4gICAqIEByZXR1cm5zIHRoZSB1bmNsYWltZWQgc3VwcGx5XG4gICAqL1xuICBhc3luYyB0b3RhbFVuY2xhaW1lZFN1cHBseSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEudG90YWxVbmNsYWltZWRTdXBwbHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB1c2VycyBjYW4gdHJhbnNmZXIgTkZUcyBmcm9tIHRoaXMgY29udHJhY3RcbiAgICovXG4gIGFzeW5jIGlzVHJhbnNmZXJSZXN0cmljdGVkKCkge1xuICAgIGNvbnN0IGFueW9uZUNhblRyYW5zZmVyID0gYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIucmVhZENvbnRyYWN0Lmhhc1JvbGUoZ2V0Um9sZUhhc2goXCJ0cmFuc2ZlclwiKSwgY29uc3RhbnRzLkFkZHJlc3NaZXJvKTtcbiAgICByZXR1cm4gIWFueW9uZUNhblRyYW5zZmVyO1xuICB9XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBXUklURSBGVU5DVElPTlNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGJhdGNoIG9mIHVuaXF1ZSBORlRzIHRvIGJlIGNsYWltZWQgaW4gdGhlIGZ1dHVyZVxuICAgKlxuICAgKiBAcmVtYXJrcyBDcmVhdGUgYmF0Y2ggYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBiYXRjaCBvZiBtYW55IHVuaXF1ZSBORlRzIGluIG9uZSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiAvLyBDdXN0b20gbWV0YWRhdGEgb2YgdGhlIE5GVHMgdG8gY3JlYXRlXG4gICAqIGNvbnN0IG1ldGFkYXRhcyA9IFt7XG4gICAqICAgbmFtZTogXCJDb29sIE5GVFwiLFxuICAgKiAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb29sIE5GVFwiLFxuICAgKiAgIGltYWdlOiBmcy5yZWFkRmlsZVN5bmMoXCJwYXRoL3RvL2ltYWdlLnBuZ1wiKSwgLy8gVGhpcyBjYW4gYmUgYW4gaW1hZ2UgdXJsIG9yIGZpbGVcbiAgICogfSwge1xuICAgKiAgIG5hbWU6IFwiQ29vbCBORlRcIixcbiAgICogICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29vbCBORlRcIixcbiAgICogICBpbWFnZTogZnMucmVhZEZpbGVTeW5jKFwicGF0aC90by9pbWFnZS5wbmdcIiksXG4gICAqIH1dO1xuICAgKlxuICAgKiBjb25zdCByZXN1bHRzID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmF0Y2gobWV0YWRhdGFzKTsgLy8gdXBsb2FkcyBhbmQgY3JlYXRlcyB0aGUgTkZUcyBvbiBjaGFpblxuICAgKiBjb25zdCBmaXJzdFRva2VuSWQgPSByZXN1bHRzWzBdLmlkOyAvLyB0b2tlbiBpZCBvZiB0aGUgZmlyc3QgY3JlYXRlZCBORlRcbiAgICogY29uc3QgZmlyc3RORlQgPSBhd2FpdCByZXN1bHRzWzBdLmRhdGEoKTsgLy8gKG9wdGlvbmFsKSBmZXRjaCBkZXRhaWxzIG9mIHRoZSBmaXJzdCBjcmVhdGVkIE5GVFxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIG1ldGFkYXRhcyAtIFRoZSBtZXRhZGF0YSB0byBpbmNsdWRlIGluIHRoZSBiYXRjaC5cbiAgICogQHBhcmFtIG9wdGlvbnMgLSBvcHRpb25hbCB1cGxvYWQgcHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICovXG4gIGFzeW5jIGNyZWF0ZUJhdGNoKG1ldGFkYXRhcywgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5sYXp5TWludChtZXRhZGF0YXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIGNsYWltIHRyYW5zYWN0aW9uIHdpdGhvdXQgZXhlY3V0aW5nIGl0LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZXN0aW1hdGluZyB0aGUgZ2FzIGNvc3Qgb2YgYSBjbGFpbSB0cmFuc2FjdGlvbiwgb3ZlcnJpZGluZyB0cmFuc2FjdGlvbiBvcHRpb25zIGFuZCBoYXZpbmcgZmluZSBncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgdHJhbnNhY3Rpb24gZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25BZGRyZXNzXG4gICAqIEBwYXJhbSBxdWFudGl0eVxuICAgKiBAcGFyYW0gY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgKi9cbiAgYXN5bmMgZ2V0Q2xhaW1UcmFuc2FjdGlvbihkZXN0aW5hdGlvbkFkZHJlc3MsIHF1YW50aXR5KSB7XG4gICAgbGV0IGNoZWNrRVJDMjBBbGxvd2FuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmdldENsYWltVHJhbnNhY3Rpb24oZGVzdGluYXRpb25BZGRyZXNzLCBxdWFudGl0eSwge1xuICAgICAgY2hlY2tFUkMyMEFsbG93YW5jZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsYWltIHVuaXF1ZSBORlRzIHRvIGEgc3BlY2lmaWMgV2FsbGV0XG4gICAqXG4gICAqIEByZW1hcmtzIExldCB0aGUgc3BlY2lmaWVkIHdhbGxldCBjbGFpbSBORlRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IGFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiOyAvLyBhZGRyZXNzIG9mIHRoZSB3YWxsZXQgeW91IHdhbnQgdG8gY2xhaW0gdGhlIE5GVHNcbiAgICogY29uc3QgcXVhbnRpdHkgPSAxOyAvLyBob3cgbWFueSB1bmlxdWUgTkZUcyB5b3Ugd2FudCB0byBjbGFpbVxuICAgKlxuICAgKiBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG8oYWRkcmVzcywgcXVhbnRpdHkpO1xuICAgKiBjb25zdCByZWNlaXB0ID0gdHhbMF0ucmVjZWlwdDsgLy8gdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgICogY29uc3QgY2xhaW1lZFRva2VuSWQgPSB0eFswXS5pZDsgLy8gdGhlIGlkIG9mIHRoZSBORlQgY2xhaW1lZFxuICAgKiBjb25zdCBjbGFpbWVkTkZUID0gYXdhaXQgdHhbMF0uZGF0YSgpOyAvLyAob3B0aW9uYWwpIGdldCB0aGUgY2xhaW1lZCBORlQgbWV0YWRhdGFcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkFkZHJlc3MgLSBBZGRyZXNzIHlvdSB3YW50IHRvIHNlbmQgdGhlIHRva2VuIHRvXG4gICAqIEBwYXJhbSBxdWFudGl0eSAtIFF1YW50aXR5IG9mIHRoZSB0b2tlbnMgeW91IHdhbnQgdG8gY2xhaW1cbiAgICogQHBhcmFtIGNoZWNrRVJDMjBBbGxvd2FuY2UgLSBPcHRpb25hbCwgY2hlY2sgaWYgdGhlIHdhbGxldCBoYXMgZW5vdWdoIEVSQzIwIGFsbG93YW5jZSB0byBjbGFpbSB0aGUgdG9rZW5zLCBhbmQgaWYgbm90LCBhcHByb3ZlIHRoZSB0cmFuc2ZlclxuICAgKlxuICAgKiBAcmV0dXJucyAtIGFuIGFycmF5IG9mIHJlc3VsdHMgY29udGFpbmluZyB0aGUgaWQgb2YgdGhlIHRva2VuIGNsYWltZWQsIHRoZSB0cmFuc2FjdGlvbiByZWNlaXB0IGFuZCBhIHByb21pc2UgdG8gb3B0aW9uYWxseSBmZXRjaCB0aGUgbmZ0IG1ldGFkYXRhXG4gICAqL1xuICBhc3luYyBjbGFpbVRvKGRlc3RpbmF0aW9uQWRkcmVzcywgcXVhbnRpdHkpIHtcbiAgICBsZXQgY2hlY2tFUkMyMEFsbG93YW5jZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuY2xhaW1UbyhkZXN0aW5hdGlvbkFkZHJlc3MsIHF1YW50aXR5LCB7XG4gICAgICBjaGVja0VSQzIwQWxsb3dhbmNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xhaW0gTkZUcyB0byB0aGUgY29ubmVjdGVkIHdhbGxldC5cbiAgICpcbiAgICogQHJlbWFya3MgU2VlIHtAbGluayBORlREcm9wLmNsYWltVG99XG4gICAqXG4gICAqIEByZXR1cm5zIC0gYW4gYXJyYXkgb2YgcmVzdWx0cyBjb250YWluaW5nIHRoZSBpZCBvZiB0aGUgdG9rZW4gY2xhaW1lZCwgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHQgYW5kIGEgcHJvbWlzZSB0byBvcHRpb25hbGx5IGZldGNoIHRoZSBuZnQgbWV0YWRhdGFcbiAgICovXG4gIGFzeW5jIGNsYWltKHF1YW50aXR5KSB7XG4gICAgbGV0IGNoZWNrRVJDMjBBbGxvd2FuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuY2xhaW1Ubyhhd2FpdCB0aGlzLmNvbnRyYWN0V3JhcHBlci5nZXRTaWduZXJBZGRyZXNzKCksIHF1YW50aXR5LCBjaGVja0VSQzIwQWxsb3dhbmNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdXJuIGEgc2luZ2xlIE5GVFxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5JZCAtIHRoZSB0b2tlbiBJZCB0byBidXJuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuYnVyblRva2VuKHRva2VuSWQpO1xuICAgKiBgYGBcbiAgICpcbiAgICovXG4gIGFzeW5jIGJ1cm4odG9rZW5JZCkge1xuICAgIHJldHVybiB0aGlzLmVyYzcyMS5idXJuKHRva2VuSWQpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBTVEFOREFSRCBFUkM3MjEgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBORlQgTWV0YWRhdGFcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBjb25zdCB0b2tlbklkID0gMDtcbiAgICogY29uc3QgbmZ0ID0gYXdhaXQgY29udHJhY3QuZ2V0KHRva2VuSWQpO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCBvZiB0aGUgTkZUIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm5zIFRoZSBORlQgbWV0YWRhdGFcbiAgICovXG4gIGFzeW5jIGdldCh0b2tlbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmdldCh0b2tlbklkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgb3duZXIgb2YgYSBnaXZlbiBORlQgd2l0aGluIHRoaXMgQ29udHJhY3RcbiAgICpcbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCBvZiB0aGUgTkZUXG4gICAqIEByZXR1cm5zIHRoZSBhZGRyZXNzIG9mIHRoZSBvd25lclxuICAgKi9cbiAgYXN5bmMgb3duZXJPZih0b2tlbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLm93bmVyT2YodG9rZW5JZCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IE5GVCBCYWxhbmNlXG4gICAqXG4gICAqIEByZW1hcmtzIEdldCBhIHdhbGxldHMgTkZUIGJhbGFuY2UgKG51bWJlciBvZiBORlRzIGluIHRoaXMgY29udHJhY3Qgb3duZWQgYnkgdGhlIHdhbGxldCkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogY29uc3Qgd2FsbGV0QWRkcmVzcyA9IFwie3t3YWxsZXRfYWRkcmVzc319XCI7XG4gICAqIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2Yod2FsbGV0QWRkcmVzcyk7XG4gICAqIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgKiBgYGBcbiAgICovXG4gIGFzeW5jIGJhbGFuY2VPZihhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJjNzIxLmJhbGFuY2VPZihhZGRyZXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgTkZUIEJhbGFuY2UgZm9yIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHdhbGxldFxuICAgKi9cbiAgYXN5bmMgYmFsYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuYmFsYW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoaXMgd2FsbGV0IGhhcyBhcHByb3ZlZCB0cmFuc2ZlcnMgZnJvbSB0aGUgZ2l2ZW4gb3BlcmF0b3JcbiAgICogQHBhcmFtIGFkZHJlc3MgLSB0aGUgd2FsbGV0IGFkZHJlc3NcbiAgICogQHBhcmFtIG9wZXJhdG9yIC0gdGhlIG9wZXJhdG9yIGFkZHJlc3NcbiAgICovXG4gIGFzeW5jIGlzQXBwcm92ZWQoYWRkcmVzcywgb3BlcmF0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuaXNBcHByb3ZlZChhZGRyZXNzLCBvcGVyYXRvcik7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXIgYSBzaW5nbGUgTkZUXG4gICAqXG4gICAqIEByZW1hcmtzIFRyYW5zZmVyIGFuIE5GVCBmcm9tIHRoZSBjb25uZWN0ZWQgd2FsbGV0IHRvIGFub3RoZXIgd2FsbGV0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGNvbnN0IHdhbGxldEFkZHJlc3MgPSBcInt7d2FsbGV0X2FkZHJlc3N9fVwiO1xuICAgKiBjb25zdCB0b2tlbklkID0gMDtcbiAgICogYXdhaXQgY29udHJhY3QudHJhbnNmZXIod2FsbGV0QWRkcmVzcywgdG9rZW5JZCk7XG4gICAqIGBgYFxuICAgKi9cbiAgYXN5bmMgdHJhbnNmZXIodG8sIHRva2VuSWQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEudHJhbnNmZXIodG8sIHRva2VuSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcHJvdmUgb3IgcmVtb3ZlIG9wZXJhdG9yIGFzIGFuIG9wZXJhdG9yIGZvciB0aGUgY2FsbGVyLiBPcGVyYXRvcnMgY2FuIGNhbGwgdHJhbnNmZXJGcm9tIG9yIHNhZmVUcmFuc2ZlckZyb20gZm9yIGFueSB0b2tlbiBvd25lZCBieSB0aGUgY2FsbGVyLlxuICAgKiBAcGFyYW0gb3BlcmF0b3IgLSB0aGUgb3BlcmF0b3IncyBhZGRyZXNzXG4gICAqIEBwYXJhbSBhcHByb3ZlZCAtIHdoZXRoZXIgdG8gYXBwcm92ZSBvciByZW1vdmVcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBzZXRBcHByb3ZhbEZvckFsbChvcGVyYXRvciwgYXBwcm92ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5lcmM3MjEuc2V0QXBwcm92YWxGb3JBbGwob3BlcmF0b3IsIGFwcHJvdmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHByb3ZlIGFuIG9wZXJhdG9yIGZvciB0aGUgTkZUIG93bmVyLiBPcGVyYXRvcnMgY2FuIGNhbGwgdHJhbnNmZXJGcm9tIG9yIHNhZmVUcmFuc2ZlckZyb20gZm9yIHRoZSBzcGVjaWZpZWQgdG9rZW4uXG4gICAqIEBwYXJhbSBvcGVyYXRvciAtIHRoZSBvcGVyYXRvcidzIGFkZHJlc3NcbiAgICogQHBhcmFtIHRva2VuSWQgLSB0aGUgdG9rZW5JZCB0byBnaXZlIGFwcHJvdmFsIGZvclxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHNldEFwcHJvdmFsRm9yVG9rZW4ob3BlcmF0b3IsIHRva2VuSWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVjZWlwdDogYXdhaXQgdGhpcy5jb250cmFjdFdyYXBwZXIuc2VuZFRyYW5zYWN0aW9uKFwiYXBwcm92ZVwiLCBbb3BlcmF0b3IsIHRva2VuSWRdKVxuICAgIH07XG4gIH1cblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIFBSSVZBVEUgRlVOQ1RJT05TXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBjYWxsKGZ1bmN0aW9uTmFtZSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250cmFjdFdyYXBwZXIuY2FsbChmdW5jdGlvbk5hbWUsIC4uLmFyZ3MpO1xuICB9XG59XG5fZGVmaW5lUHJvcGVydHkoTkZURHJvcCwgXCJjb250cmFjdFJvbGVzXCIsIFtcImFkbWluXCIsIFwibWludGVyXCIsIFwidHJhbnNmZXJcIl0pO1xuXG5leHBvcnQgeyBORlREcm9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=