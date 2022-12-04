// export object for connecing to mongoDB with uri from .env file in vue project root
require('dotenv').config()
module.exports = {
  mongoURI: process.env.VUE_APP_MONGO_URI,
  PORT: process.env.VUE_APP_PORT || 3000,
};
