const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// Route imports
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute");

app.use("/api/v2", product);
app.use("/api/v2", user);

// it's for errorHandeling
app.use(ErrorHandler);

module.exports = app;
