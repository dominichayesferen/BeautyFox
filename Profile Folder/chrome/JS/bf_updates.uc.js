// ==UserScript==
// @name        Beautyfox - Updates
// @description Manages Beautyfox updates
// @loadorder   2
// @include     main
// ==/UserScript==


/**
 * bfUpdateSettings - Appends newly added Geckium config defaults based on an iteration value that keeps track of total first-launch-about:config-override updates
 * 
 * iteration: User's current settings iteration amount
 */

function bfUpdateSettings() {
    iteration = 1;
    useriter = bfPrefUtils.tryGet("beautyfox.version.iteration").int;
    if (useriter < iteration) {
        bfPrefUtils.set("beautyfox.version.iteration").int(iteration);                            // Set the iteration value to match updates
    } else if (bfPrefUtils.tryGet("toolkit.legacyUserProfileCustomizations.stylesheets").bool == false) {
		bfPrefUtils.set("toolkit.legacyUserProfileCustomizations.stylesheets").bool(true);		// Ensure they're ALWAYS on
        // Restart once the iteration updates conclude.
    } else {
        return false;
    }
	if (useriter < 1) {
        bfPrefUtils.set("toolkit.legacyUserProfileCustomizations.stylesheets").bool(true);		// Turn on legacy stylesheets

		if (AppConstants.platform == "win") {
			bfPrefUtils.set("widget.ev-native-controls-patch.override-win-version").int(7);		// Force aero
			bfPrefUtils.set("gfx.webrender.dcomp-win.enabled").bool(false);						// Disable dcomp
			bfPrefUtils.set("browser.display.windows.non_native_menus").int(0);
			bfPrefUtils.set("browser.startup.blankWindow").bool(false);							// Disable Firefox's splash screen
            bfPrefUtils.set("browser.startup.preXulSkeletonUI").bool(false);
		}

		bfPrefUtils.set("browser.tabs.tabmanager.enabled").bool(false);							// FIXME: Remove and let eras set the usage of the chevron as it is actually used in IE7 and 8
        bfPrefUtils.set("browser.urlbar.trimURLs").bool(false);									// Show protocol in URL in URLbar
		bfPrefUtils.set("browser.newtab.preload").bool(false)									// Disable New Tab preload to prevent new data from not loading
		bfPrefUtils.set("browser.theme.dark-private-windows").bool(false);						// Disable incognito dark mode
    }
    return true;
}
window.addEventListener("load", function() {
    if (bfUpdateSettings() == true) {
        setTimeout(() => {
			UC_API.Runtime.restart(false);
		}, 1000);
    }
});