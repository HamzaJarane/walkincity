const Data = require('../models/data.model');
const { logger } = require('../utils/logger');

exports.getVideos = (req, res) => {
    if(req.query.weather && req.query.continent){
        Data.getVideosByWeatherAndContinent(req.query.weather, req.query.continent, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        status: 'error',
                        error: `Seems like there is no videos with ${req.query.weather} and ${req.query.continent}`
                    });
                    return;
                }
                res.status(500).send({
                    status: 'error',
                    error: err.message
                });
                return;
            }
            if (data) {
                
                res.status(200).send({
                    status: 'success',
                    data: data
                });
                return;
            }
        });
    } else if (req.query.continent)
    {
        Data.getVideosByContinent(req.query.continent, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        status: 'error',
                        error: `Seems like there is no videos with `+req.query.continent
                    });
                    return;
                }
                res.status(500).send({
                    status: 'error',
                    error: err.message
                });
                return;
            }
            if (data) {
                
                res.status(200).send({
                    status: 'success',
                    data: data
                });
                return;
            }
        });
    } else if (req.query.weather){
        Data.getVideosByWeather(req.query.weather, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        status: 'error',
                        error: `Seems like there is no videos with `+req.query.weather
                    });
                    return;
                }
                res.status(500).send({
                    status: 'error',
                    error: err.message
                });
                return;
            }
            if (data) {
                
                res.status(200).send({
                    status: 'success',
                    data: data
                });
                return;
            }
        });
    } else {
        Data.getAllVideos((err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        status: 'error',
                        error: `Seems like there is no videos!`
                    });
                    return;
                }
                res.status(500).send({
                    status: 'error',
                    error: err.message
                });
                return;
            }
            if (data) {
                
                res.status(200).send({
                    status: 'success',
                    data: data
                });
                return;
            }
        });   
    }
}

exports.getRadios = (req, res) => {
    Data.getAllRadios((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    error: `Seems like there is no radios!`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                error: err.message
            });
            return;
        }
        if (data) {
            
            res.status(200).send({
                status: 'success',
                data: data
            });
            return;
        }
    });
}

exports.getIcons = (req, res) => {
    Data.getAllIcons((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    error: `Seems like there is no icons!`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                error: err.message
            });
            return;
        }
        if (data) {
            
            res.status(200).send({
                status: 'success',
                data: data
            });
            return;
        }
    });
}