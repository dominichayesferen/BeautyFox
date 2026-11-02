// ==UserScript==
// @name        Beautyfox - Utilities
// @description General functions for Beautyfox
// @loadorder   1
// @include     main
// @include     about:preferences*
// @include     about:addons*
// ==/UserScript==

const { bfPrefUtils, bfInsertElm } = ChromeUtils.importESModule("chrome://modules/content/BFUtils.sys.mjs");

const { ctypes } = ChromeUtils.importESModule("resource://gre/modules/ctypes.sys.mjs");
//const { ctypes } = Components.utils.import("resource://gre/modules/ctypes.jsm", {});