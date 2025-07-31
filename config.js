const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "PUT YOUR SESSION ID HERE",
  MONGODB: process.env.MONGODB || "PUT YOUR MONGODB PUBLIC URL",
  OWNER_NUM: process.env.OWNER_NUM || "9476xxxxxx",
};
