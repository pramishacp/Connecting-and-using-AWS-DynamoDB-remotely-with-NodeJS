const { dynamodb, tableName } = require('../db')

dynamodb
  .scan({
    TableName: tableName,
  })
  .promise()
  .then(data => console.log(data.Items))
  .catch(console.error)
