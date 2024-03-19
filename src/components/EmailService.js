import { createContactUs } from "graphql/mutations.js";
import { generateClient } from "aws-amplify/api";

export const callAwsEmailSvc = async (page, client, email, message) => {
  const awsclient = generateClient();

  return new Promise((resolve, reject) => {
    awsclient.graphql({
      query: createContactUs,
      variables: {
        input: {
          page,
          client,
          email,
          message,
        },
      },
    });

    resolve("ok");
  }).catch((err) => {
    console.error("callAwsEmailSvc ERROR!");
    console.error(err);
  });
};
