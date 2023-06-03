const axios = require("axios");

exports.handler = async function (event, context) {
  const { email, name, phone } = JSON.parse(event.body);
  const nameArray = name.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray.slice(1).join(" ");

  try {
    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        properties: {
          email: email,
          firstname: firstName,
          lastname: lastName,
          phone: phone,
          hs_lead_status: "NEW",
        },
      },
      {
        headers: {
          Authorization: `Bearer pat-eu1-57eb6b62-69eb-4b49-87d4-f90b4b6d056b`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
