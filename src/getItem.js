const { ddbDocumentClient, tableName } = require('../db');

ddbDocumentClient
  .get({
    TableName: tableName,
    Key: {
      id: "123", // id is the Partition Key, '123' is the value of it
    },
  })
  .promise()
  .then(data => console.log(data.Item))
  .catch(console.error)
