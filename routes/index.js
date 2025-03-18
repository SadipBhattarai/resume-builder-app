const router = require('express').Router();
const userRouter = require("../modules/users/user.route");

router.get("/", (req, res, next) => {
    try{
        res.json({data: "API is working Properly"});
    } catch(e) {
        next(e)
    }
});
module.exports = router;