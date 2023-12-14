/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require("aws-sdk");
const ses = new aws.SES();

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);

    if (record.eventName === "INSERT") {
      const clientName = record.dynamodb.NewImage.name.S;
      const email = record.dynamodb.NewImage.email.S;
      const comments = record.dynamodb.NewImage.comments.S;

      await ses.sendEmail({
        Destination: {
          ToAddresses: [process.env.SES_EMAIL],
        },
        Source: process.env.SES_EMAIL,
        Message: {
          Subject: { Data: "Client Email" },
          Body: {
            Text: {
              Data: `Message from ${clientName} at ${email}:\n${comments}`,
            },
          },
        },
      });
    }
  }
  return Promise.resolve("Successfully processed DynamoDB record");
};
