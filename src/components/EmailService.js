import { Amplify } from "aws-amplify";
import config from "../aws-exports";
import { createContactUs } from "graphql/mutations";
import { generateClient } from "aws-amplify/api";

export const EMAIL_SVC = {
  referredBy: "referredBy",
  join: "join",
  contact: "contact",
};

export const mailStruct = { svc: "", name: "", address: "", comments: "" };
Amplify.configure(config);
const client = generateClient();

export const callAwsEmailSvc = (message) => {
  return new Promise((resolve, reject) => {
    console.log("-----------------------------");
    console.log("-----------------------------");
    console.log("callAwsEmailSvc called");
    console.log(message);
    console.log("-----------------------------");
    console.log("-----------------------------");

    client.graphql({
      query: createContactUs,
      variables: {
        input: {
          name: message.name,
          email: message.address,
          comments: message.comments,
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
