const moment = require("moment");

const today = () => {
  // write code for dates.today
  return moment().format("dddd");
};

const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM DD, YYYY");
};

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("HH:mm:ss A");
};

module.exports = {
  today,
  calendar,
  currentTime,
};
