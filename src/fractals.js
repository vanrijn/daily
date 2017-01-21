// This is used to provide better information for the "Daily Recommended" fractals.
// We only need the first 50 because the Daily Recommended fractals don't go above
// level 50.
var fractalNames = {
    "en": {
        1: "Urban Battleground",
        2: "Swampland",
        3: "Aquatic Ruins",
        4: "Uncategorized",
        5: "Snowblind",
        6: "Volcanic",
        7: "Cliffside",
        8: "Underground Facility",
        9: "Molten Furnace",
        10: "Molten Boss",
        11: "Urban Battleground",
        12: "Uncategorized",
        13: "Chaos Isles",
        14: "Aetherblade",
        15: "Thaumanova Reactor",
        16: "Snowblind",
        17: "Underground Facility",
        18: "Captain Mai Trin Boss",
        19: "Volcanic",
        20: "Solid Ocean",
        21: "Swampland",
        22: "Cliffside",
        23: "Molten Furnace",
        24: "Aetherblade",
        25: "Nightmare",
        26: "Aquatic Ruins",
        27: "Snowblind",
        28: "Volcanic",
        29: "Underground Facility",
        30: "Chaos Isles",
        31: "Urban Battleground",
        32: "Swampland",
        33: "Cliffside",
        34: "Thaumanova Reactor",
        35: "Solid Ocean",
        36: "Uncategorized",
        37: "Snowblind",
        38: "Chaos Isles",
        39: "Molten Furnace",
        40: "Molten Boss",
        41: "Swampland",
        42: "Captain Mai Trin Boss",
        43: "Underground Facility",
        44: "Uncategorized",
        45: "Solid Ocean",
        46: "Volcanic",
        47: "Cliffside",
        48: "Thaumanova Reactor",
        49: "Aetherblade",
        50: "Nightmare",
        51: "Snowblind",
        52: "Volcanic",
        53: "Underground Facility",
        54: "Chaos Isles",
        55: "Thaumanova Reactor",
        56: "Swampland",
        57: "Urban Battleground",
        58: "Molten Furnace",
        59: "Cliffside",
        60: "Solid Ocean",
        61: "Aquatic Ruins",
        62: "Uncategorized",
        63: "Chaos Isles",
        64: "Thaumanova Reactor",
        65: "Aetherblade",
        66: "Urban Battleground",
        67: "Swampland",
        68: "Underground Facility",
        69: "Cliffside",
        70: "Molten Boss",
        71: "Aetherblade",
        72: "Volcanic",
        73: "Captain Mai Trin Boss",
        74: "Snowblind",
        75: "Nightmare",
        76: "Aquatic Ruins",
        77: "Swampland",
        78: "Urban Battleground",
        79: "Uncategorized",
        80: "Solid Ocean",
        81: "Underground Facility",
        82: "Cliffside",
        83: "Molten Furnace",
        84: "Thaumanova Reactor",
        85: "Urban Battleground",
        86: "Snowblind",
        87: "Volcanic",
        88: "Chaos Isles",
        89: "Swampland",
        90: "Molten Boss",
        91: "Uncategorized",
        92: "Volcanic",
        93: "Snowblind",
        94: "Cliffside",
        95: "Underground Facility",
        96: "Aetherblade",
        97: "Thaumanova Reactor",
        98: "Captain Mai Trin Boss",
        99: "Chaos Isles",
        100: "Nightmare"
    },
    "de": {
        1: "Urbanes Schlachtfeld-Fraktal",
        2: "Sumpfland-Fraktal",
        3: "Unterwasserruinen-Fraktal (Tiefen)",
        4: "Nicht kategorisiertes Fraktal",
        5: "Schneeblind-Fraktal",
        6: "Vulkanisches Fraktal",
        7: "Felswand-Fraktal",
        8: "Untergrundeinrichtung-Fraktal (Gewehre)",
        9: "Einrichtung der Feurigen",
        10: "Einrichtung der Feurigen (Boss)",
        11: "Urbanes Schlachtfeld-Fraktal",
        12: "Nicht kategorisiertes Fraktal",
        13: "Chaos-Fraktal",
        14: "Ätherklingen-Zuflucht",
        15: "Thaumanova-Reaktor",
        16: "Schneeblind-Fraktal",
        17: "Untergrundeinrichtung-Fraktal (Bomben)",
        18: "Unterwasserruinen-Fraktal (Delfine)",
        19: "Vulkanisches Fraktal",
        20: "Solider Ozean-Fraktal (Boss)",
        21: "Sumpfland-Fraktal",
        22: "Felswand-Fraktal",
        23: "Einrichtung der Feurigen",
        24: "Ätherklingen-Zuflucht",
        25: "Boss der Ätherklingen-Zuflucht (Boss)",
        26: "Unterwasserruinen-Fraktal (Delfine)",
        27: "Schneeblind-Fraktal",
        28: "Vulkanisches Fraktal",
        29: "Untergrundeinrichtung-Fraktal (Bomben)",
        30: "Chaos-Fraktal",
        31: "Urbanes Schlachtfeld-Fraktal",
        32: "Sumpfland-Fraktal",
        33: "Felswand-Fraktal",
        34: "Thaumanova-Reaktor",
        35: "Solider Ozean-Fraktal (Boss)",
        36: "Nicht kategorisiertes Fraktal",
        37: "Schneeblind-Fraktal",
        38: "Chaos-Fraktal",
        39: "Feuriger Hochofen",
        40: "Einrichtung der Feurigen",
        41: "Sumpfland-Fraktal",
        42: "Unterwasserruinen-Fraktal (Delfine)",
        43: "Untergrundeinrichtung-Fraktal (Bomben)",
        44: "Nicht kategorisiertes Fraktal",
        45: "Solider Ozean-Fraktal (Boss)",
        46: "Vulkanisches Fraktal",
        47: "Felswand-Fraktal",
        48: "Thaumanova-Reaktor",
        49: "Ätherklingen-Zuflucht",
        50: "Boss der Ätherklingen-Zuflucht (Boss)"
    },
    "fr": {
        1: "Fractale du champ de bataille urbain",
        2: "Fractale du marais",
        3: "Fractale des ruines aquatiques (Chemin sombre)",
        4: "Fractale non classée",
        5: "Fractale d'Aveugleneige",
        6: "Fractale volcanique",
        7: "Fractale du Flanc de falaise",
        8: "Fractale du complexe souterrain (Fusils)",
        9: "Fournaise de la Fusion",
        10: "Boss de la Fusion",
        11: "Fractale du champ de bataille urbain",
        12: "Fractale non classée",
        13: "Chaos",
        14: "Étherlame",
        15: "Réacteur de Thaumanova",
        16: "Fractale d'Aveugleneige",
        17: "Fractale du complexe souterrain (Bombes)",
        18: "Fractale des ruines aquatiques (Dauphin)",
        19: "Fractale volcanique",
        20: "Fractale de l'océan solide",
        21: "Fractale du marais",
        22: "Fractale du Flanc de falaise",
        23: "Fournaise de la Fusion",
        24: "Étherlame",
        25: "Boss capitaine Mai Trin",
        26: "Fractale des ruines aquatiques (Dauphin)",
        27: "Fractale d'Aveugleneige",
        28: "Fractale volcanique",
        29: "Fractale du complexe souterrain (Bombes)",
        30: "Chaos",
        31: "Fractale du champ de bataille urbain",
        32: "Fractale du marais (Carnasse)",
        33: "Fractale du Flanc de falaise",
        34: "Réacteur de Thaumanova",
        35: "Fractale de l'océan solide",
        36: "Fractale non classée",
        37: "Fractale d'Aveugleneige",
        38: "Chaos",
        39: "Fournaise de la Fusion",
        40: "Boss de la Fusion",
        41: "Fractale du marais (Moussu)",
        42: "Fractale des ruines aquatiques (Dauphin)",
        43: "Fractale du complexe souterrain (Bombes)",
        44: "Fractale non classée",
        45: "Fractale de l'océan solide",
        46: "Fractale volcanique",
        47: "Fractale du Flanc de falaise",
        48: "Fractale du Réacteur de Thaumanova",
        49: "Refuge étherlame",
        50: "Boss du Refuge étherlame"
    },
    "es": {
        1: "Fractal del campo de batalla urbano",
        2: "Fractal del cenagal",
        3: "Fractal de las ruinas acuáticas",
        4: "Fractal sin clasificar",
        5: "Fractal de la ceguera de la nieve",
        6: "Fractal volcánico",
        7: "Fractal del despeñadero",
        8: "Fractal de la instalación subterránea",
        9: "Fractal de la fragua fundida",
        10: "Fractal de los jefes fundidos",
        11: "Fractal del campo de batalla urbano",
        12: "Fractal sin clasificar",
        13: "Fractal del despeñadero",
        14: "Fractal de los filoetéreos",
        15: "Fractal del reactor taumanova",
        16: "Fractal de la ceguera de la nieve",
        17: "Fractal de la instalación subterránea",
        18: "Fractal de las ruinas acuáticas",
        19: "Fractal volcánico",
        20: "Fractal del océano sólido",
        21: "Fractal del cenagal",
        22: "Fractal del despeñadero",
        23: "Fractal de la fragua fundida",
        24: "Fractal de los filoetéreos",
        25: "Fractal de la jefa capitana Mai Trin",
        26: "Fractal de las ruinas acuáticas",
        27: "Fractal de la ceguera de la nieve",
        28: "Fractal volcánico",
        29: "Fractal de la instalación subterránea",
        30: "Fractal del oceano sólido",
        31: "Fractal del campo de batalla urbano",
        32: "Fractal del cenagal",
        33: "Fractal del despeñadero",
        34: "Fractal del reactor taumanova",
        35: "Fractal del océano sólido",
        36: "Fractal sin clasificar",
        37: "Fractal de la ceguera de la nieve",
        38: "Fractal de la instalación subterránea",
        39: "Fractal de la fragua fundida",
        40: "Fractal de los jefes fundidos",
        41: "Fractal del cenagal",
        42: "Fractal de las ruinas acuáticas",
        43: "Fractal de la instalación subterránea",
        44: "Fractal sin clasificar",
        45: "Fractal del océano sólido",
        46: "Fractal volcánico",
        47: "Fractal del despeñadero",
        48: "Fractal del reactor taumanova",
        49: "Fractal de los filoetéreos",
        50: "Fractal de la jefa capitana Mai Trin"
    }
}
