define({ "api": [
  {
    "type": "get",
    "url": "/fridges",
    "title": "Get Fridges",
    "name": "GetFridges",
    "group": "Fridges",
    "description": "<p>Get a list of all the fridges the user is entitled to see</p> ",
    "success": {
      "examples": [
        {
          "title": "Results",
          "content": "{\n    \"success\": true,\n    \"message\": \"\",\n    \"meta\": null,\n    \"result\":\n        [\n            {\n\t\t        \"fridge_no\": BARCODE,\n\t\t        \"name\": PRODUCT NAME,\n\t\t        \"description\": DESCRIPTION,\n\t\t        \"states\": [],\n\t\t        \"contents\":\n\t\t            [\n\t\t                \"Product\": PRODUCT_SCHEMA,\n\t\t                \"current_weight\": 500,\n\t\t                \"date_added\": 2015-12-28T17:25:35.371Z\n\t\t            ]\n             },\n             {\n   \t\t        \"fridge_no\": BARCODE,\n   \t\t        \"name\": PRODUCT NAME,\n   \t\t        \"description\": DESCRIPTION,\n\t\t        \"states\": [],\n\t\t        \"contents\":\n\t\t            [\n\t\t                \"Product\": PRODUCT_SCHEMA,\n\t\t                \"current_weight\": 500,\n\t\t                \"date_added\": 2015-12-28T17:25:35.371Z\n\t\t            ]\n          }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges"
  },
  {
    "type": "get",
    "url": "/fridges/:id",
    "title": "Get Fridge",
    "name": "Get_Fridge",
    "group": "Fridges",
    "description": "<p>Gets the fridge with the given ID</p> ",
    "success": {
      "examples": [
        {
          "title": "Results",
          "content": " {\n     \"success\": true,\n     \"message\": \"\",\n     \"meta\": null,\n     \"result\":\n         {\n\t\t        \"fridge_no\": BARCODE,\n\t\t        \"name\": PRODUCT NAME,\n\t\t        \"description\": DESCRIPTION,\n\t\t        \"states\": [],\n\t\t        \"contents\":\n\t\t            [\n\t\t                \"Product\": PRODUCT_SCHEMA,\n\t\t                \"current_weight\": 500,\n\t\t                \"date_added\": 2015-12-28T17:25:35.371Z\n\t\t            ]\n         }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges"
  },
  {
    "type": "get",
    "url": "/fridges/listen/:id",
    "title": "Listen To Fridge",
    "name": "ListenToFridge",
    "group": "Fridges",
    "description": "<p>Add the fridge to the list of fridges the user listens to</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge to listen to</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"successful\": true,\n \"message\": \"User updated\",\n \"meta\": null,\n \"result\": [\n   \"14\"\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error - Already listening to fridge",
          "content": "\n{\n \"successful\": false,\n \"message\": \"Already listening to fridge\",\n \"meta\": null,\n \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges"
  },
  {
    "type": "post",
    "url": "/fridges/register",
    "title": "Register",
    "name": "RegisterFridge",
    "group": "Fridges",
    "description": "<p>Register a new fridge</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n    \"fridge_no\": \"UNIQUE_FRIDGE_NUMBER\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Example:",
          "content": "\n{\n     \"success\": true,\n     \"message\": \"Fridge logged in\",\n     \"meta\": null,\n     \"result\": {\n         \"token\": TOKEN\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-app.response:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Invalid Login\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges"
  },
  {
    "type": "delete",
    "url": "/fridges/listen/:id",
    "title": "Unlisten To Fridge",
    "name": "UnlistenToFridge",
    "group": "Fridges",
    "description": "<p>Remove the fridge to the list of fridges the user listens to</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge to un-listen to</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n \"successful\": true,\n \"message\": \"User updated\",\n \"meta\": null,\n \"result\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "\n{\n \"successful\": false,\n \"message\": \"You are not listening to that fridge\",\n \"meta\": null,\n \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges"
  },
  {
    "type": "put",
    "url": "/fridges/:id/contents",
    "title": "Add Content",
    "name": "addToFridgeContents",
    "group": "Fridges_Content",
    "description": "<p>Add a new item to the contents of the fridge</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge id number</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "\n{\n   \"product\": {\n       \"code\": 1234567891241,\n       \"_id\": 1234567891241\n   },\n   \"current_weight\": 500\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n \"successful\": true,\n \"message\": null,\n \"meta\": null,\n \"result\": [\n   {\n     \"product\": {\n       \"_id\": 1234567891240,\n       \"code\": 1234567891240,\n       \"__v\": 0\n    },\n     \"current_weight\": 500,\n     \"_id\": \"5682c010d03510e4037c15b7\",\n     \"date_added\": \"2015-12-29T17:17:04.788Z\"\n   },\n   {\n     \"product\": {\n       \"_id\": 1234567891241,\n       \"code\": 1234567891241,\n       \"__v\": 0\n   },\n     \"current_weight\": 500,\n     \"_id\": \"5682c0f45a3a44742351a308\",\n     \"date_added\": \"2015-12-29T17:20:52.664Z\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_Content"
  },
  {
    "type": "get",
    "url": "/fridges/:id/contents",
    "title": "Get Contents",
    "name": "getFridgeContents",
    "group": "Fridges_Content",
    "description": "<p>Get the contents of the fridge</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n \"successful\": true,\n \"message\": null,\n \"meta\": null,\n \"result\": [\n   {\n     \"product\": {\n       \"_id\": 1234567891240,\n       \"code\": 1234567891240,\n       \"__v\": 0\n    },\n     \"current_weight\": 500,\n     \"_id\": \"5682c010d03510e4037c15b7\",\n     \"date_added\": \"2015-12-29T17:17:04.788Z\"\n   },\n   {\n     \"product\": {\n       \"_id\": 1234567891241,\n       \"code\": 1234567891241,\n       \"__v\": 0\n   },\n     \"current_weight\": 500,\n     \"_id\": \"5682c0f45a3a44742351a308\",\n     \"date_added\": \"2015-12-29T17:20:52.664Z\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_Content"
  },
  {
    "type": "delete",
    "url": "/fridges/:id/contents/:contentID",
    "title": "Delete Contents",
    "name": "removeFromFridgeContents",
    "group": "Fridges_Content",
    "description": "<p>Remove item from the contents of the fridge</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the fridge</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "contentID",
            "description": "<p>The id of the content</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n \"successful\": true,\n \"message\": null,\n \"meta\": null,\n \"result\": [\n     {\n         \"product\": {\n             \"_id\": 1234567891241,\n             \"code\": 1234567891241,\n             \"__v\": 0\n         },\n         \"current_weight\": 500,\n         \"_id\": \"5682c287e7d75e983ea76eae\",\n         \"date_added\": \"2015-12-29T17:27:35.215Z\"\n     },\n     {\n         \"product\": {\n             \"_id\": 1234567891241,\n             \"code\": 1234567891241,\n             \"__v\": 0\n         },\n         \"current_weight\": 500,\n         \"_id\": \"5682c36f599432641258e95e\",\n         \"date_added\": \"2015-12-29T17:27:35.215Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "\n{\n \"successful\": false,\n \"message\": \"Content not found\",\n \"meta\": null,\n \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_Content"
  },
  {
    "type": "post",
    "url": "/fridges/:id/contents/:contentID",
    "title": "Update Contents",
    "name": "updateFridgeContents",
    "group": "Fridges_Content",
    "description": "<p>Update item in the contents of the fridge</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the fridge</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "contentID",
            "description": "<p>The id of the content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "\n{\n \"product\": {\n     \"_id\": 1234567891241,\n     \"code\": 1234567891241,\n     \"__v\": 0\n },\n \"current_weight\": 400,\n \"_id\": \"5682c287e7d75e983ea76eae\",\n \"date_added\": \"2015-12-29T17:27:35.215Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\n{\n \"successful\": true,\n \"message\": null,\n \"meta\": null,\n \"result\": [\n     {\n         \"product\": {\n             \"_id\": 1234567891241,\n             \"code\": 1234567891241,\n             \"__v\": 0\n         },\n         \"current_weight\": 400,\n         \"_id\": \"5682c287e7d75e983ea76eae\",\n         \"date_added\": \"2015-12-29T17:27:35.215Z\"\n     },\n     {\n         \"product\": {\n             \"_id\": 1234567891241,\n             \"code\": 1234567891241,\n             \"__v\": 0\n         },\n         \"current_weight\": 500,\n         \"_id\": \"5682c36f599432641258e95e\",\n         \"date_added\": \"2015-12-29T17:27:35.215Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "\n{\n \"successful\": false,\n \"message\": \"Content not found to update\",\n \"meta\": null,\n \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_Content"
  },
  {
    "type": "get",
    "url": "/fridges/:id/state",
    "title": "Get Fridge State",
    "name": "GetFridgeState",
    "group": "Fridges_State",
    "description": "<p>Get the state of a fridge of your choice</p> ",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge to update</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_State"
  },
  {
    "type": "post",
    "url": "/fridges/:id/state",
    "title": "Update Fridge State",
    "name": "UpdateFridgeState",
    "group": "Fridges_State",
    "description": "<p>Update the state of the fridge</p> ",
    "permission": [
      {
        "name": "fridge"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>The fridge to update</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"temperature\": 2,\n \"door\": false,\n \"weight\": 5000\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"successful\": true,\n \"message\": null,\n \"meta\": null,\n \"result\": {\n   \"_id\": \"56827d0145cd1064377f93cd\",\n   \"fridge_no\": 15,\n   \"name\": \"15\",\n   \"description\": \"\",\n   \"__v\": 2,\n   \"createdOn\": \"2015-12-29T12:30:57.094Z\",\n   \"states\": [\n     {\n         \"temperature\": 2,\n         \"weight\": 5000,\n         \"door\": false,\n         \"_id\": \"56827f3463c97e883f83ccaf\",\n         \"date\": \"2015-12-29T12:40:10.752Z\"\n     },\n     {\n       \"temperature\": 2,\n       \"weight\": 5000,\n       \"door\": false,\n       \"_id\": \"568280f1efade42c3eac0197\",\n       \"date\": \"2015-12-29T12:47:36.748Z\"\n     }\n   ],\n   \"contents\": []\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "{\n \"successful\": false,\n \"message\": \"Validation error\",\n \"meta\": null,\n \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Fridges.js",
    "groupTitle": "Fridges_State"
  },
  {
    "type": "put",
    "url": "/products/",
    "title": "Add Product",
    "name": "AddProduct",
    "group": "Product",
    "description": "<p>Add a new product to the product database</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    \"name\": PRODUCT NAME,\n    \"code\": BARCODE,\n    \"weight\": WEIGHT,\n    \"description\": DESCRIPTION\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " {\n     \"success\": true,\n     \"message\": null,\n     \"meta\": null,\n     \"result\": {\n         \"_id\": PRODUCT ID,\n\t\t    \"code\": BARCODE,\n\t\t    \"name\": PRODUCT NAME,\n\t\t    \"weight\": WEIGHT,\n\t\t    \"description\": DESCRIPTION\n\t\t    \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "{\n    \"success\": false,\n    \"message\": \"error saving product\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Products.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Get Product",
    "name": "GetProduct",
    "group": "Product",
    "description": "<p>Get a product from the database</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ProductID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Product Found",
          "content": " {\n     \"success\": true,\n     \"message\": \"User logged in\",\n     \"meta\": null,\n     \"result\": {\n         \"_id\": \"56488392e6159a14220cbbec\",\n\t\t    \"code\": 500159393942,\n\t\t    \"name\": \"Galaxy Smoth Milk Chocolate\",\n\t\t    \"weight\": 400,\n\t\t    \"__v\": 0\n     }\n }",
          "type": "json"
        },
        {
          "title": "Product Doesn't Exist",
          "content": "{\n    \"success\": true,\n    \"message\": \"User logged in\",\n    \"meta\": null,\n    \"result\": null",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error example",
          "content": "{\n    \"success\": false,\n    \"message\": \"Error Reaching DB\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Products.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/products?searchText=TERM&fromNo=0",
    "title": "Search products",
    "name": "SearchProduct",
    "group": "Product",
    "description": "<p>Search through the product database to find the text in the title or the description</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Text</p> ",
            "optional": false,
            "field": "searchText",
            "description": "<p>The text to search for</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "fromNo",
            "description": "<p>The number to start returning from defaults to 0</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Results",
          "content": " {\n     \"success\": true,\n     \"message\": \"User logged in\",\n     \"meta\": null,\n     \"result\": [\n         {\n             \"_id\": PRODUCT ID,\n\t\t        \"code\": BARCODE,\n\t\t        \"name\": PRODUCT NAME,\n\t\t        \"weight\": WEIGHT,\n\t\t        \"description\": DESCRIPTION\n\t\t        \"__v\": 0\n         },\n         {\n             \"_id\": PRODUCT ID,\n\t\t        \"code\": BARCODE,\n\t\t        \"name\": PRODUCT NAME,\n\t\t        \"weight\": WEIGHT,\n\t\t        \"description\": DESCRIPTION\n\t\t        \"__v\": 0\n         }\n     ]\n }",
          "type": "json"
        },
        {
          "title": "No Results",
          "content": "{\n    \"success\": true,\n    \"message\": \"User logged in\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Error Searching DB,\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Products.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/products/:id",
    "title": "Update Product",
    "name": "UpdatProduct",
    "group": "Product",
    "description": "<p>Update the product in the database</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ProductID</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    \"name\": PRODUCT NAME,\n    \"code\": BARCODE,\n    \"weight\": WEIGHT,\n    \"description\": DESCRIPTION\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " {\n     \"success\": true,\n     \"message\": null,\n     \"meta\": null,\n     \"result\": {\n         \"_id\": PRODUCT ID,\n\t\t    \"code\": BARCODE,\n\t\t    \"name\": PRODUCT NAME,\n\t\t    \"weight\": WEIGHT,\n\t\t    \"__v\": 0\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error:",
          "content": "{\n    \"success\": false,\n    \"message\": \"error saving product\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Products.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/users/auth",
    "title": "Authenticate",
    "name": "AuthenticateUser",
    "group": "User",
    "description": "<p>You a user? You logged out? Well make a cheeky wee request to this then, what are you waiting for!</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"username\",\n    \"passphrase\": \"passphrase\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-app.response:",
          "content": "{\n    \"success\": true,\n    \"message\": \"User logged in\",\n    \"meta\": null,\n    \"result\": {\n        \"token\": TOKEN\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-app.response:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Invalid Login\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register",
    "name": "RegisterUser",
    "group": "User",
    "description": "<p>You not a user? You wishing you where a user of this wonderful service? Well I have the API for you!</p> ",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"username\",\n    \"passphrase\": \"passphrase\",\n    \"email\": \"email\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-app.response:",
          "content": "{\n    \"success\": true,\n    \"message\": \"User logged in\",\n    \"meta\": null,\n    \"result\": {\n        \"token\": TOKEN\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-app.response:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Invalid Login\",\n    \"meta\": null,\n    \"result\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/Users.js",
    "groupTitle": "User"
  }
] });