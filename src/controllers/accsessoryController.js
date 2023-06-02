const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accsessory/create')
})

module.exports = router;