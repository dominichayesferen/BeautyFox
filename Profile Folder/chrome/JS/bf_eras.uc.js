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
     */

    "1": {
        name: "1.0",
        scrapped: false,
        kinds: {
            "classic": "Windows 95"
        },
        class: "ie1"
    },
    "2": {
        name: "2.0",
        scrapped: false,
        kinds: {
            "classic": "Windows 95/NT4",
            "win3": "Windows 3.1"
        },
        class: "ie2"
    },
    "3": {
        name: "3.0",
        scrapped: false,
        kinds: {
            "classic": "Windows 95/NT4",
            "win3": "Windows 3.1"
        },
        class: "ie3"
    },
    "4": {
        name: "4.0",
        scrapped: false,
        kinds: {
            "classic": "Windows 9X/NT4",
            "win3": "Windows 3.1"
        },
        class: "ie4"
    },
    "5": {
        name: "5",
        scrapped: false,
        kinds: {
            "classic": "Windows 9X/NT4",
            "win3": "Windows 3.1"
        },
        class: "ie5"
    },
    "6": {
        name: "6",
        scrapped: false,
        kinds: {
            "xp": "Windows XP",
            "classic": "Windows 2000/98/NT4"
        },
        class: "ie6"
    },
    "6lh": {
        name: "6.05",
        scrapped: true,
        kinds: {
            "lh": "Code Name Longhorn",
            "xp": "What if Windows XP?"
        },
        class: "ie6lh"
    },
    "7": {
        name: "7",
        scrapped: false,
        kinds: {
            "aero": "Windows Vista",
            "xp": "Windows XP",
            "extra": "Bonus Styles"
        },
        class: "ie7"
    },
    "8": {
        name: "8",
        scrapped: false,
        kinds: {
            "aero": "Windows 7/Vista",
            "xp": "Windows XP",
            "extra": "Bonus Styles"
        },
        class: "ie8"
    },
    "9": {
        name: "9",
        scrapped: false,
        kinds: {
            "aero": "Windows 7/Vista",
            "xp": "What if Windows XP?",
            "extra": "Bonus Styles"
        },
        class: "ie9"
    },
    "10": {
        name: "10",
        scrapped: false,
        kinds: {
            "aero": "Windows 8/7/Vista",
            "xp": "What if Windows XP?"
        },
        class: "ie10"
    },
    "11": {
        name: "11",
        scrapped: false,
        kinds: {
            "win10": "Windows 10",
            "aero": "Windows 8.X/7/Vista",
            "xp": "What if Windows XP?"
        },
        class: "ie11"
    }
}