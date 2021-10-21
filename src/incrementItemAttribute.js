const { ddbDocumentClient } = require('../db');

ddbDocumentClient
  .update({
    TableName: "my-table",
    Key: {
      id: "123",
    },
    UpdateExpression: `set age = age + :value`,
    ExpressionAttributeValues: {
      ":value": 1,
    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)
