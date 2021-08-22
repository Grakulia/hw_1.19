import moment from "moment";

export const calculateSumOfNumbers = (numbers) =>
  numbers.reduce((a, b) => a + b);

export const getFormattedTime = (date) =>
  moment(date).format("MMMM Do YYYY, h:mm:ss a");
