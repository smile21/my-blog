module.exports = {
  "title": "smile21",
  "description": "just a simple blog.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    // "sidebar": {
    //   "/docs/": [
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "smile21 blog",
        "desc": "just a demo now.",
        "email": "123691096@qq.com",
        "link": "https://smile21.github.io"
      }

    ],
    "logo": "/logo.png",
    "search": false,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "smile21",
    "authorAvatar": "https://s.gravatar.com/avatar/22351a0d5767a567d284badced979c24?s=80",
    "record": "",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}