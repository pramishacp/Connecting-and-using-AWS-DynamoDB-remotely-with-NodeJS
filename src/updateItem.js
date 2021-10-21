const { ddbDocumentClient } = require('../db');

ddbDocumentClient
  .update({
    TableName: "my-table",
    Key: {
      id: "123",
    },
    UpdateExpression: `set age = :age`,
    ExpressionAttributeValues: {
      ":age": 26,
    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)
