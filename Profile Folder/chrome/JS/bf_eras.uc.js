// ==UserScript==
// @name        Beautyfox - Eras
// @description Sets the era chosen by the user onto the browser and important pages
// @loadorder   2
// @include     main
// ==/UserScript==

const eras = {
    /**
     * id   - The number used in the about:config preference
     * 
     * era  - The major Internet Explorer (such as IE9) to categorise it in in Settings
     * 
     * basedOnVersion   - The build string to use in About Dialogs
     * 
     * class    - The "bf___" value added to the HEAD classes for CSS usage, such as "bfie9-rtm" or "bfie7-5112"
     * 
     * styles   - What does this era cover? "chrome" if browser and/or "pages" if pages
     * 
     * layout   - The unique identifier for the UI layout to use in bf_layouts.uc.js, such as "ie9beta"
     */
}