const db = require('../config/db.config');
const { 
    getAllVideos: getAllVideosQuery,
    getAllRadios: getAllRadiosQuery,
    getAllIcons: getAllIconsQuery,
    getVideosByWeather: getVideosByWeatherQuery,
    getVideosByContinent: getVideosByContinentQuery,
    getVideosByWeatherAndContinent: getVideosByWeatherAndContinentQuery
} = require('../database/queries');

const { logger } = require('../utils/logger');

class User {

    static getAllVideos(cb) {
        db.query(getAllVideosQuery, [], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static getVideosByWeather(weather, cb) {
        db.query(getVideosByWeatherQuery, [weather], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static getVideosByWeatherAndContinent(weather, continent, cb) {
        db.query(getVideosByWeatherAndContinentQuery, [weather, continent], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static getVideosByContinent(continent, cb) {
        db.query(getVideosByContinentQuery, [continent], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static getAllRadios(cb) {
        db.query(getAllRadiosQuery, [], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static getAllIcons(cb) {
        db.query(getAllIconsQuery, [], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
}

module.exports = User;