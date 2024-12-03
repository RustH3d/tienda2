const router = require('express').Router();
const passport = require('passport');

const UserService = require('./service');
const instance = new UserService();

router.get('/user-info', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    try {
        const user = req.user;

        const data = await instance.getUnique(user.sub);

        
    } catch (error) {
        next(error);
    }
});
router.post('/login');
router.post('/register');

module.exports = router;