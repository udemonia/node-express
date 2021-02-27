const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.json({
        "Sanity Check": "🧙‍ - You Are Sane! - 🧙‍♂️"
    })
})



module.exports = router;