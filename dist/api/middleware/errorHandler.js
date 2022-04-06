import AppError from "../../util/appError.js";
import logger from "../../util/winston.js";
export default () => {
    return (err, req, res, next) => {
        let appError;
        if (!(err instanceof AppError)) {
            appError = new AppError(err.message, 500);
        }
        else {
            appError = err;
        }
        logger.error({
            statusCode: appError.statusCode,
            status: appError.status,
            message: appError.message,
        });
        res.status(appError.statusCode).json({
            status: appError.status,
            message: appError.message,
        });
    };
};