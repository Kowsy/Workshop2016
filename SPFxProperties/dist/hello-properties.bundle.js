define("20966d02-e567-4cf3-896c-cb43937ff6d6", ["@microsoft/sp-client-preview","helloPropertiesStrings"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var sp_client_preview_1 = __webpack_require__(1);
	var HelloProperties_module_scss_1 = __webpack_require__(2);
	var strings = __webpack_require__(7);
	var HelloPropertiesWebPart = (function (_super) {
	    __extends(HelloPropertiesWebPart, _super);
	    function HelloPropertiesWebPart(context) {
	        _super.call(this, context);
	    }
	    HelloPropertiesWebPart.prototype.render = function () {
	        this.domElement.innerHTML = "\n      <div class=\"" + HelloProperties_module_scss_1.default.helloProperties + "\">\n        <div class=\"" + HelloProperties_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + HelloProperties_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Properties!</span>\n              <p class=\"ms-font-l ms-fontColor-white\">Use this web part to investigate properties</p>\n                <div class=\"ms-Grid\">\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Single Line of Text\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myTextProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Checkbox\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myCheckboxProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Read-Only Label\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myLabelProperty + "\n                            </div>\n                        </div>\n                    </div\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Hyperlink\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myLinkProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Slider\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.mySliderProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Toggle\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myToggleProperty + "\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"ms-Grid-row\">\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6\">\n                            <div class=\"ms-font-m ms-fontWeight-semibold ms-fontColor-white\">\n                                Drop-down list\n                            </div>\n                        </div>\n                        <div class=\"ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-fontColor-white\">\n                            <div class=\"ms-font-m\">\n                                " + this.properties.myDropdownProperty + "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>";
	    };
	    Object.defineProperty(HelloPropertiesWebPart.prototype, "propertyPaneSettings", {
	        get: function () {
	            return {
	                pages: [
	                    {
	                        header: {
	                            description: strings.PropertyPaneDescription
	                        },
	                        groups: [
	                            {
	                                groupName: strings.BasicGroupName,
	                                groupFields: [
	                                    sp_client_preview_1.PropertyPaneTextField('myTextProperty', {
	                                        label: strings.TextFieldLabel
	                                    }),
	                                    sp_client_preview_1.PropertyPaneCheckbox('myCheckboxProperty', {
	                                        text: strings.CheckboxFieldLabel
	                                    }),
	                                    sp_client_preview_1.PropertyPaneLabel('myLabelProperty', {
	                                        text: strings.LabelFieldLabel
	                                    })
	                                ]
	                            },
	                            {
	                                groupName: strings.AdvancedGroupName,
	                                groupFields: [
	                                    sp_client_preview_1.PropertyPaneLink('myLinkProperty', {
	                                        text: strings.LinkFieldText,
	                                        href: strings.LinkFieldUrl
	                                    }),
	                                    sp_client_preview_1.PropertyPaneSlider('mySliderProperty', {
	                                        label: strings.SliderFieldLabel,
	                                        step: 1,
	                                        min: 1,
	                                        max: 10
	                                    }),
	                                    sp_client_preview_1.PropertyPaneToggle('myToggleProperty', {
	                                        label: strings.ToggleFieldLabel,
	                                        onText: "On!",
	                                        offText: "Off!"
	                                    }),
	                                    sp_client_preview_1.PropertyPaneDropdown('myDropdownProperty', {
	                                        label: strings.DropdownFieldLabel,
	                                        options: [
	                                            { key: '1', text: 'One' },
	                                            { key: '2', text: 'Two' },
	                                            { key: '3', text: 'Three' },
	                                            { key: '4', text: 'Four' }
	                                        ]
	                                    })
	                                ]
	                            }
	                        ]
	                    }
	                ]
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return HelloPropertiesWebPart;
	}(sp_client_preview_1.BaseClientSideWebPart));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HelloPropertiesWebPart;
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(3);
	/* tslint:disable */
	var styles = {
	    helloProperties: 'helloProperties_801c49a5',
	    container: 'container_ade886df',
	    row: 'row_6cf85d34',
	    listItem: 'listItem_61d7fecb',
	    button: 'button_2c30e570',
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = styles;
	/* tslint:enable */
	


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var content = __webpack_require__(4);
	var loader = __webpack_require__(6);
	
	if(typeof content === "string") content = [[module.id, content]];
	
	// add the styles to the DOM
	for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1]);
	
	if(content.locals) module.exports = content.locals;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".helloProperties_801c49a5 .container_ade886df{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloProperties_801c49a5 .row_6cf85d34{padding:20px}.helloProperties_801c49a5 .listItem_61d7fecb{max-width:715px;margin:5px auto 5px auto;box-shadow:0 0 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloProperties_801c49a5 .button_2c30e570{text-decoration:none}", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])});;
//# sourceMappingURL=hello-properties.bundle.js.map