const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

router.get('/contactenos', (req, res) => {
    res.render('contactenos');
});

module.exports = router;