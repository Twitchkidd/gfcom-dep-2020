webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/HeroPost.js":
/*!********************************!*\
  !*** ./components/HeroPost.js ***!
  \********************************/
/*! exports provided: HeroPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HeroPost\", function() { return HeroPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.js\");\n/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CoverImage */ \"./components/CoverImage.js\");\n/* harmony import */ var _DateFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateFormatter */ \"./components/DateFormatter.js\");\n/* harmony import */ var _Excerpt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Excerpt */ \"./components/Excerpt.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gareth/Code/projects/gareth/gfcom/components/HeroPost.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t\\tmargin-bottom: 0;\\n\\t\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t\\tfont-size: 2.75rem;\\n\\t\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t\\tcolumn-gap: 2rem;\\n\\t\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(2, minmax(0, 1fr));\\n\\t\\tcolumn-gap: 4rem;\\n\\t\\tmargin-bottom: 7rem;\\n\\t\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\t\\tmargin-bottom: 4rem;\\n\\t\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar CoverImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeroPost__CoverImageWrap\",\n  componentId: \"xny2sz-0\"\n})([\"margin-bottom:2rem;\", \"\"], _utils__WEBPACK_IMPORTED_MODULE_8__[\"above\"].med(_templateObject()));\n_c = CoverImageWrap;\nvar PostWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeroPost__PostWrap\",\n  componentId: \"xny2sz-1\"\n})([\"margin-bottom:5rem;\", \" \", \"\"], _utils__WEBPACK_IMPORTED_MODULE_8__[\"above\"].med(_templateObject2()), _utils__WEBPACK_IMPORTED_MODULE_8__[\"above\"].large(_templateObject3()));\n_c2 = PostWrap;\nvar TitleH3 = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h3.withConfig({\n  displayName: \"HeroPost__TitleH3\",\n  componentId: \"xny2sz-2\"\n})([\"margin-bottom:1rem;line-height:1.25;font-size:2.25rem;\", \"\"], _utils__WEBPACK_IMPORTED_MODULE_8__[\"above\"].large(_templateObject4()));\n_c3 = TitleH3;\nvar A = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.withConfig({\n  displayName: \"HeroPost__A\",\n  componentId: \"xny2sz-3\"\n})([\"&:hover{text-decoration:underline;}\"]);\n_c4 = A;\nvar DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"HeroPost__DateWrapper\",\n  componentId: \"xny2sz-4\"\n})([\"margin-bottom:1rem;font-size:1.125rem;\", \"\"], _utils__WEBPACK_IMPORTED_MODULE_8__[\"above\"].med(_templateObject5()));\n_c5 = DateWrapper;\nvar HeroPost = function HeroPost(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      slug = _ref.slug;\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 2\n    }\n  }, __jsx(CoverImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 3\n    }\n  }, __jsx(_CoverImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: title,\n    src: coverImage,\n    slug: slug,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }\n  })), __jsx(PostWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }\n  }, __jsx(TitleH3, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 6\n    }\n  }, __jsx(A, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, title))), __jsx(DateWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(_DateFormatter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    dateString: date,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 6\n    }\n  }))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }\n  }, __jsx(_Excerpt__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }, excerpt), __jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }\n  }))));\n};\n_c6 = HeroPost;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"CoverImageWrap\");\n$RefreshReg$(_c2, \"PostWrap\");\n$RefreshReg$(_c3, \"TitleH3\");\n$RefreshReg$(_c4, \"A\");\n$RefreshReg$(_c5, \"DateWrapper\");\n$RefreshReg$(_c6, \"HeroPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvUG9zdC5qcz8zMmZhIl0sIm5hbWVzIjpbIkNvdmVySW1hZ2VXcmFwIiwic3R5bGVkIiwiZGl2IiwiYWJvdmUiLCJtZWQiLCJQb3N0V3JhcCIsImxhcmdlIiwiVGl0bGVIMyIsImgzIiwiQSIsImEiLCJEYXRlV3JhcHBlciIsIkhlcm9Qb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdDQUVqQkMsNENBQUssQ0FBQ0MsR0FGVyxvQkFBcEI7S0FBTUosYztBQU9OLElBQU1LLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQ0FFWEMsNENBQUssQ0FBQ0MsR0FGSyxzQkFRWEQsNENBQUssQ0FBQ0csS0FSSyxxQkFBZDtNQUFNRCxRO0FBYU4sSUFBTUUsT0FBTyxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLG1FQUlWTCw0Q0FBSyxDQUFDRyxLQUpJLHFCQUFiO01BQU1DLE87QUFTTixJQUFNRSxDQUFDLEdBQUdSLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQVA7TUFBTUQsQztBQU1OLElBQU1FLFdBQVcsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtREFHZEMsNENBQUssQ0FBQ0MsR0FIUSxxQkFBakI7TUFBTU8sVztBQVFDLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsVUFBVixRQUFVQSxVQUFWO0FBQUEsTUFBc0JDLElBQXRCLFFBQXNCQSxJQUF0QjtBQUFBLE1BQTRCQyxPQUE1QixRQUE0QkEsT0FBNUI7QUFBQSxNQUFxQ0MsSUFBckMsUUFBcUNBLElBQXJDO0FBQUEsU0FDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtREFBRDtBQUFZLFNBQUssRUFBRUosS0FBbkI7QUFBMEIsT0FBRyxFQUFFQyxVQUEvQjtBQUEyQyxRQUFJLEVBQUVHLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUMsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sTUFBRSxtQkFBWUEsSUFBWixDQUFSO0FBQTRCLFFBQUksRUFBQyxlQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUosS0FBSixDQURELENBREQsQ0FERCxFQU1DLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxzREFBRDtBQUFlLGNBQVUsRUFBRUUsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBTkQsQ0FERCxFQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVUMsT0FBVixDQURELEVBRUMsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsQ0FYRCxDQUpELENBRHVCO0FBQUEsQ0FBakI7TUFBTUosUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVyb1Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJy4vQ292ZXJJbWFnZSc7XG5pbXBvcnQgRGF0ZUZvcm1hdHRlciBmcm9tICcuL0RhdGVGb3JtYXR0ZXInO1xuaW1wb3J0IEV4Y2VycHQgZnJvbSAnLi9FeGNlcnB0JztcbmltcG9ydCB7IGFib3ZlIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBDb3ZlckltYWdlV3JhcCA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdCR7YWJvdmUubWVkYFxuXHRcdG1hcmdpbi1ib3R0b206IDRyZW07XG5cdGB9XG5gO1xuXG5jb25zdCBQb3N0V3JhcCA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDVyZW07XG5cdCR7YWJvdmUubWVkYFxuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuXHRcdGNvbHVtbi1nYXA6IDRyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogN3JlbTtcblx0YH1cblx0JHthYm92ZS5sYXJnZWBcblx0XHRjb2x1bW4tZ2FwOiAycmVtO1xuXHRgfVxuYDtcblxuY29uc3QgVGl0bGVIMyA9IHN0eWxlZC5oM2Bcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcblx0bGluZS1oZWlnaHQ6IDEuMjU7XG5cdGZvbnQtc2l6ZTogMi4yNXJlbTtcblx0JHthYm92ZS5sYXJnZWBcblx0XHRmb250LXNpemU6IDIuNzVyZW07XG5cdGB9XG5gO1xuXG5jb25zdCBBID0gc3R5bGVkLmFgXG5cdCY6aG92ZXIge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHR9XG5gO1xuXG5jb25zdCBEYXRlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdGZvbnQtc2l6ZTogMS4xMjVyZW07XG5cdCR7YWJvdmUubWVkYFxuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdGB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVyb1Bvc3QgPSAoeyB0aXRsZSwgY292ZXJJbWFnZSwgZGF0ZSwgZXhjZXJwdCwgc2x1ZyB9KSA9PiAoXG5cdDxzZWN0aW9uPlxuXHRcdDxDb3ZlckltYWdlV3JhcD5cblx0XHRcdDxDb3ZlckltYWdlIHRpdGxlPXt0aXRsZX0gc3JjPXtjb3ZlckltYWdlfSBzbHVnPXtzbHVnfSAvPlxuXHRcdDwvQ292ZXJJbWFnZVdyYXA+XG5cdFx0PFBvc3RXcmFwPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFRpdGxlSDM+XG5cdFx0XHRcdFx0PExpbmsgYXM9e2AvcG9zdHMvJHtzbHVnfWB9IGhyZWY9Jy9wb3N0cy9bc2x1Z10nPlxuXHRcdFx0XHRcdFx0PEE+e3RpdGxlfTwvQT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvVGl0bGVIMz5cblx0XHRcdFx0PERhdGVXcmFwcGVyPlxuXHRcdFx0XHRcdDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG5cdFx0XHRcdDwvRGF0ZVdyYXBwZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxFeGNlcnB0PntleGNlcnB0fTwvRXhjZXJwdD5cblx0XHRcdFx0PEF2YXRhciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Qb3N0V3JhcD5cblx0PC9zZWN0aW9uPlxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeroPost.js\n");

/***/ })

})