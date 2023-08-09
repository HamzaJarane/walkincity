const { DB_NAME } = require('../utils/secrets')

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;
const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableVideos = `
CREATE TABLE IF NOT EXISTS videos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vid VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
    weather VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

const createTableRadios = `
CREATE TABLE IF NOT EXISTS radios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    url VARCHAR(255) NOT NULL UNIQUE,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

const createTableIcons = `
CREATE TABLE IF NOT EXISTS icons (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL,
    old VARCHAR(255) NOT NULL,
    new VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

const getAllVideos = `
SELECT id, vid, country, place, continent, weather, type FROM videos
`;

const getVideosByContinent = `
SELECT id, vid, country, place, continent, weather, type FROM videos WHERE continent = ?
`;

const getVideosByWeather = `
SELECT id, vid, country, place, continent, weather, type FROM videos WHERE weather = ?
`;
const getVideosByWeatherAndContinent = `
SELECT id, vid, country, place, continent, weather, type FROM videos WHERE weather = ? AND continent = ?
`;

const getAllRadios = `
SELECT id, name, url FROM radios
`;

const getAllIcons = `
SELECT id, name, time, old, new FROM icons
`;


module.exports = {
    createDB,
    dropDB,
    createTableVideos,
    createTableRadios,
    createTableIcons,
    getVideosByContinent,
    getVideosByWeather,
    getVideosByWeatherAndContinent,
    getAllRadios,
    getAllVideos,
    getAllIcons
};
