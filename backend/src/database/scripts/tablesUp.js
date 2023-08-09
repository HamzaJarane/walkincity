const { logger } = require('../../utils/logger');
const { createTableVideos: createTableVideosQuery, createTableRadios: createTableRadiosQuery } = require('../queries');
const db = require('../../config/db.config');

(() => {
    db.query(createTableVideosQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table Videos created!');
    });

    db.query(createTableRadiosQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table Radios created!');
        process.exit(0);
    })
    
})();
