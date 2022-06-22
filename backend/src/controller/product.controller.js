const express = require("express");
const router = express.Router();

const products = require("../models/product.models");

router.post("", async (req, res) => {
    try{
        const moviesCollec = await products.create(req.body);
        return res.send(moviesCollec);
    }catch(err){
        return res.send(err.message);
    }
});

router.get("", async (req, res) => {
    try{
        const moviesCollec = await products.find().lean().exec();
        return res.send(moviesCollec);
    }catch(err){
        return res.send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try{
        const moviesCollec = await products.findById(req.params.id);
        return res.send(moviesCollec);
    }catch(err){
        return res.send(err.message);
    }
});


module.exports = router;