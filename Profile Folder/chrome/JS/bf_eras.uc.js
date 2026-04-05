const bfEras = {
    /**
     * id   - The major Internet Explorer version to group the entries into
     * 
     *      name        - The name of the version to show as "Internet Explorer _"
     * 
     *      scrapped    - (bool) Conditional flag for scrapped release 6.05
     * 
     *      platforms    - win10, modern, legacy, win3, mac - defaults to first valid value if Automatic.
     *                     This will mainly be used by AeroThemeFox to know which msstyles format to assume here FIXME: ALWAYS SAME VALUE
     * 
     *      kinds       - (dict) The categories designs will filter, such as win10, modern, legacy, win3 and mac
     * 
     *      class       - Prefix to use in identifying CSS class, such as "ie7"
     *                     This will be used solo on the first design of the era
     * 
     * 
     *      variants    - Stored in bf_designs in their specifically mapped designs
     *                    Names should be provided given their pieces, and variants will be in an Extras tab. 
     */

    /** "1": {
        name: "1.0",
        scrapped: false,
        platform: {
            "legacy": [["95"], false]
        }
    },
    "2": {
        name: "2.0",
        scrapped: false,
        platform: {
            "legacy": [["nt4", "95"], false] // in ATF, use the 1st platform here as an anchor for build -> titlebar style if currently Automatic.
        }
    },
    "3": {
        name: "3.0",
        scrapped: false,
        platform: {
            "legacy": [["nt4", "95"], false],
            "win3": [["3"], false]
        }
    },
    "4": {
        name: "4.0",
        scrapped: false,
        platform: {
            "legacy": [["nt4", "95", "98"], false],
            "win3": [["3"], false]
        }
    },
    "5": {
        name: "5",
        scrapped: false,
        platform: {
            "legacy": [["nt4", "95", "98"], false],
            "win3": [["3"], false]
        }
    },
    "6": {
        name: "6",
        scrapped: false,
        platform: {
            "xp": [["xp"], false],
            "legacy": [["2000", "nt4", "98"], false]
        }
    },
    "6lh": {
        name: "6.05",
        scrapped: false,
        platform: {
            "aero": [["lh"], false],
            "xp": [["xp"], true]
        }
    },
    "7": {
        name: "7",
        scrapped: false,
        platform: {
            "aero": [["vista"], false],
            "xp": [["xp"], false]
        }
    },
    "8": {
        name: "8",
        scrapped: false,
        platform: {
            "aero": [["7", "vista"], false],
            "xp": [["xp"], false]
        }
    },*/
    "9": {
        name: "9",
        scrapped: false,
        platform: {
            "aero": [["7", "vista"], false],
            "xp": [["xp"], true]
        }
    },
    "10": {
        name: "10",
        scrapped: false,
        platform: {
            "aero": [["8", "7"], false],
            "xp": [["xp"], true]
        }
    },
    "11": {
        name: "11",
        scrapped: false,
        platform: {
            "aero": [["8.1", "8", "7"], false],
            "10": [["10"], false],
            "xp": [["xp"], true]
        }
    }
}