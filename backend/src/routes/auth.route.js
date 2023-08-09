const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const Controller = require('../controllers/auth.controller');

router.route('/getvideos').get(asyncHandler(Controller.getVideos));
router.route('/getradios').get(asyncHandler(Controller.getRadios));
router.route('/geticons').get(asyncHandler(Controller.getIcons));


module.exports = router;