require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");
const productsController = require("./controller/product.controller");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", productsController);

const port = 2000;

app.listen(port, async() => {
    try{
        await connect();
        
    }catch(err){
        console.log(err.message);
    }
    console.log(`server is running on port ${port}`);
})


