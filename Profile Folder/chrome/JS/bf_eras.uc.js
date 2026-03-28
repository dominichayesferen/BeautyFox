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

    // todo: put era information in a new JS
    //  hold the era number, such as 7
    //  hold the name, such as "Internet Explorer 7"
    //  hold the variants, such as "aero": "Windows Vista", "classic": "Windows XP" per each era
    //  hold the class prefix, such as "ie7" (thus, "ie7-5308", but "ie7" if it's the first design of that)
    //  store era, build and variant separately in about:config - if any are impossible, fallback to their default combinations

    /** 1: {
        66: {
            name: "Build 66",
            basedOnVersion: "4.01.066",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1"
        },
        206: {
            name: "Build 206",
            basedOnVersion: "4.40.206",
            class: "206",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1"
        },
        "rtm": {
            name: "Internet Explorer 1",
            basedOnVersion: "4.40.308",
            class: "308",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1"
        },
        "1995": {
            name: "November 1995 Beta",
            basedOnVersion: "1057",
            class: "1995",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1.5beta"
        },
        "1996": {
            name: "January 1996 Beta",
            basedOnVersion: "v1.5",
            class: "1996",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1.5"
        },
        "1.5": {
            name: "Internet Explorer 1.5",
            basedOnVersion: "v1.5",
            class: "1.5",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1.5"
        },
        "1.6": {
            name: "Internet Explorer 1.6 Beta",
            basedOnVersion: "1.6.0010",
            class: "1.6",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie1.5"
        }
    },
    2: {
        "2.01": {
            name: "Internet Explorer 2.01",
            basedOnVersion: "1.6.0010",
            class: "2.01-win16",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie1.5"
        },
        "474": {
            name: "Build 474",
            basedOnVersion: "4.40.474",
            class: "474",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie2"
        },
        "rtm": {
            name: "Internet Explorer 2",
            basedOnVersion: "4.40.516",
            class: "516",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie2"
        },
        "viet": {
            name: "Vietnamese Edition",
            basedOnVersion: "4.40.520",
            class: "520",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie2"
        }
    },
    3: {
        "1068": {
            name: "Build 1068",
            basedOnVersion: "3.0.1068",
            class: "1068",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie3win16beta"
        },
        "rtm16": {
            name: "Internet Explorer 3",
            basedOnVersion: "3.03.3006",
            class: "3006",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie3win16"
        },
        "520": {
            name: "Build 520",
            basedOnVersion: "4.40.520",
            class: "520",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie2win16beta"
        },
        "1028": {
            name: "Build 1028",
            basedOnVersion: "4.70.1028",
            class: "1026",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3alpha"
        },
        "1086": {
            name: "Build 1086",
            basedOnVersion: "4.70.1028",
            class: "1086",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3beta"
        },
        "1100": {
            name: "Build 1100",
            basedOnVersion: "4.70.1100",
            class: "1100",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3beta2"
        },
        "1117": {
            name: "Build 1117",
            basedOnVersion: "4.70.1117",
            class: "1100",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3beta2"
        },
        "rtm": {
            name: "Internet Explorer 3",
            basedOnVersion: "4.70.1155",
            class: "1155",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3"
        }
    },
    4: {
        "1009": {
            name: "Build 1009",
            basedOnVersion: "4.0.1009.3",
            class: "1009",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie4win16beta"
        },
        "1321": {
            name: "Build 1321",
            basedOnVersion: "4.0.1321",
            class: "1321",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie4win16beta2"
        },
        "rtm16": {
            name: "Internet Explorer 4.01",
            basedOnVersion: "4.01.2111",
            class: "2111",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie4win16"
        },
        "1056": {
            name: "Build 1056",
            basedOnVersion: "4.70.1056",
            class: "1056",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3"
        },
        "1072": {
            name: "Build 1072",
            basedOnVersion: "4.70.1072",
            class: "1072",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3"
        },
        "1101": {
            name: "Build 1101",
            basedOnVersion: "4.70.1101",
            class: "1101",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3"
        },
        "225": {
            name: "Build 225",
            basedOnVersion: "4.71.0225",
            class: "225",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie4beta"
        },
        "517": {
            name: "Build 517",
            basedOnVersion: "4.71.0517.5",
            class: "517",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie4beta2"
        },
        "544": {
            name: "Build 544",
            basedOnVersion: "4.71.0544.1",
            class: "544",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie3"
        },
        "1008": {
            name: "Build 1008",
            basedOnVersion: "4.71.1008.3",
            class: "1008",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie4beta2"
        },
        "1116": {
            name: "Build 1116",
            basedOnVersion: "4.71.1116",
            class: "1116",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie4"
        },
        "1120": {
            name: "Build 1120",
            basedOnVersion: "4.71.1120",
            class: "1120",
            styles: ["pages"],
            platforms: ["classic"],
            layout: "ie4"
        },
        "1125": {
            name: "Build 1125",
            basedOnVersion: "4.71.1125.1",
            class: "1116",
            styles: ["pages"],
            platforms: ["classic"],
            layout: "ie4"
        },
        "rtm": {
            name: "Internet Explorer 4",
            basedOnVersion: "4.72.3682.1707",
            class: "3682",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie4"
        }
    },
    5: {
        "rtm16": {
            name: "Internet Explorer 5",
            basedOnVersion: "5.00.0913.2206",
            class: "913",
            styles: ["chrome", "pages"],
            platforms: ["win16"],
            layout: "ie5win16"
        },
        "rtm": {
            name: "Internet Explorer 5",
            basedOnVersion: "5.00.3700.1000",
            class: "913",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie5"
        },
        "rtm.5": {
            name: "Internet Explorer 5.5",
            basedOnVersion: "5.50.4807.2300",
            class: "4807",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie5.5"
        }
    },
    6: {
        "5.6": {
            name: "Internet Explorer 5.6 Beta",
            basedOnVersion: "5.60.2296.beta1.001024-1157",
            class: "5.6",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie5"
        },
        "2410": {
            name: "Build 2410",
            basedOnVersion: "6.0.2410.0000.main.001208-1937",
            class: "2410",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie6beta"
        },
        "2419": {
            name: "Build 2419",
            basedOnVersion: "6.0.2419.0000.idx02.010113-1154",
            class: "2419",
            styles: ["chrome", "pages"],
            platforms: ["classic"],
            layout: "ie6beta2"
        },
        "2428": {
            name: "Build 2428",
            basedOnVersion: "6.0.2428.0000.idx01.010129-1827",
            class: "2428",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6beta2"
        },
        "2433": {
            name: "Build 2433",
            basedOnVersion: "6.0.2433.0000.main.010206-1822",
            class: "2433",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6beta2"
        },
        "2465": {
            name: "Build 2465",
            basedOnVersion: "6.0.2465.0000.idx01.010412-2007",
            class: "2465",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6beta2"
        },
        "2469": {
            name: "Build 2469",
            basedOnVersion: "6.0.2469.0000.idx02.010508-1228",
            class: "2469",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6beta3"
        },
        "2474": {
            name: "Build 2474",
            basedOnVersion: "6.0.2474.0000.main.010508-1907",
            class: "2474",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6"
        },
        "2494": {
            name: "Build 2494",
            basedOnVersion: "6.0.2494.0000.main.010613-1739",
            class: "2494",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6beta4"
        },
        "rtm": {
            name: "Internet Explorer 6",
            basedOnVersion: "6.0.2900.5512",
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "classic"],
            layout: "ie6"
        }
    },
    "6.05": {
        "4008": {
            name: "Build 4008",
            basedOnVersion: "6.05.4008.0",
            class: "4008",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "ie6"
        },
        "4029": {
            name: "Build 4029",
            basedOnVersion: "6.05.4029.0",
            class: "4029",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh"
        },
        "4033": {
            name: "Build 4033",
            basedOnVersion: "6.05.4033.0",
            class: "4033",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh2"
        },
        "4039": {
            name: "Build 4039 (Lab06_n)",
            basedOnVersion: "6.05.4039.0",
            class: "4039",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh3"
        },
        "4042": {
            name: "Build 4042 (Lab06_n)",
            basedOnVersion: "6.05.4042.0",
            class: "4042",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh3"
        },
        "4074": {
            name: "Build 4074",
            basedOnVersion: "6.05.4074.0",
            class: "4074",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh4"
        },
        "4093": {
            name: "Build 4093",
            basedOnVersion: "6.05.4093.0",
            class: "4093",
            styles: ["chrome", "pages"],
            platforms: ["longhorn"],
            layout: "lh4"
        }
    },*/
    7: {
        5112: {
            name: "Beta 1",
            basedOnVersion: {"all": "7.0.5112.0"},
            class: "5112",
            styles: ["chrome", "pages"],
            platforms: ["winxp", "aero"],
            layout: "ie75112"
        },
        5231: {
            name: "Build 5231",
            basedOnVersion: {"all": "7.0.5231.0"},
            class: "5231",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie75231"
        },
        5270: {
            name: "Build 5270",
            basedOnVersion: {"all": "7.0.5270.0"},
            class: "5270",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie7beta"
        },
        5308: {
            name: "Build 5308",
            namexp: "Beta 2",
            basedOnVersion: {
                "aero": "7.0.5308.0",
                "xp": "7.0.5296.0"
            },
            class: "5308",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie7"
        },
        5335: {
            name: "Build 5335",
            basedOnVersion: {"all": "7.0.5335.5"},
            class: "5335",
            styles: ["chrome", "pages"],
            platforms: ["xp"],
            layout: "ie7"
        },
        5355: {
            name: "Build 5355",
            namexp: "Build 5346",
            basedOnVersion: {
                "aero": "7.0.5355.0",
                "xp": "7.0.5346.5"
            },
            class: "5355",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie7"
        },
        5466: {
            name: "Build 5466",
            namexp: "Build 5450",
            basedOnVersion: {
                "aero": "7.0.5466.0",
                "xp": "7.0.5450.4"
            },
            class: "5466",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie7"
        },
        "rtm": {
            name: "Internet Explorer 7",
            basedOnVersion: {
                "aero": "7.0.6002.18005",
                "xp": "7.0.5730.13IS"
            },
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["xp", "aero"],
            layout: "ie7"
        }
    },
    8: {
        6730: {
            name: "Build 6730",
            basedOnVersion: {"all": "7.0.5112.0"},
            class: "5112",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie8b1"
        },
        "xpb1": {
            name: "Beta 1",
            basedOnVersion: {"all": "8.0.6001.17184"},
            class: "xpb1",
            styles: ["chrome", "pages"],
            platforms: ["xp"],
            layout: "ie8b2"
        },
        6780: {
            name: "Build 6780",
            namexp: "Beta 2",
            basedOnVersion: {
                "aero": "8.1.6780.0",
                "xp": "8.0.6001.18241"
            },
            class: "6780",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie8"
        },
        6931: {
            name: "Build 6931",
            namexp: "Release Candidate",
            basedOnVersion: {
                "aero": "8.1.6931.0",
                "xp": "8.0.6001.18343"
            },
            class: "6931",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie8"
        },
        "rtm": {
            name: "Internet Explorer 8",
            basedOnVersion: {
                "aero": "8.0.7601.17514IC",
                "xp": "8.0.6001.18702"
            },
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["xp", "aero"],
            layout: "ie8"
        }
    },
    9: {
        "7777pillless": {
            name: "Build 7777 (No Superpill)",
            basedOnVersion: {"all": "9.0.7777.0"},
            class: "7777pillless",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie8"
        },
        "7850pillless": {
            name: "Build 7850 (No Superpill)",
            basedOnVersion: {"all": "9.0.7850.0"},
            class: "7850",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie8"
        },
        "7777": {
            name: "Build 7777",
            basedOnVersion: {"all": "9.0.7777.0"},
            class: "7777",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9beta"
        },
        "7930": {
            name: "Build 7930",
            basedOnVersion: {"all": "9.0.7930.0"},
            class: "7930",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9"
        },
        "rtm": {
            name: "Internet Explorer 9",
            basedOnVersion: {"all": "9.0.8112.0"},
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["xp", "aero"],
            layout: "ie8"
        }
    },
    10: {
        "8102": {
            name: "Build 8102",
            basedOnVersion: {"all": "10.0.8102.0"},
            class: "8102",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9"
        },
        "8250": {
            name: "Build 8250",
            basedOnVersion: {"all": "10.0.8250.0"},
            class: "8250",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9"
        },
        "8400": {
            name: "Build 8400",
            basedOnVersion: {"all": "10.0.8400.0"},
            class: "8400",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9"
        },
        "rtm": {
            name: "Internet Explorer 10",
            basedOnVersion: {"all": "10.0.9200.0"},
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["xp", "aero"],
            layout: "ie9"
        }
    },
    11: {
        "rtm": {
            name: "Internet Explorer 11",
            basedOnVersion: {"all": "11.0.9600.0"},
            class: "rtm",
            styles: ["chrome", "pages"],
            platforms: ["aero", "xp"],
            layout: "ie9"
        },
        "win10rtm": {
            name: "Windows 10 1507",
            basedOnVersion: {"all": "11.0.10240.0"},
            class: "win10rtm",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie9"
        },
        "win10edge": {
            name: "Windows 10 20H2",
            basedOnVersion: {"all": "10.0.9200.0"},
            class: "edge",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie9"
        },
        "win10edge2": {
            name: "Windows 10 21H1",
            basedOnVersion: {"all": "10.0.9200.0"},
            class: "edge2",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie9"
        },
        "win10finale": {
            name: "Windows 10 21H2",
            comment: "The final release of Internet Explorer 11",
            basedOnVersion: {"all": "10.0.9200.0"},
            class: "finale",
            styles: ["chrome", "pages"],
            platforms: ["aero"],
            layout: "ie9"
        }
    }
}