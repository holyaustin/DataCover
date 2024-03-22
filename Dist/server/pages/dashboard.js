"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 3358:
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
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
;// CONCATENATED MODULE: external "reactjs-popup"
const external_reactjs_popup_namespaceObject = require("reactjs-popup");
var external_reactjs_popup_default = /*#__PURE__*/__webpack_require__.n(external_reactjs_popup_namespaceObject);
// EXTERNAL MODULE: ./artifacts/contracts/datacover.sol/FileNFT.json
var FileNFT = __webpack_require__(4372);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./src/components/ViewFiles.js
/** @jsxRuntime classic */ /** @jsx jsx */ 










function ViewFiles() {
    const navigate = (0,router_.useRouter)();
    const [modalOpen, setModalOpen] = external_react_default().useState(false);
    const { 0: copySuccess , 1: setCopySuccess  } = (0,external_react_.useState)("");
    const { 0: nfts , 1: setNfts  } = (0,external_react_.useState)([]);
    const { 0: loadingState , 1: setLoadingState  } = (0,external_react_.useState)("not-loaded");
    (0,external_react_.useEffect)(()=>{
        loadfileNFT();
    }, []);
    async function loadfileNFT() {
        const web3Modal = new (external_web3modal_default())({
            network: "mainnet",
            cacheProvider: true
        });
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new external_ethers_.ethers.Contract(config/* fileShareAddress */.E, FileNFT/* abi */.Mt, signer);
        const data = await contract.fetchMyFiles();
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
    const copyToClipBoard = async (copyMe)=>{
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess("Copied!");
        } catch (err) {
            setCopySuccess("Failed to copy!");
        }
    };
    async function share(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */ console.log("item id clicked is", nft.tokenId);
        const web3Modal = new (external_web3modal_default())();
        const connection = await web3Modal.connect();
        const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new external_ethers_.ethers.Contract(config/* fileShareAddress */.E, FileNFT/* abi */.Mt, signer);
        /* user will be prompted to pay the asking proces to complete the transaction */ // const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
        const transaction = await contract.createFileShare(nft.tokenId);
        await transaction.wait();
        console.log("fileNFT Share transaction completed ");
        const token = nft.tokenId;
        console.log("token id is ", token);
        loadfileNFT();
    //navigate("/view", { state: token });
    }
    if (loadingState === "loaded" && !nfts.length) {
        return /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
            sx: styles.section
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h1", {
            className: "px-20 py-10 text-3xl text-white"
        }, "Empty drive, no file yet"));
    }
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "bg-purple-100 text-4xl text-center text-black font-bold pt-10"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h1", null, " My Drive")), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "flex justify-center bg-purple-100 mb-12"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "px-4",
        style: {
            maxWidth: "1600px"
        }
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 pt-4"
    }, nfts.map((nft, i)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
            key: i,
            className: "shadow rounded-xl overflow-hidden border-2 border-white-500"
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("iframe", {
            title: "fileNFT",
            height: "auto",
            width: "100%",
            objectfit: "cover",
            src: `${nft.image}#toolbar=0&embedded=true`,
            className: "py-3 object-cover h-500"
        }), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
            className: "p-1"
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("p", {
            style: {
                height: "34px"
            },
            className: "text-xl text-purple-700 font-semibold"
        }, "Name: ", nft.name), /*#__PURE__*/ (0,external_theme_ui_.jsx)("p", {
            className: "text-xl font-bold text-black"
        }, "Public : ", nft.privatefile)), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
            className: "p-2 bg-black"
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)((external_reactjs_popup_default()), {
            trigger: /*#__PURE__*/ (0,external_theme_ui_.jsx)("button", {
                type: "button",
                className: "w-full bg-purple-700 text-white font-bold py-2 px-2 rounded"
            }, "Get Share Link"),
            position: "bottom center"
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
            className: " bg-purple-200 text-black font-bold py-2 px-2 rounded"
        }, nft.sharelink), /*#__PURE__*/ (0,external_theme_ui_.jsx)("button", {
            onClick: ()=>copyToClipBoard([
                    nft.sharelink
                ])
        }, "Copy Link"), copySuccess))))))));
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

;// CONCATENATED MODULE: ./src/pages/dashboard.js







function Dashboard() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout2/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                    title: "Add new file",
                    description: "add a new file"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ViewFiles, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,381,351,124], () => (__webpack_exec__(3358)));
module.exports = __webpack_exports__;

})();