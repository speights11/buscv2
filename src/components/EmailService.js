import React from "react";
import { API } from "aws-amplify";
import createContact from "./graphql";

export const EMAIL_SVC = {
  referredBy: "referredBy",
  join: "join",
  contact: "contact",
};

export const mailStruct = { svc: "", name: "", address: "", comments: "" };

export const callAwsEmailSvc = (message) => {
  return new Promise((resolve, reject) => {
    console.log("-----------------------------");
    console.log("-----------------------------");
    console.log("callAwsEmailSvc called");
    console.log(message);
    console.log("-----------------------------");
    console.log("-----------------------------");

    API.graphql({
      query: createContact,
      variables: {
        input: {
          name: message.name,
          email: message.address,
          comments: message.comments,
        },
      },
    });
    resolve("ok");
  });
};
