import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "us-east-1" });

const emailAddr = "beinguscreations@gmail.com";

export const handler = async (event) => {
  for (const record of event.Records) {
    if (record.eventName === "INSERT") {
      //pull off items from stream
      const type = record.dynamodb.NewImage.type.S;
      const name = record.dynamodb.NewImage.name.S;
      const email = record.dynamodb.NewImage.email.S;
      const message = record.dynamodb.NewImage.message.S;

      console.log("-----------------------------------------------------");
      console.log("-----------------------------------------------------");
      console.log(`Type: ${type}`);
      console.log(`Name: ${name}`);
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
            Text: { Data: `Message from ${name} at ${email}:\n${message}` },
          },

          Subject: { Data: `Test Email: ${type}` },
        },
        Source: emailAddr,
      });

      try {
        let response = await ses.send(command);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
  }
};

// exports.handler = async (event)//   for (const record of event.Records) { => {

//     if (record.eventName === "INSERT") {
//       //pull off items from stream
//       const type = record.dynamodb.NewImage.type.S;
//       const name = record.dynamodb.NewImage.name.S;
//       const email = record.dynamodb.NewImage.email.S;
//       const message = record.dynamodb.NewImage.message.S;

//       await ses
//         .sendEmail({
//           Destination: {
//             ToAddresses: [emailAddr],
//           },
//           Source: emailAddr,
//           Message: {
//             Data: type === "contact" ? "Contact Us" : "Join Mailing List",
//             Body: {
//               Text: {
//                 Data: `Message from ${name} at ${email}:\n${message}`,
//               },
//             },
//           },
//         })
//         .promise();
//     }
//   }
//   return { status: "done" };
// };

// const aws = require("aws-sdk");
// const ses = new aws.SES();

// exports.handler = async (event) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   for (const record of event.Records) {
//     if (record.eventName === "INSERT") {
//       const type = record.dynamodb.NewImage.type.S;
//       const name = record.dynamodb.NewImage.name.S;
//       const email = record.dynamodb.NewImage.email.S;
//       const message = record.dynamodb.NewImage.message.S;

//       console.log(`Type: ${type}`);
//       console.log(`Name: ${name}`);
//       console.log(`Email: ${email}`);
//       console.log(`Message: ${message}`);

//       await ses.SendEmail({
//         Destination: {
//           ToAddresses: [emailAddr],
//         },
//         Source: emailAddr,
//         Message: {
//           Subject: {
//             Data: type === "contact" ? "Contact Us" : "Join Mailing List",
//           },
//           Body: {
//             Text: {
//               Data: `Message from ${name} at ${email}:\n${message}`,
//             },
//           },
//         },
//       });
//     }
//   }
//   return Promise.resolve("Successfully processed DynamoDB record");
// };
