// export object for connecing to mongoDB with uri from .env file in vue project root
require("dotenv").config();
module.exports = {
  hostUrl: process.env.HOST_URL,
  mongoURI: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
};
