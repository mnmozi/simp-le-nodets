import errorHandler from "errorhandler";
import app from "./app.js";
import logger from "./util/winston.js";
import "dotenv/config";
import oracledb from "oracledb";
import db from "./config/db.js";

/**
 * Error Handler. Provides full stack
 */

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
if (process.env.PORT) {
  app.set("port", process.env.PORT);
  app.set("env", process.env.NODE_ENV);

  try {
    console.log("here");
    db();
    app.listen(app.get("port"), () => {
      logger.info(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
      );
      logger.silly("Press CTRL-C to stop\n");
    });
  } catch (error) {
    logger.error("Error: " + error);
  }
} else {
  logger.error("error" + "PORT NOT FOUND IN THE .env");
}
