import express from "express";
import bodyParser from "body-parser";
import initWebRotes from "./route/web.js";
import connet from "./config/connDB";

require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRotes(app);
connet();

let port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log("backend starting server " + port);
});
