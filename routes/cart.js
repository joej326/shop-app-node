const express = require('express');


const router = express.Router();

// TODO need to outsource to controller
router.get('/', (req, res) => {
    res.render('shop/cart', {docTitle: 'caaaaaart', path: '/cart'});
}); 


module.exports = router;