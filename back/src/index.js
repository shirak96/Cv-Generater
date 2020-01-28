const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.raw({ inflate: true, limit: "100kb", type: "text/xml" }));
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
