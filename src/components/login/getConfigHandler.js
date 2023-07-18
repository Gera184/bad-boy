export function getConfigHandler(language) {
  const {
    wellcomeTitle,
    loginUsingOTP,
    loginUsingPassword,
    retailerid,
    customerId,
    sendMeCode,
    username,
    password,
    login,
    forgotPassword,
    notJoinedYet,
    notJoinedYetDesc,
  } = language.texts;

  const config = {
    title: wellcomeTitle,
    tabs: [loginUsingOTP, loginUsingPassword],
    inputs: {
      otp: [
        {
          name: retailerid,
          placeHolder: retailerid,
          type: "number",
          id: "retailerid1",
        },
        {
          name: customerId,
          placeHolder: customerId,
          type: "number",
          id: "customerId",
        },
      ],
      usernameAndPass: [
        {
          name: retailerid,
          placeHolder: retailerid,
          type: "number",
          id: "retailerid",
        },
        {
          name: username,
          placeHolder: username,
          type: "text",
          id: "username",
        },
        {
          name: password,
          placeHolder: password,
          type: "password",
          id: "password",
        },
      ],
    },
    buttons: {
      otp: sendMeCode,
      usernameAndPass: login,
      forgotPasswordBtn: forgotPassword,
    },
    fotter: {
      title: notJoinedYet,
      description: notJoinedYetDesc,
    },
  };

  return { config };
}
