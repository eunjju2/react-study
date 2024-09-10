const express = require("express");
const connectDB = require("./mongoConnect");
const cors = require("cors");
const books = require("./router/books");

const app = express();
connectDB()
  .then(() => {
    console.log("MongoDB 연결 성공");
    app.use(express.json());
    // 라우터 연결
    app.use("/books", books);
    app.use(cors());
    app.listen(5001, () => {
      console.log("Server Running at http://127.0.0.1:5001");
    });
  })
  .catch((err) => {
    // 연결 실패 시 프로세스 종료
    console.error("MongoDB 연결 오류:", err);
    process.exit(1);
  });
