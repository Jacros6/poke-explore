import { Cell } from "../app/routes/home.component";

export const LOCATION_DATA_SS_HG: Record<number, {name: string, description: string, tiles: Cell[]}> = {
    1: {
        name: "Safari Zone Gate",
        description: "A place where you can experience wild thrills safely.",
        tiles: [{row: 9, col: 1}, {row: 9, col: 2}, {row: 10, col: 1}, {row: 10, col: 2}]
    },
    2: {
        name: "Route 48",
        description: "A pleasant path from the base of the mountain to the Safari Zone.",
        tiles: [{row: 11, col: 1}, {row: 11, col: 2}]
    },
    3: {
        name: "Route 47",
        description: "A road on a cliff that strikes fear in the hearts of those who dare to pass.",
        tiles: [{row: 12, col: 1}, {row: 12, col: 2}, {row: 12, col: 3}, {row: 13, col: 1}, {row: 13, col: 2}, {row: 13, col: 3}]
    },
    4: {
        name: "Cianwood City",
        description: "A beachside city that has benefitted greatly from the sea.",
        tiles: [{row: 11, col: 4}, {row: 12, col: 4}]
    },
    5: {
        name: "Route 41",
        description: "A rough spot in the sea where whirlpools block your path.",
        tiles: [{row: 11, col: 5}, {row: 11, col: 6}, {row: 12, col: 5}]
    },
    6: {
        name: "Whirl Islands",
        description: "A mysterious island filled with whirlpools and currents.",
        tiles: [{row: 12, col: 6}]
    },
    7: {
        name: "Route 40",
        description: "You can hear the waves on this path from west Olivine City to the sea.",
        tiles: [{row: 10, col: 6}, {row: 9, col: 6}]
    },
    8: {
        name: "Olivine City",
        description: "A city where you can hear the melody ofo the sea.",
        tiles: [{row: 9, col: 7}, {row: 9, col:8}, {row: 8, col: 7}, {row: 8, col:8}]
    },
    9: {
        name: "Battle Frontier",
        description: "A place where people from all over come to show off their strength.",
        tiles: [{row: 7, col: 5}, {row: 7, col: 6}, {row: 8, col: 5}, {row: 8, col: 6}]
    },
    10: {
        name: "Route 39",
        description: "A downhill path that passes through a grassy and breezy plain.",
        tiles: [{row: 7, col: 7}, {row: 6, col: 7}]
    },
    11: {
        name: "Route 38",
        description: "A path that weaves through trees and comes out at a farm.",
        tiles: [{row: 6, col:8}, {row: 6, col: 9}]
    },
    12: {
        name: "Ecruteak City",
        description: "A city that even now bears the marks of its history.",
        tiles: [{row: 6, col: 10}, {row: 6, col: 10}, {row: 5, col: 10}, {row: 5, col:11}, {row: 6, col: 11}]
    },
    13: {
        name: "Route 42",
        description: "A small path opened at the base of challenging Mt. Mortar.",
        tiles: [{row: 6, col: 12}, {row: 6, col: 14}]
    },
    14: {
        name: "Mt. Mortar",
        description: "A Naturally large cavern that is incredibly spacious.",
        tiles: [{row: 6, col: 13}]
    },
    15: {
        name: "Mahogany Town",
        description: "A town with a suspicious air to it. It's a hiding place for ninjas.",
        tiles: [{row: 6, col: 15}]
    },
    16: {
        name: "Route 43",
        description: "A woodland path that comes out at a lake. Beware the greedy gate.",
        tiles: [{row: 5, col: 15}, {row: 4, col: 15}]
    },
    17: {
        name: "Lake of Rage",
        description: "A huge lake full of clear, blue water.",
        tiles: [{row: 2, col: 14}, {row: 2, col: 15}, {row: 2, col: 16},{row: 3, col: 14}, {row:3, col: 15}, {row:3, col:16}]
    },
    18: {
        name: "Route 44",
        description: "A wonderful path with a few pleasant springs and abundant greenery.",
        tiles: [{row: 6, col: 16}, {row: 6, col: 17}, {row: 6, col: 18}]
    },
    19: {
        name: "Blackthorn City",
        description: "A mysterious mountain village cut into a rock face.",
        tiles: [{row: 6, col: 19}, {row: 6, col: 20}, {row: 5, col:19}, {row: 5, col: 20}]
    },
    20: {
        name: "Dark Cave",
        description: "A dark, difficult-to-navigate tunnel that runs beneath the Johto region.",
        tiles: [{row: 7, col: 19}, {row: 9, col: 16}, {row: 11, col: 18}]
    },
    21: {
        name: "Route 45",
        description: "A winding road by a river, but called \"Mountain Road\".",
        tiles: [{row: 8, col: 19}, {row: 9, col: 19}, {row: 10, col: 19}, {row: 11, col: 19}]
    },
    22: {
        name: "Route 46",
        description: "A way home that runs from the base of the mountain to the plains.",
        tiles: [{row: 12, col: 18}]
    },
    23: {
        name: "Route 29",
        description: "A road that begins a journey. The road smells like freshly cut grass.",
        tiles: [{row: 13, col: 18}, {row: 13, col: 17}, {row: 13, col: 19}]
    },
    24: {
        name: "New Bark Town",
        description: "A town where the wind blows and tells of impending change.",
        tiles: [{row: 13, col: 20}]
    },
    25: {
        name: "Cherrygrove City",
        description: "A city where you can smell small flowers and a sea breeze.",
        tiles: [{row: 13, col: 16}, {row: 13, col: 15}]
    },
    26: {
        name: "Route 30",
        description: "A grassy path where you can battle other young Trainers.",
        tiles: [{row: 12, col: 16}, {row: 11, col: 16}, {row: 10, col: 16}]
    },
    27: {
        name: "Route 31",
        description: "A short, nostalgic path winding through Nature.",
        tiles: [{row: 9, col: 15}]
    },
    28: {
        name: "Violet City",
        description: "This old village is still surrounded by trees and other scenery.",
        tiles: [{row: 9, col: 14}, {row: 9, col: 13}, {row: 8, col: 13}, {row: 8, col: 14}]
    },
    29: {
        name: "Route 32",
        description: "A path crossed by the Magnet Train bridge--Nature meets technology.",
        tiles: [{row: 10, col: 13}, {row: 11, col: 13}, {row: 12, col: 13}, {row: 13, col: 13}]
    },
    30: {
        name: "Ruins of Alph",
        description: "A place where you can find a former adventure.", 
        tiles: [{row: 9, col: 12}, {row: 10, col: 12}]
    },
    31: {
        name: "Union Cave",
        description: "Deep underground, it's connected to the ocean. The water flows here.",
        tiles: [{row: 14, col: 13}]
    },
    32: {
        name: "Route 33",
        description: "A difficult and always rainy path that comes out in a cave.",
        tiles: [{row: 15, col: 13}]
    },
    33: {
        name: "Azalea Town",
        description: "A town where people and Pokémon live together in simple harmony.",
        tiles: [{row: 15, col: 11}, {row: 10, col: 12}]
    },
    34: {
        name: "Ilex Forest",
        description: "A large forest full of trees that are used to make charcoal.",
        tiles: [{row: 15, col: 10}]
    },
    35: {
        name: "Route 34",
        description: "A lush, green path, even though it's right next to a city.",
        tiles: [{row: 14, col: 10}, {row: 13, col: 10}]
    },
    36: {
        name: "Goldenrod City",
        description: "A developing city where people and Pokémon come and go as they like.",
        tiles: [{row: 12, col: 10}, {row: 12, col: 9}, {row: 12, col: 8}, {row: 11, col: 8}, {row: 11, col: 9}, {row:11, col:10}]
    },
    37: {
        name: "Route 35",
        description: "A bright path with a lake that's easy on the eyes and easy to traverse.",
        tiles: [{row: 10, col: 10}, {row: 9, col: 10}]
    },
    38: {
        name: "National Park",
        description: "A spacious and beautiful park. It's connected to the Pokéathlon Dome.",
        tiles: [{row: 8, col: 10}, {row: 8, col: 9}, {row: 7, col: 9}, {row: 7, col: 10}]
    },
    39: {
        name: "Route 36",
        description: "A green and densely overgrown path that forks in two directions.",
        tiles: [{row: 8, col: 11}, {row: 8, col: 12}]
    },
    40: {
        name: "Route 37",
        description: " A popular route for Trainers, marked by three Apricorn trees.",
        tiles: [{row: 7, col: 11}]
    },
    41: {
        name: "Route 27",
        description: "A road that crosses from Johto to the Kanto region, like a new journey.",
        tiles: [{row: 13, col: 21}, {row: 13, col: 23}, {row: 13, col: 24}, {row: 13, col: 25}, {row: 13, col: 26}]
    },
    42: {
        name: "Tohjo Falls",
        description: "The Tohjo waterfall that links the Kanto and Johto regions.",
        tiles: [{row: 13, col: 22}]
    },
    43: {
        name: "Route 26",
        description: "An unimaginably difficult mountain road that gives the impressioon of a test.",
        tiles: [{row: 13, col: 27}, {row: 12, col: 27}, {row: 11, col: 27}, {row: 10, col: 27}]
    },
    44: {
        name: "Victory Road",
        description: "A road that tests Trainers aiming at the Pokémon League",
        tiles: [{row: 9, col: 27}, {row: 8, col: 27}]
    },
    45: {
        name: "Indigo Plateau",
        description: "The fate of many Trainers aiming for the top rests here.",
        tiles: [{row: 7, col: 27}]
    },
    46: {
        name: "Route 28",
        description: "A vacant and hidden mountain road that continues to Mt. Silver.",
        tiles: [{row: 9, col: 26}, {row: 9, col: 25}]
    },
    47: {
        name: "Mt. Silver",
        description: "A hallowed mountain that rises between the Johto and Kanto regions.",
        tiles: [{row: 9, col: 24}]
    },
    48: {
        name: "Route 22",
        description: "A path to Victory Road that eventually becomes impassable.",
        tiles: [{row: 9, col: 28}, {row: 9, col: 29}]
    },
    49: {
        name: "Viridian City",
        description: "A beautiful city that is enveloped in green year-round.",
        tiles: [{row: 9, col: 30}, {row: 9, col: 31}, {row: 8, col: 30}, {row: 8, col: 31}]
    },
    50: {
        name: "Route 1", 
        description: "A country road full of greenery and rough paths.",
        tiles: [{row: 10, col: 31}, {row: 11, col: 31}]
    },
    51: {
        name: "Pallet Town",
        description: "A fairly new and quit town. It's a small and pretty place.",
        tiles: [{row: 12, col: 31}]
    },
    52: {
        name: "Route 2",
        description: "A path that winds and bends from the forest's enterance.",
        tiles: [{row: 7, col: 31}]
    },
    53: {
        name: "Viridian Forest",
        description: "A forest filled with Nature and Bug-type Pokémon.",
        tiles: [{row: 6, col: 31}]
    },
    54: {
        name: "Diglett's Cave",
        description: "A tunnel dub by Diglett connecting Vermilion City to Pewter City.",
        tiles: [{row: 5, col: 31}, {row: 10, col: 41}]
    },
    55: {
        name: "Pewter City",
        description: "A quiet city nestled between rugged mountains and rocks.",
        tiles: [{row: 4, col: 31}, {row: 3, col: 31}, {row: 3, col: 32}, {row: 4, col: 32}]
    },
    56: {
        name: "Route 3",
        description: "A road where many rocks have fallen from the sky to create craters.",
        tiles: [{row: 4, col: 33}, {row: 4, col: 34}]
    },
    57: {
        name: "Mt. Moon",
        description: "A mountain where a star fell. It now holds a mysterious power.",
        tiles: [{row: 4, col: 35}]
    },
    58: {
        name: "Route 4",
        description: "A one-way road down a hill that has a gentle slope and is fun to traverse.",
        tiles: [{row: 4, col: 36}, {row: 4, col: 38}]
    },
    59: {
        name: "Cerulean City",
        description: "A beautiful city with flowing water and blooming flowers.",
        tiles: [{row: 4, col: 39}, {row: 4, col: 40}, {row: 5, col: 39}, {row: 5, col: 40}]
    },
    60: {
        name: "Route 24",
        description: "A beautiful bridge that stretches across a river.",
        tiles: [{row: 3, col: 40}]
    },
    61: {
        name: "Route 25",
        description: "A path that winds through the forest and comes out overlooking the sea.",
        tiles: [{row: 2, col: 40}, {row: 2, col: 41}, {row: 2, col: 42}, {row: 2, col: 43}]
    },
    62: {
        name: "Route 9",
        description: "A road that forms a maze crossing a small, rocky mountain.",
        tiles: [{row: 5, col: 41}, {row: 5, col: 42}]
    },
    63: {
        name: "Rock Tunnel",
        description: "A dark tunnel that begins in Lavendar Town and comes out in Cerulean City.",
        tiles: [{row: 5, col: 43}]
    },
    64: {
        name: "Power Plant",
        description: "The plant that generates all the energy for the Kanto region.",
        tiles: [{row: 6, col: 43}]
    },
    65: {
        name: "Route 10",
        description: "A road that passes along the canal and comes out at the Power Plant.",
        tiles: [{row: 7, col: 43}]
    },
    66: {
        name: "Lavender Town",
        description: "A small town covered in a beautiful hue of purple.",
        tiles: [{row: 8, col: 43}]
    },
    67: {
        name: "Route 8",
        description: "A short road that elads to the blocked-off Underground Path.",
        tiles: [{row: 8, col: 42}, {row: 8, col: 41}]
    },
    68: {
        name: "Saffron City",
        description: "The biggest city in Kanto, shining with a golden light.",
        tiles: [{row: 8, col: 40}, {row: 8, col: 39}, {row: 7, col: 39}, {row: 7, col: 40}]
    },
    69: {
        name: "Route 5",
        description: "A road running north of Saffron City connecting to the Underground Path.",
        tiles: [{row: 6, col: 39}]
    },
    70: {
        name: "Route 7",
        description: "A short road that leads to the blocked-off Underground Path.",
        tiles: [{row: 8, col: 38}]
    },
    71: {
        name: "Celadon City",
        description: "A rich, rainbow-colored city where people and Pokémon gather.",
        tiles: [{row: 8, col: 37}, {row: 8, col: 36}, {row: 9, col: 36}, {row: 9, col: 37}]
    },
    72: {
        name: "Route 6",
        description: "A road running south of Saffron City connecting to the Underground Path.",
        tiles: [{row: 9, col: 39}]
    },
    73: {
        name: "Vermillion City",
        description: "A southern city that is bathed in orage by the setting sun.",
        tiles: [{row: 10, col: 39}, {row: 10, col: 40}, {row: 11, col: 39}, {row: 11, col: 40}]
    },
    74: {
        name: "Route 11",
        description: "A grassy path with a gentle, refreshing breeze.",
        tiles: [{row: 10, col: 42}]
    },
    75: {
        name: "Route 12",
        description: "A bridge known for its fishing. It's also called \"Silence Bridge.\"",
        tiles: [{row: 9, col: 43}, {row: 10, col: 43}, {row: 11, col: 43}]
    },
    76: {
        name: "Route 13",
        description: "A difficult, narrow path where many Trainers await you.",
        tiles: [{row: 12, col: 43}, {row: 12, col: 42}, {row: 12, col: 41}]
    },
    77: {
        name: "Route 14",
        description: "A pleasant coastal road where the breeze blows and waves roar.",
        tiles: [{row: 13, col: 41}, {row: 14, col: 41}]
    },
    78: {
        name: "Route 15",
        description: "A path that cuts through the row of trees to come out on the coastline.",
        tiles: [{row: 14, col: 40}, {row: 14, col: 39}, {row: 14, col: 38}]
    },
    79: {
        name: "Fuchsia City",
        description: "A historic village that has become new.",
        tiles: [{row: 14, col: 36}, {row: 14, col: 37}, {row: 13, col: 36}, {row: 13, col: 37}]
    },
    80: {
        name: "Route 18",
        description: "The southern ending point of Cycling Road.",
        tiles: [{row: 14, col: 35}, {row: 14, col: 34}]
    },
    81: {
        name: "Route 17",
        description: "An easy path of Cycling Road running above the sea.",
        tiles: [{row: 13, col: 34}, {row: 12, col: 34}, {row: 11, col: 34}, {row: 10, col: 34}]
    },
    82: {
        name: "Route 16",
        description: "The northern starting point of Cycling Road.",
        tiles: [{row: 9, col: 34}, {row: 9, col: 35}]
    },
    83: {
        name: "Route 19",
        description: "A coastal road littered with rocks due to Cinnabar Island's volcano eruption.",
        tiles: [{row: 15, col: 36}, {row: 16, col: 36}]
    },
    84: {
        name: "Route 20",
        description: "A popular path with swimmers. The Seafoam Islands are also here.",
        tiles: [{row: 16, col: 35}, {row: 16, col: 33}, {row: 16, col: 32}]
    },
    85: {
        name: "Seafoam Islands",
        description: "Two small islands lightly floating in the ocean.",
        tiles: [{row: 16, col: 34}]
    },
    86: {
        name: "Cinnabar Island",
        description: "A town sued to be ehre until it was swept away by an eruption.",
        tiles: [{row: 16, col: 31}]
    },
    87: {
        name: "Route 21",
        description: "A coastal road where the only threat might be the volcano on the horizon.",
        tiles: [{row: 15, col: 31}, {row: 14, col:31}, {row: 13, col: 31}]
    }

};