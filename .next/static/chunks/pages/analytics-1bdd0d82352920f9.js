(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{48178:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics",function(){return r(60426)}])},60426:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return A}});var n=r(85893),a=r(67294),s=r(9230),o=r(46690),l=r(44961),c=r(33351),u=r(47568),i=r(70603),d=r(34051),b=r.n(d),f=r(26953),m=r(48540),p=r(64146),h=r(60715),g=r(9669),x=r.n(g),Z=r(11163),N=r(42484),y=r.n(N),w=r(54372),v=r(31838);function k(){(0,Z.useRouter)();var t=(0,i.Z)(a.useState(!1),2),e=(t[0],t[1],(0,a.useState)("")),r=(e[0],e[1],(0,a.useState)()),n=r[0],s=r[1],o=(0,a.useState)([]),l=(o[0],o[1]),c=(0,a.useState)([]),d=c[0],g=c[1],N=(0,a.useState)([]),k=N[0],A=N[1],_=(0,a.useState)("not-loaded"),E=(_[0],_[1]);function I(){return I=(0,u.Z)(b().mark((function t(){var e,r,n,a,o,c,i,d,f,m,Z,N;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new(y())({network:"mainnet",cacheProvider:!0}),t.next=3,e.connect();case 3:return r=t.sent,n=new h.Q(r),a=n.getSigner(),t.t0=s,t.next=9,a.getAddress();case 9:return t.t1=t.sent,(0,t.t0)(t.t1),o=new p.CH(v.E,w.Mt,a),t.next=14,o.fetchMyFiles();case 14:return c=t.sent,console.log("Data fetch from smart contract is",c.length),A(c.length),t.next=19,e.connect();case 19:return i=t.sent,d=new h.Q(i),f=d.getSigner(),m=new p.CH(v.E,w.Mt,f),t.next=25,m.fetchAllStorageItems();case 25:return Z=t.sent,console.log("Data fetch from smart contract is",Z.length),g(Z.length),t.next=30,Promise.all(c.map(function(){var t=(0,u.Z)(b().mark((function t(e){var r,n,a,s;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.tokenURI(e.tokenId);case 2:return r=t.sent,console.log("token Uri is ",r),n=j(r),console.log("Http Uri is ",n),t.next=8,x().get(n);case 8:return a=t.sent,s={tokenId:e.tokenId.toNumber(),image:j(a.data.image),name:a.data.name,description:a.data.description,sharelink:j(a.data.image)},console.log("item returned is ",s),t.abrupt("return",s);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 30:N=t.sent,l(N),E("loaded");case 33:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}(0,a.useEffect)((function(){!function(){I.apply(this,arguments)}()}),[]);var j=function(t){var e=t.split("/");return"https://".concat(e[2],".ipfs.nftstorage.link/").concat(e[3])};return(0,f.tZ)(m.xu,{as:"section",sx:S.section},(0,f.tZ)("div",{className:"bg-purple-100 text-4xl text-center text-black font-bold pt-10"},(0,f.tZ)("h1",null," Analytics")),(0,f.tZ)("div",{className:"flex flex-col bg-purple-100 text-2xl text-center text-black font-bold pt-10"},(0,f.tZ)("h2",null," User's Stats"),(0,f.tZ)("table",{className:"table-auto border-separate border-spacing-2 border border-slate-500"},(0,f.tZ)("thead",{className:"bg-purple-800 text-2xl text-center text-white"},(0,f.tZ)("tr",null,(0,f.tZ)("th",{className:"border border-slate-600"},"Variable"),(0,f.tZ)("th",{className:"border border-slate-600"},"statistics"),(0,f.tZ)("th",{className:"border border-slate-600"},"Year Started"))),(0,f.tZ)("tbody",null,(0,f.tZ)("tr",null,(0,f.tZ)("td",{className:"border border-slate-700"},"Wallet Address"),(0,f.tZ)("td",{className:"border border-slate-700"},n),(0,f.tZ)("td",{className:"border border-slate-700"},"2022")),(0,f.tZ)("tr",{className:"bg-gray-300 border-b"},(0,f.tZ)("td",{className:"border border-slate-700"},"Total Number of Files in contract"),(0,f.tZ)("td",{className:"border border-slate-700"},d),(0,f.tZ)("td",{className:"border border-slate-700"},"2022")),(0,f.tZ)("tr",null,(0,f.tZ)("td",{className:"border border-slate-700"},"Number of Files Uploaded by me"),(0,f.tZ)("td",{className:"border border-slate-700"},k),(0,f.tZ)("td",{className:"border border-slate-700"},"2022"))))),(0,f.tZ)("div",{className:"bg-purple-100 text-4xl text-center text-black font-bold pt-20 pb-10"},(0,f.tZ)("h1",null,"0% of storage used.")))}var S={section:{backgroundColor:"primary",pt:[17,null,null,20,null],pb:[6,null,null,12,16]}};function A(){return(0,n.jsx)(s.f,{theme:o.Z,children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.Z,{title:"Add new file",description:"add a new file"}),(0,n.jsx)(k,{})]})})}},70603:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return a}})}},function(t){t.O(0,[277,826,563,216,764,669,381,451,774,888,179],(function(){return e=48178,t(t.s=e);var e}));var e=t.O();_N_E=e}]);