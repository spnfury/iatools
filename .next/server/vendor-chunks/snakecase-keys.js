"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/snakecase-keys";
exports.ids = ["vendor-chunks/snakecase-keys"];
exports.modules = {

/***/ "(rsc)/./node_modules/snakecase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/snakecase-keys/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst map = __webpack_require__(/*! map-obj */ \"(rsc)/./node_modules/map-obj/index.js\");\nconst snakeCase = __webpack_require__(/*! to-snake-case */ \"(rsc)/./node_modules/to-snake-case/index.js\");\nmodule.exports = function(obj, options) {\n    options = Object.assign({\n        deep: true,\n        exclude: []\n    }, options);\n    return map(obj, function(key, val) {\n        return [\n            matches(options.exclude, key) ? key : snakeCase(key),\n            val\n        ];\n    }, options);\n};\nfunction matches(patterns, value) {\n    return patterns.some(function(pattern) {\n        return typeof pattern === \"string\" ? pattern === value : pattern.test(value);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc25ha2VjYXNlLWtleXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxNQUFNQyxtQkFBT0EsQ0FBQztBQUNwQixNQUFNQyxZQUFZRCxtQkFBT0EsQ0FBQztBQUUxQkUsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUNyQ0EsVUFBVUMsT0FBT0MsTUFBTSxDQUFDO1FBQUVDLE1BQU07UUFBTUMsU0FBUyxFQUFFO0lBQUMsR0FBR0o7SUFFckQsT0FBT04sSUFBSUssS0FBSyxTQUFVTSxHQUFHLEVBQUVDLEdBQUc7UUFDaEMsT0FBTztZQUNMQyxRQUFRUCxRQUFRSSxPQUFPLEVBQUVDLE9BQU9BLE1BQU1ULFVBQVVTO1lBQ2hEQztTQUNEO0lBQ0gsR0FBR047QUFDTDtBQUVBLFNBQVNPLFFBQVNDLFFBQVEsRUFBRUMsS0FBSztJQUMvQixPQUFPRCxTQUFTRSxJQUFJLENBQUMsU0FBVUMsT0FBTztRQUNwQyxPQUFPLE9BQU9BLFlBQVksV0FDdEJBLFlBQVlGLFFBQ1pFLFFBQVFDLElBQUksQ0FBQ0g7SUFDbkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lhdG9vbHMtbmV4dC8uL25vZGVfbW9kdWxlcy9zbmFrZWNhc2Uta2V5cy9pbmRleC5qcz8wZWYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBtYXAgPSByZXF1aXJlKCdtYXAtb2JqJylcbmNvbnN0IHNuYWtlQ2FzZSA9IHJlcXVpcmUoJ3RvLXNuYWtlLWNhc2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBkZWVwOiB0cnVlLCBleGNsdWRlOiBbXSB9LCBvcHRpb25zKVxuXG4gIHJldHVybiBtYXAob2JqLCBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgICByZXR1cm4gW1xuICAgICAgbWF0Y2hlcyhvcHRpb25zLmV4Y2x1ZGUsIGtleSkgPyBrZXkgOiBzbmFrZUNhc2Uoa2V5KSxcbiAgICAgIHZhbFxuICAgIF1cbiAgfSwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyAocGF0dGVybnMsIHZhbHVlKSB7XG4gIHJldHVybiBwYXR0ZXJucy5zb21lKGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJ1xuICAgICAgPyBwYXR0ZXJuID09PSB2YWx1ZVxuICAgICAgOiBwYXR0ZXJuLnRlc3QodmFsdWUpXG4gIH0pXG59XG4iXSwibmFtZXMiOlsibWFwIiwicmVxdWlyZSIsInNuYWtlQ2FzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvYmoiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVlcCIsImV4Y2x1ZGUiLCJrZXkiLCJ2YWwiLCJtYXRjaGVzIiwicGF0dGVybnMiLCJ2YWx1ZSIsInNvbWUiLCJwYXR0ZXJuIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/snakecase-keys/index.js\n");

/***/ })

};
;