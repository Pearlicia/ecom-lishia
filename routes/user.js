const router = require('express').Router();

router.get("/usertest", (req, res) => {
    res.send("user test");
});

router.post("/userposttest", (req, res) => {
    const title = req.body.title;
    // const message = req.body.message;
    res.send("Title is: " + title);

});




module.exports = router;