
const express = require("express");
const productModel = require("../models/product");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const products = await productModel.find({});

    try {
        //console.log(products);
        res.render("products", { products : products , layout: 'main'});
        //res.end("");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/manage", async (req, res) => {
    const products = await productModel.find({});

    try {
        //console.log(products);
        res.render("product-manage", { products : products , layout: 'main'});
        //res.end("");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/create", async (req, res) => {
    res.render("product-create");
});

router.get("/view/:id", async (req, res) => {
    res.send("View " + req.params.id);
});

router.get("/edit/:id", async (req, res) => {
    const post = await productModel.findOne({ _id: req.params.id}).lean()
    res.render("edit-product" , {post});
});



router.post("/", async (req, res) => {
    const product = new productModel(req.body);

    try {
        console.log(req.body);
        await  product.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {

    try {
        console.log(req.params, req.body);
        const product = await  productModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/product');
        await  productModel.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {

    try {
        console.log(req.params);
        const product = await  productModel.findByIdAndDelete({ _id: req.params.id }); 
        if (!product) res.status(404).send("NO item !");
        res.redirect('/product')
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});


//////////////////////////////////////////
module.exports = router;