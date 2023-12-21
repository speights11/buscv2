import { createContactUs } from "graphql/mutations";
import { generateClient } from "aws-amplify/api";

export const callAwsEmailSvc = async (type, name, email, message) => {
  const client = generateClient();

  return new Promise((resolve, reject) => {
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

    resolve("ok");
  }).catch((err) => {
    console.error("callAwsEmailSvc ERROR!");
    console.error(err);
  });
};
