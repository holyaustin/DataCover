"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9652);
/* harmony import */ var react_blockies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_blockies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4698);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_uauth_js__WEBPACK_IMPORTED_MODULE_3__]);
_uauth_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 





const truncateAddress = (address)=>`${address.slice(0, 8)}...${address.slice(-4)}`;
const uauth = new _uauth_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    clientID: "58971f20-5524-49c9-b021-72c37275da1a",
    redirectUri:  true ? "https://datacover.vercel.app/" : 0
});
const ConnectWallet = ()=>{
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: haveMetamask , 1: sethaveMetamask  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { ethereum  } = window;
        const checkMetamaskAvailability = async ()=>{
            if (!ethereum) {
                sethaveMetamask(false);
            }
            sethaveMetamask(true);
        };
        checkMetamaskAvailability();
    }, []);
    const connectWallet = async ()=>{
        if (!address) {
            const { ethereum  } = window;
            try {
                if (!ethereum) {
                    sethaveMetamask(false);
                }
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts"
                });
                setAddress(accounts[0]);
                navigate.push("/dashboard");
            } catch (error) {
                console.error(error);
            }
        }
    };
    const connectUnstoppable = async ()=>{
        try {
            const authorization = await uauth.loginWithPopup();
            if (authorization.idToken.wallet_address) {
                setAddress(authorization.idToken.wallet_address);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const logout = async ()=>{
        uauth.logout().then(()=>{
            setAddress(null);
            navigate.push("/");
        }).catch((error)=>{
            console.error("profile error:", error);
        });
    };
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "bg-white-100 "
    }, address && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_blockies__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "rounded-full",
        seed: address.toLowerCase(),
        size: 1,
        scale: 1
    }), address ? /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: ""
    }, truncateAddress(address)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        sx: styles.submit,
        type: "button",
        onClick: logout
    }, "Logout"))) : /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "primary",
        sx: styles.submit,
        type: "button",
        onClick: connectWallet
    }, haveMetamask ? "Connect Wallet" : "Install metamask")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);
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
    },
    grid: {
        gap: [
            "30px 60px",
            null,
            null,
            null,
            "30px 40px",
            "30px 60px"
        ],
        display: "grid",
        minHeight: [
            null,
            null,
            null,
            null,
            null,
            "66vh",
            "81vh"
        ],
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "repeat(2, 1fr)",
            "510px 1fr", 
        ]
    },
    domainCard: {
        background: "white",
        boxShadow: "0px 24px 50px rgba(54, 91, 125, 0.05)",
        borderRadius: 10,
        p: [
            "30px 25px 50px",
            null,
            null,
            "40px 40px 60px"
        ],
        m: [
            null,
            null,
            null,
            "0 auto",
            "unset"
        ],
        maxWidth: [
            null,
            null,
            null,
            480,
            "none"
        ],
        h2: {
            fontWeight: 700,
            fontSize: [
                8,
                null,
                null,
                10,
                9,
                14
            ],
            lineHeight: 1.36,
            letterSpacing: "heading",
            color: "textSecondary",
            mb: [
                5,
                null,
                null,
                7,
                8
            ]
        }
    },
    inputGroup: {
        alignItems: "center",
        border: (theme)=>`1px solid ${theme.colors.borderColor}`,
        borderRadius: 5,
        px: [
            3,
            null,
            null,
            6
        ],
        input: {
            border: 0,
            borderRadius: 0,
            fontSize: [
                1,
                null,
                null,
                2
            ],
            minHeight: [
                45,
                null,
                null,
                60
            ],
            p: 0,
            ":focus": {
                boxShadow: "none"
            },
            "::placeholder": {
                fontSize: "15px",
                lineHeight: 1.33,
                color: (0,polished__WEBPACK_IMPORTED_MODULE_4__.rgba)("#02073E", 0.4)
            },
            ":-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 30px white inset !important"
            }
        },
        select: {
            border: 0,
            color: "textSecondary",
            fontWeight: 500,
            fontSize: [
                0,
                null,
                null,
                "15px"
            ],
            lineHeight: 1.33,
            letterSpacing: "heading",
            minHeight: [
                45,
                null,
                null,
                60
            ],
            minWidth: [
                60,
                null,
                null,
                75
            ],
            p: 0,
            textTransform: "uppercase",
            ":focus": {
                outline: 0
            },
            "+ svg": {
                color: "#A6A8BB",
                height: 40,
                width: 40
            }
        }
    },
    submit: {
        fontSize: [
            1,
            null,
            null,
            6
        ],
        mt: [
            0
        ],
        minHeight: [
            45,
            null,
            null,
            60
        ],
        width: "100%"
    },
    note: {
        fontStyle: "italic",
        fontSize: [
            0,
            null,
            null,
            "15px"
        ],
        lineHeight: 1.33,
        textAlign: "center",
        color: (0,polished__WEBPACK_IMPORTED_MODULE_4__.rgba)("#02073E", 0.5),
        mt: [
            4
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8297);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3530);
/* harmony import */ var components_topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(871);
/* harmony import */ var components_icons_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8509);
/* harmony import */ var components_hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5986);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7367);
/* harmony import */ var components_ConnectWallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4077);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWallet__WEBPACK_IMPORTED_MODULE_8__]);
components_ConnectWallet__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 



// import Logo from 'assets/images/logosmallblack.png';





function Header() {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        isMobileMenu: false,
        isSticky: false
    });
    const handleStateChange = (status)=>{
        status.status === (react_stickynode__WEBPACK_IMPORTED_MODULE_2___default().STATUS_FIXED) ? setState({
            ...state,
            isSticky: true
        }) : setState({
            ...state,
            isSticky: false
        });
    };
    const toggleMobileMenu = ()=>{
        setState((prev)=>{
            return {
                ...prev,
                isMobileMenu: !prev.isMobileMenu
            };
        });
    };
    const handleCloseMenu = ()=>{
        setState({
            ...state,
            isMobileMenu: false
        });
    };
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_topbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_stickynode__WEBPACK_IMPORTED_MODULE_2___default()), {
        enabled: true,
        top: 0,
        activeClass: "is-sticky",
        innerZ: 100,
        onStateChange: handleStateChange
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "header",
        sx: styles.header,
        className: state.isSticky ? "is-sticky" : ""
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, {
        sx: styles.container
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: "/images/logosmallblack.png",
        loading: "lazy",
        sx: styles.logo,
        alt: "logo"
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        isSticky: state.isSticky,
        isMobile: state.isMobileMenu,
        handleCloseMenu: handleCloseMenu
    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        sx: styles.buttonGroup
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_ConnectWallet__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "https://discord.gg",
        target: "_blank",
        rel: "noreferrer",
        style: {
            textDecoration: "none"
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "text",
        sx: {
            ...styles.joinCommunity,
            backgroundColor: state.isSticky ? "primary" : "white",
            color: state.isSticky ? "white" : "primary"
        }
    }, "Join Community"))), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_hamburger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        sx: styles.hamburger,
        isSticky: state.isSticky,
        isOpen: state.isMobileMenu,
        toggleMobileMenu: toggleMobileMenu
    })))));
};
const styles = {
    header: {
        position: "fixed",
        left: 0,
        right: 0,
        py: 4,
        transition: "all 0.3s ease-in-out 0s",
        "&.is-sticky": {
            backgroundColor: "white",
            boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
            paddingTop: "15px",
            paddingBottom: "15px"
        },
        "&.is-mobile-menu": {
            backgroundColor: "white"
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        mr: [
            null,
            null,
            null,
            null,
            3,
            null,
            5
        ],
        height: [
            "25px",
            null,
            null,
            "75px"
        ]
    },
    buttonGroup: {
        alignItems: "center",
        marginLeft: "auto",
        button: {
            fontWeight: 500
        }
    },
    login: {
        display: [
            "none",
            null,
            null,
            null,
            "flex"
        ],
        color: "white",
        p: 0,
        mr: [
            null,
            null,
            null,
            null,
            5
        ],
        fontSize: [
            "10px",
            null,
            null,
            4
        ],
        svg: {
            mr: 2
        }
    },
    joinCommunity: {
        backgroundColor: "white",
        minHeight: [
            30,
            null,
            null,
            60
        ],
        p: [
            "0 12px",
            null,
            null,
            "0 14px"
        ],
        fontSize: [
            "4px",
            null,
            null,
            4
        ]
    },
    hamburger: {
        display: [
            null,
            null,
            null,
            null,
            null,
            "none"
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./src/components/link.js
var components_link = __webpack_require__(8055);
;// CONCATENATED MODULE: ./src/components/header/header.data.js
/* harmony default export */ const header_data = ([
    {
        path: "home",
        label: "Home"
    },
    {
        path: "services",
        label: "Services"
    },
    {
        path: "pricing",
        label: "Pricing"
    },
    {
        path: "features",
        label: "Features"
    },
    {
        path: "support",
        label: "Support"
    },
    {
        path: "faq",
        label: "Faq"
    },
    {}
]);

;// CONCATENATED MODULE: ./src/components/header/navbar.js
/** @jsxRuntime classic */ /** @jsx jsx */ 


const Navbar = ({ isSticky , isMobile , handleCloseMenu  })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "nav",
        sx: styles.navbar,
        className: `navbar${isMobile ? " is-mobile" : ""}${isSticky ? " is-sticky" : ""}`
    }, header_data.map(({ path , label  }, i)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(components_link/* NavLink */.OL, {
            to: path,
            key: i,
            path: path,
            label: label,
            onClick: handleCloseMenu
        })));
};
/* harmony default export */ const navbar = (Navbar);
const styles = {
    navbar: {
        display: [
            null,
            null,
            null,
            null,
            null,
            "flex"
        ],
        alignItems: [
            null,
            null,
            null,
            "center"
        ],
        flexGrow: [
            null,
            null,
            null,
            1
        ],
        fontSize: [
            "10px",
            null,
            null,
            4
        ],
        a: {
            color: "white",
            cursor: "pointer",
            "+ a": {
                ml: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    6
                ]
            }
        },
        "@media only screen and (max-width: 1024px)": {
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0px 11px 30px rgba(51, 83, 145, 0.07)",
            width: "100%",
            left: 0,
            top: 70,
            opacity: 0,
            visibility: "hidden",
            transform: "scaleY(0)",
            transformOrigin: "top left 0",
            transition: "0.3s ease 0s",
            "&.is-sticky": {
                borderTop: "1px solid #f3f3f3"
            },
            "&.is-mobile": {
                opacity: 1,
                visibility: "visible",
                transform: "scaleY(1)"
            },
            a: {
                fontWeight: 500,
                lineHeight: 1,
                color: "textSecondary",
                display: "block",
                padding: 3,
                "+ a": {
                    borderTop: "1px solid #f3f3f3"
                }
            }
        },
        "&.is-sticky": {
            top: 60,
            a: {
                color: "text"
            },
            ".active": {
                color: "primary"
            }
        }
    }
};


/***/ }),

/***/ 2283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5538);
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_header__WEBPACK_IMPORTED_MODULE_2__]);
_header_header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 



function Layout({ children  }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_header_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
        sx: {
            variant: "layout.main"
        }
    }, children), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(_footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 
const SectionHeading = ({ title , slogan , description , emoji , ...props })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, Object.assign({
        sx: styles.heading
    }, props), slogan && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.slogan
    }, slogan), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h3",
        sx: styles.title
    }, emoji ? /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, title) : title, emoji && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Image, {
        src: emoji,
        alt: "emoji"
    })), description && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.description
    }, description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeading);
const styles = {
    heading: {
        textAlign: "center",
        maxWidth: 660,
        margin: "0 auto 50px"
    },
    slogan: {
        color: "primary",
        fontWeight: 500,
        fontSize: 2,
        lineHeight: 2.5
    },
    title: {
        color: "heading",
        fontWeight: 600,
        fontSize: [
            4,
            null,
            null,
            6
        ],
        lineHeight: [
            1.33,
            1.33,
            1.5
        ],
        letterSpacing: [
            null,
            null,
            null,
            "heading"
        ],
        img: {
            ml: [
                "15px"
            ],
            position: "relative",
            top: "8px",
            maxWidth: [
                25,
                null,
                null,
                "100%"
            ]
        }
    },
    description: {
        color: "heading",
        fontSize: [
            "14px",
            null,
            "16px"
        ],
        lineHeight: [
            1.86,
            null,
            2.2
        ],
        mt: [
            5
        ],
        maxWidth: 610,
        m: [
            "10px auto 0"
        ]
    }
};


/***/ }),

/***/ 3486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6690);
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4961);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2283);
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5286);
/* harmony import */ var sections_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3811);
/* harmony import */ var sections_ultimate_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3290);
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3870);
/* harmony import */ var sections_support__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5191);
/* harmony import */ var sections_customer_support__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3503);
/* harmony import */ var sections_pricing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__]);
([components_layout__WEBPACK_IMPORTED_MODULE_5__, sections_banner__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













// import PremiumFeature from 'sections/premium-feature';
// import Testimonials from 'sections/testimonials';
// import Blog from 'sections/blog';
function IndexPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: "Data Cover - FVM-based Data Insurance Service ",
                    description: "Decentralized Data Insurance Policies and services for Storage providers and user!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_banner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_pricing__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_ultimate_feature__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_customer_support__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_support__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(sections_faq__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3530);
/* harmony import */ var components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4077);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__]);
components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/** @jsxRuntime classic */ /** @jsx jsx */ 




// import serverRack from './assets/images/server-rack.png';
const Banner = ()=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "section",
        id: "home",
        sx: styles.section
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        sx: styles.grid
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "form",
        sx: styles.domainCard
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        style: {
            fontWeight: "bold",
            color: "purple",
            textAlign: "justify"
        }
    }, "Insurance Cover"), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            fontSize: "22px",
            marginRight: "0.5rem",
            fontWeight: "bold",
            textAlign: "justify"
        }
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Data Insurance Cover - the smart choice for proactive risk management. With our flexible policies and reliable support, you can rest easy knowing that your data is protected against unforeseen events. Get Data Insurance Cover and secure your peace of mind today!.")), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_ConnectWallet__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, null), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "p",
        sx: styles.note,
        style: {
            color: `red`,
            fontSize: "18px",
            marginRight: "0.5rem",
            fontWeight: "bold"
        }
    }, "Say goodbye to data worries and hello to peace of mind with Data Insurance Cover.")), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Box, {
        as: "figure",
        sx: styles.illustration
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: "/images/server-rack.png",
        loading: "lazy",
        alt: "sever-rack"
    })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);
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
    },
    grid: {
        gap: [
            "30px 60px",
            null,
            null,
            null,
            "30px 40px",
            "30px 60px"
        ],
        display: "grid",
        minHeight: [
            null,
            null,
            null,
            null,
            null,
            "66vh",
            "81vh"
        ],
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            null,
            "repeat(2, 1fr)",
            "510px 1fr", 
        ]
    },
    domainCard: {
        background: "white",
        boxShadow: "0px 24px 50px rgba(54, 91, 125, 0.05)",
        borderRadius: 10,
        p: [
            "30px 25px 50px",
            null,
            null,
            "40px 40px 60px"
        ],
        m: [
            null,
            null,
            null,
            "0 auto",
            "unset"
        ],
        maxWidth: [
            null,
            null,
            null,
            480,
            "none"
        ],
        h2: {
            fontWeight: 700,
            fontSize: [
                8,
                null,
                null,
                10,
                9,
                14
            ],
            lineHeight: 1.36,
            letterSpacing: "heading",
            color: "textSecondary",
            mb: [
                5,
                null,
                null,
                7,
                8
            ]
        }
    },
    inputGroup: {
        alignItems: "center",
        border: (theme)=>`1px solid ${theme.colors.borderColor}`,
        borderRadius: 5,
        px: [
            3,
            null,
            null,
            6
        ],
        input: {
            border: 0,
            borderRadius: 0,
            fontSize: [
                1,
                null,
                null,
                2
            ],
            minHeight: [
                45,
                null,
                null,
                60
            ],
            p: 0,
            ":focus": {
                boxShadow: "none"
            },
            "::placeholder": {
                fontSize: "15px",
                lineHeight: 1.33,
                color: (0,polished__WEBPACK_IMPORTED_MODULE_2__.rgba)("#02073E", 0.4)
            },
            ":-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 30px white inset !important"
            }
        },
        select: {
            border: 0,
            color: "textSecondary",
            fontWeight: 500,
            fontSize: [
                0,
                null,
                null,
                "15px"
            ],
            lineHeight: 1.33,
            letterSpacing: "heading",
            minHeight: [
                45,
                null,
                null,
                60
            ],
            minWidth: [
                60,
                null,
                null,
                75
            ],
            p: 0,
            textTransform: "uppercase",
            ":focus": {
                outline: 0
            },
            "+ svg": {
                color: "#A6A8BB",
                height: 40,
                width: 40
            }
        }
    },
    submit: {
        fontSize: [
            1,
            null,
            null,
            6
        ],
        mt: [
            4
        ],
        minHeight: [
            45,
            null,
            null,
            60
        ],
        width: "100%"
    },
    note: {
        fontStyle: "italic",
        fontSize: [
            0,
            null,
            null,
            "15px"
        ],
        lineHeight: 1.33,
        textAlign: "center",
        color: (0,polished__WEBPACK_IMPORTED_MODULE_2__.rgba)("#02073E", 0.5),
        mt: [
            4
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ customer_support)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: ./src/components/image.js
var components_image = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/assets/images/support.png
/* harmony default export */ const support = ({"src":"/_next/static/media/support.28563c53.png","height":725,"width":790,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAflBMVEX////+/v7w7vHd2ua0q8u0p8Kjl8D////+//39/f38/Pn39/f29vf///////7+/v/+/v78/fz8/Pz7+/v7+/r6+vv6+vr5+vr4+Pj39/f29vfy8vLu7fDs7O3q6ejl5ebh3ujCu9S6sca4sM20tLeys7aysrWMjJOMjJKDg4oWXtgDAAAADXRSTlPNzc3Nzc3N/f39/f39KbN4IwAAADhJREFUeNoFQDESgCAMS0Okngv/f6Qriw31RoCi0Fpes+k38mrToOY98jmxCcepLoul3ioT+JAM/IC0Fjbz2FziAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/sections/customer-support.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



const list = [
    "Data Owners",
    "Storage Providers",
    "Risk Analyst",
    "Developers", 
];
const CustomerSupport = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        sx: styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.grid
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.illustration
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_image/* default */.Z, {
        src: "/images/support.png",
        loading: "lazy",
        alt: "support"
    })), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.content
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Heading, {
        sx: styles.title
    }, "Customer support is our main priority with their hundred percent satisfaction."), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p",
        sx: styles.summary
    }, "Have questions about your policy? Need to file a claim? Our dedicated Customer Support team is available 24/7 to provide expert assistance and guidance. Whether you prefer to chat online, give us a call, or send an email, we're always here to ensure your peace of mind. Your satisfaction is our top priority \u2013 contact us today and experience the difference with our personalized support!\"."), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Grid, {
        sx: styles.list,
        as: "ul"
    }, list.map((item, i)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
            as: "li",
            key: i
        }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(io_.IoIosCheckmarkCircle, {
            sx: {
                color: "secondary",
                mr: 2
            },
            size: "20px"
        }), item)))))));
};
/* harmony default export */ const customer_support = (CustomerSupport);
const styles = {
    section: {
        pt: [
            8,
            null,
            null,
            6,
            null,
            14,
            16
        ],
        pb: [
            null,
            null,
            null,
            8,
            0
        ]
    },
    grid: {
        gap: [
            null,
            null,
            null,
            null,
            "0 10px"
        ],
        display: [
            "flex",
            null,
            null,
            "grid"
        ],
        flexDirection: [
            "column-reverse",
            null,
            null,
            "unset"
        ],
        alignItems: "center",
        gridTemplateColumns: [
            "1fr",
            null,
            null,
            "1fr",
            "470px 1fr",
            "600px 1fr",
            "760px 1fr", 
        ]
    },
    illustration: {
        textAlign: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        mt: [
            2,
            null,
            null,
            0,
            4,
            0
        ],
        img: {
            maxWidth: [
                "100%",
                null,
                null,
                null,
                null,
                "100%"
            ]
        }
    },
    content: {
        marginTop: [
            null,
            null,
            null,
            null,
            null,
            -16
        ],
        maxWidth: [
            null,
            null,
            null,
            560,
            "none"
        ],
        m: [
            null,
            null,
            null,
            "0 auto",
            "unset"
        ]
    },
    title: {
        color: "heading",
        fontWeight: 500,
        fontSize: [
            5,
            null,
            null,
            10,
            null,
            null,
            11
        ],
        lineHeight: 1.53,
        letterSpacing: [
            "-0.5px",
            null,
            null,
            "-1px"
        ],
        textAlign: [
            "center",
            null,
            null,
            null,
            "left"
        ],
        span: {
            backgroundSize: "cover",
            px: 2
        }
    },
    summary: {
        color: "textSecondary",
        fontSize: [
            1,
            null,
            null,
            2,
            "15px",
            2
        ],
        lineHeight: [
            1.86,
            null,
            null,
            null,
            1.86,
            2.25
        ],
        maxWidth: 470,
        m: [
            null,
            null,
            null,
            "20px auto 0",
            "15px 0 0",
            null,
            "unset"
        ],
        textAlign: [
            "center",
            null,
            null,
            null,
            "left"
        ]
    },
    list: {
        gap: "0 18px",
        gridTemplateColumns: [
            "repeat(2, 142px)",
            null,
            null,
            "repeat(2, 200px)"
        ],
        justifyContent: [
            null,
            null,
            null,
            "center",
            "unset"
        ],
        listStyle: "none",
        mt: [
            4,
            null,
            null,
            5,
            4,
            5
        ],
        p: 0,
        li: {
            fontSize: [
                0,
                1,
                null,
                2,
                "15px",
                2
            ],
            fontWeight: 500,
            alignItems: "center",
            color: "textSecondary",
            display: "flex",
            lineHeight: [
                2.81,
                null,
                null,
                null,
                2.2,
                2.81
            ]
        }
    }
};


/***/ }),

/***/ 3870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ faq)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
;// CONCATENATED MODULE: external "react-masonry-component"
const external_react_masonry_component_namespaceObject = require("react-masonry-component");
var external_react_masonry_component_default = /*#__PURE__*/__webpack_require__.n(external_react_masonry_component_namespaceObject);
// EXTERNAL MODULE: ./src/components/section-heading.js
var section_heading = __webpack_require__(9290);
;// CONCATENATED MODULE: ./src/components/cards/faq-item.js
/** @jsxRuntime classic */ /** @jsx jsx */ 
const FaqItem = ({ faq , ...props })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, Object.assign({
        as: "article",
        sx: styles?.faq
    }, props), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Heading, {
        as: "h3"
    }, faq?.ques), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p"
    }, faq?.ans));
};
/* harmony default export */ const faq_item = (FaqItem);
const styles = {
    faq: {
        borderBottom: "2px solid #0F2137",
        marginBottom: 8,
        mx: [
            null,
            null,
            null,
            6,
            8
        ],
        width: [
            null,
            null,
            null,
            "calc(50% - 60px)",
            "calc(50% - 80px)"
        ],
        h3: {
            fontWeight: 500,
            fontSize: [
                2,
                null,
                null,
                3
            ],
            lineHeight: 1.68,
            letterSpacing: "heading",
            color: "#0F2137",
            mb: [
                2,
                null,
                null,
                3
            ]
        },
        p: {
            color: "text",
            fontSize: [
                1,
                null,
                null,
                2
            ],
            lineHeight: 2,
            mb: 4
        }
    }
};

;// CONCATENATED MODULE: ./src/sections/faq.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



const data = [
    {
        id: 1,
        ques: "How do i start using this service?",
        ans: `All you need is a web3 wallet. connect your wallet and select the type of services you desire either as a user or a service provider`
    },
    {
        id: 2,
        ques: "How can I ensure that my data is adequately protected with Data Insurance?",
        ans: `To ensure that your data is adequately protected with Data Insurance, it's essential to regularly back up your data, implement robust cybersecurity measures (e.g., encryption, firewalls), and follow best practices for data storage and management. Additionally, review your insurance policy to ensure it meets your specific needs and requirements.`
    },
    {
        id: 3,
        ques: "What risks are included in Data Insurance coverage?",
        ans: `Data Insurance typically covers risks such as data loss due to hardware failure, accidental deletion, cyber-attacks (e.g., ransomware), natural disasters (e.g., fire, flood), and theft.`
    },
    {
        id: 4,
        ques: "How does the claims process work for Data Insurance?",
        ans: `The claims process for Data Insurance typically involves notifying the insurance provider of the data loss or damage, providing relevant documentation and evidence, and working with the insurer to assess the claim and determine coverage.`
    },
    {
        id: 5,
        ques: "Are there any exclusions or limitations to Data Insurance coverage?",
        ans: `Data Insurance policies may have exclusions or limitations, such as pre-existing data loss, intentional acts, or failure to implement adequate data security measures. It's essential to review your policy carefully to understand any exclusions or limitations.`
    },
    {
        id: 6,
        ques: "What types of data are covered by Data Insurance?",
        ans: `Data Insurance typically covers a wide range of digital assets, including but not limited to documents, databases, multimedia files, software, and user-generated content.`
    }, 
];
const masonryOptions = {
    originTop: true
};
const Faq = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        id: "faq",
        sx: faq_styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(section_heading/* default */.Z, {
        sx: faq_styles.heading,
        slogan: "Get yours question answer",
        title: "Frequently asked question"
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)((external_react_masonry_component_default()), {
        options: masonryOptions,
        sx: faq_styles.grid
    }, data.map((item)=>{
        return /*#__PURE__*/ (0,external_theme_ui_.jsx)(faq_item, {
            key: item.id,
            faq: item,
            className: "faq-item"
        });
    }))));
};
/* harmony default export */ const faq = (Faq);
const faq_styles = {
    section: {
        pt: [
            8,
            null,
            null,
            null,
            10,
            14
        ],
        pb: [
            null,
            null,
            null,
            null,
            null,
            null,
            10,
            6
        ]
    },
    grid: {
        mx: [
            null,
            null,
            null,
            -6,
            -8,
            "unset"
        ]
    }
};


/***/ }),

/***/ 6234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pricing)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: ./src/components/section-heading.js
var section_heading = __webpack_require__(9290);
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
;// CONCATENATED MODULE: ./src/components/cards/price-table.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



const PriceTable = ({ price  })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.priceTable,
        className: `${price.isRecommended ? "recommended" : ""}`
    }, price.isRecommended && /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "span",
        sx: styles.recomLabel
    }, "Highly Recommended"), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.header,
        className: "priceHeader"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Heading, {
        as: "h3",
        sx: styles.title
    }, price.title), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p",
        sx: styles.subtitle
    }, price.subtitle), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p",
        sx: styles.priceAmount
    }, "$", price?.price, "/mo"), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Button, {
        sx: styles.button,
        variant: "text"
    }, price.buttonText)), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "ul",
        sx: styles.list
    }, price?.features?.map((feat)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)("li", {
            key: feat.id,
            className: !feat.isAvailable ? "unavailable" : ""
        }, feat.isAvailable ? /*#__PURE__*/ (0,external_theme_ui_.jsx)("span", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(io_.IoMdCheckmarkCircle, {
            sx: {
                color: "secondary"
            }
        })) : /*#__PURE__*/ (0,external_theme_ui_.jsx)("span", null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(io_.IoIosCloseCircle, {
            color: "#CED7E1"
        })), /*#__PURE__*/ (0,external_theme_ui_.jsx)("span", null, feat.title)))));
};
/* harmony default export */ const price_table = (PriceTable);
const styles = {
    priceTable: {
        background: "white",
        borderRadius: 10,
        position: "relative",
        padding: [
            "20px 15px",
            null,
            null,
            "30px 25px",
            "25px 30px 40px 30px",
            "45px 60px 70px 45px", 
        ],
        boxShadow: [
            "0px 15px 50px rgba(91, 132, 193, 0.1)",
            null,
            null,
            "none"
        ],
        "&.recommended": {
            boxShadow: [
                null,
                null,
                null,
                "0px 15px 50px rgba(91, 132, 193, 0.1)"
            ],
            button: {
                backgroundColor: "primary",
                color: "white"
            }
        }
    },
    recomLabel: {
        fontWeight: 700,
        fontSize: [
            0,
            1
        ],
        lineHeight: 1.29,
        backgroundColor: "#52ACFF",
        borderRadius: "8px 8px 0px 0px",
        position: "absolute",
        left: 0,
        top: "-35px",
        right: 0,
        minHeight: [
            30,
            35
        ],
        textTransform: "uppercase",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontWeight: 700,
        fontSize: [
            1,
            2,
            3
        ],
        lineHeight: 1.31,
        letterSpacing: "-0.55px"
    },
    subtitle: {
        color: (0,external_polished_.rgba)("#343D48", 0.65),
        fontSize: [
            0,
            null,
            1,
            2
        ],
        lineHeight: 1.62,
        mt: "8px"
    },
    priceAmount: {
        color: "#0F2137",
        fontWeight: 700,
        fontSize: [
            1,
            2,
            null,
            4,
            "26px"
        ],
        lineHeight: 1.3,
        letterSpacing: "heading",
        mt: [
            "12px",
            null,
            null,
            "26px"
        ]
    },
    list: {
        listStyle: "none",
        padding: 0,
        mt: [
            6,
            null,
            null,
            null,
            10
        ],
        maxWidth: 340,
        li: {
            display: "flex",
            alignItems: "flex-start",
            fontSize: [
                0,
                null,
                1,
                null,
                2
            ],
            lineHeight: 1.62,
            "+ li ": {
                mt: [
                    3,
                    null,
                    null,
                    null,
                    6
                ]
            },
            svg: {
                height: [
                    17,
                    null,
                    null,
                    null,
                    23
                ],
                width: [
                    17,
                    null,
                    null,
                    null,
                    23
                ]
            },
            "span:first-of-type": {
                mr: "13px",
                mt: "5px"
            }
        },
        ".unavailable": {
            opacity: 0.5
        }
    },
    button: {
        border: `1.5px solid ${(0,external_polished_.rgba)("#5B2B9D", 0.15)}`,
        color: "primary",
        minHeight: [
            40,
            null,
            null,
            null,
            50
        ],
        padding: [
            "0 24px",
            null,
            "0 32px"
        ],
        fontSize: [
            1,
            null,
            null,
            null,
            2
        ],
        mt: [
            3,
            null,
            null,
            6
        ],
        ":hover": {
            borderColor: "primary"
        }
    }
};

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/slick-arrow.js




const SlickArrow = ({ className , onClick , control  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.Button, {
        variant: "text",
        onClick: onClick,
        className: className,
        sx: slick_arrow_styles.paginationButton,
        children: control === "prev" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.Text, {
                    as: "span",
                    variant: "styles.srOnly",
                    children: "Prev"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowLeft, {
                    size: "32px"
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_theme_ui_.Text, {
                    as: "span",
                    variant: "styles.srOnly",
                    children: "Next"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsArrowRight, {
                    size: "32px"
                })
            ]
        })
    });
};
/* harmony default export */ const slick_arrow = (SlickArrow);
const slick_arrow_styles = {
    paginationButton: {
        minHeight: "30px",
        padding: 0,
        position: "absolute",
        bottom: 0,
        ":focus": {
            outline: "0 none"
        },
        svg: {
            transition: "all 0.2s ease-in-out 0s"
        },
        "&.slick-disabled": {
            color: "#BBC7D7",
            svg: {
                transform: "scale(0.8)"
            }
        },
        "&.slick-prev": {
            left: "calc(50% - 16px)",
            transform: "translateX(-50%)"
        },
        "&.slick-next": {
            transform: "translateX(50%)",
            right: "calc(50% - 16px)"
        }
    }
};

;// CONCATENATED MODULE: ./src/sections/pricing.js
/** @jsxRuntime classic */ /** @jsx jsx */ 




const data = [
    {
        id: 1,
        title: "Startup Pack",
        subtitle: "For the startup team who work with new come data stack",
        price: 5.99,
        isRecommended: false,
        buttonText: "Start Free Trial"
    },
    {
        id: 2,
        title: "Premium Pack",
        subtitle: "For the organization who work with new come data stack",
        price: 9.99,
        isRecommended: true,
        buttonText: "Start Free Trial"
    },
    {
        id: 3,
        title: "Ultimate Pack",
        subtitle: "For the ultimate company team who work with new come data stack",
        price: 14.99,
        isRecommended: false,
        buttonText: "Start Free Trial"
    }, 
];
const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: /*#__PURE__*/ (0,external_theme_ui_.jsx)(slick_arrow, {
        control: "next"
    }),
    prevArrow: /*#__PURE__*/ (0,external_theme_ui_.jsx)(slick_arrow, {
        control: "prev"
    }),
    responsive: [
        {
            breakpoint: 100000,
            settings: "unslick"
        },
        {
            breakpoint: 768,
            settings: {
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
    ]
};
const Pricing = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        id: "pricing",
        sx: pricing_styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, {
        sx: pricing_styles.container
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(section_heading/* default */.Z, {
        sx: pricing_styles.heading,
        slogan: "Deal for your data",
        title: "Meet our pricing plan that suit you"
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)((external_react_slick_default()), Object.assign({
        sx: pricing_styles.grid
    }, settings), data?.map((price, index)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(price_table, {
            price: price,
            key: index
        })))));
};
/* harmony default export */ const pricing = (Pricing);
const pricing_styles = {
    section: {
        backgroundColor: "primary",
        pt: [
            6
        ],
        pb: [
            12,
            null,
            null,
            15,
            17
        ]
    },
    container: {
        pl: 0,
        pr: 0
    },
    heading: {
        mb: [
            7,
            null,
            null,
            null,
            14,
            null,
            18
        ],
        px: [
            6,
            null,
            null,
            0
        ],
        h3: {
            fontSize: [
                3,
                null,
                null,
                8
            ]
        }
    },
    grid: {
        gap: [
            null,
            null,
            null,
            null,
            6
        ],
        display: [
            null,
            null,
            null,
            null,
            "grid"
        ],
        gridTemplateColumns: [
            null,
            null,
            null,
            null,
            "repeat(3, 1fr)"
        ],
        alignItems: [
            null,
            null,
            null,
            null,
            "flex-end"
        ],
        ".slick-slide > div": {
            p: [
                "35px",
                "40px",
                null,
                "35px 23px 23px",
                0
            ]
        },
        ".slick-arrow": {
            bottom: -5
        }
    }
};


/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_services)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./src/components/section-heading.js
var section_heading = __webpack_require__(9290);
;// CONCATENATED MODULE: ./src/components/cards/service.js
/** @jsxRuntime classic */ /** @jsx jsx */ 
const Service = ({ service  })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.service
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p"
    }, service.title), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "span"
    }, service.price));
};
/* harmony default export */ const cards_service = (Service);
const styles = {
    service: {
        border: (theme)=>`1px solid ${theme.colors.borderColor}`,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: [
            107,
            null,
            null,
            130
        ],
        textAlign: "center",
        transition: "all 0.3s ease-in-out 0s",
        ":hover": {
            boxShadow: "0px 11px 30px rgba(51, 83, 145, 0.07)",
            borderColor: "transparent"
        },
        p: {
            fontWeight: 500,
            fontSize: [
                1,
                null,
                null,
                "17px"
            ],
            lineHeight: 1.77,
            color: "heading"
        },
        span: {
            color: "primary",
            fontWeight: 700,
            fontSize: [
                1,
                null,
                null,
                "15px"
            ],
            lineHeight: 2
        }
    }
};

;// CONCATENATED MODULE: external "framer-motion"
const external_framer_motion_namespaceObject = require("framer-motion");
;// CONCATENATED MODULE: ./src/sections/services.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



const services = [
    {
        title: "data loss",
        price: ""
    },
    {
        title: "theft",
        price: ""
    },
    {
        title: "corruption",
        price: ""
    },
    {
        title: "cyber-attacks",
        price: ""
    },
    {
        title: "All risk coverage",
        price: ""
    },
    {
        title: "short term cover",
        price: ""
    },
    {
        title: "long term cover",
        price: ""
    },
    {
        title: "natural disasters",
        price: ""
    }, 
];
const Services = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        id: "services",
        sx: services_styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(section_heading/* default */.Z, {
        slogan: "Ideal solutions for you",
        title: "Comprehensive Risk Coverage for Data Owners and Storage Providers (SPs)!"
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: services_styles.grid
    }, services.map((service, i)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(cards_service, {
            key: i,
            service: service
        })))));
};
/* harmony default export */ const sections_services = (Services);
const services_styles = {
    section: {
        pt: [
            8,
            null,
            null,
            null,
            10,
            12
        ],
        pb: [
            12,
            null,
            null,
            null,
            null,
            15
        ]
    },
    grid: {
        gap: [
            3,
            null,
            null,
            4
        ],
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: [
            "repeat(2, 1fr)",
            null,
            null,
            "repeat(3, 1fr)",
            null,
            "repeat(4, 1fr)",
            "repeat(4, 300px)", 
        ]
    }
};


/***/ }),

/***/ 5191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Support)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
;// CONCATENATED MODULE: external "react-responsive"
const external_react_responsive_namespaceObject = require("react-responsive");
// EXTERNAL MODULE: ./src/components/section-heading.js
var section_heading = __webpack_require__(9290);
// EXTERNAL MODULE: ./src/components/image.js
var components_image = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/assets/images/support-team.png
/* harmony default export */ const support_team = ({"src":"/_next/static/media/support-team.899f76bf.png","height":529,"width":909,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AO/n5Oja0/r49+HSy/37+fn6+une2e7k3wDm4texqKC3j4Whb3TJt7LPwLevoKLO0twA39zI0LSq0DkRUAA5nG5h08m+t7K1q7HBANPIuaGPibNsZ5l9aoleVX6AhHZ3frSqqQC1sbMAN1x4iI3Hr5ZKT1RkbXokL0Gen6Jhbk05dzpsFgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/sections/support.js
/** @jsxRuntime classic */ /** @jsx jsx */ 





function Support() {
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        id: "support",
        sx: styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(section_heading/* default */.Z, {
        sx: styles.heading,
        title: "Meet our support team who always work hardly behind the scenes",
        description: "Focus only on the meaning, we take care of the development of this cutting-edge insurance service on the Filecoin Blockchain. Our Support team also are ready to answer any type of question that related to insuring you files on DATA COVER."
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "figure",
        sx: styles.thumbWrapper
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_image/* default */.Z, {
        src: "/images/support-team.png",
        loading: "lazy",
        alt: "Support Team"
    }))));
};
const styles = {
    section: {
        pt: [
            8,
            null,
            null,
            null,
            10,
            14
        ],
        pb: [
            0
        ]
    },
    heading: {
        mb: [
            8,
            null,
            null,
            10,
            null,
            15
        ],
        maxWidth: [
            null,
            null,
            null,
            500,
            600,
            null
        ],
        h3: {
            fontWeight: 500,
            fontSize: [
                3,
                null,
                null,
                8,
                11
            ],
            lineHeight: 1.4,
            letterSpacing: "heading",
            color: "heading"
        },
        p: {
            mt: [
                3
            ],
            maxWidth: [
                500
            ]
        }
    },
    thumbWrapper: {
        display: "flex",
        justifyContent: "center",
        mb: "-1px",
        img: {
            height: [
                180,
                "auto"
            ]
        }
    }
};


/***/ }),

/***/ 3290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ultimate_feature)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: ./src/components/section-heading.js
var section_heading = __webpack_require__(9290);
;// CONCATENATED MODULE: ./src/components/cards/feature.js
/** @jsxRuntime classic */ /** @jsx jsx */ 
const Feature = ({ data , ...props })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, Object.assign({
        sx: styles.feature
    }, props), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "figure"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Image, {
        src: data?.icon,
        alt: data?.title
    })), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Heading, {
        as: "h3"
    }, data?.title), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p"
    }, data?.description)));
};
/* harmony default export */ const feature = (Feature);
const styles = {
    feature: {
        display: [
            "flex"
        ],
        figure: {
            minWidth: [
                70
            ],
            mr: [
                "30px"
            ]
        },
        h3: {
            fontSize: "18px",
            lineHeight: 1.28,
            color: "heading",
            marginBottom: "20px"
        },
        p: {
            fontSize: 16,
            lineHeight: 1.88,
            color: "text"
        },
        a: {
            mt: [
                3
            ]
        }
    }
};

;// CONCATENATED MODULE: ./src/sections/ultimate-feature.js
/** @jsxRuntime classic */ /** @jsx jsx */ 


/**
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';
 */ const data = [
    {
        id: 1,
        icon: "/images/services/1.png",
        title: "Smart Contract Automation",
        description: `Utilization of smart contracts on Filecoin FEVM for automated policy issuance, claims processing, and premium payments, ensuring transparency and efficiency.`
    },
    {
        id: 2,
        icon: "/images/services/2.png",
        title: "Community Governance",
        description: `Community-driven governance mechanisms allowing stakeholders to participate in policy decisions, premium adjustments, and risk management strategies.`
    },
    {
        id: 3,
        icon: "/images/services/3.png",
        title: "Secured",
        description: `File are secured. You don't need to be worried about security of personal details. Private mode also available.`
    },
    {
        id: 4,
        icon: "/images/services/4.png",
        title: "Decentralized Insurance Policies",
        description: `No more centralized storage where a server houses your file. Insurance policies specifically designed for users of decentralized storage solutions on Filecoin FEVM`
    },
    {
        id: 5,
        icon: "/images/services/5.png",
        title: "5 Star Rating service",
        description: `We offer great service that is second to non. Good support system and more feature been unveiled`
    },
    {
        id: 6,
        icon: "/images/services/6.png",
        title: "Transparent Claim Verification",
        description: `Transparent and auditable claim verification process facilitated by the immutability of blockchain records on Filecoin FEVM`
    }, 
];
const UltimateFeatures = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        id: "features",
        sx: ultimate_feature_styles.section
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(section_heading/* default */.Z, {
        sx: ultimate_feature_styles.heading,
        slogan: "Product features",
        title: "Ultimate features that works"
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: ultimate_feature_styles.features
    }, data?.map((item)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(feature, {
            className: "feature-item",
            key: item.id,
            data: item
        })))));
};
/* harmony default export */ const ultimate_feature = (UltimateFeatures);
const ultimate_feature_styles = {
    section: {
        backgroundColor: "#F9FAFC",
        pt: [
            8,
            null,
            null,
            null,
            10,
            14
        ],
        pb: [
            8,
            null,
            null,
            null,
            15,
            16,
            19
        ],
        position: "relative"
    },
    heading: {
        marginBottom: [
            50,
            50,
            80
        ],
        p: {
            maxWidth: 490,
            margin: [
                "10px auto 0"
            ]
        }
    },
    features: {
        gap: [
            35,
            null,
            null,
            40,
            "50px 30px",
            60
        ],
        display: [
            "grid",
            "grid"
        ],
        maxWidth: 1030,
        margin: "0 auto",
        gridTemplateColumns: [
            "repeat(1, 1fr)",
            null,
            null,
            "repeat(2, 1fr)",
            "repeat(3, 1fr)", 
        ],
        ".feature-item": {
            display: [
                "block"
            ],
            textAlign: "center",
            maxWidth: [
                290,
                260,
                null,
                280,
                "none"
            ],
            m: [
                "0 auto",
                "0 auto",
                "0 auto",
                "0 auto",
                "0 auto",
                0
            ],
            figure: {
                m: [
                    "0 0 20px"
                ]
            },
            h4: {
                mb: [
                    "15px",
                    "15px",
                    "20px"
                ]
            },
            p: {
                fontSize: [
                    "14px",
                    "14px",
                    "16px",
                    "16px",
                    "14px",
                    "16px"
                ]
            }
        }
    }
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

/***/ 9652:
/***/ ((module) => {

module.exports = require("react-blockies");

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

/***/ 4698:
/***/ ((module) => {

module.exports = import("@uauth/js");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,381], () => (__webpack_exec__(3486)));
module.exports = __webpack_exports__;

})();