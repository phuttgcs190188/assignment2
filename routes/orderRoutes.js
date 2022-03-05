
const express = require("express");
const orderModel = require("../models/order");

const router = express.Router();


/////////////////////////////////////////////////////////

router.get("/", async (req, res) => {
    const order = await orderModel.find({});

    try {
        //console.log(order);
        res.render("order", { order : order , layout: 'main'});
        //res.end("");
    } catch (error) {
        res.status(500).send(error);
    }
  
});

router.get("/create", async (req, res) => {
    res.render("order-create");
});

router.post("/review", async (req, res) => {
    
    try {
        data = JSON.parse(req.body.dshang);
        console.log(data);
        tong = 0;
        for(i=0;i< data.length;i++){
            x = data[i][1][1]*data[i][1][2];
            tong += x;
            data[i][1].push(  new Intl.NumberFormat( 'en-US', {style: 'decimal'} ).format(x) );
        }
        tong = new Intl.NumberFormat( 'en-US', {style: 'decimal'}  ).format(tong);
        res.render("order-review", { orderdetails : data , total: tong, layout: 'main'});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    const order = new orderModel(req.body);

    try {
        console.log(req.body);
        await  order.save();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {

    try {
        console.log(req.params, req.body);
        const order = await  orderModel.findByIdAndUpdate(req.params.id, req.body);
        await  orderModel.save();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {

    try {
        console.log(req.params);
        const order = await  orderModel.findByIdAndDelete(req.params.id);
        if (!order) res.status(404).send("NO item !");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});


//////////////////////////////////////////
module.exports = router;