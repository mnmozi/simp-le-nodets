import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.splat(),
    winston.format.json()
  ),
  // transports: [
  //   //
  //   // - Write to all logs with level `info` and below to `app-combined.log`.
  //   // - Write all logs error (and below) to `quick-start-error.log`.
  //   //
  //   new winston.transports.File({ filename: './/app-error.log', level: 'error' }),
  //   new winston.transports.File({ filename: '/var/log/your-project/app-combined.log' }),
  // ]
});
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize({ all: true })
      ),
    })
  );
}
winston.add(logger);
export default logger;
