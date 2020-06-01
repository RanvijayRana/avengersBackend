define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/avengers/allUser",
    "title": "Request for all user details",
    "name": "UserDetails",
    "group": "UserCredential",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "18",
            "description": "<p>Optional Age with default 18.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "apiResponse",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"error\": false,\n    \"message\": \"db query data\",\n    \"status\": 200,\n    \"data\": [{\n        \"firstName\": \"Ranvijay\",\n        \"lastName\": \"Rana\",\n        \"username\": \"ranvijay.144\",\n        \"mobile\": 9751862357,\n        \"email\": \"r@g.com\",\n        \"password\": \"12345\",\n        \"_id\": \"5eb6df4c383e2424a4ce402b\",\n        \"__v\": 0\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error",
            "description": "<p>in db</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response",
          "content": "HTTP/1.1 error in db\n{\n    \"error\": true,\n    \"message\": \"error to fetch db data: - \",\n    \"status\": 302,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/router.js",
    "groupTitle": "UserCredential"
  }
] });
