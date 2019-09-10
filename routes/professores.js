const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/rootDir');

router.get('/novo', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views' , 'novoProfessor.html'));
});

router.post('/novo',(req, res, next)=>{
    res.send(req.body);
});

module.exports = router;