const { ddbDocumentClient, tableName } = require('../db');

ddbDocumentClient
  .put({
    Item: {
      id: "123",
      name: "Pramisha C P",
      email: "abcd@gmail.com",
    },
    TableName: tableName,
  })
  .promise()
  .then(data => console.log(data))
  .catch(console.error)
