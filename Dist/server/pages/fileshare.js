"use strict";
(() => {
var exports = {};
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 1358:
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
// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./src/theme/index.js
var theme = __webpack_require__(6690);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(4961);
// EXTERNAL MODULE: ./src/components/layout2.js + 1 modules
var layout2 = __webpack_require__(3351);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/components/share.js
/** @jsxRuntime classic */ /** @jsx jsx */ 


function Share() {
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        className: "bg-purple-100 text-4xl text-center text-black font-bold pt-10"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("h1", null, " P2P File Sharing"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("h2", null, " Click here to expereince the power of P2P File Sharing with Fluence. Fluence uses Peer to peer to allow communication between browser to browser. ", /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), " ", /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", {
        href: "https://p2p-theta.vercel.app/",
        target: "_blank"
    }, "Click Here"), " for demo"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("br", null)));
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

;// CONCATENATED MODULE: ./src/pages/fileshare.js







function Dashboard() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.ThemeProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout2/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                    title: "P2P File Share",
                    description: "Share file"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Share, {})
            ]
        })
    });
};


/***/ }),

/***/ 6709:
/***/ ((module) => {

module.exports = require("@emotion/core");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,381,351], () => (__webpack_exec__(1358)));
module.exports = __webpack_exports__;

})();