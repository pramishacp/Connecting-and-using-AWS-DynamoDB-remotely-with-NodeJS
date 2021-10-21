const { dynamodb } = require('../db')

dynamodb
  .listTables()
  .promise()
  .then(data => console.log("Table has been listed!", data))
  .catch(console.error)


