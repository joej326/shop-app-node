const express = require('express');


const router = express.Router();

// TODO need to outsource to controller
router.get('/', (req, res) => {
    res.send('success');
}); 


module.exports = router;