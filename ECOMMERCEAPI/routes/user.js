const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("app is running")
})

router.post("/userposttest", (req,res) =>{
    res.send("app is halting")
})


module.exports = router;