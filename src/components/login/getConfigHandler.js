export function getConfigHandler(language) {
  const {
    wellcomeTitle,
    loginUsingOTP,
    loginUsingPassword,
    retailerid,
    customrId,
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
      otpSendCode: [
        {
          label: retailerid,
          placeHolder: retailerid,
          type: "number",
          name: "retailerid1",
        },
        {
          label: customrId,
          placeHolder: customrId,
          type: "number",
          name: "customerId",
        },
      ],
      usernameAndPass: [
        {
          label: retailerid,
          placeHolder: retailerid,
          type: "number",
          name: "retailerid",
        },
        {
          label: username,
          placeHolder: username,
          type: "text",
          name: "username",
        },
        {
          label: password,
          placeHolder: password,
          type: "password",
          name: "password",
        },
      ],
    },
    buttons: {
      otpSendCode: sendMeCode,
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
