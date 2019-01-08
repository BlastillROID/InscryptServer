const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send(200,[
        {
            "id":10, "User":"LordGoats"
        }
    ])
});

module.exports = router;
