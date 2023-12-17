import { createContactUs } from "graphql/mutations";
import { generateClient } from "aws-amplify/api";

export const callAwsEmailSvc = async (type, name, email, message) => {
  const client = generateClient();

  return new Promise((resolve, reject) => {
    console.log("-----------------------------");
    console.log("-----------------------------");
    console.log("callAwsEmailSvc called");
    console.log("-----------------------------");
    console.log("-----------------------------");

    client.graphql({
      query: createContactUs,
      variables: {
        input: {
          type,
          name,
          email,
          message,
        },
      },
    });

    console.log("-----------------------------");
    console.log("-----------------------------");
    console.log("callAwsEmailSvc success!");
    console.log("-----------------------------");
    console.log("-----------------------------");

    resolve("ok");
  }).catch((err) => {
    console.error("-----------------------------");
    console.error("-----------------------------");
    console.error("callAwsEmailSvc ERROR!");
    console.error(err);
    console.error("-----------------------------");
    console.error("-----------------------------");
  });
};
