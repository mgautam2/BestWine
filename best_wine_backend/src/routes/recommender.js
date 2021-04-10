const express = require('express');
const router = new express.Router();


router.post("/", function(req, res, next) {
    res.send("Yes")
});


module.exports = router;