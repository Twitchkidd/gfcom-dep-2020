webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CoverImage.js":
/*!**********************************!*\
  !*** ./components/CoverImage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gareth/Code/projects/gareth/gfcom/components/CoverImage.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-right: 0;\\n    margin-left: 0;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar CoverImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"CoverImage__CoverImageWrap\",\n  componentId: \"sc-14y4sgh-0\"\n})([\"margin-right:-1.25rem;margin-left:-1.25rem;\", \" max-width:100%;\"], _utils__WEBPACK_IMPORTED_MODULE_4__[\"above\"].small(_templateObject()));\n_c = CoverImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n  displayName: \"CoverImage__Image\",\n  componentId: \"sc-14y4sgh-1\"\n})([\"box-shadow:0 5px 10px rgba(0,0,0,0.12);\", \" max-width:100%;\"], function (props) {\n  return props.slug ? \"\\n    &:hover {\\n      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\\n    }\\n    transition-property: box-shadow;\\n    transition-duration: 200ms;\\n  \" : null;\n});\n_c2 = Image;\n\nvar CoverImage = function CoverImage(_ref) {\n  var title = _ref.title,\n      src = _ref.src,\n      slug = _ref.slug;\n  return __jsx(CoverImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }\n  }, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    \"aria-label\": title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }\n  }, __jsx(Image, {\n    src: src,\n    alt: \"Cover Image for \".concat(title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }))) : __jsx(Image, {\n    src: src,\n    alt: \"Cover Image for \".concat(title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c3 = CoverImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoverImage);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CoverImageWrap\");\n$RefreshReg$(_c2, \"Image\");\n$RefreshReg$(_c3, \"CoverImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3ZlckltYWdlLmpzP2QzMmUiXSwibmFtZXMiOlsiQ292ZXJJbWFnZVdyYXAiLCJzdHlsZWQiLCJkaXYiLCJhYm92ZSIsInNtYWxsIiwiSW1hZ2UiLCJpbWciLCJwcm9wcyIsInNsdWciLCJDb3ZlckltYWdlIiwidGl0bGUiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUdqQkMsNENBQUssQ0FBQ0MsS0FIVyxvQkFBcEI7S0FBTUosYztBQVVOLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSxvRUFFUixVQUFBQyxLQUFLO0FBQUEsU0FDTkEsS0FBSyxDQUFDQyxJQUFOLDRKQVFHLElBVEc7QUFBQSxDQUZHLENBQVg7TUFBTUgsSzs7QUFlTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEwQjtBQUFBLE1BQXZCQyxLQUF1QixRQUF2QkEsS0FBdUI7QUFBQSxNQUFoQkMsR0FBZ0IsUUFBaEJBLEdBQWdCO0FBQUEsTUFBWEgsSUFBVyxRQUFYQSxJQUFXO0FBQzVDLFNBQ0MsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUEsSUFBSSxHQUNKLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZQSxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGtCQUFZRSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLEtBQUQ7QUFBTyxPQUFHLEVBQUVDLEdBQVo7QUFBaUIsT0FBRyw0QkFBcUJELEtBQXJCLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREksR0FPSixNQUFDLEtBQUQ7QUFBTyxPQUFHLEVBQUVDLEdBQVo7QUFBaUIsT0FBRyw0QkFBcUJELEtBQXJCLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQUREO0FBYUEsQ0FkRDs7TUFBTUQsVTtBQWdCU0EseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdmVySW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBhYm92ZSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgQ292ZXJJbWFnZVdyYXAgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tcmlnaHQ6IC0xLjI1cmVtO1xuXHRtYXJnaW4tbGVmdDogLTEuMjVyZW07XG5cdCR7YWJvdmUuc21hbGxgXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICBgfVxuXHRtYXgtd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG5cdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcblx0JHtwcm9wcyA9PlxuXHRcdHByb3BzLnNsdWdcblx0XHRcdD8gYFxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICBgXG5cdFx0XHQ6IG51bGx9XG5cdG1heC13aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENvdmVySW1hZ2UgPSAoeyB0aXRsZSwgc3JjLCBzbHVnIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Q292ZXJJbWFnZVdyYXA+XG5cdFx0XHR7c2x1ZyA/IChcblx0XHRcdFx0PExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9Jy9wb3N0cy9bc2x1Z10nPlxuXHRcdFx0XHRcdDxhIGFyaWEtbGFiZWw9e3RpdGxlfT5cblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e3NyY30gYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH0gLz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxJbWFnZSBzcmM9e3NyY30gYWx0PXtgQ292ZXIgSW1hZ2UgZm9yICR7dGl0bGV9YH0gLz5cblx0XHRcdCl9XG5cdFx0PC9Db3ZlckltYWdlV3JhcD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdmVySW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CoverImage.js\n");

/***/ })

})