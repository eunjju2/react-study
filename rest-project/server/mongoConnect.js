const mongoose = require("mongoose");
require('dotenv').config();
const password = process.env.PASSWORD;

// MongoDB 연결 설정
const mongoURI = `mongodb+srv://eunjju:${password}@cluster0.w9hc6.mongodb.net/bookDB?retryWrites=true&w=majority`;
const connectDB = () => {
  return mongoose.connect(mongoURI);
};
module.exports = connectDB;
