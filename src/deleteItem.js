const { ddbDocumentClient } = require('../db');

ddbDocumentClient
  .delete({
    TableName: "my-table",
    Key: {
      id: "123", // id is the Partition Key, '123' is the value of it
    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)
