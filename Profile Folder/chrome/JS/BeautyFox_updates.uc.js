// ==UserScript==
// @name        BeautyFox - Temporary updater ahead of 2.0
// @author		That Linux Dude
// @loadorder   3
// ==/UserScript==

function bfCheckVersion() {
    if (parseInt(Services.appinfo.version.split(".")[0]) != 115) {
        _ucUtils.showNotification({
            label : `This version of Beautyfox requires Firefox 115.`,
            type : "bf-notification",
            priority: "critical",
            buttons: []
        })
    } else if (AppConstants.platform != "win") {
        _ucUtils.showNotification({
            label : `This version of Beautyfox requires Windows.`,
            type : "bf-notification",
            priority: "critical",
            buttons: []
        })
    } else if (window.matchMedia("(-moz-platform: windows-win10)")) { // Ensure dcomp is set correctly
        let NCP = window.matchMedia("(-moz-ev-native-controls-patch)").matches;
        if (pref("gfx.webrender.dcomp-win.enabled").tryGet.bool() == NCP) {
			pref("gfx.webrender.dcomp-win.enabled").set.bool(!NCP);
			_ucUtils.restart(false);
		}
    }
	// Fetch remote version with timestamp to prevent caching
	fetch("https://api.github.com/repos/angelbruni/Beautyfox/releases?page=1&per_page=1", {cache: "reload", headers: {"X-GitHub-Api-Version": "2022-11-28", "Accept": "application/vnd.github+json",}})
		.then((response) => response.json())
		.then((releases) => {
			if (releases[0].tag_name !== "v1.0.2-beta") {
				_ucUtils.showNotification({
                    label : `BeautyFox ${releases[0].tag_name} is finally available!`,
                    type : "bf-notification",
                    priority: "critical",
                    buttons: [{
                        label: "Download",
                        callback: (notification) => {
                            notification.ownerGlobal.openWebLinkIn(
                                "https://github.com/angelbruni/Beautyfox/releases/latest",
                                "tab"
                            );
                            return false;
                        }
                    }]
                })
            }
        });
}
window.addEventListener("load", bfCheckVersion);