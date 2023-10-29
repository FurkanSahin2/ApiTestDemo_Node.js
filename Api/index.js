const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get(
    "https://efatura.etrsoft.com/fmi/data/v1/databases/testdb/layouts/testdb/records/1"
  )
  .then((response) => {
    const $ = cheerio.load(response.data);
    const title = $("title").text();
    console.log(title);
  })
  .catch((error) => {
    console.log(error);
  });
