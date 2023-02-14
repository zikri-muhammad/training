/**
 * @copyright Wetalk
 * @author Muhammad Zikri <zikri.wetalk@gmail.com>
 * Created: Tue Jan 17 2023
 * Time: 16:03 WITA (GMT+8)
 */

const express = require("express");
const amqp = require("amqplib/callback_api");

const app = express();
let connection;
const data = {
    "partnerOutletID": "W0204",
    "outletID": "0204",
    "outlet": {
        "code": "0204",
        "rsc_code": "001",
        "region_name": "REGIONAL JAKARTA 2",
        "region_code": "0002",
        "name": "TEBET",
        "latitude": -6.229543,
        "longitude": 106.849072,
        "active": false,
        "outletDeliverySchedule": {
            "monday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "tuesday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "wednesday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "thursday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "friday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "saturday": {
                "start_time": "15:00",
                "end_time": "21:00"
            },
            "sunday": {
                "start_time": "15:00",
                "end_time": "21:00"
            }
        }
    },
    "catalogs": [
        {
            "id": "G42",
            "name": "Spesial",
            "dishes": [
                {
                    "id": "G42_11805_90000",
                    "name": "Crazy Deal 7",
                    "price": 99000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11805.jpg?alt=media",
                    "description": "7 Pcs Chicken",
                    "available": true,
                    "sales_time": {
                        "monday": null,
                        "tuesday": null,
                        "wednesday": null,
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": null,
                        "saturday": null,
                        "sunday": null
                    },
                    "option_groups": [
                        {
                            "id": "X1288:MF6_1",
                            "name": "Select 7 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1290_X1288_MF6_0",
                                    "name": "7 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1291_X1288_MF6_0",
                                    "name": "7 Pcs Chicken Mix (4 Pcs Crispy Chicken +3 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1289_X1288_MF6_0",
                                    "name": "7 Pcs Chicken OR ",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1358_X1288_MF6_19089",
                                    "name": "7 Pcs Hot & Cheesy Chicken",
                                    "price": 21000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10737_143182",
                    "name": "Working Lunch Dinner 1",
                    "price": 157500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10737.jpg?alt=media",
                    "description": "5 Combo SB 1 ( 5pc chicken + 5 Rice + 5 Coca-Cola Medium)",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M8E_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_2",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_3",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_4",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_5",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1244:ME6_1",
                            "name": "Select 5 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1261_X1244_ME6_0",
                                    "name": "5 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1262_X1244_ME6_0",
                                    "name": "5 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1263_X1244_ME6_0",
                                    "name": "5 Pcs Chicken Mix (3 Pcs Crispy Chicken +2 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1356_X1244_ME6_13635",
                                    "name": "5 Pcs Hot & Cheesy Chicken",
                                    "price": 15000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_2",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_3",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_4",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_5",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10738_286364",
                    "name": "Working Lunch Dinner 2",
                    "price": 315000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10738.jpg?alt=media",
                    "description": "10 Combo SB 1 ( 10pc chicken + 10 Rice + 10 Coca-Cola Medium)",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M8E_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_10",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_2",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_3",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_4",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_5",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_6",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_7",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_8",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_9",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1376:MH7_1",
                            "name": "Select 10 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1377_X1376_MH7_0",
                                    "name": "10 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1378_X1376_MH7_0",
                                    "name": "10 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1379_X1376_MH7_0",
                                    "name": "10 Pcs Chicken Mix (5 Pcs Crispy Chicken+5 Pcs Chicken OR)",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_10",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_2",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_3",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_4",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_5",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_6",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_7",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_8",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_9",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10740_146818",
                    "name": "Working Lunch Dinner Burger 1",
                    "price": 161500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10740.jpg?alt=media",
                    "description": "5 Combo Praktis Colonel Burger ( 5 Colonel Burger + 5 FF Reguler + 5 Coca-Cola Reguler)",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_2",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_3",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_4",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_5",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10741_293182",
                    "name": "Working Lunch Dinner Burger 2",
                    "price": 322500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10741.jpg?alt=media",
                    "description": "10 Combo Praktis Colonel Burger ( 10 Colonel Burger + 10 FF Reguler +  10 Coca-Cola Reguler)",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_10",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_2",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_3",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_4",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_5",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_6",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_7",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_8",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_9",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_4842_148182",
                    "name": "9 Pcs Bucket",
                    "price": 163000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4842.png?alt=media",
                    "description": "9 Potong Ayam",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1048:M9G_1",
                            "name": "Replace 9 Pcs Crispy Chicken with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1049_X1048_M9G_0",
                                    "name": "9 Pcs Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1048_X1048_M9G_0",
                                    "name": "9 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1050_X1048_M9G_0",
                                    "name": "9 Pcs Mix ( 4 Pcs Original Recipes + 5 Pcs Crispy Chicken)",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10087_79091",
                    "name": "Winger Bucket*",
                    "price": 87000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10087.jpg?alt=media",
                    "description": "7Porsi Half Winger ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1278:MF3_1",
                            "name": "Select Winger Bucket",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1279_X1278_MF3_0",
                                    "name": "Winger Bucket",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1280_X1278_MF3_0",
                                    "name": "Wing Bucket",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1281_X1278_MF3_0",
                                    "name": "Winger Bucket Mix",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_10320_30455",
                    "name": "KFC Chicken Steak",
                    "price": 33500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10320.jpg?alt=media",
                    "description": "KFC Chicken Steak",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G42_10315_47273",
                    "name": "KFC Chicken Sliders Large",
                    "price": 52000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10315.jpg?alt=media",
                    "description": "KFC Chicken Sliders Large",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G42_10341_28182",
                    "name": "KFC Chicken Sliders Personal",
                    "price": 31000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10341.jpg?alt=media",
                    "description": "KFC Chicken Sliders Personal",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G42_8712_4090",
                    "name": "Tote Bag KFC",
                    "price": 4500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F8712.jpg?alt=media",
                    "description": "1 Pcs Tote Bag",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G42_5587_77273",
                    "name": "Snack Bucket 1",
                    "price": 85000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5587.jpg?alt=media",
                    "description": "4 pcs Chicken Strip + 1 Fun Fries + 1 KFC Winger + 6 Chicken Ball",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1019:M9C_1",
                            "name": "Replace Fun Fries Spicy with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1032_X1019_M9C_0",
                                    "name": "Fun Fries Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1030:M9E_1",
                            "name": "Replace Chicken Balls Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X928_X1030_M9E_0",
                                    "name": "Chicken Ball Barbeque",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1030_X1030_M9E_0",
                                    "name": "Chicken Balls Spacy & Sweet",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1031:M9D_1",
                            "name": "Replace Winger Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1033_X1031_M9D_0",
                                    "name": "Winger Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1031:M9D_2",
                            "name": "Replace Winger Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1033_X1031_M9D_0",
                                    "name": "Winger Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_1",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_2",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_3",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_4",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G42_5588_63636",
                    "name": "Snack Bucket 2",
                    "price": 70000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5588.jpg?alt=media",
                    "description": "2 pcs Chicken Strip + 1 Fun Fries + 1 KFC Winger + 6 Chicken Ball ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1019:M9C_1",
                            "name": "Replace Fun Fries Spicy with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1032_X1019_M9C_0",
                                    "name": "Fun Fries Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1030:M9E_1",
                            "name": "Replace Chicken Balls Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X928_X1030_M9E_0",
                                    "name": "Chicken Ball Barbeque",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1030_X1030_M9E_0",
                                    "name": "Chicken Balls Spacy & Sweet",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1031:M9D_1",
                            "name": "Replace Winger Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1033_X1031_M9D_0",
                                    "name": "Winger Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1031:M9D_2",
                            "name": "Replace Winger Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1033_X1031_M9D_0",
                                    "name": "Winger Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_1",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1034:M9F_2",
                            "name": "Replace Crispy Strip SS with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1035_X1034_M9F_0",
                                    "name": "Crispy Strip Barbeque",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "G43",
            "name": "Combo",
            "dishes": [
                {
                    "id": "G43_10351_38636",
                    "name": "Golden Combo 1",
                    "price": 42500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10351.jpg?alt=media",
                    "description": "1 pc Hot & Cheesy Chicken + 1 Rice + 1 Coca-Cola med.",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M6S_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M6S_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M6S_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M6S_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M6S_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M6S_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X93_X1027_M6S_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M6S_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M6S_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M6S_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M6S_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M6S_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M6S_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M6S_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M6S_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M6S_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M6S_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M6S_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10357_56818",
                    "name": "Golden Combo 2",
                    "price": 62500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10357.jpg?alt=media",
                    "description": "2 pcs Hot & Cheesy Chicken + 1 Rice + 1 Coca-Cola med.",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M6S_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M6S_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M6S_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M6S_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M6S_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M6S_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X93_X1027_M6S_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M6S_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M6S_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M6S_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M6S_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M6S_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M6S_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M6S_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M6S_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M6S_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M6S_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M6S_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_9145_50000",
                    "name": "Classic Combo",
                    "price": 55000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9145.jpg?alt=media",
                    "description": "1 pc Chicken OR + 1 porsi Coleslaw + 1 pc Corn Cob + 1 pc Dinner Roll + 1 porsi Mashed Potato",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X11:M01_1",
                            "name": "Select Potong Ayam OR",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X01_X11_M01_0",
                                    "name": "Paha Atas Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X02_X11_M01_0",
                                    "name": "Paha Bawah Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X03_X11_M01_0",
                                    "name": "Sayap Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X04_X11_M01_0",
                                    "name": "Dada Mentok Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X05_X11_M01_0",
                                    "name": "Dada Tulang Original Recipes",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11567_35909",
                    "name": "Classic 1",
                    "price": 39500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11567.jpg?alt=media",
                    "description": "1 PC Chicken + 1 Coleslaw + 1 Cola Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M8E_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11572_51364",
                    "name": "Classic 2",
                    "price": 56500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11572.jpg?alt=media",
                    "description": "2 PC Chicken + 1 Coleslaw + 1 Cola Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M8E_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1241:ME3_1",
                            "name": "Select 2 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1249_X1241_ME3_0",
                                    "name": "2 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1250_X1241_ME3_0",
                                    "name": "2 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1251_X1241_ME3_0",
                                    "name": "2 Pcs Chicken Mix (1 Pcs Crispy Chicken +1 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1354_X1241_ME3_5454",
                                    "name": "2 Pcs Hot & Cheesy Chicken",
                                    "price": 6000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11576_42727",
                    "name": "Classic 3",
                    "price": 47000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11576.jpg?alt=media",
                    "description": "1 PC Chicken + 1 Mashed Potato Gravy + 1 Coleslaw + 1 Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11579_55909",
                    "name": "Classic 4",
                    "price": 61500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11579.jpg?alt=media",
                    "description": "1 Chicken Sliders + 1 FF Reguler + 1 Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11583_40455",
                    "name": "Classic 5",
                    "price": 44500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11583.jpg?alt=media",
                    "description": "1 PC Chicken + 1 Coleslaw + 1 Cream Soup + 1 Mocha Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X98:M8F_1",
                            "name": "Replace Mocha Float with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X98_M8F_1818",
                                    "name": "Yubari Float",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X98_M8F_0",
                                    "name": "Mocha Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1148_X98_M8F_0",
                                    "name": "Lovlychee Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X98_M8F_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X98_M8F_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X98_M8F_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X98_M8F_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X98_M8F_909",
                                    "name": "Café Latte Nescafe",
                                    "price": 1000,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X98_M8F_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X98_M8F_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X98_M8F_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X98_M8F_0",
                                    "name": "Mango Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X98_M8F_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X98_M8F_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X98_M8F_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X98_M8F_0",
                                    "name": "Pink Coconut Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X98_M8F_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11586_55909",
                    "name": "Classic 6",
                    "price": 61500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11586.jpg?alt=media",
                    "description": "1 KFC Chicken Steak + 1 FF Reguler + 1 Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11590_53182",
                    "name": "Classic 7",
                    "price": 58500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11590.jpg?alt=media",
                    "description": "1 PC Chicken + 1 Coleslaw + 1 Colonel Burger + 1 Mocha Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X98:M8F_1",
                            "name": "Replace Mocha Float with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X98_M8F_1818",
                                    "name": "Yubari Float",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X98_M8F_0",
                                    "name": "Mocha Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1148_X98_M8F_0",
                                    "name": "Lovlychee Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X98_M8F_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X98_M8F_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X98_M8F_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X98_M8F_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X98_M8F_909",
                                    "name": "Café Latte Nescafe",
                                    "price": 1000,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X98_M8F_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X98_M8F_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X98_M8F_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X98_M8F_0",
                                    "name": "Mango Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X98_M8F_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X98_M8F_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X98_M8F_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X98_M8F_0",
                                    "name": "Pink Coconut Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X98_M8F_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11595_133182",
                    "name": "Classic 8",
                    "price": 146500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11595.jpg?alt=media",
                    "description": "5 PC Chicken + 3 Coleslaw + 3 Cola Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1027:M8E_1",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_2",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1027:M8E_3",
                            "name": "Replace Coca-Cola Medium with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1027_M8E_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1027_M8E_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1027_M8E_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1027_M8E_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1027_M8E_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1027_M8E_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1027_M8E_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1027_M8E_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1027_M8E_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1027_M8E_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1027_M8E_1818",
                                    "name": "Café Latte Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1027_M8E_1818",
                                    "name": "Cappucino Nescafe",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1027_M8E_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1027_M8E_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1027_M8E_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1027_M8E_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1027_M8E_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1244:ME6_1",
                            "name": "Select 5 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1261_X1244_ME6_0",
                                    "name": "5 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1262_X1244_ME6_0",
                                    "name": "5 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1263_X1244_ME6_0",
                                    "name": "5 Pcs Chicken Mix (3 Pcs Crispy Chicken +2 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1356_X1244_ME6_13635",
                                    "name": "5 Pcs Hot & Cheesy Chicken",
                                    "price": 15000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11520_22727",
                    "name": "Super Besar 9",
                    "price": 25000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11520.jpg?alt=media",
                    "description": "1 Don Series + 1 Egg + 1 Coca-Cola reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1478:MJ4_1",
                            "name": "Select Don Series",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1472_X1478_MJ4_0",
                                    "name": "Oriental Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1473_X1478_MJ4_0",
                                    "name": "Yakiniku Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1475_X1478_MJ4_0",
                                    "name": "Spicy Chili Don Putih",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1477_X1478_MJ4_0",
                                    "name": "Beijing Don",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11539_38182",
                    "name": "Super Besar 10",
                    "price": 42000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11539.jpg?alt=media",
                    "description": "1 Don Series + 1 Egg + 1 Chicken + 1 Coca-Cola reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1478:MJ4_1",
                            "name": "Select Don Series",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1472_X1478_MJ4_0",
                                    "name": "Oriental Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1473_X1478_MJ4_0",
                                    "name": "Yakiniku Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1475_X1478_MJ4_0",
                                    "name": "Spicy Chili Don Putih",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1477_X1478_MJ4_0",
                                    "name": "Beijing Don",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11168_51364",
                    "name": "Kombo Colonel Burger",
                    "price": 56500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11168.jpg?alt=media",
                    "description": "1 Porsi Colonel Burger + 1 FF Reg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11144_46818",
                    "name": "Kombo OR Burger Single",
                    "price": 51500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11144.jpg?alt=media",
                    "description": "1 Porsi OR Burger Single + 1 FF Reg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11156_55909",
                    "name": "Kombo OR Burger Double",
                    "price": 61500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11156.jpg?alt=media",
                    "description": "1 Porsi OR Burger Double + 1 FF Reg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11192_46818",
                    "name": "Kombo Fish Burger",
                    "price": 51500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11192.jpg?alt=media",
                    "description": "1 Porsi Fish Burger + 1 FF Reg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11180_35909",
                    "name": "Kombo Crispy Burger",
                    "price": 39500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11180.jpg?alt=media",
                    "description": "1 Porsi Crispy Burger + 1 FF Reg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10025_30000",
                    "name": "Combo Spaghetti Supreme",
                    "price": 33000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10025.jpg?alt=media",
                    "description": "1 Spaghetti Supreme + 1 FFReg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10024_28182",
                    "name": "Combo Twisty",
                    "price": 31000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10024.jpg?alt=media",
                    "description": "1 Twisty + 1 FFReg + 1 Coca-Cola Reg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_4850_27273",
                    "name": "KFC Winger",
                    "price": 30000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4850.jpg?alt=media",
                    "description": "KFC Winger",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X504:M8K_1",
                            "name": "Replace 2 Half Winger Crispy Chicken with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X504_X504_M8K_0",
                                    "name": "2 Half Winger Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X199_X504_M8K_2273",
                                    "name": "2 Half Winger BBQ",
                                    "price": 2500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10582_91454",
                    "name": "Kombo Super Star Berdua A",
                    "price": 101000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10582.jpg?alt=media",
                    "description": "2 pcs Chicken + 2 Rice + 2 Coca-Cola reg. + 1 CD",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_2",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1241:ME3_1",
                            "name": "Select 2 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1249_X1241_ME3_0",
                                    "name": "2 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1250_X1241_ME3_0",
                                    "name": "2 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1251_X1241_ME3_0",
                                    "name": "2 Pcs Chicken Mix (1 Pcs Crispy Chicken +1 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1354_X1241_ME3_5454",
                                    "name": "2 Pcs Hot & Cheesy Chicken",
                                    "price": 6000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_2",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X99:M20_1",
                            "name": "Select CD",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "10467_X99_M20_40090",
                                    "name": "DVD Cerita Seru Si AA",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10765_X99_M20_40090",
                                    "name": "CD Happy Asmara",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10898_X99_M20_40090",
                                    "name": "CD Anneth Delliecia",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11336_X99_M20_40090",
                                    "name": "Vidi Aldiano",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11438_X99_M20_40090",
                                    "name": "DVD Ku Kira Kau Rumah",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11552_X99_M20_40090",
                                    "name": "CD Karya Terbaik Badai",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11698_X99_M20_40090",
                                    "name": "CD Ifan Seventeen MHD",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11701_X99_M20_40090",
                                    "name": "CD Andrea Lee Cinta & Kenangan",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11823_X99_M20_40090",
                                    "name": "CD Musikilas Hits Nostalgia",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11305_91454",
                    "name": "Kombo Super Star Berdua B",
                    "price": 101000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11305.jpg?alt=media",
                    "description": "2 pcs Chicken + 2 Rice + 1 Coca-Cola Reguler + 1 Fun Fries BBQ + 1 Mocha Float + 1 CD",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1032:ML9_1",
                            "name": "Replace Fun Fries Barbeque with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1032_X1032_ML9_0",
                                    "name": "Fun Fries Barbeque",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1575_X1032_ML9_0",
                                    "name": "Fun Fries Spicy Cheese",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1241:ME3_1",
                            "name": "Select 2 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1249_X1241_ME3_0",
                                    "name": "2 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1250_X1241_ME3_0",
                                    "name": "2 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1251_X1241_ME3_0",
                                    "name": "2 Pcs Chicken Mix (1 Pcs Crispy Chicken +1 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1354_X1241_ME3_5454",
                                    "name": "2 Pcs Hot & Cheesy Chicken",
                                    "price": 6000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_2",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X98:M8F_1",
                            "name": "Replace Mocha Float with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X98_M8F_1818",
                                    "name": "Yubari Float",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X98_M8F_0",
                                    "name": "Mocha Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1148_X98_M8F_0",
                                    "name": "Lovlychee Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X98_M8F_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X98_M8F_0",
                                    "name": "Ichi Ocha",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X98_M8F_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X98_M8F_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X98_M8F_909",
                                    "name": "Café Latte Nescafe",
                                    "price": 1000,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X98_M8F_0",
                                    "name": "Coca-Cola Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X98_M8F_0",
                                    "name": "Sprite Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X98_M8F_0",
                                    "name": "Fanta Medium",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X98_M8F_0",
                                    "name": "Mango Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X98_M8F_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X98_M8F_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X98_M8F_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X98_M8F_0",
                                    "name": "Pink Coconut Float",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X98_M8F_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X99:M20_1",
                            "name": "Select CD",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "10467_X99_M20_40090",
                                    "name": "DVD Cerita Seru Si AA",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10765_X99_M20_40090",
                                    "name": "CD Happy Asmara",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10898_X99_M20_40090",
                                    "name": "CD Anneth Delliecia",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11336_X99_M20_40090",
                                    "name": "Vidi Aldiano",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11438_X99_M20_40090",
                                    "name": "DVD Ku Kira Kau Rumah",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11552_X99_M20_40090",
                                    "name": "CD Karya Terbaik Badai",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11698_X99_M20_40090",
                                    "name": "CD Ifan Seventeen MHD",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11701_X99_M20_40090",
                                    "name": "CD Andrea Lee Cinta & Kenangan",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11823_X99_M20_40090",
                                    "name": "CD Musikilas Hits Nostalgia",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10776_147363",
                    "name": "Kombo Super Star Ber 3",
                    "price": 162500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10776.jpg?alt=media",
                    "description": "4 Chicken + 3 Rice + 3 Coca-Cola reg + 3 KFC Soup + 1 CD",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:M8G_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_2",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1024:M8G_3",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X1024_M8G_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X98_X1024_M8G_4545",
                                    "name": "Mocha Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1024_M8G_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X1024_M8G_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X1024_M8G_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1024_X1024_M8G_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_M8G_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_M8G_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X1024_M8G_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X1024_M8G_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X1024_M8G_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1063_X1024_M8G_4545",
                                    "name": "Mango Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X1024_M8G_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X1024_M8G_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X1024_M8G_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X1024_M8G_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X1024_M8G_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X1024_M8G_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X1024_M8G_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X1024_M8G_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1243:ME5_1",
                            "name": "Select 4 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1257_X1243_ME5_0",
                                    "name": "4 Pcs Chicken OR",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1258_X1243_ME5_0",
                                    "name": "4 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1259_X1243_ME5_0",
                                    "name": "4 Pcs Chicken Mix (2 Pcs Crispy Chicken +2 Pcs OR Chicken)",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1357_X1243_ME5_10908",
                                    "name": "4 Pcs Hot & Cheesy Chicken",
                                    "price": 12000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1409:MI3_1",
                            "name": "Replace KFC Soup Veggie Ball with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X212_X1409_MI3_0",
                                    "name": "KFC Soup ",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1409_X1409_MI3_0",
                                    "name": "KFC Soup Veggie Ball",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1188_X1409_MI3_0",
                                    "name": "Cream Soup",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1409:MI3_2",
                            "name": "Replace KFC Soup Veggie Ball with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X212_X1409_MI3_0",
                                    "name": "KFC Soup ",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1409_X1409_MI3_0",
                                    "name": "KFC Soup Veggie Ball",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1188_X1409_MI3_0",
                                    "name": "Cream Soup",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1409:MI3_3",
                            "name": "Replace KFC Soup Veggie Ball with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X212_X1409_MI3_0",
                                    "name": "KFC Soup ",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1409_X1409_MI3_0",
                                    "name": "KFC Soup Veggie Ball",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1188_X1409_MI3_0",
                                    "name": "Cream Soup",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_2",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M5K_3",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X99:M20_1",
                            "name": "Select CD",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "10467_X99_M20_40090",
                                    "name": "DVD Cerita Seru Si AA",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10765_X99_M20_40090",
                                    "name": "CD Happy Asmara",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "10898_X99_M20_40090",
                                    "name": "CD Anneth Delliecia",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11336_X99_M20_40090",
                                    "name": "Vidi Aldiano",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11438_X99_M20_40090",
                                    "name": "DVD Ku Kira Kau Rumah",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11552_X99_M20_40090",
                                    "name": "CD Karya Terbaik Badai",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11698_X99_M20_40090",
                                    "name": "CD Ifan Seventeen MHD",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11701_X99_M20_40090",
                                    "name": "CD Andrea Lee Cinta & Kenangan",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "11823_X99_M20_40090",
                                    "name": "CD Musikilas Hits Nostalgia",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10532_18182",
                    "name": "Attack Winger 3To5",
                    "price": 20000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10532.jpg?alt=media",
                    "description": "1 Half Winger + 1 Rice + 1 Coca-Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "saturday": null,
                        "sunday": null
                    },
                    "option_groups": [
                        {
                            "id": "X1024:MH5_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1024_X1024_MH5_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_MH5_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_MH5_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X43:M8J_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10533_18182",
                    "name": "Attack OR Single Burger 3To5",
                    "price": 20000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10533.jpg?alt=media",
                    "description": "1 OR Single Burger + 1 Coca-Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "saturday": null,
                        "sunday": null
                    },
                    "option_groups": [
                        {
                            "id": "X1024:MH5_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1024_X1024_MH5_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_MH5_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_MH5_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_10535_18182",
                    "name": "Attack Twisty 3To5",
                    "price": 20000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10535.jpg?alt=media",
                    "description": "1 Twisty + 1 Coca-Cola Reguler",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "saturday": null,
                        "sunday": null
                    },
                    "option_groups": [
                        {
                            "id": "X1024:MH5_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1024_X1024_MH5_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_MH5_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_MH5_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G43_11607_18182",
                    "name": "Attack Don 3To5",
                    "price": 20000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11607.jpg?alt=media",
                    "description": "Attack Don 3To5",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "15:00",
                                "end_time": "17:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1024:MH5_1",
                            "name": "Replace Coca-Cola Reguler with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1024_X1024_MH5_0",
                                    "name": "Coca-Cola Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1025_X1024_MH5_0",
                                    "name": "Sprite Reguler",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1026_X1024_MH5_0",
                                    "name": "Fanta Reguler",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1478:MJ4_1",
                            "name": "Select Don Series",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1472_X1478_MJ4_0",
                                    "name": "Oriental Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1473_X1478_MJ4_0",
                                    "name": "Yakiniku Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1475_X1478_MJ4_0",
                                    "name": "Spicy Chili Don Putih",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1477_X1478_MJ4_0",
                                    "name": "Beijing Don",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "G45",
            "name": "Alacarte",
            "dishes": [
                {
                    "id": "G45_11985_10000",
                    "name": "Black Sesame Sweet Balls 2 Pcs",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11985.jpg?alt=media",
                    "description": "Black Sesame Sweet Balls 2 Pcs",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11988_20000",
                    "name": "Black Sesame Sweet Balls 4 Pcs",
                    "price": 22000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11988.jpg?alt=media",
                    "description": "Black Sesame Sweet Balls 4 Pcs",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_10346_22727",
                    "name": "Hot & Cheesy Chicken",
                    "price": 25000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10346.jpg?alt=media",
                    "description": "Hot & Cheesy Chicken",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11447_14545",
                    "name": "Yakiniku Don",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11447.jpg?alt=media",
                    "description": "1 Porsi Yakiniku Don",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11444_14545",
                    "name": "Oriental Don",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11444.jpg?alt=media",
                    "description": "1 Porsi Oriental Don",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11517_18182",
                    "name": "Don Series With Egg",
                    "price": 20000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11517.jpg?alt=media",
                    "description": "1 porsi Don Series  + 1 Egg ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1478:MJ4_1",
                            "name": "Select Don Series",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1472_X1478_MJ4_0",
                                    "name": "Oriental Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1473_X1478_MJ4_0",
                                    "name": "Yakiniku Don",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1475_X1478_MJ4_0",
                                    "name": "Spicy Chili Don Putih",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1477_X1478_MJ4_0",
                                    "name": "Beijing Don",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G45_11542_10000",
                    "name": "Alacarte Egg",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11542.jpg?alt=media",
                    "description": "1 porsi Alacarte Egg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11450_14545",
                    "name": "Beijing Don",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11450.jpg?alt=media",
                    "description": "Beijing Don",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11456_14545",
                    "name": "Spicy Chili Don Putih",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11456.jpg?alt=media",
                    "description": "1 Porsi Spicy Chili Don Nasi Putih",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4838_17727",
                    "name": "Chicken",
                    "price": 19500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4838.jpg?alt=media",
                    "description": "Chicken",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X923:M5J_1",
                            "name": "Select Potongan Ayam",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X04_X923_M5J_0",
                                    "name": "Dada Mentok Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X09_X923_M5J_0",
                                    "name": "Dada Mentok Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X05_X923_M5J_0",
                                    "name": "Dada Tulang Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X10_X923_M5J_0",
                                    "name": "Dada Tulang Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X01_X923_M5J_0",
                                    "name": "Paha Atas Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X06_X923_M5J_0",
                                    "name": "Paha Atas Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X02_X923_M5J_0",
                                    "name": "Paha Bawah Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X08_X923_M5J_0",
                                    "name": "Paha Bawah Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X03_X923_M5J_0",
                                    "name": "Sayap Original Recipes",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G45_4866_17273",
                    "name": "Chicken Strips",
                    "price": 19000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4866.jpg?alt=media",
                    "description": "Chicken Strips",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4867_20909",
                    "name": "KFC Winger",
                    "price": 23000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4867.jpg?alt=media",
                    "description": "KFC Winger",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_5589_11818",
                    "name": "Chicken Balls",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5589.jpg?alt=media",
                    "description": "Chicken Balls",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1030:M9E_1",
                            "name": "Replace Chicken Balls Spacy n Sweet with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X928_X1030_M9E_0",
                                    "name": "Chicken Ball Barbeque",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1030_X1030_M9E_0",
                                    "name": "Chicken Balls Spacy & Sweet",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G45_10833_14545",
                    "name": "Chicken Skin",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10833.jpg?alt=media",
                    "description": "Chicken Skin",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11162_28182",
                    "name": "Colonel Burger",
                    "price": 31000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11162.jpg?alt=media",
                    "description": "Colonel Burger",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11138_26364",
                    "name": "OR Burger Single",
                    "price": 29000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11138.jpg?alt=media",
                    "description": "OR Burger Single",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4910_10000",
                    "name": "Spaghetti Deluxe",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4910.jpg?alt=media",
                    "description": "Spaghetti Deluxe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11150_35455",
                    "name": "OR Burger Double",
                    "price": 39000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11150.jpg?alt=media",
                    "description": "OR Burger Double",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11186_24545",
                    "name": "Fish Burger",
                    "price": 27000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11186.jpg?alt=media",
                    "description": "Fish Burger",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11174_14545",
                    "name": "Crispy Burger",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11174.jpg?alt=media",
                    "description": "Crispy Burger",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4857_17273",
                    "name": "Twisty",
                    "price": 19000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4857.jpg?alt=media",
                    "description": "Twisty",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_5306_18636",
                    "name": "Spaghetti Supreme ",
                    "price": 20500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5306.jpg?alt=media",
                    "description": "Spaghetti Supreme",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_11058_14545",
                    "name": "KFC Soup + Veggie Ball",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11058.jpg?alt=media",
                    "description": "KFC Soup + Veggie Ball",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_8378_10000",
                    "name": "Cream Soup",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F8378.jpg?alt=media",
                    "description": "Cream Soup",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4911_4545",
                    "name": "KFC Soup",
                    "price": 5000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4911.jpg?alt=media",
                    "description": "KFC Soup",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4871_17727",
                    "name": "Chicken Porridge",
                    "price": 19500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4871.jpg?alt=media",
                    "description": "Chicken Porridge ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4870_8636",
                    "name": "Original Porridge",
                    "price": 9500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4870.jpg?alt=media",
                    "description": "Original Porridge",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_8530_24091",
                    "name": "Fun Fries Spicy Cheese",
                    "price": 26500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F8530.jpg?alt=media",
                    "description": "1 Fun Fries Spicy Cheese",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_10832_24091",
                    "name": "Fun Fries BBQ",
                    "price": 26500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10832.jpg?alt=media",
                    "description": "Fun Fries BBQ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_5716_23182",
                    "name": "French Fries Large",
                    "price": 25500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5716.jpg?alt=media",
                    "description": "French Fries Large",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4864_18636",
                    "name": "French Fries",
                    "price": 20500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4864.jpg?alt=media",
                    "description": "French Fries",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_4869_9091",
                    "name": "Rice",
                    "price": 10000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4869.jpg?alt=media",
                    "description": "Rice",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_5317_9091",
                    "name": "Perkedel",
                    "price": 10000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5317.jpg?alt=media",
                    "description": "Perkedel ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_9440_11818",
                    "name": "Corn Cob",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9440.jpg?alt=media",
                    "description": "Corn Cob",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_9439_11818",
                    "name": "Dinner Roll",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9439.jpg?alt=media",
                    "description": "Dinner Roll",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_9569_11364",
                    "name": "Coleslaw New",
                    "price": 12500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9569.jpg?alt=media",
                    "description": "Coleslaw New",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G45_9438_11818",
                    "name": "Mashed Potato Gravy",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9438.jpg?alt=media",
                    "description": "Mashed Potato Gravy",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "G46",
            "name": "Drinks",
            "dishes": [
                {
                    "id": "G46_11940_10909",
                    "name": "Coca-cola Medium",
                    "price": 12000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11940.jpg?alt=media",
                    "description": "Coca-cola Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11941_10909",
                    "name": "Sprite Medium",
                    "price": 12000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11941.jpg?alt=media",
                    "description": "Sprite Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11942_10909",
                    "name": "Fanta Medium",
                    "price": 12000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11942.jpg?alt=media",
                    "description": "Fanta Medium",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_10325_10000",
                    "name": "Very Berry Float",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10325.jpg?alt=media",
                    "description": "Very Berry Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11624_4545",
                    "name": "Star Fruit Float",
                    "price": 5000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11624.jpg?alt=media",
                    "description": "Star Fruit Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11284_14545",
                    "name": "Banana Milk Float",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11284.jpg?alt=media",
                    "description": "Banana Milk Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11385_10000",
                    "name": "Pink Coconut Float",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11385.jpg?alt=media",
                    "description": "Pink Coconut Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_4890_14545",
                    "name": "Chococha Float",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4890.jpg?alt=media",
                    "description": "Chokocha",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_9377_14545",
                    "name": "Yubari Float",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9377.jpg?alt=media",
                    "description": "Yubari Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_4889_14545",
                    "name": "Mocha Float",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4889.jpg?alt=media",
                    "description": "Mocca Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_6939_10000",
                    "name": "Lovlychee Float",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F6939.png?alt=media",
                    "description": "Lovlychee Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_5298_10000",
                    "name": "Mango Float",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F5298.jpg?alt=media",
                    "description": "Mango Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_10518_4545",
                    "name": "Lemonico Float",
                    "price": 5000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10518.jpg?alt=media",
                    "description": "Lemonico Float",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_4885_8182",
                    "name": "Mineral Water",
                    "price": 9000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4885.jpg?alt=media",
                    "description": "Mineral Water",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_4887_10909",
                    "name": "Ichi Ocha*",
                    "price": 12000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4887.jpg?alt=media",
                    "description": "Ichi Ocha",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_10449_10000",
                    "name": "Ovaltine 125 ML",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10449.jpg?alt=media",
                    "description": "Ovaltine 125 ML",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_6520_12727",
                    "name": "Cappucino Nescafe",
                    "price": 14000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F6520.jpg?alt=media",
                    "description": "Cappucino Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_6519_12727",
                    "name": "Cafe Latte Nescafe",
                    "price": 14000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F6519.jpg?alt=media",
                    "description": "Cafe Latte Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_6518_8182",
                    "name": "Black Coffee Nescafe",
                    "price": 9000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F6518.jpg?alt=media",
                    "description": "Black Coffee Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11200_10000",
                    "name": "Ice Coffee Nescafe",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11200.jpg?alt=media",
                    "description": "Ice Coffee Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11201_14546",
                    "name": "Ice Latte Nescafe",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11201.jpg?alt=media",
                    "description": "Ice Latte Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G46_11202_14546",
                    "name": "Ice Cappucino Nescafe",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11202.jpg?alt=media",
                    "description": "Ice Cappucino Nescafe",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "G47",
            "name": "Kids Meal",
            "dishes": [
                {
                    "id": "G47_10818_42273",
                    "name": "Chaki Meal A",
                    "price": 46500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10818.jpg?alt=media",
                    "description": "1 Pcs Chicken  + 1 Nasi + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X132:M59_1",
                            "name": "Select Toys*",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1450_X132_M59_0",
                                    "name": "Premium Gatot Kaca",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1571_X132_M59_0",
                                    "name": "Premium Snoopy",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1364:M8I_1",
                            "name": "Replace Ovaltine 125 ml with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1364_X1364_M8I_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1364_M8I_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X246:M8J_1",
                            "name": "Replace Rice Kids with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X246_M8J_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X246_M8J_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X246_M8J_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G47_10823_42273",
                    "name": "Chaki Meal B",
                    "price": 46500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10823.jpg?alt=media",
                    "description": "1 Original Burger + 1 French Fries Regular + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X132:M59_1",
                            "name": "Select Toys*",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1450_X132_M59_0",
                                    "name": "Premium Gatot Kaca",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1571_X132_M59_0",
                                    "name": "Premium Snoopy",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1364:M8I_1",
                            "name": "Replace Ovaltine 125 ml with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1364_X1364_M8I_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1364_M8I_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "G48",
            "name": "Breakfast",
            "dishes": [
                {
                    "id": "G48_11066_10000",
                    "name": "Quesadilla Cheese",
                    "price": 11000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11066.jpg?alt=media",
                    "description": "Quesadilla Cheese",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                },
                {
                    "id": "G48_10827_42273",
                    "name": "Chaki Kids Meal Breakfast 1 Coloring Kit",
                    "price": 46500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10827.jpg?alt=media",
                    "description": "1 Pcs Chicken + 1 French Fries Regular + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X1240:ME2_1",
                            "name": "Select 1 Pcs Chicken",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1247_X1240_ME2_0",
                                    "name": "1 Pcs Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1246_X1240_ME2_0",
                                    "name": "1 Pcs Original Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1353_X1240_ME2_2727",
                                    "name": "1 Pcs Hot & Cheesy Chicken",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X132:M59_1",
                            "name": "Select Toys*",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1450_X132_M59_0",
                                    "name": "Premium Gatot Kaca",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1571_X132_M59_0",
                                    "name": "Premium Snoopy",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1364:M8I_1",
                            "name": "Replace Ovaltine 125 ml with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1364_X1364_M8I_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1364_M8I_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_10828_42273",
                    "name": "Chaki Kids Meal Breakfast 2 Coloring Kit",
                    "price": 46500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10828.jpg?alt=media",
                    "description": "1 Scramble Egg + 1 French Fries Regular + 1 Ovaltine 125 ML + Premium Chaki + Coloring Kit",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X132:M59_1",
                            "name": "Select Toys*",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1450_X132_M59_0",
                                    "name": "Premium Gatot Kaca",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1571_X132_M59_0",
                                    "name": "Premium Snoopy",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X1364:M8I_1",
                            "name": "Replace Ovaltine 125 ml with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1364_X1364_M8I_0",
                                    "name": "Ovaltine 125 ml",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X71_X1364_M8I_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_4932_14545",
                    "name": "Pom Pom",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4932.jpg?alt=media",
                    "description": "Pom-Pom",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                },
                {
                    "id": "G48_4933_8182",
                    "name": "Scrambled Egg",
                    "price": 9000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4933.jpg?alt=media",
                    "description": "Scrambled Egg",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                },
                {
                    "id": "G48_4924_17273",
                    "name": "Riser",
                    "price": 19000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4924.jpg?alt=media",
                    "description": "Riser",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                },
                {
                    "id": "G48_4925_19091",
                    "name": "Kombo Riser",
                    "price": 21000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4925.jpg?alt=media",
                    "description": "Riser + Minuman",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X93:M8H_1",
                            "name": "Replace Hot Tea with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X1331_X93_M8H_4545",
                                    "name": "Yubari Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X71_X93_M8H_0",
                                    "name": "Mineral Water",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X454_X93_M8H_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X93_M8H_1818",
                                    "name": "Ovaltine 125 ml",
                                    "price": 2000,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X93_M8H_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X93_M8H_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X93_M8H_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X93_M8H_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X93_M8H_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X93_M8H_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X93_M8H_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X93_M8H_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1426_X93_M8H_5909",
                                    "name": "Jungle Juice",
                                    "price": 6500,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X93_M8H_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X93_M8H_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X93_M8H_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_4931_36818",
                    "name": "Super Breakfast Combo",
                    "price": 40500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4931.jpg?alt=media",
                    "description": "Nasi + Ayam + Scrambled Egg + Minuman",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X43:M5K_1",
                            "name": "Replace Rice* with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X43_X43_M5K_0",
                                    "name": "Rice*",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X118_X43_M5K_9546",
                                    "name": "French Fries Regular",
                                    "price": 10500,
                                    "available": true
                                },
                                {
                                    "id": "X217_X43_M5K_14091",
                                    "name": "French Fries Large",
                                    "price": 15500,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X923:M5J_1",
                            "name": "Replace Potongan Ayam with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X04_X923_M5J_0",
                                    "name": "Dada Mentok Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X09_X923_M5J_0",
                                    "name": "Dada Mentok Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X05_X923_M5J_0",
                                    "name": "Dada Tulang Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X10_X923_M5J_0",
                                    "name": "Dada Tulang Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X01_X923_M5J_0",
                                    "name": "Paha Atas Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X06_X923_M5J_0",
                                    "name": "Paha Atas Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X02_X923_M5J_0",
                                    "name": "Paha Bawah Original Recipes",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X08_X923_M5J_0",
                                    "name": "Paha Bawah Crispy Chicken",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X03_X923_M5J_0",
                                    "name": "Sayap Original Recipes",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        },
                        {
                            "id": "X93:M7U_1",
                            "name": "Replace Hot Tea with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X98_X93_M7U_3182",
                                    "name": "Mocha Float",
                                    "price": 3500,
                                    "available": true
                                },
                                {
                                    "id": "X454_X93_M7U_2727",
                                    "name": "Ichi Ocha",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1364_X93_M7U_3636",
                                    "name": "Ovaltine 125 ml",
                                    "price": 4000,
                                    "available": true
                                },
                                {
                                    "id": "X93_X93_M7U_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1027_X93_M7U_2727",
                                    "name": "Coca-Cola Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1028_X93_M7U_2727",
                                    "name": "Sprite Medium",
                                    "price": 3000,
                                    "available": true
                                },
                                {
                                    "id": "X1029_X93_M7U_2727",
                                    "name": "Fanta Medium",
                                    "price": 3000,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_11337_20909",
                    "name": "Combo Chicken Porridge",
                    "price": 23000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11337.jpg?alt=media",
                    "description": "1 Chicken Porridge + Hot Tea / Hot Coffee ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X148:M33_1",
                            "name": "Select Minum Kmb Breakfast",
                            "select_min": 1,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X138_X148_M33_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X94_X148_M33_0",
                                    "name": "Hot Coffee",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X148_M33_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X148_M33_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X148_M33_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X148_M33_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X148_M33_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1426_X148_M33_5909",
                                    "name": "Jungle Juice",
                                    "price": 6500,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X148_M33_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X148_M33_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X148_M33_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_10193_11818",
                    "name": "Combo Original Porridge",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10193.jpg?alt=media",
                    "description": "1 Original Porridge + Hot Tea / Hot Coffee ",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X138:M33_1",
                            "name": "Replace Hot Tea with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X138_X138_M33_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X94_X138_M33_0",
                                    "name": "Hot Coffee",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X138_M33_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X138_M33_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X138_M33_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X138_M33_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X138_M33_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1426_X138_M33_5909",
                                    "name": "Jungle Juice",
                                    "price": 6500,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X138_M33_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X138_M33_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X138_M33_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_10800_19091",
                    "name": "Combo  Crispy Burger Coffee",
                    "price": 21000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F10800.jpg?alt=media",
                    "description": "Crispy Burger + Coffee",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    },
                    "option_groups": [
                        {
                            "id": "X94:M33_1",
                            "name": "Replace Hot Coffee with",
                            "select_min": 0,
                            "select_max": 1,
                            "options": [
                                {
                                    "id": "X138_X94_M33_0",
                                    "name": "Hot Tea",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X94_X94_M33_0",
                                    "name": "Hot Coffee",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1311_X94_M33_0",
                                    "name": "Black Coffee Nescafe",
                                    "price": 0,
                                    "available": true
                                },
                                {
                                    "id": "X1312_X94_M33_4545",
                                    "name": "Café Latte Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1313_X94_M33_4545",
                                    "name": "Cappucino Nescafe",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1423_X94_M33_5455",
                                    "name": "Ice Coffee Nestle",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1424_X94_M33_5455",
                                    "name": "Ice Latte Nescafe",
                                    "price": 6000,
                                    "available": true
                                },
                                {
                                    "id": "X1426_X94_M33_5909",
                                    "name": "Jungle Juice",
                                    "price": 6500,
                                    "available": true
                                },
                                {
                                    "id": "X1444_X94_M33_4545",
                                    "name": "Banana Milk Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1449_X94_M33_4545",
                                    "name": "Pink Coconut Float",
                                    "price": 5000,
                                    "available": true
                                },
                                {
                                    "id": "X1479_X94_M33_0",
                                    "name": "Star Fruit Float",
                                    "price": 0,
                                    "available": true
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "G48_4892_8182",
                    "name": "Hot Tea",
                    "price": 9000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4892.jpg?alt=media",
                    "description": "Hot Tea",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                },
                {
                    "id": "G48_11217_14091",
                    "name": "Jungle Juice",
                    "price": 15500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11217.jpg?alt=media",
                    "description": "Jungle Juice",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "05:00",
                                "end_time": "11:00"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "G56",
            "name": "Coffee",
            "dishes": [
                {
                    "id": "G56_11086_15000",
                    "name": "Es Kopi Susu 14 oz",
                    "price": 16500,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11086.jpg?alt=media",
                    "description": "Es Kopi Susu 14 oz",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "G61",
            "name": "Dessert",
            "dishes": [
                {
                    "id": "G61_11795_14545",
                    "name": "Kollz Tutti Frutti",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F11795.jpg?alt=media",
                    "description": "Kollz Tutti Frutti",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_9532_14545",
                    "name": "Koolz Chocolate",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9532.jpg?alt=media",
                    "description": "1 Porsi Koolz Chocolate",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_9533_14545",
                    "name": "Koolz Lychee",
                    "price": 16000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F9533.jpg?alt=media",
                    "description": "1 Porsi Koolz Lychee",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_7155_4545",
                    "name": "Pudding",
                    "price": 5000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F7155.jpg?alt=media",
                    "description": "Pudding",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_4916_4545",
                    "name": "Choconut Sundae",
                    "price": 5000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F4916.jpg?alt=media",
                    "description": "Choconut Sundae",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_8663_11818",
                    "name": "Cream Puff 1 Pcs",
                    "price": 13000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F8663.jpg?alt=media",
                    "description": "Cream Puff 1Pc",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                },
                {
                    "id": "G61_8662_20000",
                    "name": "Cream Puff 2 Pcs",
                    "price": 22000,
                    "picture": "https://firebasestorage.googleapis.com/v0/b/kfcjv-staging-3f3f4.appspot.com/o/MenuImages%2F8662.jpg?alt=media",
                    "description": "Cream Puff 2Pc",
                    "available": true,
                    "sales_time": {
                        "monday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "tuesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "wednesday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "thursday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "friday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "saturday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ],
                        "sunday": [
                            {
                                "start_time": "00:00",
                                "end_time": "23:59"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "version": "20230207023044"
}
amqp.connect("amqp://localhost", function (connError, connection) {
  if (connError) {
    throw connError;
  }
  // step 2

  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }

    // step 3

    const QUEUE = "Test";
    // const QUEUE = "REGION CODE 0002";
    // const kode_region = 9000;
    channel.assertQueue(QUEUE);
    // step 4
    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
    console.log("message publiser");
  });
});