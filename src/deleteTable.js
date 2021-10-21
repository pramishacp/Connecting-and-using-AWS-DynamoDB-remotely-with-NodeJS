const { dynamodb } = require('../db')

dynamodb
  .deleteTable({
    TableName: "my-table",
  })
  .promise()
  .then(() => console.log("Table has been deleted"))
  .catch(console.error)
