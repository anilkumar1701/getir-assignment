const mongoose = require("mongoose");
const logger = require("../utils/logger");

/**
 * Create MongoDB Connection
 * @param {*} url
 * @param {*} options
 */


 const options =  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const connect = async (url) => {
    console.log('urlllll', url, options);
  try {
    await mongoose.connect(`${url}`, options);
    logger.log.info(`Connected to MongoDB`);
  } catch (err) {
    /* istanbul ignore next */
    logger.log.error(`Unable to Connect to Mongo DB - \n Err : ${err}`);
  }
};

const disconnect = () => {
  return mongoose.disconnect();
};
module.exports = {
  connect,
  disconnect,
};
