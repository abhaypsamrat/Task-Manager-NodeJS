const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

require("dotenv").config();

// middleware
app.use(express.static('./client'))
app.use(express.json());

// routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
