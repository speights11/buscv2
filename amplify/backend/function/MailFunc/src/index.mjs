/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

const emailAddr = "beinguscreations@gmail.com";

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      // pull off items from stream
      const page = record.dynamodb.NewImage.page.S;
      const client = record.dynamodb.NewImage.client.S;
      const email = record.dynamodb.NewImage.email.S;
      const message = record.dynamodb.NewImage.message.S;

      console.log("-----------------------------------------------------");
      console.log("-----------------------------------------------------");
      console.log(`Type: ${page}`);
      console.log(`Client: ${client}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log("-----------------------------------------------------");
      console.log("-----------------------------------------------------");

      const command = new SendEmailCommand({
        Destination: {
          ToAddresses: [emailAddr],
        },
        Message: {
          Body: {
            Text: { Data: `Message from ${client} at ${email}:\n${message}` },
          },

          Subject: { Data: `Test Email: ${page}` },
        },
        Source: "speights.jeff@gmail.com",
      });

      try {
        const response = await ses.send(command);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
  }
  return Promise.resolve("Successfully processed DynamoDB record");
};
