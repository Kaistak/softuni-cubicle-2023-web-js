const router = require('express').Router();
const cubeManager = require('../managers/cubemanager')

router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create')
})

router.post('/create', async (req, res) => {
    const {
        name,
        description,
        imageUrl, 
        difficultyLevel
    } = req.body

    await cubeManager.create({
        name,
        description,
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
    });
    
        res.redirect('/')
})

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();

    if(!cube) {
        return res.redirect('/404')
    }

    res.render('details', { cube })
});

router.get('/:cubId/accsessories/attach', (req, res) => {
    res.render('/accsessory/attach')
})

module.exports = router;