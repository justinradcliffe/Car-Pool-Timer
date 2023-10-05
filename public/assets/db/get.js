import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  const command = new GetCommand({
    TableName: "CAR_POOL",
    Key: {
      CommonName: "DRIVE_ID"
    }
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};