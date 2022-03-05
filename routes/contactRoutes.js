
const express = require("express");
const contactModel = require("../models/contact");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const contact = await contactModel.find({});

    try {
        res.render("contact", { contact : contact , layout: 'main'});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/create", async (req, res) => {
    res.render("contact-create" );
});


router.get("/view/:id", async (req, res) => {
    res.send("View " + req.params.id);
});



router.post("/", async (req, res) => {
    const contact = new contactModel(req.body);
    try {
        console.log(req.body);
        await  contact.save();
        res.send(contact);
    } catch (error) {
        res.status(500).send(error);
    }
});


///////////////////////////////////////////////////////
// update
router.get("/edit/:id", async (req, res) => {
    const post = await contactModel.findOne({ _id: req.params.id}).lean()
    res.render("edit", {post})
});

router.patch("/:id", async (req, res) => {
    try {
        console.log(req.params, req.body);
        const contact = await  contactModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/contact');
        await  contactModel.save();
        res.send(contact);
        
    } catch (error) {
        res.status(500).send(error);
    }
    
});
///////////////////////////////////////////////////////


router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params);                
        const contact = await  contactModel.findByIdAndDelete({ _id: req.params.id });          
        if (!contact) res.status(404).send("NO item !");
        res.redirect('/contact')
        res.status(200).send();                
    } catch (error) {
        res.status(500).send(error);
    }
});

//////////////////////////////////////////
module.exports = router;