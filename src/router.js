const router = require('express').Router();
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')
const accsessoryController = require('./controllers/accsessoryController');

router.use(homeController)
router.use('/cubes',cubeController)
router.use('/accsessories', accsessoryController)
router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router