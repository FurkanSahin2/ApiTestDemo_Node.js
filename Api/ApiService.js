const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class ApiService {
  constructor() {
    this._token = null;
    this._baseUrl = "https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/";
    this._headers = {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from("apitest:test123").toString("base64"),
    };
  }

  async getToken() {
    const response = await fetch(this._baseUrl + "sessions", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({}),
    });

    const data = await response.json();
    this._token = data.response.token;

    return true;
  }

  async getData() {
    const response = await fetch(this._baseUrl + "layouts/testdb/records/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this._token,
      },
      body: JSON.stringify({
        fieldData: {},
        script: "getData",
      }),
    });

    const data = await response.json();
    return JSON.parse(data.response.scriptResult);
  }
}

const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend" });
});

app.listen(PORT, () => console.log(`Connected to ${PORT}`));
