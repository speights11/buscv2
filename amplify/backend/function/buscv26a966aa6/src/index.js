/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require("aws-sdk");
const ses = new aws.SES();
const emailAddr = "beinguscreations@gmail.com";

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);

    if (record.eventName === "INSERT") {
      const type = record.dynamodb.NewImage.type.S;
      const clientName = record.dynamodb.NewImage.name.S;
      const email = record.dynamodb.NewImage.email.S;
      const message = record.dynamodb.NewImage.message.S;

      await ses.SendEmail({
        Destination: {
          ToAddresses: [emailAddr],
        },
        Source: emailAddr,
        Message: {
          Subject: {
            Data: type === "contact" ? "Contact Us" : "Join Mailing List",
          },
          Body: {
            Text: {
              Data: `Message from ${clientName} at ${email}:\n${message}`,
            },
          },
        },
      });
    }
  }
  return Promise.resolve("Successfully processed DynamoDB record");
};
