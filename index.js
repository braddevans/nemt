const express = require("express");
const app = express();
const yaml = require('js-yaml');
const fs = require('fs');
let configHandler = require("./util/configHandler")
let config = configHandler().config;
const middlewareHandler = require("./util/middlewareHandler")(app, config);
let loggerLoad = middlewareHandler.loggerLoad;

const api = require("./routes/api/api-index")(express, config);
const frontend = require("./routes/frontend")(express, config);

app.set('view engine', 'hbs');
app.use("/api", api.router)
app.use("/", frontend.router)


app.listen(config.port, "0.0.0.0", () => {
    console.log(`Server running on port ${config.port}`);
});