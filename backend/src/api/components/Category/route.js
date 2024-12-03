const router = require('express').Router();

router.get('/');
router.post('/create');
router.patch('/update');
router.delete('/delete')

module.exports = router;