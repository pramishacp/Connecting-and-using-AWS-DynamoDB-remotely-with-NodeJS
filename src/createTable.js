const { dynamodb, tableName } = require('../db')

dynamodb
  .createTable({
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "S",
      }
    ],
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      }
    ],
    BillingMode: "PAY_PER_REQUEST",
    TableName: tableName,
  })
  .promise()
  .then(data => console.log("Success!", data))
  .catch(console.error)


