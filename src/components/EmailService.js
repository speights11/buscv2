export const EMAIL_SVC = {
  referredBy: "referredBy",
  join: "join",
  contact: "contact",
};

export const mailStruct = { svc: "", name: "", address: "", body: "" };

export const sendEmail = (message) => {
  return new Promise((resolve, reject) => {
    console.log("-----------------------------");
    console.log("-----------------------------");
    console.log("sendEmail called");
    console.log(message);
    console.log("-----------------------------");
    console.log("-----------------------------");
    resolve("ok");
  });
};
