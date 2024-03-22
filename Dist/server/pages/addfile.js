"use strict";
(() => {
var exports = {};
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6088);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1081);
/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _artifacts_contracts_datacover_sol_FileNFT_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4372);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nft_storage__WEBPACK_IMPORTED_MODULE_2__]);
nft_storage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 











// const APIKEY = [process.env.NFT_STORAGE_API_KEY];
const APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA4Zjc4ODAwMkUzZDAwNEIxMDI3NTFGMUQ0OTJlNmI1NjNFODE3NmMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MzA1NjE4NzM4MCwibmFtZSI6InBlbnNpb25maSJ9.agI-2V-FeK_eVRAZ-T6KGGfE9ltWrTUQ7brFzzYVwdM";
const MintFile = ()=>{
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: uploadedFile , 1: setUploadedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: imageView , 1: setImageView  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: metaDataURL , 1: setMetaDataURl  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: txURL , 1: setTxURL  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: txStatus , 1: setTxStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { 0: formInput , 1: updateFormInput  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        name: ""
    });
    const handleFileUpload = (event)=>{
        console.log("file for upload selected...");
        setUploadedFile(event.target.files[0]);
        setTxStatus("");
        setImageView("");
        setMetaDataURl("");
        setTxURL("");
    };
    const uploadNFTContent = async (inputFile)=>{
        const { name  } = formInput;
        if (!name || !inputFile) return;
        const nftStorage = new nft_storage__WEBPACK_IMPORTED_MODULE_2__.NFTStorage({
            token: APIKEY
        });
        try {
            console.log("Trying to upload file to ipfs");
            setTxStatus("Uploading Item to IPFS & Filecoin via NFT.storage.");
            console.log("close to metadata");
            const metaData = await nftStorage.store({
                name,
                description: name,
                image: inputFile
            });
            setMetaDataURl(metaData.url);
            console.log("metadata is: ", {
                metaData
            });
            return metaData;
        } catch (error) {
            setErrorMessage("Could store file to NFT.Storage - Aborted file upload.");
            console.log("Error Uploading Content", error);
        }
    };
    const sendTxToBlockchain = async (metadata)=>{
        try {
            setTxStatus("Adding transaction to BitTorrent Chain (BTTC)..");
            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();
            const connection = await web3Modal.connect();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);
            // const privatefile = formInput.privatefile.toString();
            const connectedContract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_10__/* .fileShareAddress */ .E, _artifacts_contracts_datacover_sol_FileNFT_json__WEBPACK_IMPORTED_MODULE_9__/* .abi */ .Mt, provider.getSigner());
            console.log("Connected to contract", _config__WEBPACK_IMPORTED_MODULE_10__/* .fileShareAddress */ .E);
            console.log("IPFS blockchain uri is ", metadata.url);
            const mintNFTTx = await connectedContract.createFile(metadata.url);
            console.log("File successfully created and added to Blockchain");
            await mintNFTTx.wait();
            return mintNFTTx;
        } catch (error) {
            setErrorMessage("Failed to send tx to BitTorrent Chain (BTTC).");
            console.log(error);
        }
    };
    const previewNFT = (metaData, mintNFTTx)=>{
        console.log("getIPFSGatewayURL2 two is ...");
        const imgViewString = getIPFSGatewayURL(metaData.data.image.pathname);
        console.log("image ipfs path is", imgViewString);
        setImageView(imgViewString);
        setMetaDataURl(getIPFSGatewayURL(metaData.url));
        setTxURL(`https://testnet.bttcscan.com/tx/${mintNFTTx.hash}`);
        setTxStatus("File addition was successfully!");
        console.log("File preview completed");
    };
    const mintNFTFile = async (e, uploadedFile)=>{
        e.preventDefault();
        // 1. upload File content via NFT.storage
        const metaData = await uploadNFTContent(uploadedFile);
        // 2. Mint a NFT token on BTTC Chain
        const mintNFTTx = await sendTxToBlockchain(metaData);
        // 3. preview the minted nft
        previewNFT(metaData, mintNFTTx);
        //4. Mint Reward
        // mintReward();
        //5. navigate("/explore");
        navigate.push("/dashboard");
    };
    const getIPFSGatewayURL = (ipfsURL)=>{
        const urlArray = ipfsURL.split("/");
        console.log("urlArray = ", urlArray);
        const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
        console.log("ipfsGateWayURL = ", ipfsGateWayURL);
        return ipfsGateWayURL;
    };
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "bg-purple-100 text-4xl text-center text-black font-bold pt-10"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", null, " Add File")), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex justify-center bg-purple-100"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "w-1/2 flex flex-col pb-12 "
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        placeholder: "Give the file a name",
        className: "mt-5 border rounded p-4 text-xl",
        onChange: (e)=>updateFormInput({
                ...formInput,
                name: e.target.value
            })
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "MintNFT text-black text-xl"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", null, "Select a File"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "file",
        onChange: handleFileUpload,
        className: "text-black mt-2 border rounded text-xl"
    })), txStatus && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", null, txStatus), metaDataURL && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-blue"
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: metaDataURL,
        className: "text-blue"
    }, "Metadata on IPFS")), txURL && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: txURL,
        className: "text-blue"
    }, "See the mint transaction")), errorMessage, imageView && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
        className: "mb-10",
        title: "File",
        src: imageView,
        alt: "File preview",
        frameBorder: "0",
        scrolling: "auto",
        height: "50%",
        width: "100%"
    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        onClick: (e)=>mintNFTFile(e, uploadedFile),
        className: "font-bold mt-20 bg-purple-700 text-white text-2xl rounded p-4 shadow-lg"
    }, "Publish File"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MintFile);
const styles = {
    section: {
        backgroundColor: "primary",
        pt: [
            17,
            null,
            null,
            20,
            null
        ],
        pb: [
            6,
            null,
            null,
            12,
            16
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddFile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6690);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4961);
/* harmony import */ var components_layout2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3351);
/* harmony import */ var components_Mintfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Mintfile__WEBPACK_IMPORTED_MODULE_6__]);
components_Mintfile__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function AddFile() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout2__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Add new file",
                    description: "add a new file"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Mintfile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6709:
/***/ ((module) => {

module.exports = require("@emotion/core");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1081:
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 8297:
/***/ ((module) => {

module.exports = require("react-stickynode");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8800:
/***/ ((module) => {

module.exports = require("theme-ui");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ }),

/***/ 6088:
/***/ ((module) => {

module.exports = import("nft.storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,381,351,124], () => (__webpack_exec__(7933)));
module.exports = __webpack_exports__;

})();