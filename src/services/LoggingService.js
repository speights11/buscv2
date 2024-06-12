import { DateTime } from "luxon";
// LOG4JS https://search.yahoo.com/search?fr=mcafee&type=E210US91088G91641&p=log4js
// WINSTON https://stackify.com/winston-logging-tutorial/

export const LOG_LEVEL = {
  DEBUG: 1,
  INFO: 2,
  ERROR: 3,
};

const divider = "---------------------------------------------------------";
const debugStyle = "color:black;font-weight: 800";
const infoStyle = "color:#df912b;font-weight: 800";
const errorStyle = "color:red;font-weight: 800";

export const today = () =>
  DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

const level = LOG_LEVEL.DEBUG;
//   process.env.REACT_APP_LEVEL && typeof Number(process.env.REACT_APP_LEVEL)
//     ? Number(process.env.REACT_APP_LEVEL)
//     : 3;

const logger = {
  info(msg, obj) {
    if (console.log && level <= LOG_LEVEL.INFO) {
      console.log(divider);
      obj
        ? console.info(`%c${msg}`, infoStyle, obj)
        : console.info(`%c${msg}`, infoStyle);
      console.log(divider);
    }
  },

  debug(msg, obj) {
    if (console.log && level <= LOG_LEVEL.DEBUG) {
      console.log(divider);
      obj
        ? console.log(`%c${msg}`, debugStyle, obj)
        : console.log(`%c${msg}`, debugStyle);
      console.log(divider);
    }
  },

  error(msg, obj) {
    if (console.log && level <= LOG_LEVEL.ERROR) {
      console.log(divider);
      obj
        ? console.error(`%c${msg}`, errorStyle, obj)
        : console.error(`%c${msg}`, errorStyle);
      console.log(divider);
    }
  },

  loggingLevel() {
    let retVal = "";
    switch (level) {
      case LOG_LEVEL.DEBUG:
        retVal = "DEBUG";
        break;

      case LOG_LEVEL.INFO:
        retVal = "INFO";
        break;

      default:
        retVal = "ERROR";
    }

    return retVal;
  },
};

export default logger;
