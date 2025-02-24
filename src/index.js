const express = require("express");
const { serverConfig, Logger } = require("./config");
const apiRoutes = require('./routes')

const app = express();

app.use('/api', apiRoutes)
app.listen(serverConfig.PORT, () => {
  console.log("Successfully started PORT:", serverConfig.PORT);
  Logger.info("Successfully started the server ", "root", {})
});
