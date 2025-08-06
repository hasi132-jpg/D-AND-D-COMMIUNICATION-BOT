const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "r8BRQTbJ#gg6GZkW2_E_m6ho9Dh6y7E1lKMkPVN5JJDzfL-7ptM0",
  MONGODB: process.env.MONGODB || "mongodb://mongo:dEHAKEunpNcgFFEBASDaSVAOmTpNEUvW@maglev.proxy.rlwy.net:53889",
  OWNER_NUM: process.env.OWNER_NUM || "94702871764",
};
