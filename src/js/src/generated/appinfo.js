var AppInfo = {
  "version": "0.3.0",
  "author": "Olivier G\u00e9rardin",
  "private": true,
  "dependencies": {},
  "keywords": [
    "pebble-app"
  ],
  "pebble": {
    "sdkVersion": "3",
    "resources": {
      "media": [
        {
          "type": "bitmap",
          "menuIcon": true,
          "targetPlatforms": null,
          "name": "IMG_APP_ICON",
          "file": "images/icon-parking.jpg"
        },
        {
          "spaceOptimization": "memory",
          "targetPlatforms": null,
          "type": "bitmap",
          "name": "IMG_TREND_UP",
          "file": "images/arrow_up.png"
        },
        {
          "spaceOptimization": "memory",
          "targetPlatforms": null,
          "type": "bitmap",
          "name": "IMG_TREND_FLAT",
          "file": "images/arrow_flat.png"
        },
        {
          "spaceOptimization": "memory",
          "targetPlatforms": null,
          "type": "bitmap",
          "name": "IMG_TREND_DOWN",
          "file": "images/arrow_down.png"
        },
        {
          "spaceOptimization": "memory",
          "targetPlatforms": null,
          "name": "IMG_AREA",
          "file": "images/area.png",
          "memoryFormat": "Smallest",
          "type": "bitmap"
        }
      ]
    },
    "projectType": "native",
    "uuid": "f823360d-236a-408a-9e01-cde86ff8032a",
    "messageKeys": {
      "count": 4,
      "index": 5,
      "capacity": 8,
      "name": 6,
      "area": 11,
      "trend": 10,
      "timestamp": 13,
      "free": 9,
      "method": 2,
      "type": 1,
      "error": 3,
      "open": 12,
      "id": 7
    },
    "enableMultiJS": true,
    "displayName": "LuxParking",
    "watchapp": {
      "onlyShownOnCommunication": false,
      "hiddenApp": false,
      "watchface": false
    },
    "targetPlatforms": [
      "aplite",
      "basalt",
      "chalk"
    ],
    "capabilities": [
      ""
    ]
  },
  "name": "LuxParking"
};