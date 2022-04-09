import errorHandler from "errorhandler";
import "dotenv/config";
import appFile from "./app.js";
import logger from "./util/winston.js";

/**
 * Error Handler. Provides full stack
 */
appFile().then((app) => {
  process.env.NODE_ENV = process.env.NODE_ENV || "development";
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
      // db();
      app.listen(app.get("port"), () => {
        logger.info(
          "  App is running at http://localhost:%d in %s mode",
          app.get("port"),
          app.get("env")
        );
        logger.info("Press CTRL-C to stop\n");
      });
    } catch (error) {
      logger.error("Error: " + error);
    }
  } else {
    logger.error("error" + "PORT NOT FOUND IN THE .env");
  }
});
