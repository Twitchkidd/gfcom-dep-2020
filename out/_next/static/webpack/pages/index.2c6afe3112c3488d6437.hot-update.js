webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\nvar _jsxFileName = \"/Users/gareth/Code/projects/gareth/gfcom/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // const Title = styled.h1`\n// \tfont-size: 50px;\n// \tcolor: ${({ theme }) => theme.colors.primary};\n// `;\n// export default function Home() {\n// \treturn <Title>My page</Title>;\n// }\n\n\n\nvar __N_SSG = true;\nfunction Index(_ref) {\n  var allPosts = _ref.allPosts;\n  var heroPost = allPosts[0];\n  var morePosts = allPosts.slice(1);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 6\n    }\n  }, \"Next.js Blog Example with Markdown\")), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Intro\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  }), heroPost && __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"HeroPost\"], {\n    title: heroPost.title // coverImage={heroPost.coverImage}\n    ,\n    coverImage: __webpack_require__(/*! ../public/fortTrumbull.jpg */ \"./public/fortTrumbull.jpg\"),\n    date: heroPost.date,\n    author: heroPost.author,\n    slug: heroPost.slug,\n    excerpt: heroPost.excerpt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), morePosts.length > 0 && __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"MoreStories\"], {\n    posts: morePosts,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 31\n    }\n  }))));\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImFsbFBvc3RzIiwiaGVyb1Bvc3QiLCJtb3JlUG9zdHMiLCJzbGljZSIsInRpdGxlIiwicmVxdWlyZSIsImRhdGUiLCJhdXRob3IiLCJzbHVnIiwiZXhjZXJwdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHZSxTQUFTQSxLQUFULE9BQTZCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0QsUUFBUSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNRSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLENBQWYsQ0FBbEI7QUFDQSxTQUNDLG1FQUNDLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREQsQ0FERCxFQUlDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUVGLFFBQVEsSUFDUixNQUFDLG9EQUFEO0FBQ0MsU0FBSyxFQUFFQSxRQUFRLENBQUNHLEtBRGpCLENBRUM7QUFGRDtBQUdDLGNBQVUsRUFBRUMsbUJBQU8sQ0FBQyw2REFBRCxDQUhwQjtBQUlDLFFBQUksRUFBRUosUUFBUSxDQUFDSyxJQUpoQjtBQUtDLFVBQU0sRUFBRUwsUUFBUSxDQUFDTSxNQUxsQjtBQU1DLFFBQUksRUFBRU4sUUFBUSxDQUFDTyxJQU5oQjtBQU9DLFdBQU8sRUFBRVAsUUFBUSxDQUFDUSxPQVBuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFhRVAsU0FBUyxDQUFDUSxNQUFWLEdBQW1CLENBQW5CLElBQXdCLE1BQUMsdURBQUQ7QUFBYSxTQUFLLEVBQUVSLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiMUIsQ0FKRCxDQURELENBREQ7QUF3QkE7S0EzQnVCSCxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4vLyBcdGZvbnQtc2l6ZTogNTBweDtcbi8vIFx0Y29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuLy8gYDtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vIFx0cmV0dXJuIDxUaXRsZT5NeSBwYWdlPC9UaXRsZT47XG4vLyB9XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDb250YWluZXIsIE1vcmVTdG9yaWVzLCBIZXJvUG9zdCwgSW50cm8sIExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi9saWInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGFsbFBvc3RzIH0pIHtcblx0Y29uc3QgaGVyb1Bvc3QgPSBhbGxQb3N0c1swXTtcblx0Y29uc3QgbW9yZVBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5OZXh0LmpzIEJsb2cgRXhhbXBsZSB3aXRoIE1hcmtkb3duPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHRcdDxJbnRybyAvPlxuXHRcdFx0XHRcdHtoZXJvUG9zdCAmJiAoXG5cdFx0XHRcdFx0XHQ8SGVyb1Bvc3Rcblx0XHRcdFx0XHRcdFx0dGl0bGU9e2hlcm9Qb3N0LnRpdGxlfVxuXHRcdFx0XHRcdFx0XHQvLyBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuXHRcdFx0XHRcdFx0XHRjb3ZlckltYWdlPXtyZXF1aXJlKCcuLi9wdWJsaWMvZm9ydFRydW1idWxsLmpwZycpfVxuXHRcdFx0XHRcdFx0XHRkYXRlPXtoZXJvUG9zdC5kYXRlfVxuXHRcdFx0XHRcdFx0XHRhdXRob3I9e2hlcm9Qb3N0LmF1dGhvcn1cblx0XHRcdFx0XHRcdFx0c2x1Zz17aGVyb1Bvc3Quc2x1Z31cblx0XHRcdFx0XHRcdFx0ZXhjZXJwdD17aGVyb1Bvc3QuZXhjZXJwdH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7bW9yZVBvc3RzLmxlbmd0aCA+IDAgJiYgPE1vcmVTdG9yaWVzIHBvc3RzPXttb3JlUG9zdHN9IC8+fVxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cdGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuXHRcdCd0aXRsZScsXG5cdFx0J2RhdGUnLFxuXHRcdCdzbHVnJyxcblx0XHQnYXV0aG9yJyxcblx0XHQnY292ZXJJbWFnZScsXG5cdFx0J2V4Y2VycHQnLFxuXHRdKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7IGFsbFBvc3RzIH0sXG5cdH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})