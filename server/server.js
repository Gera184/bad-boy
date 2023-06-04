const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/postData", async (req, res) => {
  debugger;
  const { email, name, phone } = req.body;
  const nameArray = name.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray.slice(1).join(" ");

  const tempData = JSON.stringify({
    properties: {
      email: email,
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      hs_lead_status: "NEW",
    },
  });

  const config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: "Bearer pat-eu1-57eb6b62-69eb-4b49-87d4-f90b4b6d056b",
      "Content-Type": "application/json",
    },
    data: tempData,
  };

  try {
    const response = await axios(config);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(8080).json({ error: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
