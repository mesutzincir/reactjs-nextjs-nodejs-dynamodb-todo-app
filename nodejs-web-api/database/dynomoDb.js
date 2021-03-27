//import { createRequire } from "module";
import AWS from "aws-sdk";
//const require = createRequire(import.meta.url);
//var AWS = require("aws-sdk");
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

function awsConfigUpdate(params) {
  AWS.config.update({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DB_ENDPOINT,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
  });
}
export const createDynamodbClient = () => {
  awsConfigUpdate();
  const dynamodbClient = new AWS.DynamoDB.DocumentClient();
  return dynamodbClient;
};
export const createDB = () => {
  awsConfigUpdate();

  var params = {
    TableName: "Todos",
    KeySchema: [
      { AttributeName: "id", KeyType: "HASH" }, //Partition key
    ],
    AttributeDefinitions: [{ AttributeName: "id", AttributeType: "N" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };
  const dynamodb = new AWS.DynamoDB();
  // Call DynamoDB to add the item to the table
  dynamodb.createTable(params, function (err, data) {
    if (err) {
      console.error(
        "Unable to create table. Error JSON:",
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        "Created table. Table description JSON:",
        JSON.stringify(data, null, 2)
      );
    }
  });
};
