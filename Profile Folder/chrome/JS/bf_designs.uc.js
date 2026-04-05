// ==UserScript==
// @name        Beautyfox - Designs
// @description Sets the era chosen by the user onto the browser and important pages
// @loadorder   2
// @include     main
// ==/UserScript==

const bfDesigns = {
    /**
     * id   - The number used in the about:config preference
     * 
     *  name            - The human-readable name shown in Settings
     * 
     *  era             - The major Internet Explorer (such as IE9) to categorise it in in Settings
     * 
     *  basedOnVersion  - The build string to use in About Dialogs
     * 
     *  class           - The "bf___" value added to the HEAD classes for CSS usage, such as "bfie9-rtm" or "bfie7-5112"
     * 
     *  styles          - What does this era cover? "chrome" if browser and/or "pages" if pages
     * 
     *  platforms       - Which platform variants does this cover? "aero" if Vista+, "xp" if XP
     * 
     *  layout          - The unique identifier for the UI layout to use in bf_layouts.uc.js, such as "ie9beta"
     */

    // Categories = platform, names are hardcoded
    //  fanmade = True changes title to "What if _____?"
    //  
    //  hold the era number, such as 7
    //  hold the name, such as "Internet Explorer 7"
    //  hold the variants, such as "aero": "Windows Vista", "classic": "Windows XP" per each era
    //  hold the class prefix, such as "ie7" (thus, "ie7-5308", but "ie7" if it's the first design of that)
    //  store era, build and variant separately in about:config - if any are impossible, fallback to their default combinations


    // Internet Explorer 7:
    //  Build 5112

    // era ID:
    //  name ("1.0", "6.05", "9"...)
    //  is the era scrapped? (6.05, etc.)
    //  platform names (they are the categories)
    //      list of windows versions to mark as included
    //      add "What if _?" to the name
    //  form class 'ie(id goes here)-(designidhere)' when applied
    //  allow a custom name via a translation id (name == "custom"?)
    // design ID:
    //  era (the ID in bf_eras to group the design into)
    //  name ("Build _")
    //  rtm (bool, replaces "Build _" with "Internet Explorer _" if True)
    //  comment (bool, adds a translation id to add a version comment)
    //  ieversion (version value shown in About)
    //  types (if containing browser CSS and/or pages CSS)
    //  platforms (list of categories this era is in - current platform is applied separately)
    //  lastredesign (design ID that CSS should start to be imported from at minimum)
    //  layout (intended toolbar layout)
    //  variants (entries in new Extras category)
    //      variantid (name is translation id "ie(design ID)(variantid)")
    //          platform in platforms to apply when applying this variant (design is the parent design)

    "66": {
        era: "1",
        name: "66",
        final: null, // Build _
        comment: true,
        ieversion: "4.01.066",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1",
        variants: {}
    },
    "206": {
        era: "1",
        name: "206",
        final: null,
        comment: false,
        ieversion: "4.40.206",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1",
        variants: {}
    },
    "1": {
        era: "1",
        name: "1",
        final: "rtm", // Internet Explorer _
        comment: false,
        ieversion: "4.40.308",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1",
        variants: {}
    },
    "1995": {
        era: "1",
        name: null, // Provide custom name via localisations
        final: null,
        comment: false,
        ieversion: "1057",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: null, // Skip CSS unless this era which case only apply this item
        layout: "ie1.5beta",
        variants: {}
    },
    "1996": {
        era: "1",
        name: null, // Custom name: January 1996 Beta
        final: null, // No effect if name is custom - should be omitted from this.
        comment: false,
        ieversion: "v1.5",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1.5",
        variants: {}
    },
    "1.5": {
        era: "1",
        name: "1.5",
        final: "rtm",
        comment: false,
        ieversion: "v1.5",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1.5",
        variants: {}
    },
    "1.6": {
        era: "1",
        name: "1.6",
        final: "beta", // Internet Explorer 1.6 Beta
        comment: false,
        ieversion: "1.6.0010",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie1.5",
        variants: {}
    },
    "2.01": {
        era: "2",
        name: "2.01",
        final: "rtm",
        comment: false,
        ieversion: "1.6.0010",
        types: ["browser", "pages"],
        platforms: ["win3"],
        lastredesign: "66",
        layout: "ie1.5",
        variants: {}
    },
    "474": {
        era: "2",
        name: "474",
        final: null,
        comment: false,
        ieversion: "4.40.474",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie2",
        variants: {}
    },
    "2": {
        era: "2",
        name: "2.0",
        final: "rtm",
        comment: false,
        ieversion: "4.40.516",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie2",
        variants: {}
    },
    "2ve": {
        era: "2",
        name: null, // Vietnamese Edition
        final: null,
        comment: false,
        ieversion: "4.40.520",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie2",
        variants: {}
    },
    "2.1": {
        era: "2",
        name: "2.1",
        final: "rtm",
        comment: false,
        ieversion: "2.10.245",
        types: ["browser", "pages"],
        platforms: ["win3"],
        lastredesign: "66",
        layout: "ie2",
        variants: {}
    },
    "520": {
        era: "3",
        name: "520",
        final: null,
        comment: false,
        ieversion: "4.40.520",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie2",
        variants: {}
    },
    "1028": {
        era: "3",
        name: "1028",
        final: null,
        comment: false,
        ieversion: "4.70.1028",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "66",
        layout: "ie3alpha",
        variants: {}
    },
    "1056": {
        era: "4",
        name: "1056",
        final: null,
        comment: false,
        ieversion: "4.70.1056",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1056",
        layout: "ie3",
        variants: {}
    },
    "1072": {
        era: "4",
        name: "1072",
        final: null,
        comment: false,
        ieversion: "4.70.1072",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1056",
        layout: "ie3linksabove",
        variants: {}
    },
    "1086": {
        era: "3",
        name: "1086",
        final: null,
        comment: false,
        ieversion: "4.70.1086",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1056",
        layout: "ie3",
        variants: {}
    },
    "1100": {
        era: "3",
        name: "1100",
        final: null,
        comment: false,
        ieversion: "4.70.1100",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie3",
        variants: {}
    },
    "1101": {
        era: "4",
        name: "1101",
        final: null,
        comment: false,
        ieversion: "4.70.1101",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie3",
        variants: {}
    },
    "3": {
        era: "3",
        name: "3.0",
        final: "rtm",
        comment: false,
        ieversion: "4.70.1155",
        ieversionwin3: "3.03.3006", // platform suffix is an override for that platform
        types: ["browser", "pages"],
        platforms: ["legacy", "win3"],
        lastredesign: "1100",
        layout: "ie3",
        variants: {}
    },
    "1009": {
        era: "4",
        name: "1009",
        final: null,
        comment: false,
        ieversion: "4.0.1009.3",
        types: ["browser", "pages"],
        platforms: ["win3"],
        lastredesign: "1100",
        layout: "ie3",
        variants: {}
    },
    "1321": {
        era: "4",
        name: "1009",
        final: null,
        comment: false,
        ieversion: "4.0.1321",
        types: ["browser", "pages"],
        platforms: ["win3"],
        lastredesign: "1100",
        layout: "ie4win16",
        variants: {}
    },
    "225": {
        era: "4",
        name: "225",
        final: null,
        comment: false,
        ieversion: "4.71.0225",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4beta",
        variants: {}
    },
    "517": {
        era: "4",
        name: "517",
        final: null,
        comment: false,
        ieversion: "4.71.0517",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4beta2",
        variants: {}
    },
    "544": {
        era: "4",
        name: "544",
        final: null,
        comment: false,
        ieversion: "4.71.0544",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie3",
        variants: {}
    },
    "1008": {
        era: "4",
        name: "1008",
        final: null,
        comment: false,
        ieversion: "4.71.1008.3",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4beta3",
        variants: {}
    },
    "1116": {
        era: "4",
        name: "1116",
        final: null,
        comment: false,
        ieversion: "4.71.1116",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4",
        variants: {}
    },
    "1120": {
        era: "4",
        name: "1120",
        final: null,
        comment: false,
        ieversion: "4.71.1120",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4",
        variants: {}
    },
    "1125": {
        era: "4",
        name: "1125",
        final: null,
        comment: false,
        ieversion: "4.71.1125.1",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie4",
        variants: {}
    },
    "4": {
        era: "4",
        name: "4",
        namewin3: "4.01", // same override for names too
        final: "rtm",
        comment: false,
        ieversion: "4.72.3682.1707",
        ieversionwin3: "4.01.2111",
        types: ["browser", "pages"],
        platforms: ["legacy", "win3"],
        lastredesign: "1100",
        layout: "ie4",
        layoutwin3: "ie4win16", // and toolbar layout
        variants: {}
    },
    "5": {
        era: "5",
        name: "5",
        final: "rtm",
        comment: false,
        ieversion: "5.00.3700.1000",
        ieversionwin3: "5.00.0913.2206",
        types: ["browser", "pages"],
        platforms: ["legacy", "win3"],
        lastredesign: "1100",
        layout: "ie5",
        layoutwin3: "ie5win16",
        variants: {}
    },
    "5.5": {
        era: "5",
        name: "5.5",
        final: "rtm",
        comment: false,
        ieversion: "5.50.4807.2300",
        types: ["browser", "pages"],
        platforms: ["legacy"],
        lastredesign: "1100",
        layout: "ie5.5",
        variants: {}
    },
    "5.6": {
        era: "6",
        name: "5.6",
        final: "beta",
        comment: false,
        ieversion: "5.60.2296.beta1.001024-1157",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie5",
        variants: {}
    },
    "2410": {
        era: "6",
        name: "2410",
        final: null,
        comment: false,
        ieversion: "6.0.2410.0000.main.001208-1937",
        ieversionlegacy: "6.0.2410.0000.main.001208-1934",
        types: ["browser", "pages"],
        platforms: ["xp", "legacy"],
        lastredesign: "1100",
        layout: "ie6beta",
        variants: {}
    },
    "2419": {
        era: "6",
        name: "2419",
        final: null,
        comment: false,
        ieversion: "6.0.2419.0000.idx02.010113-1154",
        types: ["browser", "pages"],
        platforms: ["xp", "legacy"],
        lastredesign: "1100",
        layout: "ie6beta2",
        variants: {}
    },
    "2428": {
        era: "6",
        name: "2428",
        final: null,
        comment: false,
        ieversion: "6.0.2428.0000.idx01.010129-1827",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6beta2",
        variants: {}
    },
    "2433": {
        era: "6",
        name: "2433",
        final: null,
        comment: false,
        ieversion: "6.0.2433.0000.main.010206-1822",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6beta2",
        variants: {}
    },
    "2465": {
        era: "6",
        name: "2465",
        final: null,
        comment: false,
        ieversion: "6.0.2465.0000.idx01.010412-2007",
        ieversionlegacy: "6.0.2465.0003",
        types: ["browser", "pages"],
        platforms: ["xp", "legacy"],
        lastredesign: "1100",
        layout: "ie6beta2",
        variants: {}
    },
    "2469": {
        era: "6",
        name: "2465",
        final: null,
        comment: false,
        ieversion: "6.0.2469.0000.idx02.010508-1228",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6beta3",
        variants: {}
    },
    "2474": {
        era: "6",
        name: "2474",
        final: null,
        comment: false,
        ieversion: "6.0.2474.0000.main.010508-1907",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6",
        variants: {}
    },
    "2494": {
        era: "6",
        name: "2494",
        final: null,
        comment: false,
        ieversion: "6.0.2494.0000.main.010613-1739",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6beta4",
        variants: {}
    },
    "6": {
        era: "6",
        name: "6",
        final: "rtm",
        comment: false,
        ieversion: "6.0.2900.5512",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "1100",
        layout: "ie6",
        variants: {}
    },
    "4008": {
        era: "6.05",
        name: "4008",
        final: null,
        comment: false,
        ieversion: "6.05.4008.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "1100",
        layout: "ie6",
        variants: {}
    },
    "4029": {
        era: "6.05",
        name: "4029",
        final: null,
        comment: false,
        ieversion: "6.05.4029.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4029",
        layout: "lh",
        variants: {}
    },
    "4029": {
        era: "6.05",
        name: "4029",
        final: null,
        comment: false,
        ieversion: "6.05.4029.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4029",
        layout: "lh",
        variants: {}
    },
    "4033": {
        era: "6.05",
        name: "4033",
        final: null,
        comment: false,
        ieversion: "6.05.4033.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4029",
        layout: "lh2",
        variants: {}
    },
    "4039": {
        era: "6.05",
        name: "4039",
        final: null,
        comment: false,
        ieversion: "6.05.4039.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4039",
        layout: "lh3",
        variants: {}
    },
    "4042": {
        era: "6.05",
        name: "4042",
        final: null,
        comment: false,
        ieversion: "6.05.4042.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4039",
        layout: "lh3",
        variants: {}
    },
    "4074": {
        era: "6.05",
        name: "4074",
        final: null,
        comment: false,
        ieversion: "6.05.4074.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4039",
        layout: "lh4",
        variants: {}
    },
    "4093": {
        era: "6.05",
        name: "4093",
        final: null,
        comment: false,
        ieversion: "6.05.4093.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "4039",
        layout: "lh4",
        variants: {}
    },
    "5048": {
        era: "7",
        name: "5048",
        namexp: "custom", // Oldest Known Mockup
        final: null,
        comment: false,
        commentxp: true, // Seen in Thurrott's Road to Gold: Part 4
        ieversion: "7.0.5048.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5048",
        layout: "ie75048",
        variants: {}
    },
    "5112": {
        era: "7",
        name: "1",
        final: "betapfx", // Beta _
        comment: false,
        ieversion: "7.0.5112.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie75112",
        variants: {}
    },
    "5231": {
        era: "7",
        name: "5231",
        final: null,
        comment: false,
        ieversion: "7.0.5231.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "5112",
        layout: "ie75231",
        variants: {}
    },
    "5270": {
        era: "7",
        name: "2",
        final: "betapfx",
        comment: false,
        ieversion: "7.0.5270.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "5112",
        layout: "ie7beta",
        variants: {}
    },
    "5308": {
        era: "7",
        name: "5308",
        final: null,
        namexp: "2",
        finalxp: "betapfx",
        comment: false,
        ieversion: "7.0.5308.0",
        ieversionxp: "7.0.5296.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie7",
        variants: {}
    },
    "5335": {
        era: "7",
        name: "5335",
        final: null,
        comment: false,
        ieversion: "7.0.5335.5",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "5112",
        layout: "ie7",
        variants: {}
    },
    "5355": {
        era: "7",
        name: "5355",
        namexp: "5346",
        final: null,
        comment: false,
        ieversion: "7.0.5355.0",
        ieversionxp: "7.0.5346.5",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie7",
        variants: {}
    },
    "5466": {
        era: "7",
        name: "5466",
        namexp: "5450",
        final: null,
        comment: false,
        ieversion: "7.0.5466.0",
        ieversionxp: "7.0.5450.4",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie7",
        variants: {}
    },
    "7": {
        era: "7",
        name: "7",
        final: "rtm",
        comment: false,
        ieversion: "7.0.6002.18005",
        ieversionxp: "7.0.5730.13IS",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie7",
        variants: {"wine": "xp"}
    },
    "6730": {
        era: "8",
        name: "6730",
        final: null,
        comment: false,
        ieversion: "7.0.5112.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "5112",
        layout: "ie8b1",
        variants: {}
    },
    "8xpb1": {
        era: "8",
        name: "1",
        final: "betapfx",
        comment: false,
        ieversion: "8.0.6001.17184",
        types: ["browser", "pages"],
        platforms: ["xp"],
        lastredesign: "5112",
        layout: "ie8b2",
        variants: {}
    },
    "6780": {
        era: "8",
        name: "6780",
        final: null,
        namexp: "2",
        finalxp: "betapfx",
        comment: false,
        ieversion: "8.1.6780.0",
        ieversionxp: "8.0.6001.18241",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie8",
        variants: {}
    },
    "6931": {
        era: "8",
        name: "6931",
        final: null,
        namexp: "custom", // Release Candidate
        comment: false,
        ieversion: "8.1.6780.0",
        ieversionxp: "8.0.6001.18343",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie8",
        variants: {}
    },
    "8": {
        era: "8",
        name: "8",
        final: "rtm",
        comment: false,
        ieversion: "8.0.7601.17514IC",
        ieversionxp: "8.0.6001.18702",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie8",
        variants: {"wine": "xp"}
    },
    "7777spillnt": {
        era: "9",
        name: "7777",
        final: "nosuperpill", // _ (No Superpill)
        comment: false,
        ieversion: "9.0.7777.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie8",
        variants: {}
    },
    "7850spillnt": {
        era: "9",
        name: "7850",
        final: "nosuperpill",
        comment: false,
        ieversion: "9.0.7850.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "5112",
        layout: "ie8",
        variants: {}
    },
    "7777": {
        era: "9",
        name: "7777",
        final: null,
        comment: false,
        ieversion: "9.0.7777.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9beta",
        variants: {}
    },
    "7930": {
        era: "9",
        name: "7930",
        final: null,
        comment: false,
        ieversion: "9.0.7930.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "9": {
        era: "9",
        name: "9",
        final: "rtm",
        comment: false,
        ieversion: "9.0.8112.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {"ubuntu": "aero"}
    },
    "8102": {
        era: "10",
        name: "8102",
        final: null,
        comment: false,
        ieversion: "10.0.8102.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "8250": {
        era: "10",
        name: "8250",
        final: null,
        comment: false,
        ieversion: "10.0.8250.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "8400": {
        era: "10",
        name: "8400",
        final: null,
        comment: false,
        ieversion: "10.0.8400.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "10": {
        era: "10",
        name: "10",
        final: "rtm",
        comment: false,
        ieversion: "10.0.9200.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "11": {
        era: "11",
        name: "11",
        final: "rtm",
        comment: false,
        ieversion: "11.0.9600.0",
        types: ["browser", "pages"],
        platforms: ["aero", "xp"],
        lastredesign: "7777",
        layout: "ie9",
        variants: {}
    },
    "11w10rtm": {
        era: "11",
        name: "custom", // Windows 10 1507
        final: null,
        comment: false,
        ieversion: "11.0.10240.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "7777",
        layout: "ie11",
        variants: {}
    },
    "11w10edge": {
        era: "11",
        name: "custom", // Windows 10 20H2
        final: null,
        comment: false,
        ieversion: "10.0.9200.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "7777",
        layout: "ie11",
        variants: {}
    },
    "11w10edge2": {
        era: "11",
        name: "custom", // Windows 10 21H1
        final: null,
        comment: false,
        ieversion: "10.0.9200.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "7777",
        layout: "ie11",
        variants: {}
    },
    "11fin": {
        era: "11",
        name: "custom", // Windows 10 21H2
        final: null,
        comment: true, // The final release of Internet Explorer 11
        ieversion: "10.0.9200.0",
        types: ["browser", "pages"],
        platforms: ["aero"],
        lastredesign: "7777",
        layout: "ie11",
        variants: {}
    }
}