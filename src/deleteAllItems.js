const { dynamodb, ddbDocumentClient } = require('../db');

const argv = {
  table: 'my-table'
}

const truncateTable = async () => {
  let ExclusiveStartKey, result

  do {
    result = await dynamodb.scan({
      TableName: argv.table,
      ExclusiveStartKey,
    }).promise()

    ExclusiveStartKey = result.LastEvaluatedKey

    console.log(`Found ${result.Items.length} Items, removing...`)
    console.log('result.Items', result.Items)

    if (result.Items.length > 0) {
      await Promise.all(
        result.Items.map(async item =>
          ddbDocumentClient.delete({
            TableName: argv.table,
            Key: {
              id: item.id.S,
            },
          }).promise()
        )
      )
    }
  } while (result.Items.length || result.LastEvaluatedKey)
}

truncateTable()
  .then(() => console.log("Done!"))
  .catch(console.error)
