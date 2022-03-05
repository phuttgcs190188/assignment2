
const express = require("express");
const accountModel = require("../models/account");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const account = await accountModel.find({});

    try {
        res.render("account", { account : account , layout: 'main'});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/create", async (req, res) => {
    res.render("account-register" );
});


router.get("/view/:id", async (req, res) => {
    res.send("View " + req.params.id);
});



router.post("/", async (req, res) => {
    const account = new accountModel(req.body);
    try {
        console.log(req.body);
        await  account.save();
        res.send(account);
    } catch (error) {
        res.status(500).send(error);
    }
});


///////////////////////////////////////////////////////
// update
router.get("/edit/:id", async (req, res) => {
    const post = await accountModel.findOne({ _id: req.params.id}).lean()
    res.render("edit-account", {post})
});

router.patch("/:id", async (req, res) => {
    try {
        console.log(req.params, req.body);
        const account = await  accountModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/account');
        await  accountModel.save();
        res.send(account);
        
    } catch (error) {
        res.status(500).send(error);
    }
    
});
///////////////////////////////////////////////////////


router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params);                
        const account = await  accountModel.findByIdAndDelete({ _id: req.params.id });          
        if (!account) res.status(404).send("NO item !");
        res.redirect('/account')
        res.status(200).send();                
    } catch (error) {
        res.status(500).send(error);
    }
});

//////////////////////////////////////////
module.exports = router;