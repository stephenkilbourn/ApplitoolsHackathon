require("dotenv").config();

module.exports = {
  concurrency: 10,
  apiKey: process.env.NODE_ENVAPPLITOOLS_API_KEY,
  batchName: "UFG Hackathon",
};
