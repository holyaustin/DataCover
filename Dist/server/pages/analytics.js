"use strict";
(() => {
var exports = {};
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./src/theme/index.js
var theme = __webpack_require__(6690);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(4961);
// EXTERNAL MODULE: ./src/components/layout2.js + 1 modules
var layout2 = __webpack_require__(3351);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__(2840);
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);
// EXTERNAL MODULE: ./artifacts/contracts/datacover.sol/FileNFT.json
var FileNFT = __webpack_require__(4372);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./src/components/ComingSoon.js
/** @jsxRuntime classic */ /** @jsx jsx */ 







function ComingSoon() {
    const navigate = (0,router_.useRouter)();
    const [modalOpen, setModalOpen] = external_react_default().useState(false);
    const { 0: copySuccess , 1: setCopySuccess  } = (0,external_react_.useState)("");
    const { 0: address , 1: setAddress  } = (0,external_react_.useState)();
    const { 0: nfts , 1: setNfts  } = (0,external_react_.useState)([]);
    const { 0: fall , 1: setfall  } = (0,external_react_.useState)([]);
    const { 0: fme , 1: setfme  } = (0,external_react_.useState)([]);
    const { 0: loadingState , 1: setLoadingState  } = (0,external_react_.useState)("not-loaded");
    (0,external_react_.useEffect)(()=>{
        loadfileNFT();
    }, []);
    async function loadfileNFT() {
        /* create a generic provider and query for fileNFTs 
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(fileShareAddress, fileNFT.abi, provider);
    const data = await contract.fetchMyNFTs();
    console.log("fileNFT data fetched from contract", data);
    */ const web3Modal = new (external_web3modal_default())({
            network: "mainnet",
            cacheProvider: true
        });
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        setAddress(await signer.getAddress());
        const contract = new external_ethers_.ethers.Contract(config/* fileShareAddress */.E, FileNFT/* abi */.Mt, signer);
        const data = await contract.fetchMyFiles();
        console.log("Data fetch from smart contract is", data.length);
        setfme(data.length);
        const connection2 = await web3Modal.connect();
        const provider2 = new external_ethers_.ethers.providers.Web3Provider(connection2);
        const signer2 = provider2.getSigner();
        const contract2 = new external_ethers_.ethers.Contract(config/* fileShareAddress */.E, FileNFT/* abi */.Mt, signer2);
        const data2 = await contract2.fetchAllStorageItems();
        console.log("Data fetch from smart contract is", data2.length);
        setfall(data2.length);
        /*
    *  map over items returned from smart contract and format
    *  them as well as fetch their token metadata
    */ const items = await Promise.all(data.map(async (i)=>{
            const tokenUri = await contract.tokenURI(i.tokenId);
            console.log("token Uri is ", tokenUri);
            const httpUri = getIPFSGatewayURL(tokenUri);
            console.log("Http Uri is ", httpUri);
            const meta = await external_axios_default().get(httpUri);
            // const privatefile = (i.filePrivate).toString; 
            const item = {
                tokenId: i.tokenId.toNumber(),
                image: getIPFSGatewayURL(meta.data.image),
                name: meta.data.name,
                description: meta.data.description,
                sharelink: getIPFSGatewayURL(meta.data.image)
            };
            console.log("item returned is ", item);
            return item;
        }));
        setNfts(items);
        setLoadingState("loaded");
    }
    const getIPFSGatewayURL = (ipfsURL)=>{
        const urlArray = ipfsURL.split("/");
        const ipfsGateWayURL = `https://${urlArray[2]}.ipfs.nftstorage.link/${urlArray[3]}`;
        return ipfsGateWayURL;
    };
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "bg-purple-100 text-4xl text-center text-black font-bold pt-10"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h1", null, " Analytics")), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "flex flex-col bg-purple-100 text-2xl text-center text-black font-bold pt-10"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h2", null, " User's Stats"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("table", {
        className: "table-auto border-separate border-spacing-2 border border-slate-500"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("thead", {
        className: "bg-purple-800 text-2xl text-center text-white"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("tr", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)("th", {
        className: "border border-slate-600"
    }, "Variable"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("th", {
        className: "border border-slate-600"
    }, "statistics"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("th", {
        className: "border border-slate-600"
    }, "Year Started"))), /*#__PURE__*/ (0,external_theme_ui_.jsx)("tbody", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)("tr", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "Wallet Address"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, address), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "2022")), /*#__PURE__*/ (0,external_theme_ui_.jsx)("tr", {
        className: "bg-gray-300 border-b"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "Total Number of Files in contract"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, fall), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "2022")), /*#__PURE__*/ (0,external_theme_ui_.jsx)("tr", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "Number of Files Uploaded by me"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, fme), /*#__PURE__*/ (0,external_theme_ui_.jsx)("td", {
        className: "border border-slate-700"
    }, "2022"))))), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "bg-purple-100 text-4xl text-center text-black font-bold pt-20 pb-10"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h1", null, "0% of storage used.")));
};
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

;// CONCATENATED MODULE: ./src/pages/analytics.js







function Dashboard() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout2/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                    title: "Add new file",
                    description: "add a new file"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ComingSoon, {})
            ]
        })
    });
};


/***/ }),

/***/ 6709:
/***/ ((module) => {

module.exports = require("@emotion/core");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,381,351,124], () => (__webpack_exec__(426)));
module.exports = __webpack_exports__;

})();