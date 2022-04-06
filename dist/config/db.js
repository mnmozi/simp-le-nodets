import oracledb from "oracledb";
import logger from "../util/winston.js";
export default async () => {
    try {
        await oracledb.getConnection({
            user: "cms_adm",
            password: "cms_adm123",
            connectionString: "10.230.86.125:1540",
        });
        console.log("Successfully connected to Oracle Database!");
    }
    catch (err) {
        logger.error("Error while connecting to the DB" + err);
    }
};
