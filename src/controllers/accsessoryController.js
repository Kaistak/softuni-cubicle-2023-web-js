const router = require('express').Router();
const accsessoryManager = require('../managers/accsessoryManager')

router.get('/create', (req, res) => {
    res.render('accsessory/create')
});

router.post('/create', async (req, res) => {
    const {name, description, imageUrl} = req.body;

    await accsessoryManager.create({name, description, imageUrl})
    res.redirect('/')
})

module.exports = router;