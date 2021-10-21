const { ddbDocumentClient, tableName } = require('../db');

ddbDocumentClient
  .batchGet({
    RequestItems: {
      "my-table": {
        Keys: [
          {
            id: "123",
          },
          {
            id: "124",
          },
        ],
      },
      "other-table": {
        Keys: [
          {
            id: "abc",
          },
          {
            id: "abd",
          },
        ],
      },
    },
  })
  .promise()
  .then(data => console.log(data.Responses))
  .catch(console.error)
